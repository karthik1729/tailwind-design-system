import Link from 'next/link'

export default function StoryboardPage() {
  return (
    <div className="max-w-7xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Design System Storyboard
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A comprehensive showcase of design tokens, components, and patterns extracted from 410+ Tailwind UI elements
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/storyboard/foundations" className="group relative rounded-lg bg-gray-50 p-6 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <div>
              <span className="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Foundations
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Core design tokens and system primitives
              </p>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Colors, Typography, Spacing, Effects
              </p>
            </div>
          </Link>

          <Link href="/storyboard/components" className="group relative rounded-lg bg-gray-50 p-6 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <div>
              <span className="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Components
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Reusable UI elements and building blocks
              </p>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Buttons, Forms, Navigation, Data Display
              </p>
            </div>
          </Link>

          <Link href="/storyboard/patterns" className="group relative rounded-lg bg-gray-50 p-6 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <div>
              <span className="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Patterns
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Complete UI sections and application patterns
              </p>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Heroes, Features, CTAs, Dashboards, Auth
              </p>
            </div>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950/30">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              By the Numbers
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Components</span>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">410</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Design Tokens</span>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">179</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Color Variations</span>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">6</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Component Categories</span>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">3</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950/30 sm:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Design Principles
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-gray-600 dark:text-gray-400 sm:grid-cols-2">
              <li className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <span>
                  <strong className="font-medium text-gray-900 dark:text-gray-100">Borderless Design:</strong> Visual hierarchy through spacing and subtle backgrounds
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <span>
                  <strong className="font-medium text-gray-900 dark:text-gray-100">Consistent Spacing:</strong> p-4 standard padding, gap-4 between elements
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <span>
                  <strong className="font-medium text-gray-900 dark:text-gray-100">Typography First:</strong> text-sm default, clear hierarchy with font weights
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <span>
                  <strong className="font-medium text-gray-900 dark:text-gray-100">Subtle Shadows:</strong> shadow-sm for depth, no harsh borders
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}