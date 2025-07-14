"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function TextareaExample() {
  const [textareaValue, setTextareaValue] = useState("")
  const [charCountValue, setCharCountValue] = useState("")
  const [autoResizeValue, setAutoResizeValue] = useState("")
  const [combinedValue, setCombinedValue] = useState("")

  return (
    <PreviewContainer
      title="Textarea"
      description="Multi-line text input with auto-resize and character count features"
      component={
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-textarea">Default Textarea</Label>
            <Textarea
              id="default-textarea"
              placeholder="Type your message here..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="auto-resize-textarea">Auto-resize Textarea</Label>
            <Textarea
              id="auto-resize-textarea"
              placeholder="This textarea will grow as you type..."
              value={autoResizeValue}
              onChange={(e) => setAutoResizeValue(e.target.value)}
              autoResize
              minRows={2}
              maxRows={8}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="character-count-textarea">With Character Count</Label>
            <Textarea
              id="character-count-textarea"
              placeholder="Maximum 280 characters"
              value={charCountValue}
              onChange={(e) => setCharCountValue(e.target.value)}
              maxLength={280}
              showCharacterCount
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="combined-features-textarea">Auto-resize + Character Count</Label>
            <Textarea
              id="combined-features-textarea"
              placeholder="Type to see auto-resize and character count in action..."
              value={combinedValue}
              onChange={(e) => setCombinedValue(e.target.value)}
              autoResize
              minRows={3}
              maxRows={6}
              maxLength={500}
              showCharacterCount
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
            <Textarea
              id="disabled-textarea"
              placeholder="Disabled textarea"
              disabled
              defaultValue="This textarea is disabled and cannot be edited."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fixed-rows-textarea">Fixed Rows Textarea</Label>
            <Textarea
              id="fixed-rows-textarea"
              placeholder="With fixed row count..."
              rows={6}
            />
          </div>
        </div>
      }
      code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-4">
      {/* Basic Textarea */}
      <div className="space-y-2">
        <Label htmlFor="textarea">Default Textarea</Label>
        <Textarea
          id="textarea"
          placeholder="Type your message here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {/* Auto-resize */}
      <div className="space-y-2">
        <Label htmlFor="auto-resize">Auto-resize Textarea</Label>
        <Textarea
          id="auto-resize"
          placeholder="This textarea will grow as you type..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoResize
          minRows={2}
          maxRows={8}
        />
      </div>

      {/* With character count */}
      <div className="space-y-2">
        <Label htmlFor="char-count">With Character Count</Label>
        <Textarea
          id="char-count"
          placeholder="Maximum 280 characters"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={280}
          showCharacterCount
        />
      </div>
    </div>
  )
}`}
    />
  )
}