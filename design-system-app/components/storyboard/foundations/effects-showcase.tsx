'use client'

import React from 'react'

export function EffectsShowcase() {
  return (
    <div className="space-y-12">
      {/* Shadow Scale */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Shadow Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'shadow-xs', class: 'shadow-xs', token: '--shadow-xs' },
            { name: 'shadow-sm', class: 'shadow-sm', token: '--shadow-sm' },
            { name: 'shadow', class: 'shadow', token: '--shadow-md' },
            { name: 'shadow-lg', class: 'shadow-lg', token: '--shadow-lg' },
            { name: 'shadow-xl', class: 'shadow-xl', token: '--shadow-xl' },
            { name: 'shadow-2xl', class: 'shadow-2xl', token: '--shadow-2xl' },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <code className="text-sm text-muted-foreground">{shadow.name}</code>
                <code className="text-xs text-muted-foreground font-mono">{shadow.token}</code>
              </div>
              <div className={`bg-background p-6 rounded-lg ${shadow.class}`}>
                <p className="text-muted-foreground">Shadow example</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Colored Shadows */}
        <h3 className="text-lg font-medium mt-8 mb-4">Colored Shadow Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Primary Shadow', class: 'shadow-lg', style: { boxShadow: 'var(--shadow-primary)' } },
            { name: 'Success Shadow', class: 'shadow-lg', style: { boxShadow: 'var(--shadow-success)' } },
            { name: 'Warning Shadow', class: 'shadow-lg', style: { boxShadow: 'var(--shadow-warning)' } },
            { name: 'Destructive Shadow', class: 'shadow-lg', style: { boxShadow: 'var(--shadow-destructive)' } },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-2">
              <code className="text-sm text-muted-foreground">{shadow.name}</code>
              <div className="bg-background p-6 rounded-lg" style={shadow.style}>
                <p className="text-muted-foreground text-sm">{shadow.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Styles and Widths */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Border Styles & Widths</h2>
        
        {/* Border Widths */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Border Widths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'border', class: 'border' },
              { name: 'border-2', class: 'border-2' },
              { name: 'border-4', class: 'border-4' },
              { name: 'border-8', class: 'border-8' },
            ].map((border) => (
              <div key={border.name} className="space-y-2">
                <code className="text-sm text-muted-foreground">{border.name}</code>
                <div className={`bg-background p-6 rounded-lg ${border.class} border-muted-foreground`}>
                  <p className="text-muted-foreground">Border width example</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Border Styles */}
        <div>
          <h3 className="text-lg font-medium mb-4">Border Styles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'border-solid', class: 'border-2 border-solid' },
              { name: 'border-dashed', class: 'border-2 border-dashed' },
              { name: 'border-dotted', class: 'border-2 border-dotted' },
              { name: 'border-double', class: 'border-4 border-double' },
            ].map((style) => (
              <div key={style.name} className="space-y-2">
                <code className="text-sm text-muted-foreground">{style.name}</code>
                <div className={`bg-background p-6 rounded-lg ${style.class} border-muted-foreground`}>
                  <p className="text-muted-foreground">Border style example</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Radius Scale */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Border Radius Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'rounded-none', class: 'rounded-none' },
            { name: 'rounded-sm', class: 'rounded-sm' },
            { name: 'rounded', class: 'rounded' },
            { name: 'rounded-md', class: 'rounded-md' },
            { name: 'rounded-lg', class: 'rounded-lg' },
            { name: 'rounded-xl', class: 'rounded-xl' },
            { name: 'rounded-2xl', class: 'rounded-2xl' },
            { name: 'rounded-3xl', class: 'rounded-3xl' },
            { name: 'rounded-full', class: 'rounded-full' },
          ].map((radius) => (
            <div key={radius.name} className="space-y-2">
              <code className="text-sm text-muted-foreground">{radius.name}</code>
              <div className={`bg-muted p-6 ${radius.class} ${radius.name === 'rounded-full' ? 'w-24 h-24 flex items-center justify-center' : ''}`}>
                <p className="text-muted-foreground text-sm">{radius.name === 'rounded-full' ? 'Full' : 'Radius'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive States */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Interactive States</h2>
        <div className="space-y-8">
          {/* Hover Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Hover Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">hover:shadow-lg</code>
                <div className="bg-background p-6 rounded-lg shadow transition-shadow hover:shadow-lg cursor-pointer">
                  <p className="text-muted-foreground">Hover for shadow</p>
                </div>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">hover:scale-105</code>
                <div className="bg-background p-6 rounded-lg shadow transition-transform hover:scale-105 cursor-pointer">
                  <p className="text-muted-foreground">Hover to scale</p>
                </div>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">hover:bg-muted</code>
                <div className="bg-background p-6 rounded-lg shadow transition-colors hover:bg-muted cursor-pointer">
                  <p className="text-muted-foreground">Hover for background</p>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Focus Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">focus:ring-2</code>
                <button className="bg-background p-6 rounded-lg shadow w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <p className="text-muted-foreground">Click to focus</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">focus:ring-4 focus:ring-offset-2</code>
                <button className="bg-background p-6 rounded-lg shadow w-full text-left focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                  <p className="text-muted-foreground">Click to focus</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">focus:border-blue-500</code>
                <input
                  type="text"
                  placeholder="Focus on input"
                  className="bg-background p-3 rounded-lg border-2 border-border w-full focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Active Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Active Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">active:scale-95</code>
                <button className="bg-blue-500 text-white p-6 rounded-lg shadow w-full transition-transform active:scale-95">
                  <p>Press and hold</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">active:bg-blue-700</code>
                <button className="bg-blue-500 text-white p-6 rounded-lg shadow w-full transition-colors active:bg-blue-700">
                  <p>Press and hold</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">active:shadow-inner</code>
                <button className="bg-muted text-muted-foreground p-6 rounded-lg shadow w-full active:shadow-inner">
                  <p>Press and hold</p>
                </button>
              </div>
            </div>
          </div>

          {/* Combined Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Combined Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">hover + focus + active states</code>
                <button className="bg-background p-6 rounded-lg shadow-md w-full text-left transition-all hover:shadow-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 active:shadow-sm">
                  <p className="text-muted-foreground font-medium mb-2">Interactive Button</p>
                  <p className="text-sm text-muted-foreground">Hover, click, and focus to see all effects</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-muted-foreground">transition-all with multiple states</code>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg text-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-purple-600 hover:to-pink-600 active:scale-95">
                  <p className="font-medium mb-2">Gradient Card</p>
                  <p className="text-sm opacity-90">Multiple transitions on interaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Z-Index Scale */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Z-Index Layering System</h2>
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Consistent z-index values ensure predictable layering behavior across all components.
          </p>
          
          {/* Z-Index Table */}
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium text-foreground">Token</th>
                  <th className="text-left p-4 font-medium text-foreground">Value</th>
                  <th className="text-left p-4 font-medium text-foreground">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { token: '--z-index-0', value: '0', usage: 'Base level, no stacking' },
                  { token: '--z-index-10', value: '10', usage: 'Slightly elevated elements' },
                  { token: '--z-index-20', value: '20', usage: 'Floating action buttons' },
                  { token: '--z-index-30', value: '30', usage: 'Cards and elevated surfaces' },
                  { token: '--z-index-40', value: '40', usage: 'Navigation bars' },
                  { token: '--z-index-50', value: '50', usage: 'Sidebars and drawers' },
                  { token: '--z-index-dropdown', value: '100', usage: 'Dropdown menus' },
                  { token: '--z-index-sticky', value: '200', usage: 'Sticky headers' },
                  { token: '--z-index-fixed', value: '300', usage: 'Fixed overlays' },
                  { token: '--z-index-modal-backdrop', value: '400', usage: 'Modal backdrops' },
                  { token: '--z-index-modal', value: '500', usage: 'Modal dialogs' },
                  { token: '--z-index-popover', value: '600', usage: 'Popovers and tooltips' },
                  { token: '--z-index-tooltip', value: '700', usage: 'Tooltips' },
                  { token: '--z-index-notification', value: '800', usage: 'Toast notifications' },
                  { token: '--z-index-max', value: '999', usage: 'Maximum elevation' },
                ].map((item) => (
                  <tr key={item.token} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <code className="text-sm font-mono text-primary">{item.token}</code>
                    </td>
                    <td className="p-4">
                      <code className="text-sm font-mono text-muted-foreground">{item.value}</code>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{item.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Visual Demo */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Visual Layering Demo</h3>
            <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Base Layer (z-index: 0)
              </div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center text-sm" style={{ zIndex: 'var(--z-index-30)' }}>
                Card (30)
              </div>
              <div className="absolute bottom-8 left-20 w-32 h-32 bg-green-500 text-white rounded-lg shadow-lg flex items-center justify-center text-sm" style={{ zIndex: 'var(--z-index-dropdown)' }}>
                Dropdown (100)
              </div>
              <div className="absolute bottom-12 left-36 w-32 h-32 bg-purple-500 text-white rounded-lg shadow-lg flex items-center justify-center text-sm" style={{ zIndex: 'var(--z-index-modal)' }}>
                Modal (500)
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-orange-500 text-white rounded-md shadow-lg text-sm" style={{ zIndex: 'var(--z-index-notification)' }}>
                Notification (800)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}