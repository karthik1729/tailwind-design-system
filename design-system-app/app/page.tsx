import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">
              Tailwind CSS v4 Design System
            </h1>
            <p className="text-xl text-muted-foreground">
              Clean slate with extracted theme from 410 analyzed components
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <Link 
              href="/components" 
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all"
            >
              View Components
            </Link>
          </div>
          
          {/* Stats Grid - Using backgrounds instead of borders */}
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-foreground">247</div>
              <div className="text-sm text-muted-foreground mt-1">gray-900 uses</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary">106</div>
              <div className="text-sm text-muted-foreground mt-1">padding-4 uses</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-green-600">410</div>
              <div className="text-sm text-muted-foreground mt-1">components analyzed</div>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-sm text-muted-foreground">
            Theme variables defined in <code className="font-mono bg-muted px-2 py-1 rounded">@theme</code> directive
          </div>
        </div>
      </div>
    </main>
  )
}