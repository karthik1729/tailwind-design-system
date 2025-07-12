'use client'

import React from 'react'

const SpacingGuide = () => {
  // Tailwind spacing scale values
  const spacingScale = [
    { key: '0', value: '0px', class: 'p-0' },
    { key: 'px', value: '1px', class: 'p-px' },
    { key: '0.5', value: '0.125rem', class: 'p-0.5' },
    { key: '1', value: '0.25rem', class: 'p-1' },
    { key: '1.5', value: '0.375rem', class: 'p-1.5' },
    { key: '2', value: '0.5rem', class: 'p-2' },
    { key: '2.5', value: '0.625rem', class: 'p-2.5' },
    { key: '3', value: '0.75rem', class: 'p-3' },
    { key: '3.5', value: '0.875rem', class: 'p-3.5' },
    { key: '4', value: '1rem', class: 'p-4' },
    { key: '5', value: '1.25rem', class: 'p-5' },
    { key: '6', value: '1.5rem', class: 'p-6' },
    { key: '7', value: '1.75rem', class: 'p-7' },
    { key: '8', value: '2rem', class: 'p-8' },
    { key: '9', value: '2.25rem', class: 'p-9' },
    { key: '10', value: '2.5rem', class: 'p-10' },
    { key: '11', value: '2.75rem', class: 'p-11' },
    { key: '12', value: '3rem', class: 'p-12' },
    { key: '14', value: '3.5rem', class: 'p-14' },
    { key: '16', value: '4rem', class: 'p-16' },
    { key: '20', value: '5rem', class: 'p-20' },
    { key: '24', value: '6rem', class: 'p-24' },
    { key: '28', value: '7rem', class: 'p-28' },
    { key: '32', value: '8rem', class: 'p-32' },
    { key: '36', value: '9rem', class: 'p-36' },
    { key: '40', value: '10rem', class: 'p-40' },
    { key: '44', value: '11rem', class: 'p-44' },
    { key: '48', value: '12rem', class: 'p-48' },
    { key: '52', value: '13rem', class: 'p-52' },
    { key: '56', value: '14rem', class: 'p-56' },
    { key: '60', value: '15rem', class: 'p-60' },
    { key: '64', value: '16rem', class: 'p-64' },
    { key: '72', value: '18rem', class: 'p-72' },
    { key: '80', value: '20rem', class: 'p-80' },
    { key: '96', value: '24rem', class: 'p-96' },
  ]

  const commonPaddingPatterns = [
    { name: 'Button Small', classes: 'px-3 py-1.5', description: 'Small button padding' },
    { name: 'Button Medium', classes: 'px-4 py-2', description: 'Default button padding' },
    { name: 'Button Large', classes: 'px-6 py-3', description: 'Large button padding' },
    { name: 'Card Compact', classes: 'p-4', description: 'Compact card padding' },
    { name: 'Card Default', classes: 'p-6', description: 'Default card padding' },
    { name: 'Card Spacious', classes: 'p-8', description: 'Spacious card padding' },
    { name: 'Section Mobile', classes: 'px-4 py-8', description: 'Mobile section padding' },
    { name: 'Section Desktop', classes: 'px-8 py-16', description: 'Desktop section padding' },
    { name: 'Container', classes: 'px-4 md:px-6 lg:px-8', description: 'Responsive container padding' },
  ]

  const gapUtilities = [
    { key: '1', value: '0.25rem', description: 'Tight spacing between elements' },
    { key: '2', value: '0.5rem', description: 'Compact spacing' },
    { key: '3', value: '0.75rem', description: 'Small spacing' },
    { key: '4', value: '1rem', description: 'Default spacing' },
    { key: '6', value: '1.5rem', description: 'Large spacing' },
    { key: '8', value: '2rem', description: 'Extra large spacing' },
    { key: '12', value: '3rem', description: 'Large section spacing' },
    { key: '20', value: '5rem', description: 'Page section spacing' },
    { key: '24', value: '6rem', description: 'Extra page section spacing' },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Spacing System</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tailwind's spacing scale is used for margin, padding, width, height, and gap utilities.
          The scale is based on a 4px (0.25rem) unit.
        </p>
      </div>

      {/* Complete Spacing Scale */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Complete Spacing Scale</h2>
          <p className="text-muted-foreground mb-6">
            Visual representation of all spacing values from 0 to 96
          </p>
        </div>

        <div className="grid gap-3">
          {spacingScale.map((space) => (
            <div key={space.key} className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono text-muted-foreground text-right">
                {space.key}
              </div>
              <div className="w-24 text-sm text-muted-foreground text-right">
                {space.value}
              </div>
              <div className="flex-1 bg-muted rounded-lg p-1">
                <div className={`bg-blue-500 h-8 rounded ${space.class}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Padding Patterns */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Common Padding Patterns</h2>
          <p className="text-muted-foreground mb-6">
            Frequently used padding combinations for various UI components
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {commonPaddingPatterns.map((pattern) => (
            <div key={pattern.name} className="space-y-3">
              <div>
                <h3 className="font-medium text-foreground">{pattern.name}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
                <code className="text-sm font-mono text-blue-600">{pattern.classes}</code>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className={`bg-blue-500 text-white rounded inline-block ${pattern.classes}`}>
                  Sample Content
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gap Utilities */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gap Utilities</h2>
          <p className="text-muted-foreground mb-6">
            Spacing between grid and flex container items
          </p>
        </div>

        <div className="space-y-8">
          {gapUtilities.map((gap) => (
            <div key={gap.key} className="space-y-3">
              <div className="flex items-baseline gap-4">
                <code className="text-sm font-mono text-blue-600">gap-{gap.key}</code>
                <span className="text-sm text-muted-foreground">{gap.value}</span>
                <span className="text-sm text-muted-foreground">{gap.description}</span>
              </div>
              
              {/* Flex example */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Flex container:</p>
                <div className={`flex ${
                  gap.key === '1' ? 'gap-1' :
                  gap.key === '2' ? 'gap-2' :
                  gap.key === '3' ? 'gap-3' :
                  gap.key === '4' ? 'gap-4' :
                  gap.key === '6' ? 'gap-6' :
                  gap.key === '8' ? 'gap-8' :
                  gap.key === '12' ? 'gap-12' :
                  gap.key === '20' ? 'gap-20' :
                  gap.key === '24' ? 'gap-24' : ''
                } bg-muted p-4 rounded-lg`}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-blue-500 text-white px-4 py-2 rounded">
                      Item {i}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid example */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Grid container:</p>
                <div className={`grid grid-cols-3 ${
                  gap.key === '1' ? 'gap-1' :
                  gap.key === '2' ? 'gap-2' :
                  gap.key === '3' ? 'gap-3' :
                  gap.key === '4' ? 'gap-4' :
                  gap.key === '6' ? 'gap-6' :
                  gap.key === '8' ? 'gap-8' :
                  gap.key === '12' ? 'gap-12' :
                  gap.key === '20' ? 'gap-20' :
                  gap.key === '24' ? 'gap-24' : ''
                } bg-muted p-4 rounded-lg`}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-blue-500 text-white p-4 rounded text-center">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Guidelines */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Spacing Guidelines</h2>
          <p className="text-muted-foreground mb-6">
            Best practices for using spacing in your designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-foreground">Component Spacing</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Use consistent spacing within components (e.g., p-4 or p-6)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Smaller spacing for related elements (gap-2 or gap-3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Larger spacing between sections (gap-8 or gap-12)</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-foreground">Responsive Spacing</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Increase spacing on larger screens (p-4 md:p-6 lg:p-8)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Maintain visual hierarchy across breakpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Consider touch targets on mobile (min 44px)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpacingGuide