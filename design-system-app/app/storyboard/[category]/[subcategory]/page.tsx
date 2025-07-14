import { getCategory, getSubcategory } from "@/lib/component-registry"
import { ComponentGrid } from "@/components/storyboard/component-grid"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SubcategoryPageProps {
  params: Promise<{
    category: string
    subcategory: string
  }>
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category: categoryId, subcategory: subcategoryId } = await params
  const category = getCategory(categoryId)
  const subcategory = getSubcategory(categoryId, subcategoryId)

  if (!category || !subcategory) {
    notFound()
  }

  return (
    <div>
      <div className="space-y-8">
        <div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/storyboard" className="hover:text-gray-900 dark:hover:text-gray-100">
              Storyboard
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link 
              href={`/storyboard/${categoryId}`} 
              className="hover:text-gray-900 dark:hover:text-gray-100"
            >
              {category.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 dark:text-gray-100">{subcategory.name}</span>
          </div>
          
          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            {subcategory.name}
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            {subcategory.count} {categoryId === 'foundations' ? 'tokens' : 'components'} across {subcategory.sections.length} sections
          </p>
        </div>

        <div className="space-y-12">
          {subcategory.sections.map((section) => (
            <div key={section.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {section.name}
                </h2>
                {section.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                )}
              </div>
              
              <ComponentGrid items={section.items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}