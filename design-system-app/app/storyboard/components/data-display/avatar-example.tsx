"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  User, 
  Users, 
  UserCircle, 
  RefreshCw,
  Loader2
} from "lucide-react"

export function AvatarExample() {
  const [imageUrl, setImageUrl] = useState("https://github.com/shadcn.png")
  const [isLoading, setIsLoading] = useState(false)
  const [showImage, setShowImage] = useState(true)

  const simulateImageLoad = () => {
    setIsLoading(true)
    setShowImage(false)
    
    setTimeout(() => {
      setShowImage(true)
      setIsLoading(false)
    }, 1500)
  }

  const users = [
    { id: 1, name: "Alice Johnson", initials: "AJ", image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Bob Smith", initials: "BS", image: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Charlie Brown", initials: "CB", image: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Diana Ross", initials: "DR", image: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Edward Norton", initials: "EN", image: null },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
        <p className="text-muted-foreground mb-6">
          Display user profile images with smooth loading transitions and customizable fallbacks.
        </p>
      </div>

      {/* Basic Avatar */}
      <PreviewContainer
        title="Basic Avatar"
        description="Simple avatar with image and fallback"
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        component={
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/invalid-url.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        }
      />

      {/* Avatar Sizes */}
      <PreviewContainer
        title="Avatar Sizes"
        description="Different avatar sizes for various use cases"
        code={`<Avatar className="h-6 w-6">
  <AvatarImage src={user.image} alt={user.name} />
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>

<Avatar className="h-8 w-8">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarFallback className="text-xl">XL</AvatarFallback>
</Avatar>`}
        component={
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
              <AvatarFallback className="text-lg">LG</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
              <AvatarFallback className="text-xl">XL</AvatarFallback>
            </Avatar>
          </div>
        }
      />

      {/* Loading States */}
      <PreviewContainer
        title="Loading States"
        description="Avatar with loading animation and smooth transitions"
        code={`const [isLoading, setIsLoading] = useState(false)
const [showImage, setShowImage] = useState(true)

const simulateImageLoad = () => {
  setIsLoading(true)
  setShowImage(false)
  
  setTimeout(() => {
    setShowImage(true)
    setIsLoading(false)
  }, 1500)
}

return (
  <div className="flex items-center gap-6">
    <Avatar className="h-16 w-16">
      {showImage && (
        <AvatarImage 
          src={imageUrl} 
          alt="User"
        />
      )}
      <AvatarFallback>
        {isLoading ? (
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        ) : (
          "JD"
        )}
      </AvatarFallback>
    </Avatar>
    
    <Button 
      onClick={simulateImageLoad}
      disabled={isLoading}
      size="sm"
    >
      <RefreshCw className="h-4 w-4 mr-2" />
      Reload Image
    </Button>
  </div>
)`}
        component={
          <div className="flex items-center gap-6">
            <Avatar className="h-16 w-16">
              {showImage && (
                <AvatarImage 
                  src={imageUrl} 
                  alt="User"
                />
              )}
              <AvatarFallback>
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                ) : (
                  "JD"
                )}
              </AvatarFallback>
            </Avatar>
            
            <Button 
              onClick={simulateImageLoad}
              disabled={isLoading}
              size="sm"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reload Image
            </Button>
          </div>
        }
      />

      {/* Avatar with Status Indicator */}
      <PreviewContainer
        title="Avatar with Status"
        description="Avatar with online/offline status indicators"
        code={`<div className="relative">
  <Avatar>
    <AvatarImage src={user.image} alt={user.name} />
    <AvatarFallback>{user.initials}</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
</div>

<div className="relative">
  <Avatar>
    <AvatarFallback>BS</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
</div>

<div className="relative">
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 ring-2 ring-background" />
</div>`}
        component={
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
            </div>
            
            <div className="relative">
              <Avatar>
                <AvatarFallback>AW</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
            </div>
            
            <div className="relative">
              <Avatar>
                <AvatarFallback>OF</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 ring-2 ring-background" />
            </div>
          </div>
        }
      />

      {/* Avatar Group */}
      <PreviewContainer
        title="Avatar Group"
        description="Stack multiple avatars with overlap"
        code={`<div className="flex -space-x-3">
  {users.slice(0, 4).map((user) => (
    <Avatar key={user.id} className="ring-2 ring-background">
      <AvatarImage src={user.image} alt={user.name} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
  <Avatar className="ring-2 ring-background">
    <AvatarFallback className="text-xs bg-muted">
      +{users.length - 4}
    </AvatarFallback>
  </Avatar>
</div>`}
        component={
          <div className="space-y-4">
            <div className="flex -space-x-3">
              {users.slice(0, 4).map((user) => (
                <Avatar key={user.id} className="ring-2 ring-background hover:ring-4 transition-all">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              ))}
              <Avatar className="ring-2 ring-background">
                <AvatarFallback className="text-xs bg-muted">
                  +{users.length - 4}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex -space-x-2">
              {users.slice(0, 3).map((user) => (
                <Avatar key={user.id} className="h-6 w-6 ring-2 ring-background">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="text-xs">{user.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        }
      />

      {/* Avatar with Custom Fallback */}
      <PreviewContainer
        title="Custom Fallback Icons"
        description="Use icons instead of text for fallbacks"
        code={`<Avatar>
  <AvatarImage src="/invalid.jpg" alt="User" />
  <AvatarFallback>
    <User className="h-4 w-4" />
  </AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarImage src="/invalid.jpg" alt="Team" />
  <AvatarFallback>
    <Users className="h-6 w-6" />
  </AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="/invalid.jpg" alt="Profile" />
  <AvatarFallback className="bg-primary text-primary-foreground">
    <UserCircle className="h-8 w-8" />
  </AvatarFallback>
</Avatar>`}
        component={
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/invalid.jpg" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            
            <Avatar className="h-12 w-12">
              <AvatarImage src="/invalid.jpg" alt="Team" />
              <AvatarFallback>
                <Users className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            
            <Avatar className="h-16 w-16">
              <AvatarImage src="/invalid.jpg" alt="Profile" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <UserCircle className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
          </div>
        }
      />

      {/* Loading Skeleton */}
      <PreviewContainer
        title="Skeleton Loading State"
        description="Show skeleton while loading user data"
        code={`const LoadingAvatar = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  </div>
)

const UserAvatar = ({ user }) => (
  <div className="flex items-center space-x-4">
    <Avatar className="h-12 w-12">
      <AvatarImage src={user.image} alt={user.name} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm font-medium leading-none">{user.name}</p>
      <p className="text-sm text-muted-foreground">{user.email}</p>
    </div>
  </div>
)`}
        component={
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Loading state:</p>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Loaded state:</p>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Avatar List */}
      <PreviewContainer
        title="Avatar List"
        description="List of users with avatars and information"
        code={`{users.map((user) => (
  <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
    <Avatar>
      <AvatarImage src={user.image} alt={user.name} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <p className="text-sm font-medium">{user.name}</p>
      <p className="text-xs text-muted-foreground">{user.role}</p>
    </div>
    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
      {user.status}
    </Badge>
  </div>
))}`}
        component={
          <div className="space-y-2">
            {[
              { ...users[0], role: "Administrator", status: "active" },
              { ...users[1], role: "Developer", status: "active" },
              { ...users[2], role: "Designer", status: "away" },
              { ...users[4], role: "Manager", status: "offline" },
            ].map((user) => (
              <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
                <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                  {user.status}
                </Badge>
              </div>
            ))}
          </div>
        }
      />
    </section>
  )
}