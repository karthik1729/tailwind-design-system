import ColorPalette from "@/components/storyboard/foundations/color-palette"

export default function ColorPalettePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Tailwind Color Palette
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Complete Tailwind color palette with all available shades
          </p>
        </div>

        <ColorPalette />
      </div>
    </div>
  )
}