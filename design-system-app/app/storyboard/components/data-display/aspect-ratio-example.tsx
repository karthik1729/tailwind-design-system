"use client"

import { useState } from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Volume2, Heart, Share2, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

const videoData = [
  {
    id: 1,
    title: "Mountain Adventure",
    duration: "4:32",
    views: "1.2M",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    isLive: false,
  },
  {
    id: 2,
    title: "City Lights",
    duration: "2:15",
    views: "856K",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=450&fit=crop",
    isLive: false,
  },
  {
    id: 3,
    title: "Ocean Waves",
    duration: "6:45",
    views: "2.1M",
    thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=450&fit=crop",
    isLive: true,
  },
]

interface ImageWithLoadingProps {
  src: string
  alt: string
  className?: string
  onLoad?: () => void
  onError?: () => void
}

function ImageWithLoading({ src, alt, className, onLoad, onError }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setIsVisible(true)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center rounded-lg">
          <div className="text-center">
            <EyeOff className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Failed to load image</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover rounded-lg transition-all duration-300",
          isVisible ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

interface VideoCardProps {
  video: typeof videoData[0]
  aspectRatio?: number
}

function VideoCard({ video, aspectRatio = 16/9 }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card 
      className="overflow-hidden transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <AspectRatio ratio={aspectRatio}>
          <ImageWithLoading
            src={video.thumbnail}
            alt={video.title}
            className="cursor-pointer"
          />
          
          {/* Overlay */}
          <div className={cn(
            "absolute inset-0 bg-black/30 transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex items-center justify-center h-full">
              <Button
                size="icon"
                variant="secondary"
                className="h-12 w-12 rounded-full bg-white/90 hover:bg-white"
              >
                <Play className="h-6 w-6 text-black" />
              </Button>
            </div>
          </div>
          
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary" className="bg-black/80 text-white">
              {video.duration}
            </Badge>
          </div>
          
          {/* Live indicator */}
          {video.isLive && (
            <div className="absolute top-2 left-2">
              <Badge variant="destructive" className="animate-pulse">
                • LIVE
              </Badge>
            </div>
          )}
          
          {/* Action buttons */}
          <div className={cn(
            "absolute top-2 right-2 flex gap-2 transition-all duration-200",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={cn("h-4 w-4", isLiked ? "fill-red-500 text-red-500" : "text-black")} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            >
              <Share2 className="h-4 w-4 text-black" />
            </Button>
          </div>
        </AspectRatio>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{video.title}</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Eye className="h-3 w-3" />
          <span>{video.views} views</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function AspectRatioExample() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Aspect Ratio</h2>
        <p className="text-muted-foreground mb-6">
          Responsive containers that maintain consistent proportions with loading states and error handling.
        </p>
      </div>

      {/* Basic Aspect Ratio */}
      <PreviewContainer
        title="Basic Aspect Ratio"
        description="Simple 16:9 aspect ratio container with image loading"
        code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop"
    alt="Photo by Drew Beamer"
    className="rounded-lg object-cover w-full h-full"
  />
</AspectRatio>`}
        component={
          <div className="max-w-md">
            <AspectRatio ratio={16 / 9}>
              <ImageWithLoading
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop"
                alt="Photo by Drew Beamer"
              />
            </AspectRatio>
          </div>
        }
      />

      {/* Different Ratios */}
      <PreviewContainer
        title="Different Aspect Ratios"
        description="Common aspect ratios for different use cases"
        code={`{/* Square - 1:1 */}
<AspectRatio ratio={1}>
  <img src="..." alt="Square image" className="object-cover w-full h-full" />
</AspectRatio>

{/* Landscape - 16:9 */}
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Landscape image" className="object-cover w-full h-full" />
</AspectRatio>

{/* Portrait - 4:5 */}
<AspectRatio ratio={4 / 5}>
  <img src="..." alt="Portrait image" className="object-cover w-full h-full" />
</AspectRatio>

{/* Cinematic - 21:9 */}
<AspectRatio ratio={21 / 9}>
  <img src="..." alt="Cinematic image" className="object-cover w-full h-full" />
</AspectRatio>`}
        component={
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Square - 1:1 */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Square (1:1)</p>
              <AspectRatio ratio={1}>
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop"
                  alt="Square image"
                />
              </AspectRatio>
            </div>
            
            {/* Landscape - 16:9 */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Landscape (16:9)</p>
              <AspectRatio ratio={16 / 9}>
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
                  alt="Landscape image"
                />
              </AspectRatio>
            </div>
            
            {/* Portrait - 4:5 */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Portrait (4:5)</p>
              <AspectRatio ratio={4 / 5}>
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=320&h=400&fit=crop"
                  alt="Portrait image"
                />
              </AspectRatio>
            </div>
            
            {/* Cinematic - 21:9 */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Cinematic (21:9)</p>
              <AspectRatio ratio={21 / 9}>
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=420&h=180&fit=crop"
                  alt="Cinematic image"
                />
              </AspectRatio>
            </div>
          </div>
        }
      />

      {/* Video Card Grid */}
      <PreviewContainer
        title="Video Card Grid"
        description="Interactive video cards with hover effects, loading states, and responsive design"
        code={`function VideoCard({ video, aspectRatio = 16/9 }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card 
      className="overflow-hidden transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <AspectRatio ratio={aspectRatio}>
          <ImageWithLoading
            src={video.thumbnail}
            alt={video.title}
            className="cursor-pointer"
          />
          
          {/* Overlay with play button */}
          <div className={cn(
            "absolute inset-0 bg-black/30 transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex items-center justify-center h-full">
              <Button
                size="icon"
                variant="secondary"
                className="h-12 w-12 rounded-full bg-white/90 hover:bg-white"
              >
                <Play className="h-6 w-6 text-black" />
              </Button>
            </div>
          </div>
          
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary" className="bg-black/80 text-white">
              {video.duration}
            </Badge>
          </div>
          
          {/* Live indicator */}
          {video.isLive && (
            <div className="absolute top-2 left-2">
              <Badge variant="destructive" className="animate-pulse">
                • LIVE
              </Badge>
            </div>
          )}
        </AspectRatio>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{video.title}</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Eye className="h-3 w-3" />
          <span>{video.views} views</span>
        </div>
      </CardContent>
    </Card>
  )
}`}
        component={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        }
      />

      {/* Image Gallery */}
      <PreviewContainer
        title="Image Gallery"
        description="Responsive image gallery with loading states and error handling"
        code={`<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {images.map((image, index) => (
    <AspectRatio key={index} ratio={1} className="overflow-hidden">
      <ImageWithLoading
        src={image.src}
        alt={image.alt}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </AspectRatio>
  ))}
</div>`}
        component={
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=300&h=300&fit=crop", alt: "Nature 1" },
              { src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=300&fit=crop", alt: "Nature 2" },
              { src: "https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=300&h=300&fit=crop", alt: "Nature 3" },
              { src: "https://images.unsplash.com/photo-1682687220499-d9db0f8b8c7e?w=300&h=300&fit=crop", alt: "Nature 4" },
              { src: "https://images.unsplash.com/photo-1682687220063-4742bd7b6f8c?w=300&h=300&fit=crop", alt: "Nature 5" },
              { src: "https://images.unsplash.com/photo-1682687220890-4a2f4c3c0a5d?w=300&h=300&fit=crop", alt: "Nature 6" },
              { src: "https://images.unsplash.com/photo-1682687220777-8d8b5e25b5e6?w=300&h=300&fit=crop", alt: "Nature 7" },
              { src: "https://images.unsplash.com/photo-1682687220923-9e5c5b5e5b5e?w=300&h=300&fit=crop", alt: "Nature 8" },
            ].map((image, index) => (
              <AspectRatio key={index} ratio={1} className="overflow-hidden rounded-lg">
                <ImageWithLoading
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            ))}
          </div>
        }
      />

      {/* Product Cards */}
      <PreviewContainer
        title="Product Cards"
        description="E-commerce product cards with consistent aspect ratios and loading states"
        code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <AspectRatio ratio={4 / 3}>
        <ImageWithLoading
          src={product.image}
          alt={product.name}
          className="hover:scale-105 transition-transform duration-300"
        />
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          <Button size="sm" className="h-8">
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>`}
        component={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Wireless Earbuds", price: "$199", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop&auto=format" },
              { id: 2, name: "Laptop Stand", price: "$79", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&auto=format" },
              { id: 3, name: "Mechanical Keyboard", price: "$149", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop&auto=format" },
            ].map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <AspectRatio ratio={4 / 3}>
                  <ImageWithLoading
                    src={product.image}
                    alt={product.name}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="h-8">
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      />

      {/* Loading States Demo */}
      <PreviewContainer
        title="Loading States"
        description="Different loading states and error handling scenarios"
        code={`function ImageWithLoading({ src, alt, className, onLoad, onError }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setIsVisible(true)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center rounded-lg">
          <div className="text-center">
            <EyeOff className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Failed to load image</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover rounded-lg transition-all duration-300",
          isVisible ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}`}
        component={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Loading State</p>
              <AspectRatio ratio={16 / 9}>
                <div className="bg-muted animate-pulse rounded-lg w-full h-full" />
              </AspectRatio>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Error State</p>
              <AspectRatio ratio={16 / 9}>
                <div className="bg-muted flex items-center justify-center rounded-lg w-full h-full">
                  <div className="text-center">
                    <EyeOff className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Failed to load</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Loaded State</p>
              <AspectRatio ratio={16 / 9}>
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop"
                  alt="Loaded image"
                />
              </AspectRatio>
            </div>
          </div>
        }
      />
    </section>
  )
}