"use client"

import React from 'react'

const SemanticColorTokens: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('brand')
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    // Check initial theme
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  const categories = {
    brand: {
      title: 'Brand Colors',
      description: 'Primary brand colors for main actions and identity',
      tokens: [
        { 
          name: 'Primary', 
          var: '--primary',
          variants: [
            { shade: '50', class: 'bg-primary-50', textClass: 'text-foreground' },
            { shade: '100', class: 'bg-primary-100', textClass: 'text-foreground' },
            { shade: '200', class: 'bg-primary-200', textClass: 'text-foreground' },
            { shade: '300', class: 'bg-primary-300', textClass: 'text-foreground' },
            { shade: '400', class: 'bg-primary-400', textClass: 'text-white' },
            { shade: '500', class: 'bg-primary-500', textClass: 'text-white' },
            { shade: '600', class: 'bg-primary-600', textClass: 'text-white' },
            { shade: '700', class: 'bg-primary-700', textClass: 'text-white' },
            { shade: '800', class: 'bg-primary-800', textClass: 'text-white' },
            { shade: '900', class: 'bg-primary-900', textClass: 'text-white' },
            { shade: '950', class: 'bg-primary-950', textClass: 'text-white' }
          ]
        },
        { 
          name: 'Accent', 
          var: '--accent',
          variants: [
            { shade: '50', class: 'bg-accent-50', textClass: 'text-foreground' },
            { shade: '100', class: 'bg-accent-100', textClass: 'text-foreground' },
            { shade: '200', class: 'bg-accent-200', textClass: 'text-foreground' },
            { shade: '300', class: 'bg-accent-300', textClass: 'text-foreground' },
            { shade: '400', class: 'bg-accent-400', textClass: 'text-white' },
            { shade: '500', class: 'bg-accent-500', textClass: 'text-white' },
            { shade: '600', class: 'bg-accent-600', textClass: 'text-white' },
            { shade: '700', class: 'bg-accent-700', textClass: 'text-white' },
            { shade: '800', class: 'bg-accent-800', textClass: 'text-white' },
            { shade: '900', class: 'bg-accent-900', textClass: 'text-white' },
            { shade: '950', class: 'bg-accent-950', textClass: 'text-white' }
          ]
        },
        { 
          name: 'Secondary', 
          var: '--secondary',
          class: 'bg-secondary',
          foreground: { var: '--secondary-foreground', class: 'text-secondary-foreground' }
        },
        { 
          name: 'Muted', 
          var: '--muted',
          class: 'bg-muted',
          foreground: { var: '--muted-foreground', class: 'text-muted-foreground' }
        },
        { 
          name: 'Purple', 
          var: '--purple',
          variants: [
            { shade: '50', class: 'bg-purple-50', textClass: 'text-foreground' },
            { shade: '100', class: 'bg-purple-100', textClass: 'text-foreground' },
            { shade: '200', class: 'bg-purple-200', textClass: 'text-foreground' },
            { shade: '300', class: 'bg-purple-300', textClass: 'text-foreground' },
            { shade: '400', class: 'bg-purple-400', textClass: 'text-white' },
            { shade: '500', class: 'bg-purple-500', textClass: 'text-white' },
            { shade: '600', class: 'bg-purple-600', textClass: 'text-white' },
            { shade: '700', class: 'bg-purple-700', textClass: 'text-white' },
            { shade: '800', class: 'bg-purple-800', textClass: 'text-white' },
            { shade: '900', class: 'bg-purple-900', textClass: 'text-white' },
            { shade: '950', class: 'bg-purple-950', textClass: 'text-white' }
          ]
        },
        { 
          name: 'Teal', 
          var: '--teal',
          variants: [
            { shade: '50', class: 'bg-teal-50', textClass: 'text-foreground' },
            { shade: '100', class: 'bg-teal-100', textClass: 'text-foreground' },
            { shade: '200', class: 'bg-teal-200', textClass: 'text-foreground' },
            { shade: '300', class: 'bg-teal-300', textClass: 'text-foreground' },
            { shade: '400', class: 'bg-teal-400', textClass: 'text-foreground' },
            { shade: '500', class: 'bg-teal-500', textClass: 'text-white' },
            { shade: '600', class: 'bg-teal-600', textClass: 'text-white' },
            { shade: '700', class: 'bg-teal-700', textClass: 'text-white' },
            { shade: '800', class: 'bg-teal-800', textClass: 'text-white' },
            { shade: '900', class: 'bg-teal-900', textClass: 'text-white' },
            { shade: '950', class: 'bg-teal-950', textClass: 'text-white' }
          ]
        },
        { 
          name: 'Orange', 
          var: '--orange',
          variants: [
            { shade: '50', class: 'bg-orange-50', textClass: 'text-foreground' },
            { shade: '100', class: 'bg-orange-100', textClass: 'text-foreground' },
            { shade: '200', class: 'bg-orange-200', textClass: 'text-foreground' },
            { shade: '300', class: 'bg-orange-300', textClass: 'text-foreground' },
            { shade: '400', class: 'bg-orange-400', textClass: 'text-foreground' },
            { shade: '500', class: 'bg-orange-500', textClass: 'text-white' },
            { shade: '600', class: 'bg-orange-600', textClass: 'text-white' },
            { shade: '700', class: 'bg-orange-700', textClass: 'text-white' },
            { shade: '800', class: 'bg-orange-800', textClass: 'text-white' },
            { shade: '900', class: 'bg-orange-900', textClass: 'text-white' },
            { shade: '950', class: 'bg-orange-950', textClass: 'text-white' }
          ]
        }
      ]
    },
    semantic: {
      title: 'Semantic Colors',
      description: 'Status colors for user feedback',
      tokens: [
        { 
          name: 'Success', 
          var: '--success',
          class: 'bg-success',
          foreground: { var: '--success-foreground', class: 'text-success-foreground' },
          variants: {
            background: { var: '--success-background', class: 'bg-success-background' },
            border: { var: '--success-border', class: 'border-success-border' },
            text: { var: '--success-text', class: 'text-success-text' },
            textMuted: { var: '--success-text-muted', class: 'text-success-text-muted' }
          }
        },
        { 
          name: 'Warning', 
          var: '--warning',
          class: 'bg-warning',
          foreground: { var: '--warning-foreground', class: 'text-warning-foreground' },
          variants: {
            background: { var: '--warning-background', class: 'bg-warning-background' },
            border: { var: '--warning-border', class: 'border-warning-border' },
            text: { var: '--warning-text', class: 'text-warning-text' },
            textMuted: { var: '--warning-text-muted', class: 'text-warning-text-muted' }
          }
        },
        { 
          name: 'Destructive', 
          var: '--destructive',
          class: 'bg-destructive',
          foreground: { var: '--destructive-foreground', class: 'text-destructive-foreground' },
          variants: {
            background: { var: '--destructive-background', class: 'bg-destructive-background' },
            border: { var: '--destructive-border', class: 'border-destructive-border' },
            text: { var: '--destructive-text', class: 'text-destructive-text' },
            textMuted: { var: '--destructive-text-muted', class: 'text-destructive-text-muted' }
          }
        },
        { 
          name: 'Info', 
          var: '--info',
          class: 'bg-info',
          foreground: { var: '--info-foreground', class: 'text-info-foreground' },
          variants: {
            background: { var: '--info-background', class: 'bg-info-background' },
            border: { var: '--info-border', class: 'border-info-border' },
            text: { var: '--info-text', class: 'text-info-text' },
            textMuted: { var: '--info-text-muted', class: 'text-info-text-muted' }
          }
        }
      ]
    },
    core: {
      title: 'Core Tokens',
      description: 'Fundamental tokens for layout and UI',
      tokens: [
        { 
          name: 'Background', 
          var: '--background',
          class: 'bg-background',
          type: 'background'
        },
        { 
          name: 'Foreground', 
          var: '--foreground',
          class: 'text-foreground',
          type: 'text'
        },
        { 
          name: 'Card', 
          var: '--card',
          class: 'bg-card',
          foreground: { var: '--card-foreground', class: 'text-card-foreground' }
        },
        { 
          name: 'Popover', 
          var: '--popover',
          class: 'bg-popover',
          foreground: { var: '--popover-foreground', class: 'text-popover-foreground' }
        },
        { 
          name: 'Border', 
          var: '--border',
          class: 'border-border',
          type: 'border'
        },
        { 
          name: 'Input', 
          var: '--input',
          class: 'border-input',
          type: 'border'
        },
        { 
          name: 'Ring', 
          var: '--ring',
          class: 'ring-ring',
          type: 'ring'
        }
      ]
    },
    combinations: {
      title: 'Color Combinations',
      description: 'Brand colors with their foregrounds and various background combinations',
      tokens: [
        {
          name: 'Primary',
          combinations: [
            { bg: 'bg-primary', text: 'text-primary-foreground', label: 'Primary + Foreground' },
            { bg: 'bg-background', text: 'text-primary', label: 'Background + Primary' },
            { bg: 'bg-card', text: 'text-primary', label: 'Card + Primary' },
            { bg: 'bg-muted', text: 'text-primary', label: 'Muted + Primary' }
          ]
        },
        {
          name: 'Accent',
          combinations: [
            { bg: 'bg-accent', text: 'text-accent-foreground', label: 'Accent + Foreground' },
            { bg: 'bg-background', text: 'text-accent', label: 'Background + Accent' },
            { bg: 'bg-card', text: 'text-accent', label: 'Card + Accent' },
            { bg: 'bg-muted', text: 'text-accent', label: 'Muted + Accent' }
          ]
        },
        {
          name: 'Purple',
          combinations: [
            { bg: 'bg-purple', text: 'text-purple-foreground', label: 'Purple + Foreground' },
            { bg: 'bg-background', text: 'text-purple', label: 'Background + Purple' },
            { bg: 'bg-card', text: 'text-purple', label: 'Card + Purple' },
            { bg: 'bg-muted', text: 'text-purple', label: 'Muted + Purple' }
          ]
        },
        {
          name: 'Teal',
          combinations: [
            { bg: 'bg-teal', text: 'text-teal-foreground', label: 'Teal + Foreground' },
            { bg: 'bg-background', text: 'text-teal', label: 'Background + Teal' },
            { bg: 'bg-card', text: 'text-teal', label: 'Card + Teal' },
            { bg: 'bg-muted', text: 'text-teal', label: 'Muted + Teal' }
          ]
        },
        {
          name: 'Orange',
          combinations: [
            { bg: 'bg-orange', text: 'text-orange-foreground', label: 'Orange + Foreground' },
            { bg: 'bg-background', text: 'text-orange', label: 'Background + Orange' },
            { bg: 'bg-card', text: 'text-orange', label: 'Card + Orange' },
            { bg: 'bg-muted', text: 'text-orange', label: 'Muted + Orange' }
          ]
        }
      ]
    }
  }

  const renderColorPalette = (token: any) => {
    return (
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">{token.name}</h4>
        <div className="grid grid-cols-11 gap-0.5 rounded-lg overflow-hidden">
          {token.variants.map((variant: any) => (
            <div key={variant.shade} className="relative group">
              <div className={`${variant.class} h-16 flex items-end justify-center pb-2`}>
                <span className={`text-xs font-medium ${variant.textClass} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {variant.shade}
                </span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderColorToken = (token: any) => {
    const isText = token.type === 'text' || token.class?.includes('text-')
    const isBorder = token.type === 'border' || token.class?.includes('border-')
    const isRing = token.type === 'ring' || token.class?.includes('ring-')

    return (
      <div className="group relative">
        {/* Main color display */}
        <div className="aspect-square relative overflow-hidden rounded-lg border border-border">
          {isText ? (
            <div className="w-full h-full flex items-center justify-center bg-background">
              <span className={`text-4xl font-bold ${token.class}`}>Aa</span>
            </div>
          ) : isBorder ? (
            <div className={`w-full h-full bg-background border-8 ${token.class}`} />
          ) : isRing ? (
            <div className="w-full h-full flex items-center justify-center bg-background">
              <div className={`w-16 h-16 bg-muted rounded ring-4 ${token.class}`} />
            </div>
          ) : (
            <div className={`w-full h-full ${token.class}`}>
              {token.foreground && (
                <div className="flex items-center justify-center h-full">
                  <span className={`text-lg font-medium ${token.foreground.class}`}>Aa</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Token info */}
        <div className="mt-3">
          <h4 className="font-medium text-foreground">{token.name}</h4>
          <code className="text-xs text-muted-foreground font-mono">
            {token.class}
          </code>
        </div>

        {/* Hover tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
          var({token.var})
        </div>
      </div>
    )
  }

  const renderSemanticToken = (token: any) => {
    return (
      <div className="space-y-4">
        {/* Main token */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-foreground">{token.name}</h4>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${token.class} ${token.foreground?.class || 'text-white'}`}>
              Preview
            </div>
          </div>
          
          {/* Variants grid */}
          {token.variants && (
            <div className="space-y-3">
              <div className={`p-3 rounded-lg ${token.variants.background.class} ${token.variants.text.class} border-2 ${token.variants.border.class}`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Component Preview</span>
                  <span className={token.variants.textMuted.class}>Muted text</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Background:</span>
                  <code className="ml-1 text-xs">{token.variants.background.class}</code>
                </div>
                <div>
                  <span className="text-muted-foreground">Border:</span>
                  <code className="ml-1 text-xs">{token.variants.border.class}</code>
                </div>
                <div>
                  <span className="text-muted-foreground">Text:</span>
                  <code className="ml-1 text-xs">{token.variants.text.class}</code>
                </div>
                <div>
                  <span className="text-muted-foreground">Muted:</span>
                  <code className="ml-1 text-xs">{token.variants.textMuted.class}</code>
                </div>
              </div>
            </div>
          )}

          {/* Code reference */}
          <div className="mt-3 pt-3 border-t border-border">
            <code className="text-xs text-muted-foreground font-mono">
              var({token.var})
            </code>
          </div>
        </div>
      </div>
    )
  }

  const renderColorCombination = (combination: any) => {
    return (
      <div className="space-y-6">
        <h4 className="font-medium text-foreground">{combination.name} Combinations</h4>
        <div className="grid grid-cols-2 gap-4">
          {combination.combinations.map((combo: any, index: number) => (
            <div key={index} className="space-y-2">
              <div className={`p-6 rounded-lg ${combo.bg} ${combo.text} border border-border`}>
                <p className="font-medium text-lg">Sample Text</p>
                <p className="opacity-80">This shows how text appears on this background</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <code>{combo.label}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const currentCategory = categories[selectedCategory as keyof typeof categories]

  return (
    <div className="w-full max-w-7xl">
      {/* Header with category tabs and theme toggle */}
      <div className="border-b border-border mb-8">
        <div className="flex justify-between items-end">
          <div className="flex gap-8">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                  selectedCategory === key
                    ? 'text-primary border-primary'
                    : 'text-muted-foreground hover:text-foreground border-transparent'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="mb-4 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors text-sm font-medium"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>

      {/* Category content */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {currentCategory.title}
          </h2>
          <p className="text-muted-foreground mt-1">
            {currentCategory.description}
          </p>
        </div>

        {/* Token grid */}
        {selectedCategory === 'semantic' ? (
          <div className="grid gap-6 md:grid-cols-2">
            {currentCategory.tokens.map((token, index) => (
              <div key={index}>
                {renderSemanticToken(token)}
              </div>
            ))}
          </div>
        ) : selectedCategory === 'brand' ? (
          <div className="space-y-8">
            {/* Color palettes for all brand colors with variants */}
            {currentCategory.tokens.filter(token => token.variants).map((token, index) => (
              <div key={index}>
                {renderColorPalette(token)}
              </div>
            ))}
            
            {/* Brand colors with foregrounds */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Primary + Foreground</h4>
                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Primary Background</p>
                  <p>This text uses primary-foreground color</p>
                  <code className="text-sm opacity-75">bg-primary text-primary-foreground</code>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Accent + Foreground</h4>
                <div className="bg-accent text-accent-foreground p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Accent Background</p>
                  <p>This text uses accent-foreground color</p>
                  <code className="text-sm opacity-75">bg-accent text-accent-foreground</code>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Purple + Foreground</h4>
                <div className="bg-purple text-purple-foreground p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Purple Background</p>
                  <p>This text uses purple-foreground color</p>
                  <code className="text-sm opacity-75">bg-purple text-purple-foreground</code>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Teal + Foreground</h4>
                <div className="bg-teal text-teal-foreground p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Teal Background</p>
                  <p>This text uses teal-foreground color</p>
                  <code className="text-sm opacity-75">bg-teal text-teal-foreground</code>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Orange + Foreground</h4>
                <div className="bg-orange text-orange-foreground p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Orange Background</p>
                  <p>This text uses orange-foreground color</p>
                  <code className="text-sm opacity-75">bg-orange text-orange-foreground</code>
                </div>
              </div>
            </div>

            {/* Single tokens for secondary and muted */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentCategory.tokens.filter(token => !token.variants).map((token, index) => (
                <div key={index}>
                  {renderColorToken(token)}
                  
                  {/* Foreground variant if exists */}
                  {token.foreground && (
                    <div className="mt-4">
                      {renderColorToken({
                        ...token.foreground,
                        name: `${token.name} Foreground`,
                        type: 'text'
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : selectedCategory === 'combinations' ? (
          <div className="space-y-8">
            {currentCategory.tokens.map((token, index) => (
              <div key={index}>
                {renderColorCombination(token)}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCategory.tokens.map((token, index) => (
              <div key={index}>
                {renderColorToken(token)}
                
                {/* Foreground variant if exists */}
                {token.foreground && (
                  <div className="mt-4">
                    {renderColorToken({
                      ...token.foreground,
                      name: `${token.name} Foreground`,
                      type: 'text'
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick reference */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Quick Reference
        </h3>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h4 className="font-medium text-muted-foreground mb-2">Common Patterns</h4>
            <pre className="text-xs bg-background p-3 rounded font-mono">
{`<div className="bg-card text-card-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Action
  </button>
  <button className="bg-accent text-accent-foreground">
    Accent Action
  </button>
</div>`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium text-muted-foreground mb-2">Status Messages</h4>
            <pre className="text-xs bg-background p-3 rounded font-mono">
{`<div className="bg-success-background 
     text-success-text 
     border border-success-border">
  Success message
  <span className="text-success-text-muted">
    Additional info
  </span>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemanticColorTokens