"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ComponentExample } from "@/lib/component-docs"

export const scrollAreaExamples: ComponentExample[] = [
  {
    title: "Basic Scroll Area",
    description: "A simple scrollable area with content that overflows.",
    code: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
      )

      return (
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag} className="text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "Horizontal Scroll",
    description: "Scroll area with horizontal overflow.",
    code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image) => (
      <figure key={image.name} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-32 w-48 bg-muted flex items-center justify-center">
            {image.name}
          </div>
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by <span className="font-semibold">{image.artist}</span>
        </figcaption>
      </figure>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const images = [
        { name: "Image 1", artist: "Artist One" },
        { name: "Image 2", artist: "Artist Two" },
        { name: "Image 3", artist: "Artist Three" },
        { name: "Image 4", artist: "Artist Four" },
        { name: "Image 5", artist: "Artist Five" },
      ]

      return (
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {images.map((image) => (
              <figure key={image.name} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <div className="h-32 w-48 bg-muted flex items-center justify-center">
                    {image.name}
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by <span className="font-semibold">{image.artist}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "With Separators",
    description: "Scroll area with content separated by dividers.",
    code: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Inbox</h4>
    {emails.map((email, index) => (
      <div key={index}>
        <div className="text-sm">
          <div className="font-medium">{email.subject}</div>
          <div className="text-xs text-muted-foreground">{email.from}</div>
        </div>
        {index < emails.length - 1 && <Separator className="my-2" />}
      </div>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const emails = Array.from({ length: 20 }).map((_, i) => ({
        subject: `Email Subject ${i + 1}`,
        from: `sender${i + 1}@example.com`
      }))

      return (
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Inbox</h4>
            {emails.map((email, index) => (
              <div key={index}>
                <div className="text-sm">
                  <div className="font-medium">{email.subject}</div>
                  <div className="text-xs text-muted-foreground">{email.from}</div>
                </div>
                {index < emails.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "Chat Messages",
    description: "Scroll area for a chat interface.",
    code: `<ScrollArea className="h-96 w-full rounded-md border p-4">
  <div className="space-y-4">
    {messages.map((message, index) => (
      <div
        key={index}
        className={cn(
          "flex",
          message.sender === "You" ? "justify-end" : "justify-start"
        )}
      >
        <div
          className={cn(
            "rounded-lg px-3 py-2 max-w-[75%]",
            message.sender === "You"
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          )}
        >
          <p className="text-sm">{message.text}</p>
          <p className="text-xs opacity-70 mt-1">{message.time}</p>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const messages = [
        { sender: "John", text: "Hey, how are you?", time: "10:00 AM" },
        { sender: "You", text: "I'm good, thanks! How about you?", time: "10:01 AM" },
        { sender: "John", text: "Doing great! Want to grab lunch?", time: "10:02 AM" },
        { sender: "You", text: "Sure, where do you want to go?", time: "10:03 AM" },
        { sender: "John", text: "How about that new Italian place?", time: "10:04 AM" },
        { sender: "You", text: "Sounds perfect! What time?", time: "10:05 AM" },
        { sender: "John", text: "12:30 PM works for me", time: "10:06 AM" },
        { sender: "You", text: "Great, see you there!", time: "10:07 AM" },
      ]

      const cn = (...classes: string[]) => classes.filter(Boolean).join(' ')

      return (
        <ScrollArea className="h-96 w-full rounded-md border p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.sender === "You" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 max-w-[75%]",
                    message.sender === "You"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "Code Block",
    description: "Scroll area for displaying code with syntax highlighting.",
    code: `<ScrollArea className="h-72 w-full rounded-md border">
  <pre className="p-4">
    <code className="text-sm">{codeExample}</code>
  </pre>
</ScrollArea>`,
    component: () => {
      const codeExample = `function ScrollAreaExample() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    // Fetch items from API
    fetchItems().then(data => {
      setItems(data)
    })
  }, [])
  
  return (
    <ScrollArea className="h-96">
      <div className="p-4">
        {items.map((item) => (
          <div key={item.id} className="mb-4">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

// This is a long code example that demonstrates
// how scroll areas can be used to display code
// with proper scrolling behavior when the content
// exceeds the container dimensions.

export default ScrollAreaExample`

      return (
        <ScrollArea className="h-72 w-full rounded-md border">
          <pre className="p-4">
            <code className="text-sm">{codeExample}</code>
          </pre>
        </ScrollArea>
      )
    }
  },
  {
    title: "List with Actions",
    description: "Scrollable list with interactive items.",
    code: `<ScrollArea className="h-80 w-full rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Notifications</h4>
    {notifications.map((notification) => (
      <div
        key={notification.id}
        className="mb-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
      >
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">{notification.title}</p>
            <p className="text-xs text-muted-foreground">{notification.description}</p>
          </div>
          <span className="text-xs text-muted-foreground">{notification.time}</span>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const notifications = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        title: `Notification ${i + 1}`,
        description: `This is the description for notification ${i + 1}`,
        time: `${Math.floor(Math.random() * 12) + 1}h ago`
      }))

      return (
        <ScrollArea className="h-80 w-full rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium">Notifications</h4>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="mb-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "Custom Scrollbar",
    description: "Scroll area with custom scrollbar styling.",
    code: `<ScrollArea className="h-72 w-48 rounded-md border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Custom Scrollbar</h4>
    {items.map((item) => (
      <div key={item} className="py-2 text-sm">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`,
    component: () => {
      const items = Array.from({ length: 30 }).map((_, i) => `Item ${i + 1}`)

      return (
        <ScrollArea className="h-72 w-48 rounded-md border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Custom Scrollbar</h4>
            {items.map((item) => (
              <div key={item} className="py-2 text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      )
    }
  },
  {
    title: "Table in Scroll Area",
    description: "Scrollable table with fixed headers.",
    code: `<ScrollArea className="h-72 w-full rounded-md border">
  <table className="w-full">
    <thead className="sticky top-0 bg-background border-b">
      <tr>
        <th className="text-left p-2">Name</th>
        <th className="text-left p-2">Status</th>
        <th className="text-left p-2">Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="border-b">
          <td className="p-2">{user.name}</td>
          <td className="p-2">
            <span className={cn(
              "px-2 py-1 rounded-full text-xs",
              user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
            )}>
              {user.status}
            </span>
          </td>
          <td className="p-2">{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
</ScrollArea>`,
    component: () => {
      const users = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        name: `User ${i + 1}`,
        status: i % 3 === 0 ? "Inactive" : "Active",
        role: ["Admin", "Editor", "Viewer"][i % 3]
      }))

      const cn = (...classes: string[]) => classes.filter(Boolean).join(' ')

      return (
        <ScrollArea className="h-72 w-full rounded-md border">
          <table className="w-full">
            <thead className="sticky top-0 bg-background border-b">
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs",
                      user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    )}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      )
    }
  }
]