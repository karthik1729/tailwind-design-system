import { StoryboardNavigation } from "@/components/storyboard/navigation"

export default function StoryboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-950">
      <StoryboardNavigation />
      <main className="flex-1 overflow-y-auto">
        <div className="px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}