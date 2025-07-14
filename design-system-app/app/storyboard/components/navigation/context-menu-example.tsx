"use client"

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuCheckboxItem, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuLabel } from "@/components/ui/context-menu"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { 
  Copy, 
  Download, 
  FileText, 
  Share2, 
  Trash2, 
  Edit, 
  Mail, 
  MessageSquare, 
  User, 
  Settings, 
  Bookmark,
  ChevronRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Terminal,
  Palette
} from "lucide-react"

export function ContextMenuExample() {
  const [bookmarked, setBookmarked] = useState(false)
  const [person, setPerson] = useState("pedro")
  const [showBorders, setShowBorders] = useState(true)
  const [showColors, setShowColors] = useState(false)
  const [view, setView] = useState("grid")

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
        <p className="text-muted-foreground mb-6">
          Right-click triggered menu with position-aware animations and various action items.
        </p>
      </div>

      <PreviewContainer
        title="Basic Context Menu"
        description="Right-click on the area to show the context menu"
        code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy</span>
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <FileText className="mr-2 h-4 w-4" />
      <span>Paste</span>
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Edit className="mr-2 h-4 w-4" />
      <span>Edit</span>
      <ContextMenuShortcut>⌘E</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Share2 className="mr-2 h-4 w-4" />
      <span>Share</span>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Trash2 className="mr-2 h-4 w-4" />
      <span>Delete</span>
      <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        component={
          <div className="flex items-center justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Copy</span>
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Paste</span>
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                  <ContextMenuShortcut>⌘E</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                  <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
      />

      <PreviewContainer
        title="Context Menu with Submenus"
        description="Context menu with nested submenus"
        code={`<ContextMenu>
  <ContextMenuTrigger asChild>
    <Card className="w-[300px] h-[150px] flex items-center justify-center cursor-default">
      <CardContent className="p-0 text-sm text-muted-foreground">
        Right click for options
      </CardContent>
    </Card>
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          Save Page As...
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={bookmarked} onCheckedChange={setBookmarked}>
      <Bookmark className="mr-2 h-4 w-4" />
      <span>Bookmark</span>
      <ContextMenuShortcut>⌘D</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel inset>People</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuRadioItem value="pedro">
        <User className="mr-2 h-4 w-4" />
        Pedro Duarte
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">
        <User className="mr-2 h-4 w-4" />
        Colm Tuite
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
        component={
          <div className="flex items-center justify-center">
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Card className="w-[300px] h-[150px] flex items-center justify-center cursor-default">
                  <CardContent className="p-0 text-sm text-muted-foreground">
                    Right click for options
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked={bookmarked} onCheckedChange={setBookmarked}>
                  <Bookmark className="mr-2 h-4 w-4" />
                  <span>Bookmark</span>
                  <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuLabel inset>People</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuRadioItem value="pedro">
                    <User className="mr-2 h-4 w-4" />
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    <User className="mr-2 h-4 w-4" />
                    Colm Tuite
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
      />

      <PreviewContainer
        title="Editor Context Menu"
        description="Text editor context menu with formatting options"
        code={`<ContextMenu>
  <ContextMenuTrigger asChild>
    <div className="flex h-[200px] w-full max-w-md items-center justify-center rounded-md border bg-card p-6 text-sm">
      <p className="text-center text-muted-foreground">
        Right-click this text editor area for formatting options
      </p>
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Format</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Bold className="mr-2 h-4 w-4" />
      <span>Bold</span>
      <ContextMenuShortcut>⌘B</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Italic className="mr-2 h-4 w-4" />
      <span>Italic</span>
      <ContextMenuShortcut>⌘I</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Underline className="mr-2 h-4 w-4" />
      <span>Underline</span>
      <ContextMenuShortcut>⌘U</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Strikethrough className="mr-2 h-4 w-4" />
      <span>Strikethrough</span>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Palette className="mr-2 h-4 w-4" />
        <span>Theme</span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuRadioGroup value={view} onValueChange={setView}>
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={showBorders} onCheckedChange={setShowBorders}>
      Show Borders
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem checked={showColors} onCheckedChange={setShowColors}>
      Show Colors
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Terminal className="mr-2 h-4 w-4" />
      <span>View Source</span>
      <ContextMenuShortcut>⌘⌥U</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        component={
          <div className="flex items-center justify-center">
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="flex h-[200px] w-full max-w-md items-center justify-center rounded-md border bg-card p-6 text-sm">
                  <p className="text-center text-muted-foreground">
                    Right-click this text editor area for formatting options
                  </p>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>Format</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Bold className="mr-2 h-4 w-4" />
                  <span>Bold</span>
                  <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Italic className="mr-2 h-4 w-4" />
                  <span>Italic</span>
                  <ContextMenuShortcut>⌘I</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Underline className="mr-2 h-4 w-4" />
                  <span>Underline</span>
                  <ContextMenuShortcut>⌘U</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Strikethrough className="mr-2 h-4 w-4" />
                  <span>Strikethrough</span>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Theme</span>
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuRadioGroup value={view} onValueChange={setView}>
                      <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked={showBorders} onCheckedChange={setShowBorders}>
                  Show Borders
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked={showColors} onCheckedChange={setShowColors}>
                  Show Colors
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Terminal className="mr-2 h-4 w-4" />
                  <span>View Source</span>
                  <ContextMenuShortcut>⌘⌥U</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
      />

      <PreviewContainer
        title="Context Menu with Share Options"
        description="Context menu with share submenu and multiple options"
        code={`<ContextMenu>
  <ContextMenuTrigger asChild>
    <Button variant="outline" className="w-[200px]">
      Right click to share
    </Button>
  </ContextMenuTrigger>
  <ContextMenuContent className="w-56">
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy Link</span>
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Download className="mr-2 h-4 w-4" />
      <span>Download</span>
      <ContextMenuShortcut>⌘D</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Share2 className="mr-2 h-4 w-4" />
        <span>Share via</span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          <Mail className="mr-2 h-4 w-4" />
          <span>Email</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Messages</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ChevronRight className="mr-2 h-4 w-4" />
            <span>More</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Twitter</ContextMenuItem>
            <ContextMenuItem>Facebook</ContextMenuItem>
            <ContextMenuItem>LinkedIn</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <ContextMenuShortcut>⌘,</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        component={
          <div className="flex items-center justify-center">
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Button variant="outline" className="w-[200px]">
                  Right click to share
                </Button>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Copy Link</span>
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                  <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share2 className="mr-2 h-4 w-4" />
                    <span>Share via</span>
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        <span>More</span>
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent>
                        <ContextMenuItem>Twitter</ContextMenuItem>
                        <ContextMenuItem>Facebook</ContextMenuItem>
                        <ContextMenuItem>LinkedIn</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <ContextMenuShortcut>⌘,</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
      />
    </section>
  )
}