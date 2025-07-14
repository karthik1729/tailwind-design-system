"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Zap, Palette, Settings, Rocket } from "lucide-react"

export function AccordionEnhancedExample() {
  return (
    <div className="space-y-8">
      {/* Enhanced Accordion with Rich Content */}
      <PreviewContainer
        title="Enhanced Accordion Animations"
        description="Accordion with smooth expand/collapse animations, chevron rotation, and hover states"
        code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="animations">
    <AccordionTrigger>
      <div className="flex items-center gap-3">
        <Zap className="h-5 w-5 text-primary" />
        <span>Smooth Animations</span>
        <Badge variant="secondary">Enhanced</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Experience enhanced animations with:
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm">
          <li><strong>200ms transitions</strong> for interactive elements</li>
          <li><strong>180° chevron rotation</strong> with ease-out timing</li>
          <li><strong>Scale effect (0.98)</strong> on trigger press</li>
          <li><strong>Smooth height transitions</strong> for content reveal</li>
          <li><strong>Subtle hover states</strong> using design tokens</li>
        </ul>
        <div className="mt-4 p-3 bg-primary-subtle rounded-lg">
          <p className="text-sm">
            All animations follow the design system patterns for consistent
            micro-interactions across components.
          </p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="interactions">
    <AccordionTrigger>
      <div className="flex items-center gap-3">
        <Palette className="h-5 w-5 text-accent" />
        <span>Interactive States</span>
        <Badge>Try hovering!</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Notice the enhanced interaction feedback:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Hover Effects</CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <ul className="space-y-1">
                <li>• Subtle background color change</li>
                <li>• Uses primary-subtle-hover token</li>
                <li>• 200ms transition duration</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Press Effects</CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <ul className="space-y-1">
                <li>• Scale down to 98% on active</li>
                <li>• Provides tactile feedback</li>
                <li>• Instant response feel</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="performance">
    <AccordionTrigger>
      <div className="flex items-center gap-3">
        <Settings className="h-5 w-5 text-success" />
        <span>Performance Optimized</span>
        <Badge variant="outline">Efficient</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Built for performance with modern CSS features:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
            <div>
              <p className="text-sm font-medium">Hardware Acceleration</p>
              <p className="text-xs text-muted-foreground">
                Uses transform and opacity for smooth 60fps animations
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
            <div>
              <p className="text-sm font-medium">CSS Variables</p>
              <p className="text-xs text-muted-foreground">
                Leverages Radix's CSS variables for height animations
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
            <div>
              <p className="text-sm font-medium">Optimized Timing</p>
              <p className="text-xs text-muted-foreground">
                Ease-out curves for natural motion feel
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        component={
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="animations">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Smooth Animations</span>
                    <Badge variant="secondary">Enhanced</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Experience enhanced animations with:
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li><strong>200ms transitions</strong> for interactive elements</li>
                      <li><strong>180° chevron rotation</strong> with ease-out timing</li>
                      <li><strong>Scale effect (0.98)</strong> on trigger press</li>
                      <li><strong>Smooth height transitions</strong> for content reveal</li>
                      <li><strong>Subtle hover states</strong> using design tokens</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary-subtle rounded-lg">
                      <p className="text-sm">
                        All animations follow the design system patterns for consistent
                        micro-interactions across components.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="interactions">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-accent" />
                    <span>Interactive States</span>
                    <Badge>Try hovering!</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Notice the enhanced interaction feedback:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Hover Effects</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs">
                          <ul className="space-y-1">
                            <li>• Subtle background color change</li>
                            <li>• Uses primary-subtle-hover token</li>
                            <li>• 200ms transition duration</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Press Effects</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs">
                          <ul className="space-y-1">
                            <li>• Scale down to 98% on active</li>
                            <li>• Provides tactile feedback</li>
                            <li>• Instant response feel</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="performance">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-success" />
                    <span>Performance Optimized</span>
                    <Badge variant="outline">Efficient</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Built for performance with modern CSS features:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">Hardware Acceleration</p>
                          <p className="text-xs text-muted-foreground">
                            Uses transform and opacity for smooth 60fps animations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">CSS Variables</p>
                          <p className="text-xs text-muted-foreground">
                            Leverages Radix's CSS variables for height animations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">Optimized Timing</p>
                          <p className="text-xs text-muted-foreground">
                            Ease-out curves for natural motion feel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
      />

      {/* Multiple Accordion with Enhanced Features */}
      <PreviewContainer
        title="Multiple Accordion Mode"
        description="Demonstrates enhanced animations with multiple open panels"
        code={`<Accordion type="multiple" className="w-full">
  <AccordionItem value="feature-1">
    <AccordionTrigger>
      <div className="flex items-center gap-3">
        <Rocket className="h-5 w-5 text-primary" />
        <span>Feature Showcase</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="p-4 bg-gradient-to-r from-primary-subtle to-accent-subtle rounded-lg">
        <h4 className="font-medium mb-2">Enhanced User Experience</h4>
        <p className="text-sm text-muted-foreground">
          Multiple panels can be open simultaneously, each with smooth
          independent animations and state management.
        </p>
        <Button size="sm" className="mt-3">Learn More</Button>
      </div>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="feature-2">
    <AccordionTrigger>Design System Integration</AccordionTrigger>
    <AccordionContent>
      <p className="text-sm text-muted-foreground">
        All animations and interactions use semantic design tokens,
        ensuring consistency across light and dark themes.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        component={
          <div className="max-w-2xl">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="feature-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-primary" />
                    <span>Feature Showcase</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-gradient-to-r from-primary-subtle to-accent-subtle rounded-lg">
                    <h4 className="font-medium mb-2">Enhanced User Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple panels can be open simultaneously, each with smooth
                      independent animations and state management.
                    </p>
                    <Button size="sm" className="mt-3">Learn More</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="feature-2">
                <AccordionTrigger>Design System Integration</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    All animations and interactions use semantic design tokens,
                    ensuring consistency across light and dark themes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
      />
    </div>
  )
}