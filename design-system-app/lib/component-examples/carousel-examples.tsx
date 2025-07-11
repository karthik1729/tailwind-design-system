"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ComponentExample } from "@/lib/component-docs"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

export const carouselExamples: ComponentExample[] = [
  {
    title: "Basic Carousel",
    description: "A simple carousel with navigation controls.",
    code: `<Carousel className="w-full max-w-xs">
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
</Carousel>`,
    component: () => (
      <Carousel className="w-full max-w-xs">
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
    )
  },
  {
    title: "Multiple Items",
    description: "Carousel showing multiple items at once.",
    code: `<Carousel
  opts={{
    align: "start",
  }}
  className="w-full max-w-sm"
>
  <CarouselContent className="-ml-1">
    {Array.from({ length: 5 }).map((_, index) => (
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
</Carousel>`,
    component: () => (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
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
    )
  },
  {
    title: "Vertical Orientation",
    description: "Carousel with vertical scrolling.",
    code: `<Carousel
  opts={{
    align: "start",
  }}
  orientation="vertical"
  className="w-full max-w-xs"
>
  <CarouselContent className="-mt-1 h-[200px]">
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
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    component: () => (
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[200px]">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  },
  {
    title: "With Autoplay",
    description: "Carousel that automatically advances.",
    code: `<Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
  className="w-full max-w-xs"
>
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
</Carousel>`,
    component: () => (
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-xs"
      >
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
    )
  },
  {
    title: "Image Gallery",
    description: "Carousel displaying images.",
    code: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-0">
              <img
                src={\`https://picsum.photos/seed/\${num}/300/300\`}
                alt={\`Image \${num}\`}
                className="h-full w-full object-cover rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    component: () => (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={`https://picsum.photos/seed/${num}/300/300`}
                      alt={`Image ${num}`}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  },
  {
    title: "With Indicators",
    description: "Carousel with slide indicators.",
    code: `const [api, setApi] = useState<CarouselApi>()
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
  <div className="w-full max-w-xs">
    <Carousel setApi={setApi}>
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
    <div className="py-2 text-center text-sm text-muted-foreground">
      Slide {current} of {count}
    </div>
  </div>
)`,
    component: () => {
      const [api, setApi] = useState<any>()
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
        <div className="w-full max-w-xs">
          <Carousel setApi={setApi}>
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
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </div>
      )
    }
  },
  {
    title: "Product Showcase",
    description: "Carousel for displaying products.",
    code: `const products = [
  { id: 1, name: "Product 1", price: "$99", color: "bg-blue-100" },
  { id: 2, name: "Product 2", price: "$149", color: "bg-green-100" },
  { id: 3, name: "Product 3", price: "$199", color: "bg-purple-100" },
  { id: 4, name: "Product 4", price: "$249", color: "bg-pink-100" },
]

return (
  <Carousel className="w-full max-w-md">
    <CarouselContent>
      {products.map((product) => (
        <CarouselItem key={product.id}>
          <div className="p-1">
            <Card>
              <CardContent className="p-0">
                <div className={\`\${product.color} aspect-square flex items-center justify-center\`}>
                  <span className="text-6xl font-bold text-gray-400">
                    {product.id}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)`,
    component: () => {
      const products = [
        { id: 1, name: "Product 1", price: "$99", color: "bg-blue-100" },
        { id: 2, name: "Product 2", price: "$149", color: "bg-green-100" },
        { id: 3, name: "Product 3", price: "$199", color: "bg-purple-100" },
        { id: 4, name: "Product 4", price: "$249", color: "bg-pink-100" },
      ]

      return (
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-0">
                      <div className={`${product.color} aspect-square flex items-center justify-center`}>
                        <span className="text-6xl font-bold text-gray-400">
                          {product.id}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-2xl font-bold text-primary">
                          {product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    }
  },
  {
    title: "Testimonials Carousel",
    description: "Carousel for displaying testimonials.",
    code: `const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "This product has transformed our workflow. Highly recommended!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Designer, Creative Studio",
    content: "Intuitive and powerful. Exactly what we were looking for.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Developer, StartupXYZ",
    content: "Outstanding performance and excellent support. 5 stars!",
    avatar: "EB"
  }
]

return (
  <Carousel className="w-full max-w-lg">
    <CarouselContent>
      {testimonials.map((testimonial) => (
        <CarouselItem key={testimonial.id}>
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <blockquote className="space-y-4">
                <p className="text-lg italic">"{testimonial.content}"</p>
                <footer className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)`,
    component: () => {
      const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "CEO, TechCorp",
          content: "This product has transformed our workflow. Highly recommended!",
          avatar: "SJ"
        },
        {
          id: 2,
          name: "Mike Chen",
          role: "Designer, Creative Studio",
          content: "Intuitive and powerful. Exactly what we were looking for.",
          avatar: "MC"
        },
        {
          id: 3,
          name: "Emily Brown",
          role: "Developer, StartupXYZ",
          content: "Outstanding performance and excellent support. 5 stars!",
          avatar: "EB"
        }
      ]

      return (
        <Carousel className="w-full max-w-lg">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-0 shadow-none">
                  <CardContent className="p-6">
                    <blockquote className="space-y-4">
                      <p className="text-lg italic">"{testimonial.content}"</p>
                      <footer className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    }
  }
]