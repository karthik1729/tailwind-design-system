import { getCategory } from "@/lib/component-registry"
import Link from "next/link"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = await params
  const category = getCategory(categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {category.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(category.subcategories).map(([key, subcategory]) => (
            <Link
              key={key}
              href={`/storyboard/${categoryId}/${key}`}
              className="group relative rounded-lg bg-card p-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {subcategory.name}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                    {subcategory.count}
                  </span>
                </div>

                <div className="space-y-2">
                  {subcategory.sections.slice(0, 3).map((section) => (
                    <div key={section.id} className="text-sm text-muted-foreground">
                      • {section.name}
                    </div>
                  ))}
                  {subcategory.sections.length > 3 && (
                    <div className="text-sm text-muted-foreground">
                      +{subcategory.sections.length - 3} more
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-indigo-600 transition-transform group-hover:scale-x-100 dark:bg-indigo-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}