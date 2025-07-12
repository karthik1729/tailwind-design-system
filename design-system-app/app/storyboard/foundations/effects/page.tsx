import { EffectsShowcase } from "@/components/storyboard/foundations/effects-showcase"

export default function EffectsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Effects & Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the various visual effects available in our design system, including shadows, borders, 
          border radius, and interactive states. These utilities help create depth, define boundaries, 
          and provide visual feedback for user interactions.
        </p>
      </div>
      <section className="space-y-8">
        <EffectsShowcase />
      </section>
    </div>
  )
}