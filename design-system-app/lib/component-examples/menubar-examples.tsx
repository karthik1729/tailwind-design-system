"use client"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ComponentExample } from "@/lib/component-docs"

export const menubarExamples: ComponentExample[] = [
  {
    title: "Basic Menubar",
    description: "A simple menubar with file and edit menus.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "With Keyboard Shortcuts",
    description: "Menubar items with keyboard shortcut indicators.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled>
        New Incognito Window
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "With Submenus",
    description: "Menubar with nested submenus.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
      <MenubarItem>Always Show Full URLs</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Developer</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>View Source</MenubarItem>
          <MenubarItem>Developer Tools</MenubarItem>
          <MenubarItem>JavaScript Console</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
            <MenubarItem>Always Show Full URLs</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Developer</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>View Source</MenubarItem>
                <MenubarItem>Developer Tools</MenubarItem>
                <MenubarItem>JavaScript Console</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "With Checkbox Items",
    description: "Menubar with checkable menu items.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>
        Status Bar
      </MenubarCheckboxItem>
      <MenubarCheckboxItem>Activity Bar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Panel</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarCheckboxItem>Word Wrap</MenubarCheckboxItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>
              Status Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>Activity Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Panel</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>Word Wrap</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "With Radio Groups",
    description: "Menubar with radio group selection.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarRadioGroup value="comfortable">
        <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
        <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
        <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
      </MenubarRadioGroup>
      <MenubarSeparator />
      <MenubarItem inset>Show Sidebar</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="comfortable">
              <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
              <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
              <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Show Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "Complete Application Menu",
    description: "A full application menubar example.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open... <MenubarShortcut>⌘O</MenubarShortcut>
      </MenubarItem>
      <MenubarSub>
        <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>project-1.txt</MenubarItem>
          <MenubarItem>project-2.txt</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Clear Recent</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>
        Save <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Save As...</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Cut <MenubarShortcut>⌘X</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Copy <MenubarShortcut>⌘C</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Paste <MenubarShortcut>⌘V</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarRadioGroup value="50">
        <MenubarRadioItem value="25">25%</MenubarRadioItem>
        <MenubarRadioItem value="50">50%</MenubarRadioItem>
        <MenubarRadioItem value="75">75%</MenubarRadioItem>
        <MenubarRadioItem value="100">100%</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>project-1.txt</MenubarItem>
                <MenubarItem>project-2.txt</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Clear Recent</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Save As...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="50">
              <MenubarRadioItem value="25">25%</MenubarRadioItem>
              <MenubarRadioItem value="50">50%</MenubarRadioItem>
              <MenubarRadioItem value="75">75%</MenubarRadioItem>
              <MenubarRadioItem value="100">100%</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "Disabled State",
    description: "Menubar with disabled menu items and triggers.",
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Actions</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Run</MenubarItem>
      <MenubarItem disabled>Debug</MenubarItem>
      <MenubarItem>Build</MenubarItem>
      <MenubarSeparator />
      <MenubarItem disabled>Deploy</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger disabled>Disabled</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>This menu is disabled</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Actions</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Run</MenubarItem>
            <MenubarItem disabled>Debug</MenubarItem>
            <MenubarItem>Build</MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>Deploy</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger disabled>Disabled</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>This menu is disabled</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  {
    title: "Custom Styling",
    description: "Menubar with custom styling and icons.",
    code: `<Menubar className="rounded-none border-b border-none">
  <MenubarMenu>
    <MenubarTrigger className="font-bold">Custom</MenubarTrigger>
    <MenubarContent>
      <MenubarItem className="text-green-600">
        Success Action
      </MenubarItem>
      <MenubarItem className="text-yellow-600">
        Warning Action
      </MenubarItem>
      <MenubarItem className="text-red-600">
        Danger Action
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    component: () => (
      <Menubar className="rounded-none border-b border-none">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Custom</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="text-green-600">
              Success Action
            </MenubarItem>
            <MenubarItem className="text-yellow-600">
              Warning Action
            </MenubarItem>
            <MenubarItem className="text-red-600">
              Danger Action
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
]