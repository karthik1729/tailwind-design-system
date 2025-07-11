"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  MoreHorizontal,
  ChevronDown,
  Copy,
  Clipboard,
  Scissors,
  Download,
  Share2,
  Trash2,
  Edit,
  Archive,
  Move,
  ChevronRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react"

export const dropdownMenuExamples: ComponentExample[] = [
  {
    title: "Basic Dropdown Menu",
    description: "A simple dropdown menu with various actions.",
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCard className="mr-2 h-4 w-4" />
      <span>Billing</span>
      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Keyboard className="mr-2 h-4 w-4" />
      <span>Keyboard shortcuts</span>
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Github className="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <LifeBuoy className="mr-2 h-4 w-4" />
      <span>Support</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Cloud className="mr-2 h-4 w-4" />
      <span>API</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    component: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  {
    title: "With Checkboxes",
    description: "Dropdown menu with checkbox items for toggling options.",
    code: `const [showStatusBar, setShowStatusBar] = useState(true)
const [showActivityBar, setShowActivityBar] = useState(false)
const [showPanel, setShowPanel] = useState(false)

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">View Options</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={showStatusBar}
        onCheckedChange={setShowStatusBar}
      >
        Status Bar
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={showActivityBar}
        onCheckedChange={setShowActivityBar}
      >
        Activity Bar
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={showPanel}
        onCheckedChange={setShowPanel}
      >
        Panel
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
)`,
    component: () => {
      const [showStatusBar, setShowStatusBar] = useState(true)
      const [showActivityBar, setShowActivityBar] = useState(false)
      const [showPanel, setShowPanel] = useState(false)

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    title: "With Radio Group",
    description: "Dropdown menu with radio items for selecting one option.",
    code: `const [position, setPosition] = useState("bottom")

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Select Position</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)`,
    component: () => {
      const [position, setPosition] = useState("bottom")

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Select Position</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    title: "With Submenus",
    description: "Dropdown menu with nested submenus.",
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">File Operations</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuItem>
      <Plus className="mr-2 h-4 w-4" />
      <span>New Tab</span>
      <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <PlusCircle className="mr-2 h-4 w-4" />
      <span>New Window</span>
      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Archive className="mr-2 h-4 w-4" />
      <span>New Incognito Window</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <UserPlus className="mr-2 h-4 w-4" />
        <span>Invite users</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" />
          <span>Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Message</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusCircle className="mr-2 h-4 w-4" />
          <span>More...</span>
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Share2 className="mr-2 h-4 w-4" />
        <span>Share</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy link</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" />
          <span>Email link</span>
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Download className="mr-2 h-4 w-4" />
      <span>Download</span>
      <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    component: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">File Operations</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Tab</span>
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Window</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Archive className="mr-2 h-4 w-4" />
            <span>New Incognito Window</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Share2 className="mr-2 h-4 w-4" />
              <span>Share</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                <span>Copy link</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email link</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  {
    title: "Icon Button Trigger",
    description: "Dropdown menu triggered by an icon button.",
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">Open menu</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Edit className="mr-2 h-4 w-4" />
      <span>Edit</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Move className="mr-2 h-4 w-4" />
      <span>Move</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">
      <Trash2 className="mr-2 h-4 w-4" />
      <span>Delete</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    component: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Move className="mr-2 h-4 w-4" />
            <span>Move</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  {
    title: "Text Formatting Menu",
    description: "Dropdown menu for text formatting options.",
    code: `const [bold, setBold] = useState(false)
const [italic, setItalic] = useState(false)
const [underline, setUnderline] = useState(false)
const [strikethrough, setStrikethrough] = useState(false)
const [align, setAlign] = useState("left")

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Format
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Text Style</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={bold}
        onCheckedChange={setBold}
      >
        <Bold className="mr-2 h-4 w-4" />
        Bold
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={italic}
        onCheckedChange={setItalic}
      >
        <Italic className="mr-2 h-4 w-4" />
        Italic
        <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={underline}
        onCheckedChange={setUnderline}
      >
        <Underline className="mr-2 h-4 w-4" />
        Underline
        <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={strikethrough}
        onCheckedChange={setStrikethrough}
      >
        <Strikethrough className="mr-2 h-4 w-4" />
        Strikethrough
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Text Align</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={align} onValueChange={setAlign}>
        <DropdownMenuRadioItem value="left">
          <AlignLeft className="mr-2 h-4 w-4" />
          Left
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="center">
          <AlignCenter className="mr-2 h-4 w-4" />
          Center
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">
          <AlignRight className="mr-2 h-4 w-4" />
          Right
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="justify">
          <AlignJustify className="mr-2 h-4 w-4" />
          Justify
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)`,
    component: () => {
      const [bold, setBold] = useState(false)
      const [italic, setItalic] = useState(false)
      const [underline, setUnderline] = useState(false)
      const [strikethrough, setStrikethrough] = useState(false)
      const [align, setAlign] = useState("left")

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Format
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Text Style</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={bold}
              onCheckedChange={setBold}
            >
              <Bold className="mr-2 h-4 w-4" />
              Bold
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={italic}
              onCheckedChange={setItalic}
            >
              <Italic className="mr-2 h-4 w-4" />
              Italic
              <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={underline}
              onCheckedChange={setUnderline}
            >
              <Underline className="mr-2 h-4 w-4" />
              Underline
              <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={strikethrough}
              onCheckedChange={setStrikethrough}
            >
              <Strikethrough className="mr-2 h-4 w-4" />
              Strikethrough
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Text Align</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={align} onValueChange={setAlign}>
              <DropdownMenuRadioItem value="left">
                <AlignLeft className="mr-2 h-4 w-4" />
                Left
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="center">
                <AlignCenter className="mr-2 h-4 w-4" />
                Center
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
                <AlignRight className="mr-2 h-4 w-4" />
                Right
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="justify">
                <AlignJustify className="mr-2 h-4 w-4" />
                Justify
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    title: "Team Switcher",
    description: "Dropdown menu for switching between teams.",
    code: `const [selectedTeam, setSelectedTeam] = useState("personal")

const teams = [
  { value: "personal", label: "Personal Account", icon: User },
  { value: "team-1", label: "Acme Inc.", icon: Users },
  { value: "team-2", label: "Monsters Corp.", icon: Users },
]

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="w-[200px] justify-between">
        {teams.find(team => team.value === selectedTeam)?.label}
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[200px]">
      <DropdownMenuLabel>Switch Team</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup 
        value={selectedTeam} 
        onValueChange={setSelectedTeam}
      >
        {teams.map((team) => (
          <DropdownMenuRadioItem 
            key={team.value} 
            value={team.value}
          >
            <team.icon className="mr-2 h-4 w-4" />
            {team.label}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Team
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)`,
    component: () => {
      const [selectedTeam, setSelectedTeam] = useState("personal")

      const teams = [
        { value: "personal", label: "Personal Account", icon: User },
        { value: "team-1", label: "Acme Inc.", icon: Users },
        { value: "team-2", label: "Monsters Corp.", icon: Users },
      ]

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between">
              {teams.find(team => team.value === selectedTeam)?.label}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuLabel>Switch Team</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup 
              value={selectedTeam} 
              onValueChange={setSelectedTeam}
            >
              {teams.map((team) => (
                <DropdownMenuRadioItem 
                  key={team.value} 
                  value={team.value}
                >
                  <team.icon className="mr-2 h-4 w-4" />
                  {team.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Team
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    title: "Complex Nested Menu",
    description: "Dropdown menu with multiple levels of nested submenus.",
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Edit Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuItem>
      <Scissors className="mr-2 h-4 w-4" />
      <span>Cut</span>
      <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      <span>Copy</span>
      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Clipboard className="mr-2 h-4 w-4" />
      <span>Paste</span>
      <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Move className="mr-2 h-4 w-4" />
        <span>Move to</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>
          <Archive className="mr-2 h-4 w-4" />
          <span>Archive</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Trash</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ChevronRight className="mr-2 h-4 w-4" />
            <span>More Locations</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Folder 1</DropdownMenuItem>
            <DropdownMenuItem>Folder 2</DropdownMenuItem>
            <DropdownMenuItem>Folder 3</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Preferences</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    component: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Edit Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Scissors className="mr-2 h-4 w-4" />
            <span>Cut</span>
            <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clipboard className="mr-2 h-4 w-4" />
            <span>Paste</span>
            <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Move className="mr-2 h-4 w-4" />
              <span>Move to</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Archive className="mr-2 h-4 w-4" />
                <span>Archive</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Trash</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <ChevronRight className="mr-2 h-4 w-4" />
                  <span>More Locations</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Folder 1</DropdownMenuItem>
                  <DropdownMenuItem>Folder 2</DropdownMenuItem>
                  <DropdownMenuItem>Folder 3</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Preferences</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  {
    title: "Fixed Width Dropdown",
    description: "Dropdown with fixed width to prevent resizing when selection changes.",
    code: `const [selectedOption, setSelectedOption] = useState("option1")

const options = [
  { value: "option1", label: "Short" },
  { value: "option2", label: "Medium Length Option" },
  { value: "option3", label: "Very Long Option That Could Resize" },
]

return (
  <div className="space-y-4">
    {/* Good: Fixed width prevents resizing */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[250px] justify-between">
          <span className="truncate">
            {options.find(opt => opt.value === selectedOption)?.label}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
        <DropdownMenuLabel>Select Option</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup 
          value={selectedOption} 
          onValueChange={setSelectedOption}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    {/* Alternative: Min-width for flexibility */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[200px] max-w-[300px] justify-between">
          <span className="truncate">
            {options.find(opt => opt.value === selectedOption)?.label}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px] max-w-[300px]">
        <DropdownMenuRadioGroup 
          value={selectedOption} 
          onValueChange={setSelectedOption}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)`,
    component: () => {
      const [selectedOption, setSelectedOption] = useState("option1")

      const options = [
        { value: "option1", label: "Short" },
        { value: "option2", label: "Medium Length Option" },
        { value: "option3", label: "Very Long Option That Could Resize" },
      ]

      return (
        <div className="space-y-4">
          {/* Good: Fixed width prevents resizing */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[250px] justify-between">
                <span className="truncate">
                  {options.find(opt => opt.value === selectedOption)?.label}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px]">
              <DropdownMenuLabel>Select Option</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup 
                value={selectedOption} 
                onValueChange={setSelectedOption}
              >
                {options.map((option) => (
                  <DropdownMenuRadioItem 
                    key={option.value} 
                    value={option.value}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Alternative: Min-width for flexibility */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[200px] max-w-[300px] justify-between">
                <span className="truncate">
                  {options.find(opt => opt.value === selectedOption)?.label}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[200px] max-w-[300px]">
              <DropdownMenuRadioGroup 
                value={selectedOption} 
                onValueChange={setSelectedOption}
              >
                {options.map((option) => (
                  <DropdownMenuRadioItem 
                    key={option.value} 
                    value={option.value}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  },
  {
    title: "Enhanced Trigger Animations",
    description: "Dropdown with enhanced trigger animations and micro-interactions.",
    code: `<div className="flex gap-4 items-center">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="default">
        Options
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Duplicate
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Archive className="mr-2 h-4 w-4" />
        Archive
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem>
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Download className="mr-2 h-4 w-4" />
        Download
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Remove
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  <DropdownMenu>
    <DropdownMenuTrigger className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
      Custom Trigger
      <ChevronDown className="h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
      <DropdownMenuItem>Option 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`,
    component: () => (
      <div className="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              Options
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Archive className="mr-2 h-4 w-4" />
              Archive
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Custom Trigger
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
]