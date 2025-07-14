"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Heart, ShoppingCart, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "This design system has transformed how we build products. The consistency and quality are outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "The components are well-crafted and the documentation is excellent. It's a joy to work with.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UX Designer",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Beautiful, accessible, and highly customizable. This is exactly what modern web development needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=4",
    content: "The attention to detail in animations and interactions sets this design system apart from others.",
    rating: 5,
  },
]

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    discount: "-20%",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$399",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$199",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$79",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    discount: "-15%",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$149",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
  },
]

export function CarouselExample() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Carousel</h2>
        <p className="text-muted-foreground mb-6">
          A carousel component with smooth transitions, keyboard navigation, and various styles.
        </p>
      </div>

      {/* Basic Carousel */}
      <PreviewContainer
        title="Basic Carousel"
        description="Simple image carousel with navigation buttons"
        code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        component={
          <div className="flex justify-center px-12">
            <div className="relative w-full max-w-xs py-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
          </div>
        }
      />

      {/* Carousel with Custom Sizing */}
      <PreviewContainer
        title="Custom Sizing"
        description="Carousel showing multiple items at once"
        code={`<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {products.map((product) => (
      <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{product.id}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        component={
          <div className="flex justify-center px-12">
            <div className="relative w-full max-w-sm py-10">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
          </div>
        }
      />

      {/* Testimonial Carousel */}
      <PreviewContainer
        title="Testimonial Carousel"
        description="Customer testimonials with avatars and ratings"
        code={`<Carousel className="w-full max-w-lg">
  <CarouselContent>
    {testimonials.map((testimonial) => (
      <CarouselItem key={testimonial.id}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        component={
          <div className="flex justify-center px-12">
            <div className="relative w-full max-w-lg py-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{testimonial.name}</h4>
                                <span className="text-sm text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                              </div>
                              <div className="flex gap-0.5 mb-3">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{testimonial.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
          </div>
        }
      />

      {/* Product Carousel */}
      <PreviewContainer
        title="Product Carousel"
        description="E-commerce product showcase with images and pricing"
        code={`<Carousel className="w-full">
  <CarouselContent>
    {products.map((product) => (
      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
        <Card className="overflow-hidden">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            {product.discount && (
              <Badge className="absolute top-2 left-2" variant="destructive">
                {product.discount}
              </Badge>
            )}
            {product.badge && (
              <Badge className="absolute top-2 left-2">{product.badge}</Badge>
            )}
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 hover:opacity-100 transition-opacity"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">{product.price}</span>
              <Button size="sm" className="h-8">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        component={
          <div className="px-12">
            <div className="relative w-full py-14">
              <Carousel className="w-full">
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden">
                        <div className="relative aspect-square bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover w-full h-full"
                          />
                          {product.discount && (
                            <Badge className="absolute top-2 left-2" variant="destructive">
                              {product.discount}
                            </Badge>
                          )}
                          {product.badge && (
                            <Badge className="absolute top-2 left-2">{product.badge}</Badge>
                          )}
                          <Button
                            size="icon"
                            variant="secondary"
                            className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">{product.price}</span>
                            <Button size="sm" className="h-8">
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
          </div>
        }
      />

      {/* Carousel with Indicators */}
      <PreviewContainer
        title="With Indicators"
        description="Carousel with dot indicators showing current position"
        code={`const [api, setApi] = useState<CarouselApi>()
const [current, setCurrent] = useState(0)
const [count, setCount] = useState(0)

useEffect(() => {
  if (!api) return

  setCount(api.scrollSnapList().length)
  setCurrent(api.selectedScrollSnap() + 1)

  api.on("select", () => {
    setCurrent(api.selectedScrollSnap() + 1)
  })
}, [api])

return (
  <div className="w-full">
    <Carousel setApi={setApi}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-all",
            current === index + 1 
              ? "w-8 bg-primary" 
              : "bg-muted-foreground/30"
          )}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  </div>
)`}
        component={
          <div className="w-full max-w-xl mx-auto px-12">
            <div className="relative py-8">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    current === index + 1 
                      ? "w-8 bg-primary" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        }
      />

      {/* Autoplay Carousel */}
      <PreviewContainer
        title="Autoplay Carousel"
        description="Automatically advancing carousel with pause on hover"
        code={`<Carousel
  plugins={[
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  ]}
  className="w-full max-w-md"
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent className="flex aspect-[16/9] items-center justify-center p-6 bg-gradient-to-br from-primary/20 to-primary/10">
            <span className="text-3xl font-semibold">Slide {index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        component={
          <div className="flex justify-center px-12">
            <div className="relative w-full max-w-md py-10">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-[16/9] items-center justify-center p-6 bg-gradient-to-br from-primary/20 to-primary/10">
                          <span className="text-3xl font-semibold">Slide {index + 1}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* Left fading border */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
              {/* Right fading border */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none" />
            </div>
          </div>
        }
      />

      {/* Vertical Carousel */}
      <PreviewContainer
        title="Vertical Carousel"
        description="Carousel with vertical orientation"
        code={`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[300px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pt-1 md:basis-1/2">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-3xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="top-4 left-1/2 -translate-x-1/2 rotate-0" />
  <CarouselNext className="bottom-4 left-1/2 -translate-x-1/2 rotate-0" />
</Carousel>`}
        component={
          <div className="flex justify-center">
            <div className="relative">
              <Carousel orientation="vertical" className="w-full max-w-xs">
                <CarouselContent className="-mt-1 h-[300px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="top-4 left-1/2 -translate-x-1/2 rotate-0" />
                <CarouselNext className="bottom-4 left-1/2 -translate-x-1/2 rotate-0" />
              </Carousel>
            </div>
          </div>
        }
      />
    </section>
  )
}