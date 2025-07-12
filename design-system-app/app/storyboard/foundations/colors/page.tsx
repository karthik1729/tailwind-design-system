import SemanticColorTokens from "@/components/storyboard/foundations/semantic-color-tokens"

export default function ColorsPage() {
  return (
    <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Colors
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Design system color tokens that adapt seamlessly between light and dark modes
          </p>
        </div>

        <SemanticColorTokens />
    </div>
  )
}