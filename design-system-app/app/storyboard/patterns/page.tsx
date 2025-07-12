import Link from 'next/link'

export default function PatternsPage() {
  const patterns = [
    {
      name: 'Heroes',
      description: 'Eye-catching hero sections for landing pages',
      href: '/storyboard/patterns/heroes',
      count: 25,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Features',
      description: 'Feature sections to showcase product capabilities',
      href: '/storyboard/patterns/features',
      count: 30,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'CTAs',
      description: 'Call-to-action sections to drive conversions',
      href: '/storyboard/patterns/ctas',
      count: 20,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      name: 'Pricing',
      description: 'Pricing tables and plan comparisons',
      href: '/storyboard/patterns/pricing',
      count: 15,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Testimonials',
      description: 'Social proof and customer testimonials',
      href: '/storyboard/patterns/testimonials',
      count: 18,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      name: 'Dashboards',
      description: 'Dashboard layouts and data visualization patterns',
      href: '/storyboard/patterns/dashboards',
      count: 22,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Authentication',
      description: 'Sign in, sign up, and authentication flows',
      href: '/storyboard/patterns/auth',
      count: 16,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      name: 'E-commerce',
      description: 'Product listings, carts, and checkout flows',
      href: '/storyboard/patterns/ecommerce',
      count: 28,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-8">
        <nav className="mb-4 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/storyboard" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Storyboard
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">Patterns</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Patterns
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Complete UI sections and application patterns ready to use in your projects
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <Link
            key={pattern.name}
            href={pattern.href}
            className="group relative rounded-lg bg-gray-50 p-6 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
          >
            <div>
              <span className="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                {pattern.icon}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {pattern.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {pattern.description}
              </p>
              <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {pattern.count} patterns
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}