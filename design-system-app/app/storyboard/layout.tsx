import { LayoutWrapper } from "@/components/storyboard/layout-wrapper"

export default function StoryboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}