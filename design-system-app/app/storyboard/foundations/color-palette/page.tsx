import ColorPalette from "@/components/storyboard/foundations/color-palette"

export default function ColorPalettePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground">
          Tailwind Color Palette
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Complete Tailwind color palette with all available shades
        </p>
      </div>

      <ColorPalette />
    </div>
  )
}