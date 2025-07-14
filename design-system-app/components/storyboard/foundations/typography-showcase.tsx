'use client';

import React from 'react';

export default function TypographyShowcase() {
  const textSizes = [
    { size: 'text-xs', label: 'Extra Small', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-sm', label: 'Small', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-base', label: 'Base', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-lg', label: 'Large', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-xl', label: 'Extra Large', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-2xl', label: '2X Large', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-3xl', label: '3X Large', example: 'The quick brown fox jumps over the lazy dog' },
    { size: 'text-4xl', label: '4X Large', example: 'The quick brown fox jumps' },
    { size: 'text-5xl', label: '5X Large', example: 'The quick brown fox' },
    { size: 'text-6xl', label: '6X Large', example: 'The quick brown' },
    { size: 'text-7xl', label: '7X Large', example: 'The quick' },
    { size: 'text-8xl', label: '8X Large', example: 'The quick' },
    { size: 'text-9xl', label: '9X Large', example: 'The' },
  ];

  const fontWeights = [
    { weight: 'font-thin', label: 'Thin (100)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-extralight', label: 'Extra Light (200)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-light', label: 'Light (300)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-normal', label: 'Normal (400)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-medium', label: 'Medium (500)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-semibold', label: 'Semibold (600)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-bold', label: 'Bold (700)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-extrabold', label: 'Extra Bold (800)', example: 'The quick brown fox jumps over the lazy dog' },
    { weight: 'font-black', label: 'Black (900)', example: 'The quick brown fox jumps over the lazy dog' },
  ];

  const lineHeights = [
    { height: 'leading-none', label: 'None (1)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
    { height: 'leading-tight', label: 'Tight (1.25)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
    { height: 'leading-snug', label: 'Snug (1.375)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
    { height: 'leading-normal', label: 'Normal (1.5)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
    { height: 'leading-relaxed', label: 'Relaxed (1.625)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
    { height: 'leading-loose', label: 'Loose (2)', example: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' },
  ];

  const fontFamilies = [
    { family: 'font-sans', label: 'Sans-serif', example: 'The quick brown fox jumps over the lazy dog 0123456789' },
    { family: 'font-mono', label: 'Monospace', example: 'The quick brown fox jumps over the lazy dog 0123456789' },
  ];

  return (
    <div className="space-y-12">
      {/* Heading Scales */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Text Sizes</h2>
        <div className="space-y-6">
          {textSizes.map((item) => (
            <div key={item.size} className="border-b border-border pb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <code className="text-sm bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
                  {item.size}
                </code>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <p className={`${item.size} text-foreground`}>{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Font Weights</h2>
        <div className="space-y-4">
          {fontWeights.map((item) => (
            <div key={item.weight} className="border-b border-border pb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <code className="text-sm bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
                  {item.weight}
                </code>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <p className={`text-lg ${item.weight} text-foreground`}>{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Line Heights</h2>
        <div className="space-y-6">
          {lineHeights.map((item) => (
            <div key={item.height} className="border-b border-border pb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <code className="text-sm bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
                  {item.height}
                </code>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <p className={`text-base ${item.height} text-foreground max-w-lg`}>{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Families */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Font Families</h2>
        <div className="space-y-4">
          {fontFamilies.map((item) => (
            <div key={item.family} className="border-b border-border pb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <code className="text-sm bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
                  {item.family}
                </code>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <p className={`text-lg ${item.family} text-foreground`}>{item.example}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}