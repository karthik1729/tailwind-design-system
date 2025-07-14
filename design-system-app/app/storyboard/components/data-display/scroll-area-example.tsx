"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Heart, Share2, MoreHorizontal, Clock, Star } from "lucide-react"

const tags = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python", "JavaScript",
  "HTML", "CSS", "Vue.js", "Angular", "Svelte", "GraphQL", "REST API", "MongoDB",
  "PostgreSQL", "MySQL", "Redis", "Docker", "Kubernetes", "AWS", "Vercel", "Netlify",
  "Firebase", "Supabase", "Prisma", "Drizzle", "tRPC", "Zod", "Framer Motion",
  "React Query", "Zustand", "Redux", "Context API", "Webpack", "Vite", "ESLint",
  "Prettier", "Jest", "Cypress", "Playwright", "Storybook", "Figma", "Adobe XD"
]

const chatMessages = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "Hey everyone! Just finished the new dashboard design. What do you think?",
    time: "2 min ago",
    likes: 3,
    replies: 2,
  },
  {
    id: 2,
    user: "Bob Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    message: "Looks amazing! The color scheme is perfect for our brand.",
    time: "5 min ago",
    likes: 1,
    replies: 0,
  },
  {
    id: 3,
    user: "Carol Wilson",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: "I love the new navigation. Much more intuitive than the previous version.",
    time: "8 min ago",
    likes: 2,
    replies: 1,
  },
  {
    id: 4,
    user: "David Brown",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "The responsiveness is great too. Works perfectly on mobile devices.",
    time: "12 min ago",
    likes: 4,
    replies: 3,
  },
  {
    id: 5,
    user: "Emma Davis",
    avatar: "https://i.pravatar.cc/150?img=5",
    message: "Quick question - will this support dark mode? Our users have been asking for it.",
    time: "15 min ago",
    likes: 2,
    replies: 1,
  },
  {
    id: 6,
    user: "Frank Miller",
    avatar: "https://i.pravatar.cc/150?img=6",
    message: "Dark mode is already implemented! You can toggle it in the settings.",
    time: "18 min ago",
    likes: 5,
    replies: 2,
  },
  {
    id: 7,
    user: "Grace Taylor",
    avatar: "https://i.pravatar.cc/150?img=7",
    message: "This is going to make our workflow so much better. Great work team!",
    time: "22 min ago",
    likes: 3,
    replies: 0,
  },
  {
    id: 8,
    user: "Henry Wilson",
    avatar: "https://i.pravatar.cc/150?img=8",
    message: "When can we expect the beta release? I'm excited to test it with real data.",
    time: "25 min ago",
    likes: 1,
    replies: 4,
  },
]

const codeSnippet = `import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Long Content</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <div className="p-4">
            {/* Your long content here */}
            <p>This is a very long content that will require scrolling...</p>
            <p>More content...</p>
            <p>Even more content...</p>
            {/* ... */}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

// With custom scrollbar
<ScrollArea 
  className="h-[300px] w-full" 
  scrollbarVariant="rounded"
  fadeScrollbar={true}
>
  <div className="p-4">
    {/* Content */}
  </div>
</ScrollArea>

// Horizontal scrolling
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex space-x-4 p-4">
    {items.map((item, index) => (
      <div key={index} className="flex-none">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`

export function ScrollAreaExample() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
        <p className="text-muted-foreground mb-6">
          Custom scroll containers with enhanced scrollbar styling and smooth scrolling behavior.
        </p>
      </div>

      {/* Basic Scroll Area */}
      <PreviewContainer
        title="Basic Scroll Area"
        description="Simple scrollable content with default styling"
        code={`<ScrollArea className="h-[200px] w-full rounded-md border p-4">
  <div className="space-y-2">
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">
        Item {i + 1}: This is a sample item in the scroll area.
      </div>
    ))}
  </div>
</ScrollArea>`}
        component={
          <div className="max-w-md">
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <div className="space-y-2">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Item {i + 1}: This is a sample item in the scroll area.
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        }
      />

      {/* Scrollbar Variants */}
      <PreviewContainer
        title="Scrollbar Variants"
        description="Different scrollbar styles for various design needs"
        code={`{/* Default scrollbar */}
<ScrollArea className="h-[150px] w-full rounded-md border p-4">
  <div className="space-y-2">
    {content.map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
</ScrollArea>

{/* Minimal scrollbar */}
<ScrollArea 
  className="h-[150px] w-full rounded-md border p-4" 
  scrollbarVariant="minimal"
>
  <div className="space-y-2">
    {content.map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
</ScrollArea>

{/* Thick scrollbar */}
<ScrollArea 
  className="h-[150px] w-full rounded-md border p-4" 
  scrollbarVariant="thick"
>
  <div className="space-y-2">
    {content.map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
</ScrollArea>

{/* Rounded scrollbar */}
<ScrollArea 
  className="h-[150px] w-full rounded-md border p-4" 
  scrollbarVariant="rounded"
>
  <div className="space-y-2">
    {content.map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
</ScrollArea>`}
        component={
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Default</p>
              <ScrollArea className="h-[150px] w-full rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">Item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Minimal</p>
              <ScrollArea 
                className="h-[150px] w-full rounded-md border p-4" 
                scrollbarVariant="minimal"
              >
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">Item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Thick</p>
              <ScrollArea 
                className="h-[150px] w-full rounded-md border p-4" 
                scrollbarVariant="thick"
              >
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">Item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Rounded</p>
              <ScrollArea 
                className="h-[150px] w-full rounded-md border p-4" 
                scrollbarVariant="rounded"
              >
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">Item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        }
      />

      {/* Fade Scrollbar */}
      <PreviewContainer
        title="Fade Scrollbar"
        description="Scrollbar that fades in/out on hover for a cleaner look"
        code={`<ScrollArea 
  className="h-[250px] w-full rounded-md border p-4" 
  scrollbarVariant="rounded"
  fadeScrollbar={true}
>
  <div className="space-y-4">
    {content.map((item, index) => (
      <Card key={index} className="p-4">
        <p className="text-sm">{item}</p>
      </Card>
    ))}
  </div>
</ScrollArea>`}
        component={
          <div className="max-w-md">
            <ScrollArea 
              className="h-[250px] w-full rounded-md border p-4" 
              scrollbarVariant="rounded"
              fadeScrollbar={true}
            >
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm">
                      Card {i + 1}: This is a sample card with some content. 
                      The scrollbar will fade in when you hover over the scroll area.
                    </p>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        }
      />

      {/* Horizontal Scrolling */}
      <PreviewContainer
        title="Horizontal Scrolling"
        description="Horizontal scroll area for tag lists and carousels"
        code={`<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-2 p-4">
    {tags.map((tag, index) => (
      <Badge key={index} variant="secondary" className="flex-none">
        {tag}
      </Badge>
    ))}
  </div>
</ScrollArea>`}
        component={
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-2 p-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="flex-none">
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        }
      />

      {/* Chat Messages */}
      <PreviewContainer
        title="Chat Messages"
        description="Scrollable chat interface with custom styling"
        code={`<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Team Chat</CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <ScrollArea className="h-[400px] px-4" scrollbarVariant="minimal">
      <div className="space-y-4 py-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={message.avatar} alt={message.user} />
              <AvatarFallback>{message.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">{message.user}</p>
                <p className="text-xs text-muted-foreground">{message.time}</p>
              </div>
              <p className="text-sm">{message.message}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <button className="flex items-center space-x-1 hover:text-primary">
                  <Heart className="h-3 w-3" />
                  <span>{message.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-primary">
                  <MessageCircle className="h-3 w-3" />
                  <span>{message.replies}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </CardContent>
</Card>`}
        component={
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Team Chat</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] px-4" scrollbarVariant="minimal">
                <div className="space-y-4 py-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.avatar} alt={message.user} />
                        <AvatarFallback>{message.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium">{message.user}</p>
                          <p className="text-xs text-muted-foreground">{message.time}</p>
                        </div>
                        <p className="text-sm">{message.message}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                            <Heart className="h-3 w-3" />
                            <span>{message.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                            <MessageCircle className="h-3 w-3" />
                            <span>{message.replies}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        }
      />

      {/* Code Snippet */}
      <PreviewContainer
        title="Code Snippet"
        description="Scrollable code block with syntax highlighting"
        code={`<Card>
  <CardHeader>
    <CardTitle>Component Example</CardTitle>
  </CardHeader>
  <CardContent>
    <ScrollArea className="h-[300px] w-full">
      <pre className="text-sm bg-muted p-4 rounded-lg">
        <code>{codeSnippet}</code>
      </pre>
    </ScrollArea>
  </CardContent>
</Card>`}
        component={
          <Card>
            <CardHeader>
              <CardTitle>Component Example</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full">
                <pre className="text-sm bg-muted p-4 rounded-lg">
                  <code>{codeSnippet}</code>
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        }
      />

      {/* Hidden Scrollbar */}
      <PreviewContainer
        title="Hidden Scrollbar"
        description="Scrollable content with completely hidden scrollbar"
        code={`<ScrollArea 
  className="h-[200px] w-full rounded-md border p-4" 
  hideScrollbar={true}
>
  <div className="space-y-3">
    {items.map((item, index) => (
      <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-sm">{item}</span>
      </div>
    ))}
  </div>
</ScrollArea>`}
        component={
          <div className="max-w-md">
            <ScrollArea 
              className="h-[200px] w-full rounded-md border p-4" 
              hideScrollbar={true}
            >
              <div className="space-y-3">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">List item {i + 1} - This is a longer text to ensure scrollable content</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        }
      />
    </section>
  )
}