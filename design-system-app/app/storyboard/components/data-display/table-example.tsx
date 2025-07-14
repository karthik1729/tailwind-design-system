"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const invoices = [
  {
    id: "INV001",
    customer: "Alice Johnson",
    email: "alice@example.com",
    amount: 1250.00,
    status: "paid",
    date: "2024-01-15",
  },
  {
    id: "INV002",
    customer: "Bob Smith",
    email: "bob@example.com",
    amount: 750.50,
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "INV003",
    customer: "Charlie Brown",
    email: "charlie@example.com",
    amount: 2150.75,
    status: "overdue",
    date: "2024-01-10",
  },
  {
    id: "INV004",
    customer: "Diana Ross",
    email: "diana@example.com",
    amount: 450.00,
    status: "paid",
    date: "2024-01-12",
  },
  {
    id: "INV005",
    customer: "Edward Norton",
    email: "edward@example.com",
    amount: 3200.00,
    status: "pending",
    date: "2024-01-11",
  },
]

export function TableExample() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedInvoices = [...invoices].sort((a, b) => {
    if (!sortConfig) return 0
    
    const aValue = a[sortConfig.key as keyof typeof a]
    const bValue = b[sortConfig.key as keyof typeof b]
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const toggleRow = (id: string) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedRows(prev =>
      prev.length === invoices.length ? [] : invoices.map(inv => inv.id)
    )
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      paid: { variant: "success" as const, label: "Paid" },
      pending: { variant: "warning" as const, label: "Pending" },
      overdue: { variant: "destructive" as const, label: "Overdue" },
    }
    
    const config = variants[status as keyof typeof variants] || variants.pending
    
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Table</h2>
        <p className="text-muted-foreground mb-6">
          A responsive table component with hover states, selection feedback, and sorting capabilities.
        </p>
      </div>

      {/* Basic Table with Hover States */}
      <PreviewContainer
        title="Basic Table with Hover States"
        description="Simple table with enhanced row hover effects"
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell className="font-medium">{invoice.id}</TableCell>
        <TableCell>{invoice.customer}</TableCell>
        <TableCell>$\{invoice.amount.toFixed(2)}</TableCell>
        <TableCell>
          <Badge variant={
            invoice.status === 'paid' ? 'success' : 
            invoice.status === 'pending' ? 'warning' : 
            'destructive'
          }>
            {invoice.status}
          </Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        component={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 3).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      />

      {/* Table with Selection */}
      <PreviewContainer
        title="Table with Selection"
        description="Table with checkbox selection and visual feedback"
        code={`const [selectedRows, setSelectedRows] = useState<string[]>([])

const toggleRow = (id: string) => {
  setSelectedRows(prev =>
    prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
  )
}

const toggleAll = () => {
  setSelectedRows(prev =>
    prev.length === invoices.length ? [] : invoices.map(inv => inv.id)
  )
}

return (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[50px]">
          <Checkbox
            checked={selectedRows.length === invoices.length}
            onCheckedChange={toggleAll}
          />
        </TableHead>
        <TableHead>Invoice</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow 
          key={invoice.id}
          data-state={selectedRows.includes(invoice.id) ? "selected" : undefined}
        >
          <TableCell>
            <Checkbox
              checked={selectedRows.includes(invoice.id)}
              onCheckedChange={() => toggleRow(invoice.id)}
            />
          </TableCell>
          <TableCell className="font-medium">{invoice.id}</TableCell>
          <TableCell>{invoice.customer}</TableCell>
          <TableCell className="text-muted-foreground">{invoice.email}</TableCell>
          <TableCell className="text-right">$\{invoice.amount.toFixed(2)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)`}
        component={
          <div className="space-y-4">
            {selectedRows.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {selectedRows.length} of {invoices.length} row(s) selected
              </div>
            )}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedRows.length === invoices.length}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow 
                    key={invoice.id}
                    data-state={selectedRows.includes(invoice.id) ? "selected" : undefined}
                    className="cursor-pointer"
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedRows.includes(invoice.id)}
                        onCheckedChange={() => toggleRow(invoice.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell className="text-muted-foreground">{invoice.email}</TableCell>
                    <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        }
      />

      {/* Sortable Table */}
      <PreviewContainer
        title="Sortable Table"
        description="Table with sortable columns and visual indicators"
        code={`const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

const handleSort = (key: string) => {
  let direction: 'asc' | 'desc' = 'asc'
  if (sortConfig?.key === key && sortConfig.direction === 'asc') {
    direction = 'desc'
  }
  setSortConfig({ key, direction })
}

const sortedInvoices = [...invoices].sort((a, b) => {
  if (!sortConfig) return 0
  
  const aValue = a[sortConfig.key as keyof typeof a]
  const bValue = b[sortConfig.key as keyof typeof b]
  
  if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
  if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
  return 0
})

return (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead 
          className="cursor-pointer hover:bg-muted/50"
          onClick={() => handleSort('id')}
        >
          <div className="flex items-center gap-1">
            Invoice
            {sortConfig?.key === 'id' ? (
              sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
            ) : (
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </TableHead>
        <TableHead 
          className="cursor-pointer hover:bg-muted/50"
          onClick={() => handleSort('customer')}
        >
          <div className="flex items-center gap-1">
            Customer
            {sortConfig?.key === 'customer' ? (
              sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
            ) : (
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </TableHead>
        <TableHead 
          className="cursor-pointer hover:bg-muted/50"
          onClick={() => handleSort('amount')}
        >
          <div className="flex items-center gap-1">
            Amount
            {sortConfig?.key === 'amount' ? (
              sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
            ) : (
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sortedInvoices.map((invoice) => (
        <TableRow key={invoice.id}>
          <TableCell className="font-medium">{invoice.id}</TableCell>
          <TableCell>{invoice.customer}</TableCell>
          <TableCell>$\{invoice.amount.toFixed(2)}</TableCell>
          <TableCell>{getStatusBadge(invoice.status)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)`}
        component={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center gap-1">
                    Invoice
                    {sortConfig?.key === 'id' ? (
                      sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
                    ) : (
                      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort('customer')}
                >
                  <div className="flex items-center gap-1">
                    Customer
                    {sortConfig?.key === 'customer' ? (
                      sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
                    ) : (
                      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort('amount')}
                >
                  <div className="flex items-center gap-1">
                    Amount
                    {sortConfig?.key === 'amount' ? (
                      sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
                    ) : (
                      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      />

      {/* Table with Actions */}
      <PreviewContainer
        title="Table with Actions"
        description="Table with row actions and dropdown menus"
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="w-[50px]"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell className="font-medium">{invoice.id}</TableCell>
        <TableCell>{invoice.customer}</TableCell>
        <TableCell>{getStatusBadge(invoice.status)}</TableCell>
        <TableCell className="text-right">$\{invoice.amount.toFixed(2)}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit invoice</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete invoice
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        component={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 3).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit invoice</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      />

      {/* Table with Footer */}
      <PreviewContainer
        title="Table with Footer"
        description="Table with summary footer"
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead>Price</TableHead>
      <TableHead className="text-right">Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      { product: "Widget A", quantity: 5, price: 50.00 },
      { product: "Widget B", quantity: 3, price: 75.00 },
      { product: "Widget C", quantity: 2, price: 125.00 },
    ].map((item) => (
      <TableRow key={item.product}>
        <TableCell className="font-medium">{item.product}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>$\{item.price.toFixed(2)}</TableCell>
        <TableCell className="text-right">
          $\{(item.quantity * item.price).toFixed(2)}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right font-medium">$725.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
        component={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { product: "Widget A", quantity: 5, price: 50.00 },
                { product: "Widget B", quantity: 3, price: 75.00 },
                { product: "Widget C", quantity: 2, price: 125.00 },
              ].map((item) => (
                <TableRow key={item.product}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right font-medium">$725.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        }
      />

      {/* Responsive Table */}
      <PreviewContainer
        title="Responsive Table"
        description="Table with horizontal scroll on mobile"
        code={`<div className="w-full overflow-auto">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Order ID</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Product</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Date</TableHead>
        <TableHead className="text-right">Total</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[
        { id: "ORD-001", customer: "John Doe", product: "Laptop Pro", qty: 1, price: 1299.99, status: "shipped", date: "2024-01-15" },
        { id: "ORD-002", customer: "Jane Smith", product: "Wireless Mouse", qty: 2, price: 29.99, status: "processing", date: "2024-01-16" },
        { id: "ORD-003", customer: "Bob Johnson", product: "USB-C Hub", qty: 1, price: 89.99, status: "delivered", date: "2024-01-14" },
      ].map((order) => (
        <TableRow key={order.id}>
          <TableCell className="font-medium whitespace-nowrap">{order.id}</TableCell>
          <TableCell className="whitespace-nowrap">{order.customer}</TableCell>
          <TableCell className="whitespace-nowrap">{order.product}</TableCell>
          <TableCell>{order.qty}</TableCell>
          <TableCell>$\{order.price.toFixed(2)}</TableCell>
          <TableCell>
            <Badge variant={
              order.status === 'delivered' ? 'success' : 
              order.status === 'shipped' ? 'secondary' : 
              'warning'
            }>
              {order.status}
            </Badge>
          </TableCell>
          <TableCell className="whitespace-nowrap">{order.date}</TableCell>
          <TableCell className="text-right whitespace-nowrap">
            $\{(order.qty * order.price).toFixed(2)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`}
        component={
          <div className="w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "ORD-001", customer: "John Doe", product: "Laptop Pro", qty: 1, price: 1299.99, status: "shipped", date: "2024-01-15" },
                  { id: "ORD-002", customer: "Jane Smith", product: "Wireless Mouse", qty: 2, price: 29.99, status: "processing", date: "2024-01-16" },
                  { id: "ORD-003", customer: "Bob Johnson", product: "USB-C Hub", qty: 1, price: 89.99, status: "delivered", date: "2024-01-14" },
                ].map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium whitespace-nowrap">{order.id}</TableCell>
                    <TableCell className="whitespace-nowrap">{order.customer}</TableCell>
                    <TableCell className="whitespace-nowrap">{order.product}</TableCell>
                    <TableCell>{order.qty}</TableCell>
                    <TableCell>${order.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={
                        order.status === 'delivered' ? 'success' : 
                        order.status === 'shipped' ? 'secondary' : 
                        'warning'
                      }>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{order.date}</TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      ${(order.qty * order.price).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        }
      />
    </section>
  )
}