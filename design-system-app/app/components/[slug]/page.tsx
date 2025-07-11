import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { componentDocs } from "@/lib/component-docs"
import { ComponentExamples } from "./component-examples"
import { cn } from "@/lib/utils"

interface ComponentPageProps {
  params: { slug: string }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await Promise.resolve(params)
  const doc = componentDocs[slug]

  if (!doc) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
      {/* Header - No border, just spacing */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{doc.name}</h1>
        <p className="text-lg text-muted-foreground">{doc.description}</p>
      </div>
      
      {/* Main Content */}
      <div className="space-y-12">
        {/* Tabs Section */}
        <Tabs defaultValue="preview" className="space-y-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-8 mt-6">
            <ComponentExamples slug={slug} />
          </TabsContent>

          {/* Props Tab */}
          <TabsContent value="props" className="mt-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Component Props</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  All available props for the {doc.name} component
                </p>
              </div>
              <div className="bg-card rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-none hover:bg-transparent">
                      <TableHead className="font-medium">Prop</TableHead>
                      <TableHead className="font-medium">Type</TableHead>
                      <TableHead className="font-medium">Default</TableHead>
                      <TableHead className="font-medium">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doc.props.map((prop, index) => (
                      <TableRow 
                        key={prop.name} 
                        className={cn(
                          "border-none",
                          index % 2 === 0 ? "bg-background" : "bg-muted/20"
                        )}
                      >
                        <TableCell className="font-mono text-sm font-medium">
                          {prop.name}
                          {prop.required && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              Required
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-xs text-muted-foreground">
                          {prop.type}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground">
                          {prop.default || "—"}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {prop.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Installation Section - Using background instead of card border */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Installation</h2>
          <div className="bg-muted/50 rounded-lg p-6">
            <pre className="overflow-x-auto" tabIndex={-1}>
              <code className="text-sm font-mono">{`import { ${doc.name} } from "@/components/ui/${slug}"`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}