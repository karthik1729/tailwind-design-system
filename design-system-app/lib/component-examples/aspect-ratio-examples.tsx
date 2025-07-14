"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ComponentExample } from "@/lib/component-docs"
import Image from "next/image"

export const aspectRatioExamples: ComponentExample[] = [
  {
    title: "16:9 Aspect Ratio",
    description: "Common widescreen video aspect ratio.",
    code: `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
  {
    title: "Square Aspect Ratio",
    description: "1:1 aspect ratio, perfect for profile pictures or thumbnails.",
    code: `<div className="w-[300px]">
  <AspectRatio ratio={1}>
    <img
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="Landscape photograph"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[300px]">
        <AspectRatio ratio={1}>
          <img
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
  {
    title: "4:3 Aspect Ratio",
    description: "Traditional TV/monitor aspect ratio.",
    code: `<div className="w-[400px]">
  <AspectRatio ratio={4 / 3}>
    <img
      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&dpr=2&q=80"
      alt="Photo"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[400px]">
        <AspectRatio ratio={4 / 3}>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&dpr=2&q=80"
            alt="Photo"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
  {
    title: "Portrait Aspect Ratio",
    description: "9:16 aspect ratio, common for mobile screens and stories.",
    code: `<div className="w-[250px]">
  <AspectRatio ratio={9 / 16}>
    <img
      src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&dpr=2&q=80"
      alt="Portrait"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[250px]">
        <AspectRatio ratio={9 / 16}>
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&dpr=2&q=80"
            alt="Portrait"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
  {
    title: "With Video Content",
    description: "AspectRatio works with any content, including videos.",
    code: `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <video
      className="h-full w-full rounded-md object-cover"
      poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&dpr=2&q=80"
      controls
    >
      <source src="video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <video
            className="h-full w-full rounded-md object-cover"
            poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&dpr=2&q=80"
            controls
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      </div>
    )
  },
  {
    title: "With Placeholder Content",
    description: "Using AspectRatio with placeholder content.",
    code: `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <div className="flex h-full items-center justify-center">
      <span className="text-lg font-semibold text-muted-foreground">
        16:9 Placeholder
      </span>
    </div>
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <div className="flex h-full items-center justify-center">
            <span className="text-lg font-semibold text-muted-foreground">
              16:9 Placeholder
            </span>
          </div>
        </AspectRatio>
      </div>
    )
  },
  {
    title: "Responsive Grid",
    description: "Using AspectRatio in a responsive grid layout.",
    code: `<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <AspectRatio key={i} ratio={1}>
      <div className="flex h-full items-center justify-center rounded-md bg-muted">
        <span className="text-2xl font-semibold text-muted-foreground">{i}</span>
      </div>
    </AspectRatio>
  ))}
</div>`,
    component: () => (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <AspectRatio key={i} ratio={1}>
            <div className="flex h-full items-center justify-center rounded-md bg-muted">
              <span className="text-2xl font-semibold text-muted-foreground">{i}</span>
            </div>
          </AspectRatio>
        ))}
      </div>
    )
  },
  {
    title: "Cinema Aspect Ratio",
    description: "2.35:1 cinematic widescreen aspect ratio.",
    code: `<div className="w-full max-w-[600px]">
  <AspectRatio ratio={2.35 / 1}>
    <img
      src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1000&dpr=2&q=80"
      alt="Cinematic"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`,
    component: () => (
      <div className="w-full max-w-[600px]">
        <AspectRatio ratio={2.35 / 1}>
          <img
            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1000&dpr=2&q=80"
            alt="Cinematic"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  }
]