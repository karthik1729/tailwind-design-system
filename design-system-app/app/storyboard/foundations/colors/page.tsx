import Link from "next/link"
import { Palette } from "lucide-react"
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
          
          {/* Link to full color palette */}
          <Link 
            href="/storyboard/foundations/color-palette"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors"
          >
            <Palette className="w-4 h-4" />
            View Full Color Palette
          </Link>
        </div>

        <SemanticColorTokens />
    </div>
  )
}