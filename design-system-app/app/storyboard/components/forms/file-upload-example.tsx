"use client"

import { useState } from "react"
import { FileUpload } from "@/components/ui/file-upload"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function FileUploadExample() {
  const [basicFiles, setBasicFiles] = useState<FileList | null>(null)
  const [imageFiles, setImageFiles] = useState<FileList | null>(null)
  const [multipleFiles, setMultipleFiles] = useState<FileList | null>(null)
  const [documentFiles, setDocumentFiles] = useState<FileList | null>(null)

  const basicExample = `<FileUpload
  placeholder="Drop files here or click to browse"
  onFileSelect={(files) => console.log(files)}
/>`

  const imageExample = `<FileUpload
  accept="image/*"
  placeholder="Drop images here or click to browse"
  maxSize={5}
  onFileSelect={(files) => console.log(files)}
/>`

  const multipleExample = `<FileUpload
  multiple
  placeholder="Drop multiple files here or click to browse"
  onFileSelect={(files) => console.log(files)}
/>`

  const documentExample = `<FileUpload
  accept=".pdf,.doc,.docx,.txt"
  placeholder="Drop documents here or click to browse"
  maxSize={10}
  size="lg"
  onFileSelect={(files) => console.log(files)}
/>`

  const sizeExample = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <FileUpload
    size="sm"
    placeholder="Small upload"
    onFileSelect={(files) => console.log(files)}
  />
  <FileUpload
    size="default"
    placeholder="Default upload"
    onFileSelect={(files) => console.log(files)}
  />
  <FileUpload
    size="lg"
    placeholder="Large upload"
    onFileSelect={(files) => console.log(files)}
  />
</div>`

  const stateExample = `<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <FileUpload
    state="success"
    placeholder="Success state"
    onFileSelect={(files) => console.log(files)}
  />
  <FileUpload
    state="error"
    placeholder="Error state"
    onFileSelect={(files) => console.log(files)}
  />
</div>`

  const disabledExample = `<FileUpload
  disabled
  placeholder="Disabled upload"
  onFileSelect={(files) => console.log(files)}
/>`

  return (
    <div className="space-y-12">
      <PreviewContainer
        title="Basic File Upload"
        description="Simple file upload with drag and drop support. Features smooth animations when dragging files over the drop zone."
        component={
          <div className="space-y-2 w-full max-w-md">
            <Label>Upload File</Label>
            <FileUpload
              placeholder="Drop files here or click to browse"
              onFileSelect={setBasicFiles}
              value={basicFiles}
            />
          </div>
        }
        code={basicExample}
      />

      <PreviewContainer
        title="Image Upload"
        description="File upload restricted to images with size validation. Shows visual feedback during drag operations."
        component={
          <div className="space-y-2 w-full max-w-md">
            <Label>Upload Images</Label>
            <FileUpload
              accept="image/*"
              placeholder="Drop images here or click to browse"
              maxSize={5}
              onFileSelect={setImageFiles}
              value={imageFiles}
            />
          </div>
        }
        code={imageExample}
      />

      <PreviewContainer
        title="Multiple Files"
        description="Upload multiple files at once. Drag multiple files to see the enhanced drag state animations."
        component={
          <div className="space-y-2 w-full max-w-md">
            <Label>Upload Multiple Files</Label>
            <FileUpload
              multiple
              placeholder="Drop multiple files here or click to browse"
              onFileSelect={setMultipleFiles}
              value={multipleFiles}
            />
          </div>
        }
        code={multipleExample}
      />

      <PreviewContainer
        title="Document Upload"
        description="Large upload area for documents with specific file type restrictions and higher size limits."
        component={
          <div className="space-y-2 w-full max-w-md">
            <Label>Upload Documents</Label>
            <FileUpload
              accept=".pdf,.doc,.docx,.txt"
              placeholder="Drop documents here or click to browse"
              maxSize={10}
              size="lg"
              onFileSelect={setDocumentFiles}
              value={documentFiles}
            />
          </div>
        }
        code={documentExample}
      />

      <PreviewContainer
        title="Size Variants"
        description="Different sizes for various use cases. All sizes maintain the same smooth drag interactions."
        component={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Small</Label>
              <FileUpload
                size="sm"
                placeholder="Small upload"
                onFileSelect={(files) => console.log("Small:", files)}
              />
            </div>
            <div className="space-y-2">
              <Label>Default</Label>
              <FileUpload
                size="default"
                placeholder="Default upload"
                onFileSelect={(files) => console.log("Default:", files)}
              />
            </div>
            <div className="space-y-2">
              <Label>Large</Label>
              <FileUpload
                size="lg"
                placeholder="Large upload"
                onFileSelect={(files) => console.log("Large:", files)}
              />
            </div>
          </div>
        }
        code={sizeExample}
      />

      <PreviewContainer
        title="State Variants"
        description="Visual states for success and error conditions. States override drag animations when active."
        component={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Success State</Label>
              <FileUpload
                state="success"
                placeholder="Success state"
                onFileSelect={(files) => console.log("Success:", files)}
              />
            </div>
            <div className="space-y-2">
              <Label>Error State</Label>
              <FileUpload
                state="error"
                placeholder="Error state"
                onFileSelect={(files) => console.log("Error:", files)}
              />
            </div>
          </div>
        }
        code={stateExample}
      />

      <PreviewContainer
        title="Disabled State"
        description="Disabled upload with reduced opacity and no interaction capabilities."
        component={
          <div className="space-y-2 w-full max-w-md">
            <Label>Disabled Upload</Label>
            <FileUpload
              disabled
              placeholder="Disabled upload"
              onFileSelect={(files) => console.log("Disabled:", files)}
            />
          </div>
        }
        code={disabledExample}
      />
    </div>
  )
}