import { ComponentItem } from "@/lib/component-registry"
import Link from "next/link"

interface ComponentGridProps {
  items: ComponentItem[]
}

export function ComponentGrid({ items }: ComponentGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="space-y-3">
            <div className="aspect-video w-full rounded-md bg-muted">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {item.type === 'token' ? 'Token' : 'Preview'}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {item.type && (
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    item.type === 'token' 
                      ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400'
                      : item.type === 'pattern'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400'
                      : 'bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400'
                  }`}>
                    {item.type === 'token' ? 'Token' : item.type === 'pattern' ? 'Pattern' : 'Component'}
                  </span>
                )}
                {item.hasDemo && (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-950/50 dark:text-green-400">
                    Demo
                  </span>
                )}
                {item.hasDarkMode && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    Dark
                  </span>
                )}
              </div>
              
              {item.variants && item.variants > 1 && (
                <span className="text-xs text-muted-foreground">
                  {item.variants} variants
                </span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border transition-all group-hover:ring-2 group-hover:ring-indigo-600 dark:group-hover:ring-indigo-400" />
        </Link>
      ))}
    </div>
  )
}