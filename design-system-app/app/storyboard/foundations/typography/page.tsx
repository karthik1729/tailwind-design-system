import TypographyShowcase from '@/components/storyboard/foundations/typography-showcase';

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Typography</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore the typography system including text sizes, font weights, line heights, and font families. 
            Each example shows the Tailwind utility class alongside the rendered text.
          </p>
        </div>
        
        <TypographyShowcase />
      </div>
    </div>
  );
}