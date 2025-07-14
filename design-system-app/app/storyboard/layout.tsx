import { LayoutWrapper } from "@/components/storyboard/layout-wrapper"
import { getTheme } from '@/lib/theme-cookie'

export default function StoryboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = getTheme()
  
  return <LayoutWrapper currentTheme={theme}>{children}</LayoutWrapper>
}