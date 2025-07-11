"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const paginationExamples: ComponentExample[] = [
  {
    title: "Basic Pagination",
    description: "A simple pagination component.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  {
    title: "With Ellipsis",
    description: "Pagination with ellipsis for many pages.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">67</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">68</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">67</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">68</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  {
    title: "Controlled Pagination",
    description: "Pagination with controlled state using onClick handlers.",
    code: `const [currentPage, setCurrentPage] = useState(1)
const totalPages = 10

return (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
        />
      </PaginationItem>
      {[...Array(Math.min(5, totalPages))].map((_, i) => {
        const pageNumber = i + 1
        return (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => setCurrentPage(pageNumber)}
              isActive={currentPage === pageNumber}
              className="cursor-pointer"
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        )
      })}
      {totalPages > 5 && (
        <>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => setCurrentPage(totalPages)}
              className="cursor-pointer"
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        </>
      )}
      <PaginationItem>
        <PaginationNext
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)`,
    component: () => {
      const [currentPage, setCurrentPage] = useState(1)
      const totalPages = 10

      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNumber = i + 1
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            {totalPages > 5 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(totalPages)}
                    className="cursor-pointer"
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )
    }
  },
  {
    title: "Simple Pagination",
    description: "Minimal pagination with just previous and next buttons.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  {
    title: "Disabled States",
    description: "Pagination with disabled navigation items.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious 
        href="#" 
        className="pointer-events-none opacity-50"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              className="pointer-events-none opacity-50"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  {
    title: "With Page Info",
    description: "Pagination with current page information.",
    code: `const [currentPage, setCurrentPage] = useState(1)
const totalPages = 10
const itemsPerPage = 20
const totalItems = 186

const startItem = (currentPage - 1) * itemsPerPage + 1
const endItem = Math.min(currentPage * itemsPerPage, totalItems)

return (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Showing {startItem} to {endItem} of {totalItems} results
    </p>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(1)}
            isActive={currentPage === 1}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(2)}
            isActive={currentPage === 2}
            className="cursor-pointer"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(3)}
            isActive={currentPage === 3}
            className="cursor-pointer"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
)`,
    component: () => {
      const [currentPage, setCurrentPage] = useState(1)
      const totalPages = 10
      const itemsPerPage = 20
      const totalItems = 186

      const startItem = (currentPage - 1) * itemsPerPage + 1
      const endItem = Math.min(currentPage * itemsPerPage, totalItems)

      return (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Showing {startItem} to {endItem} of {totalItems} results
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(1)}
                  isActive={currentPage === 1}
                  className="cursor-pointer"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(2)}
                  isActive={currentPage === 2}
                  className="cursor-pointer"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(3)}
                  isActive={currentPage === 3}
                  className="cursor-pointer"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )
    }
  },
  {
    title: "Custom Styling",
    description: "Pagination with custom styling.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious 
        href="#"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#"
        className="border-2 border-primary"
      >
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        isActive
        className="bg-primary text-primary-foreground"
      >
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#"
        className="border-2 border-primary"
      >
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext 
        href="#"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#"
              className="border-2 border-primary"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#" 
              isActive
              className="bg-primary text-primary-foreground"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#"
              className="border-2 border-primary"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              href="#"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  {
    title: "Mobile Friendly",
    description: "Responsive pagination that shows fewer pages on mobile.",
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem className="hidden sm:inline-flex">
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="hidden sm:inline-flex">
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem className="inline-flex sm:hidden">
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    component: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="hidden sm:inline-flex">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="hidden sm:inline-flex">
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem className="inline-flex sm:hidden">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
]