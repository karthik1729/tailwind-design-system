import TypographyShowcase from '@/components/storyboard/foundations/typography-showcase';

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Typography</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the typography system including text sizes, font weights, line heights, and font families. 
          Each example shows the Tailwind utility class alongside the rendered text.
        </p>
      </div>
      
      <section className="space-y-8">
        <TypographyShowcase />
      </section>
    </div>
  );
}