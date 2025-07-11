import fs from 'fs/promises'
import path from 'path'

export interface ComponentData {
  name: string
  category: string
  subcategory: string
  description: string
  code: string
  screenshotPath: string
  metadata: any
}

export async function getAllComponents(): Promise<ComponentData[]> {
  const componentsDir = path.join(process.cwd(), '../../organized-components')
  const components: ComponentData[] = []
  
  try {
    const dirs = await fs.readdir(componentsDir)
    
    for (const dir of dirs) {
      if (dir.includes('.') || dir.includes('gallery')) continue
      
      const componentPath = path.join(componentsDir, dir)
      const stats = await fs.stat(componentPath)
      
      if (stats.isDirectory()) {
        try {
          // Read component files
          const [code, description, metadata] = await Promise.all([
            fs.readFile(path.join(componentPath, 'component.tsx'), 'utf-8').catch(() => ''),
            fs.readFile(path.join(componentPath, 'description.md'), 'utf-8').catch(() => ''),
            fs.readFile(path.join(componentPath, 'metadata.json'), 'utf-8')
              .then(data => JSON.parse(data))
              .catch(() => ({}))
          ])
          
          // Parse category and subcategory from directory name
          const parts = dir.split('-')
          let category = 'marketing'
          let subcategory = 'general'
          
          if (parts[0] === 'application' && parts[1] === 'ui') {
            category = 'application-ui'
            subcategory = parts.slice(2, -1).join('-')
          } else if (parts[0] === 'marketing') {
            category = 'marketing'
            subcategory = parts.slice(1, -1).join('-')
          } else if (parts[0] === 'ecommerce') {
            category = 'ecommerce'
            subcategory = parts.slice(1, -1).join('-')
          }
          
          components.push({
            name: dir.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            category,
            subcategory,
            description: description || metadata.description || 'Tailwind UI Component',
            code,
            screenshotPath: `/api/component-screenshot/${dir}`,
            metadata
          })
        } catch (error) {
          console.error(`Error reading component ${dir}:`, error)
        }
      }
    }
    
    return components.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error reading components directory:', error)
    return []
  }
}

export async function getComponentBySlug(slug: string): Promise<ComponentData | null> {
  const components = await getAllComponents()
  return components.find(c => 
    c.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  ) || null
}