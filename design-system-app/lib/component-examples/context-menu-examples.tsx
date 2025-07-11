"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import {
  Copy,
  Clipboard,
  Scissors,
  Trash2,
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  Download,
  Share,
  Star,
  Archive,
  Move,
  Plus,
  ChevronRight,
  Mail,
  MessageSquare,
} from "lucide-react"

export const contextMenuExamples: ComponentExample[] = [
  {
    title: "Basic Context Menu",
    description: "A simple context menu with basic actions.",
    code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <Undo className="mr-2 h-4 w-4" />
      <span>Undo</span>
      <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Redo className="mr-2 h-4 w-4" />
      <span>Redo</span>
      <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy</span>
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Clipboard className="mr-2 h-4 w-4" />
      <span>Paste</span>
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Scissors className="mr-2 h-4 w-4" />
      <span>Cut</span>
      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    component: () => (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Undo className="mr-2 h-4 w-4" />
            <span>Undo</span>
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Redo className="mr-2 h-4 w-4" />
            <span>Redo</span>
            <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Paste className="mr-2 h-4 w-4" />
            <span>Paste</span>
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Scissors className="mr-2 h-4 w-4" />
            <span>Cut</span>
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  {
    title: "With Submenus",
    description: "Context menu with nested submenus.",
    code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click for more options
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <Plus className="mr-2 h-4 w-4" />
      <span>New File</span>
      <ContextMenuShortcut>⌘N</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Share className="mr-2 h-4 w-4" />
        <span>Share</span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          <Mail className="mr-2 h-4 w-4" />
          <span>Email</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Message</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>More...</span>
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Move className="mr-2 h-4 w-4" />
        <span>Move to</span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Archive</ContextMenuItem>
        <ContextMenuItem>Trash</ContextMenuItem>
        <ContextMenuItem>Downloads</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Download className="mr-2 h-4 w-4" />
      <span>Download</span>
      <ContextMenuShortcut>⌘D</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Trash2 className="mr-2 h-4 w-4" />
      <span>Delete</span>
      <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    component: () => (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for more options
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New File</span>
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              <span>Share</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>More...</span>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Move className="mr-2 h-4 w-4" />
              <span>Move to</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Archive</ContextMenuItem>
              <ContextMenuItem>Trash</ContextMenuItem>
              <ContextMenuItem>Downloads</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download</span>
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  {
    title: "With Radio Group",
    description: "Context menu with radio selection options.",
    code: `const [fontSize, setFontSize] = useState("medium")

return (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click to change font size
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuLabel>Font Size</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuRadioGroup value={fontSize} onValueChange={setFontSize}>
        <ContextMenuRadioItem value="small">
          Small
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value="medium">
          Medium
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value="large">
          Large
        </ContextMenuRadioItem>
      </ContextMenuRadioGroup>
      <ContextMenuSeparator />
      <ContextMenuItem>Reset to Default</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)`,
    component: () => {
      const [fontSize, setFontSize] = useState("medium")

      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click to change font size
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuLabel>Font Size</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={fontSize} onValueChange={setFontSize}>
              <ContextMenuRadioItem value="small">
                Small
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">
                Medium
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="large">
                Large
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuItem>Reset to Default</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    }
  },
  {
    title: "With Checkbox Items",
    description: "Context menu with checkable items.",
    code: `const [showBookmarks, setShowBookmarks] = useState(true)
const [showHistory, setShowHistory] = useState(false)
const [showDownloads, setShowDownloads] = useState(false)

return (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click to toggle panels
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuLabel>Show Panels</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem
        checked={showBookmarks}
        onCheckedChange={setShowBookmarks}
      >
        <Star className="mr-2 h-4 w-4" />
        Bookmarks Bar
        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={showHistory}
        onCheckedChange={setShowHistory}
      >
        <Archive className="mr-2 h-4 w-4" />
        History Panel
        <ContextMenuShortcut>⌘Y</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={showDownloads}
        onCheckedChange={setShowDownloads}
      >
        <Download className="mr-2 h-4 w-4" />
        Downloads
        <ContextMenuShortcut>⌘⇧J</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
    </ContextMenuContent>
  </ContextMenu>
)`,
    component: () => {
      const [showBookmarks, setShowBookmarks] = useState(true)
      const [showHistory, setShowHistory] = useState(false)
      const [showDownloads, setShowDownloads] = useState(false)

      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click to toggle panels
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuLabel>Show Panels</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              <Star className="mr-2 h-4 w-4" />
              Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showHistory}
              onCheckedChange={setShowHistory}
            >
              <Archive className="mr-2 h-4 w-4" />
              History Panel
              <ContextMenuShortcut>⌘Y</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showDownloads}
              onCheckedChange={setShowDownloads}
            >
              <Download className="mr-2 h-4 w-4" />
              Downloads
              <ContextMenuShortcut>⌘⇧J</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    }
  },
  {
    title: "Text Formatting Menu",
    description: "Context menu for text formatting options.",
    code: `const [bold, setBold] = useState(false)
const [italic, setItalic] = useState(false)
const [underline, setUnderline] = useState(false)

return (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click for text formatting
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuLabel>Text Formatting</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem
        checked={bold}
        onCheckedChange={setBold}
      >
        <Bold className="mr-2 h-4 w-4" />
        Bold
        <ContextMenuShortcut>⌘B</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={italic}
        onCheckedChange={setItalic}
      >
        <Italic className="mr-2 h-4 w-4" />
        Italic
        <ContextMenuShortcut>⌘I</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={underline}
        onCheckedChange={setUnderline}
      >
        <Underline className="mr-2 h-4 w-4" />
        Underline
        <ContextMenuShortcut>⌘U</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Clear Formatting</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)`,
    component: () => {
      const [bold, setBold] = useState(false)
      const [italic, setItalic] = useState(false)
      const [underline, setUnderline] = useState(false)

      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click for text formatting
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuLabel>Text Formatting</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={bold}
              onCheckedChange={setBold}
            >
              <Bold className="mr-2 h-4 w-4" />
              Bold
              <ContextMenuShortcut>⌘B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={italic}
              onCheckedChange={setItalic}
            >
              <Italic className="mr-2 h-4 w-4" />
              Italic
              <ContextMenuShortcut>⌘I</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={underline}
              onCheckedChange={setUnderline}
            >
              <Underline className="mr-2 h-4 w-4" />
              Underline
              <ContextMenuShortcut>⌘U</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Clear Formatting</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    }
  },
  {
    title: "Disabled Items",
    description: "Context menu with some disabled items.",
    code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click to see disabled items
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy</span>
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      <Clipboard className="mr-2 h-4 w-4" />
      <span>Paste</span>
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger disabled>
        <Share className="mr-2 h-4 w-4" />
        <span>Share</span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Email</ContextMenuItem>
        <ContextMenuItem>Message</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Undo className="mr-2 h-4 w-4" />
      <span>Undo</span>
      <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      <Redo className="mr-2 h-4 w-4" />
      <span>Redo</span>
      <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    component: () => (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click to see disabled items
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            <Paste className="mr-2 h-4 w-4" />
            <span>Paste</span>
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger disabled>
              <Share className="mr-2 h-4 w-4" />
              <span>Share</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Email</ContextMenuItem>
              <ContextMenuItem>Message</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Undo className="mr-2 h-4 w-4" />
            <span>Undo</span>
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            <Redo className="mr-2 h-4 w-4" />
            <span>Redo</span>
            <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  {
    title: "With Inset Items",
    description: "Context menu with inset items for alignment.",
    code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click for inset example
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Save Page As...
      <ContextMenuShortcut>⌘S</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      Copy Link
    </ContextMenuItem>
    <ContextMenuItem inset>
      Open Link
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    component: () => (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for inset example
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Save Page As...
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy Link
          </ContextMenuItem>
          <ContextMenuItem inset>
            Open Link
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  {
    title: "Complex Nested Menu",
    description: "Context menu with multiple levels of nested submenus.",
    code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click for complex menu
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuLabel>Application</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Plus className="mr-2 h-4 w-4" />
        New
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Document</ContextMenuItem>
        <ContextMenuItem>Spreadsheet</ContextMenuItem>
        <ContextMenuItem>Presentation</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ChevronRight className="mr-2 h-4 w-4" />
            More
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Form</ContextMenuItem>
            <ContextMenuItem>Drawing</ContextMenuItem>
            <ContextMenuItem>Script</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuItem>
      <Star className="mr-2 h-4 w-4" />
      Add to Favorites
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>Organization</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Move className="mr-2 h-4 w-4" />
      Move to Folder
    </ContextMenuItem>
    <ContextMenuItem>
      <Archive className="mr-2 h-4 w-4" />
      Archive
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    component: () => (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for complex menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Application</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Plus className="mr-2 h-4 w-4" />
              New
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Document</ContextMenuItem>
              <ContextMenuItem>Spreadsheet</ContextMenuItem>
              <ContextMenuItem>Presentation</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <ChevronRight className="mr-2 h-4 w-4" />
                  More
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Form</ContextMenuItem>
                  <ContextMenuItem>Drawing</ContextMenuItem>
                  <ContextMenuItem>Script</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <Star className="mr-2 h-4 w-4" />
            Add to Favorites
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Organization</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Move className="mr-2 h-4 w-4" />
            Move to Folder
          </ContextMenuItem>
          <ContextMenuItem>
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  }
]