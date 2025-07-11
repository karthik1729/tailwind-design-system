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
            { name: 'shadow-sm', class: 'shadow-sm' },
            { name: 'shadow', class: 'shadow' },
            { name: 'shadow-md', class: 'shadow-md' },
            { name: 'shadow-lg', class: 'shadow-lg' },
            { name: 'shadow-xl', class: 'shadow-xl' },
            { name: 'shadow-2xl', class: 'shadow-2xl' },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-2">
              <code className="text-sm text-gray-600">{shadow.name}</code>
              <div className={`bg-white p-6 rounded-lg ${shadow.class}`}>
                <p className="text-gray-700">Shadow example</p>
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
                <code className="text-sm text-gray-600">{border.name}</code>
                <div className={`bg-white p-6 rounded-lg ${border.class} border-gray-400`}>
                  <p className="text-gray-700">Border width example</p>
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
                <code className="text-sm text-gray-600">{style.name}</code>
                <div className={`bg-white p-6 rounded-lg ${style.class} border-gray-400`}>
                  <p className="text-gray-700">Border style example</p>
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
              <code className="text-sm text-gray-600">{radius.name}</code>
              <div className={`bg-gray-200 p-6 ${radius.class} ${radius.name === 'rounded-full' ? 'w-24 h-24 flex items-center justify-center' : ''}`}>
                <p className="text-gray-700 text-sm">{radius.name === 'rounded-full' ? 'Full' : 'Radius'}</p>
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
                <code className="text-sm text-gray-600">hover:shadow-lg</code>
                <div className="bg-white p-6 rounded-lg shadow transition-shadow hover:shadow-lg cursor-pointer">
                  <p className="text-gray-700">Hover for shadow</p>
                </div>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">hover:scale-105</code>
                <div className="bg-white p-6 rounded-lg shadow transition-transform hover:scale-105 cursor-pointer">
                  <p className="text-gray-700">Hover to scale</p>
                </div>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">hover:bg-gray-100</code>
                <div className="bg-white p-6 rounded-lg shadow transition-colors hover:bg-gray-100 cursor-pointer">
                  <p className="text-gray-700">Hover for background</p>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Focus Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-gray-600">focus:ring-2</code>
                <button className="bg-white p-6 rounded-lg shadow w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <p className="text-gray-700">Click to focus</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">focus:ring-4 focus:ring-offset-2</code>
                <button className="bg-white p-6 rounded-lg shadow w-full text-left focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                  <p className="text-gray-700">Click to focus</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">focus:border-blue-500</code>
                <input
                  type="text"
                  placeholder="Focus on input"
                  className="bg-white p-3 rounded-lg border-2 border-gray-300 w-full focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Active Effects */}
          <div>
            <h3 className="text-lg font-medium mb-4">Active Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <code className="text-sm text-gray-600">active:scale-95</code>
                <button className="bg-blue-500 text-white p-6 rounded-lg shadow w-full transition-transform active:scale-95">
                  <p>Press and hold</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">active:bg-blue-700</code>
                <button className="bg-blue-500 text-white p-6 rounded-lg shadow w-full transition-colors active:bg-blue-700">
                  <p>Press and hold</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">active:shadow-inner</code>
                <button className="bg-gray-200 text-gray-700 p-6 rounded-lg shadow w-full active:shadow-inner">
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
                <code className="text-sm text-gray-600">hover + focus + active states</code>
                <button className="bg-white p-6 rounded-lg shadow-md w-full text-left transition-all hover:shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 active:shadow-sm">
                  <p className="text-gray-700 font-medium mb-2">Interactive Button</p>
                  <p className="text-sm text-gray-500">Hover, click, and focus to see all effects</p>
                </button>
              </div>
              <div className="space-y-2">
                <code className="text-sm text-gray-600">transition-all with multiple states</code>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg text-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-purple-600 hover:to-pink-600 active:scale-95">
                  <p className="font-medium mb-2">Gradient Card</p>
                  <p className="text-sm opacity-90">Multiple transitions on interaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}