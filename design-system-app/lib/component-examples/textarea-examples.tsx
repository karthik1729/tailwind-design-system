"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const textareaExamples: ComponentExample[] = [
  {
    title: "Basic Textarea",
    description: "A simple textarea with placeholder text.",
    code: `<Textarea placeholder="Type your message here." />`,
    component: () => (
      <Textarea placeholder="Type your message here." />
    )
  },
  {
    title: "Textarea with Label",
    description: "Textarea with an associated label for better accessibility.",
    code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`,
    component: () => (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    )
  },
  {
    title: "Different Sizes",
    description: "Control the height of textarea using the rows prop.",
    code: `<div className="space-y-4">
  <div className="grid w-full gap-1.5">
    <Label htmlFor="small">Small (2 rows)</Label>
    <Textarea placeholder="Small textarea" id="small" rows={2} />
  </div>
  <div className="grid w-full gap-1.5">
    <Label htmlFor="medium">Medium (4 rows)</Label>
    <Textarea placeholder="Medium textarea" id="medium" rows={4} />
  </div>
  <div className="grid w-full gap-1.5">
    <Label htmlFor="large">Large (6 rows)</Label>
    <Textarea placeholder="Large textarea" id="large" rows={6} />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="small">Small (2 rows)</Label>
          <Textarea placeholder="Small textarea" id="small" rows={2} />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="medium">Medium (4 rows)</Label>
          <Textarea placeholder="Medium textarea" id="medium" rows={4} />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="large">Large (6 rows)</Label>
          <Textarea placeholder="Large textarea" id="large" rows={6} />
        </div>
      </div>
    )
  },
  {
    title: "Disabled State",
    description: "Textarea can be disabled to prevent user interaction.",
    code: `<div className="space-y-4">
  <Textarea placeholder="Disabled textarea" disabled />
  <div className="grid w-full gap-1.5">
    <Label htmlFor="disabled-with-value">Disabled with content</Label>
    <Textarea 
      id="disabled-with-value"
      disabled 
      defaultValue="This textarea is disabled and contains some text that cannot be edited."
    />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <Textarea placeholder="Disabled textarea" disabled />
        <div className="grid w-full gap-1.5">
          <Label htmlFor="disabled-with-value">Disabled with content</Label>
          <Textarea 
            id="disabled-with-value"
            disabled 
            defaultValue="This textarea is disabled and contains some text that cannot be edited."
          />
        </div>
      </div>
    )
  },
  {
    title: "With Default Value",
    description: "Textarea with pre-filled content.",
    code: `<Textarea 
  defaultValue="This is a textarea with a default value. You can edit this text."
  rows={4}
/>`,
    component: () => (
      <Textarea 
        defaultValue="This is a textarea with a default value. You can edit this text."
        rows={4}
      />
    )
  },
  {
    title: "Controlled Textarea",
    description: "Textarea with controlled state and character count.",
    code: `const [bio, setBio] = useState("")
const maxLength = 160

return (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="bio">Bio</Label>
    <Textarea
      id="bio"
      placeholder="Tell us a little bit about yourself"
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      maxLength={maxLength}
    />
    <p className="text-sm text-muted-foreground text-right">
      {bio.length}/{maxLength} characters
    </p>
  </div>
)`,
    component: () => {
      const [bio, setBio] = useState("")
      const maxLength = 160
      
      return (
        <div className="grid w-full gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us a little bit about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={maxLength}
          />
          <p className="text-sm text-muted-foreground text-right">
            {bio.length}/{maxLength} characters
          </p>
        </div>
      )
    }
  },
  {
    title: "Form Example",
    description: "Complete form with textarea for feedback or comments.",
    code: `<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
  <div className="grid gap-2">
    <Label htmlFor="subject">Subject</Label>
    <Input id="subject" placeholder="What's this about?" required />
  </div>
  
  <div className="grid gap-2">
    <Label htmlFor="feedback">Your feedback</Label>
    <Textarea
      id="feedback"
      placeholder="Please share your thoughts..."
      rows={5}
      required
      minLength={10}
    />
    <p className="text-sm text-muted-foreground">
      Minimum 10 characters required
    </p>
  </div>
  
  <div className="grid gap-2">
    <Label htmlFor="details">Additional details (optional)</Label>
    <Textarea
      id="details"
      placeholder="Any other information you'd like to share..."
      rows={3}
    />
  </div>
  
  <Button type="submit">Submit Feedback</Button>
</form>`,
    component: () => (
      <form className="space-y-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2">
          <Label htmlFor="feedback">Your feedback</Label>
          <Textarea
            id="feedback"
            placeholder="Please share your thoughts..."
            rows={5}
            required
            minLength={10}
          />
          <p className="text-sm text-muted-foreground">
            Minimum 10 characters required
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="details">Additional details (optional)</Label>
          <Textarea
            id="details"
            placeholder="Any other information you'd like to share..."
            rows={3}
          />
        </div>
        
        <Button type="submit">Submit Feedback</Button>
      </form>
    )
  },
  {
    title: "Auto-resize Example",
    description: "Textarea that grows with content (using custom implementation).",
    code: `const [value, setValue] = useState("")
const [rows, setRows] = useState(3)

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setValue(e.target.value)
  // Calculate rows based on line breaks
  const lineCount = e.target.value.split('\\n').length
  setRows(Math.max(3, Math.min(lineCount, 10))) // Min 3, max 10 rows
}

return (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="auto-resize">Auto-resizing textarea</Label>
    <Textarea
      id="auto-resize"
      placeholder="Type multiple lines to see auto-resize..."
      value={value}
      onChange={handleChange}
      rows={rows}
    />
    <p className="text-sm text-muted-foreground">
      This textarea expands as you type (max 10 rows)
    </p>
  </div>
)`,
    component: () => {
      const [value, setValue] = useState("")
      const [rows, setRows] = useState(3)

      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
        const lineCount = e.target.value.split('\n').length
        setRows(Math.max(3, Math.min(lineCount, 10)))
      }

      return (
        <div className="grid w-full gap-1.5">
          <Label htmlFor="auto-resize">Auto-resizing textarea</Label>
          <Textarea
            id="auto-resize"
            placeholder="Type multiple lines to see auto-resize..."
            value={value}
            onChange={handleChange}
            rows={rows}
          />
          <p className="text-sm text-muted-foreground">
            This textarea expands as you type (max 10 rows)
          </p>
        </div>
      )
    }
  },
  {
    title: "With Error State",
    description: "Textarea with validation and error styling.",
    code: `const [message, setMessage] = useState("")
const [error, setError] = useState("")

const validateMessage = (value: string) => {
  if (value.length < 10) {
    setError("Message must be at least 10 characters long")
  } else if (value.length > 500) {
    setError("Message must not exceed 500 characters")
  } else {
    setError("")
  }
}

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const value = e.target.value
  setMessage(value)
  validateMessage(value)
}

return (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="validated">Message</Label>
    <Textarea
      id="validated"
      placeholder="Enter your message (10-500 characters)"
      value={message}
      onChange={handleChange}
      className={error ? "border-red-500 focus:border-red-500" : ""}
    />
    {error && (
      <p className="text-sm text-red-500">{error}</p>
    )}
    <p className="text-sm text-muted-foreground">
      {message.length}/500 characters
    </p>
  </div>
)`,
    component: () => {
      const [message, setMessage] = useState("")
      const [error, setError] = useState("")

      const validateMessage = (value: string) => {
        if (value.length < 10 && value.length > 0) {
          setError("Message must be at least 10 characters long")
        } else if (value.length > 500) {
          setError("Message must not exceed 500 characters")
        } else {
          setError("")
        }
      }

      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        setMessage(value)
        validateMessage(value)
      }

      return (
        <div className="grid w-full gap-1.5">
          <Label htmlFor="validated">Message</Label>
          <Textarea
            id="validated"
            placeholder="Enter your message (10-500 characters)"
            value={message}
            onChange={handleChange}
            className={error ? "border-red-500 focus:border-red-500" : ""}
          />
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <p className="text-sm text-muted-foreground">
            {message.length}/500 characters
          </p>
        </div>
      )
    }
  },
  {
    title: "Read-only Textarea",
    description: "Textarea in read-only mode for displaying content.",
    code: `<div className="space-y-4">
  <div className="grid w-full gap-1.5">
    <Label htmlFor="readonly">Terms and Conditions</Label>
    <Textarea
      id="readonly"
      readOnly
      rows={6}
      defaultValue="By using our service, you agree to our terms and conditions. This is a read-only textarea that displays important information that users can read but not modify.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  </div>
  
  <div className="grid w-full gap-1.5">
    <Label htmlFor="code-snippet">Code Snippet</Label>
    <Textarea
      id="code-snippet"
      readOnly
      rows={4}
      className="font-mono text-sm"
      defaultValue={'function helloWorld() {\n  console.log("Hello, World!");\n  return true;\n}'}
    />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="readonly">Terms and Conditions</Label>
          <Textarea
            id="readonly"
            readOnly
            rows={6}
            defaultValue="By using our service, you agree to our terms and conditions. This is a read-only textarea that displays important information that users can read but not modify.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        
        <div className="grid w-full gap-1.5">
          <Label htmlFor="code-snippet">Code Snippet</Label>
          <Textarea
            id="code-snippet"
            readOnly
            rows={4}
            className="font-mono text-sm"
            defaultValue={'function helloWorld() {\n  console.log("Hello, World!");\n  return true;\n}'}
          />
        </div>
      </div>
    )
  }
]