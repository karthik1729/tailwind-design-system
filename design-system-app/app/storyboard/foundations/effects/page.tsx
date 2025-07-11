import { EffectsShowcase } from "@/components/storyboard/foundations/effects-showcase"

export default function EffectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Effects & Utilities</h1>
      <p className="text-gray-600 mb-12 max-w-3xl">
        Explore the various visual effects available in our design system, including shadows, borders, 
        border radius, and interactive states. These utilities help create depth, define boundaries, 
        and provide visual feedback for user interactions.
      </p>
      <EffectsShowcase />
    </div>
  )
}