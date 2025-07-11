"use client"

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
import { ComponentExample } from "@/lib/component-docs"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
]

export const tableExamples: ComponentExample[] = [
  {
    title: "Basic Table",
    description: "A simple table with header and body.",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
  {
    title: "Table with Caption",
    description: "Table with a caption for accessibility.",
    code: `<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.slice(0, 3).map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, 3).map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
  {
    title: "Table with Footer",
    description: "Table with a footer showing totals.",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$1,750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
    component: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1,750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
  {
    title: "Striped Table",
    description: "Table with alternating row colors.",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      { name: "John Doe", email: "john@example.com", role: "Admin" },
      { name: "Jane Smith", email: "jane@example.com", role: "User" },
      { name: "Bob Johnson", email: "bob@example.com", role: "User" },
      { name: "Alice Brown", email: "alice@example.com", role: "Moderator" },
    ].map((user, index) => (
      <TableRow key={user.email} className={index % 2 === 0 ? "bg-muted/50" : ""}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: "John Doe", email: "john@example.com", role: "Admin" },
            { name: "Jane Smith", email: "jane@example.com", role: "User" },
            { name: "Bob Johnson", email: "bob@example.com", role: "User" },
            { name: "Alice Brown", email: "alice@example.com", role: "Moderator" },
          ].map((user, index) => (
            <TableRow key={user.email} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
  {
    title: "Table with Status",
    description: "Table with status indicators.",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Task</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Priority</TableHead>
      <TableHead>Due Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      { task: "Complete project proposal", status: "In Progress", priority: "High", due: "2024-03-15" },
      { task: "Review code changes", status: "Completed", priority: "Medium", due: "2024-03-10" },
      { task: "Update documentation", status: "Not Started", priority: "Low", due: "2024-03-20" },
      { task: "Fix critical bug", status: "In Progress", priority: "Critical", due: "2024-03-12" },
    ].map((task) => (
      <TableRow key={task.task}>
        <TableCell className="font-medium">{task.task}</TableCell>
        <TableCell>
          <span className={cn(
            "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
            task.status === "Completed" && "bg-green-100 text-green-700",
            task.status === "In Progress" && "bg-blue-100 text-blue-700",
            task.status === "Not Started" && "bg-gray-100 text-gray-700"
          )}>
            {task.status}
          </span>
        </TableCell>
        <TableCell>
          <span className={cn(
            "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
            task.priority === "Critical" && "bg-red-100 text-red-700",
            task.priority === "High" && "bg-orange-100 text-orange-700",
            task.priority === "Medium" && "bg-yellow-100 text-yellow-700",
            task.priority === "Low" && "bg-gray-100 text-gray-700"
          )}>
            {task.priority}
          </span>
        </TableCell>
        <TableCell>{task.due}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => {
      const cn = (...classes: string[]) => classes.filter(Boolean).join(' ')
      
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { task: "Complete project proposal", status: "In Progress", priority: "High", due: "2024-03-15" },
              { task: "Review code changes", status: "Completed", priority: "Medium", due: "2024-03-10" },
              { task: "Update documentation", status: "Not Started", priority: "Low", due: "2024-03-20" },
              { task: "Fix critical bug", status: "In Progress", priority: "Critical", due: "2024-03-12" },
            ].map((task) => (
              <TableRow key={task.task}>
                <TableCell className="font-medium">{task.task}</TableCell>
                <TableCell>
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                    task.status === "Completed" && "bg-green-100 text-green-700",
                    task.status === "In Progress" && "bg-blue-100 text-blue-700",
                    task.status === "Not Started" && "bg-gray-100 text-gray-700"
                  )}>
                    {task.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                    task.priority === "Critical" && "bg-red-100 text-red-700",
                    task.priority === "High" && "bg-orange-100 text-orange-700",
                    task.priority === "Medium" && "bg-yellow-100 text-yellow-700",
                    task.priority === "Low" && "bg-gray-100 text-gray-700"
                  )}>
                    {task.priority}
                  </span>
                </TableCell>
                <TableCell>{task.due}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }
  },
  {
    title: "Sortable Table",
    description: "Table with sortable columns (visual only).",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="cursor-pointer hover:bg-muted/50">
        Name 
        <span className="ml-2 text-xs">↕</span>
      </TableHead>
      <TableHead className="cursor-pointer hover:bg-muted/50">
        Date 
        <span className="ml-2 text-xs">↓</span>
      </TableHead>
      <TableHead className="cursor-pointer hover:bg-muted/50">
        Amount 
        <span className="ml-2 text-xs">↕</span>
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      { name: "Sales Report", date: "2024-03-15", amount: "$1,234.56" },
      { name: "Marketing Campaign", date: "2024-03-14", amount: "$2,345.67" },
      { name: "Product Launch", date: "2024-03-13", amount: "$3,456.78" },
      { name: "Customer Support", date: "2024-03-12", amount: "$456.78" },
    ].map((item) => (
      <TableRow key={item.name}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer hover:bg-muted/50">
              Name 
              <span className="ml-2 text-xs">↕</span>
            </TableHead>
            <TableHead className="cursor-pointer hover:bg-muted/50">
              Date 
              <span className="ml-2 text-xs">↓</span>
            </TableHead>
            <TableHead className="cursor-pointer hover:bg-muted/50">
              Amount 
              <span className="ml-2 text-xs">↕</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: "Sales Report", date: "2024-03-15", amount: "$1,234.56" },
            { name: "Marketing Campaign", date: "2024-03-14", amount: "$2,345.67" },
            { name: "Product Launch", date: "2024-03-13", amount: "$3,456.78" },
            { name: "Customer Support", date: "2024-03-12", amount: "$456.78" },
          ].map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
  {
    title: "Compact Table",
    description: "Table with reduced padding for dense data.",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="h-9">ID</TableHead>
      <TableHead className="h-9">Type</TableHead>
      <TableHead className="h-9">Value</TableHead>
      <TableHead className="h-9">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {Array.from({ length: 8 }).map((_, i) => (
      <TableRow key={i}>
        <TableCell className="py-1 text-sm">{1000 + i}</TableCell>
        <TableCell className="py-1 text-sm">Type {String.fromCharCode(65 + i)}</TableCell>
        <TableCell className="py-1 text-sm">{(Math.random() * 100).toFixed(2)}</TableCell>
        <TableCell className="py-1 text-sm">
          <span className={i % 2 === 0 ? "text-green-600" : "text-orange-600"}>
            {i % 2 === 0 ? "Active" : "Pending"}
          </span>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    component: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-9">ID</TableHead>
            <TableHead className="h-9">Type</TableHead>
            <TableHead className="h-9">Value</TableHead>
            <TableHead className="h-9">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="py-1 text-sm">{1000 + i}</TableCell>
              <TableCell className="py-1 text-sm">Type {String.fromCharCode(65 + i)}</TableCell>
              <TableCell className="py-1 text-sm">{(Math.random() * 100).toFixed(2)}</TableCell>
              <TableCell className="py-1 text-sm">
                <span className={i % 2 === 0 ? "text-green-600" : "text-orange-600"}>
                  {i % 2 === 0 ? "Active" : "Pending"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
  {
    title: "Responsive Table",
    description: "Table wrapped in a scrollable container for mobile.",
    code: `<div className="w-full overflow-auto">
  <Table className="min-w-[600px]">
    <TableHeader>
      <TableRow>
        <TableHead>Order ID</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Product</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Total</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[
        { id: "ORD001", customer: "John Doe", product: "Laptop", qty: 1, price: "$999.00", total: "$999.00", date: "2024-03-15", status: "Delivered" },
        { id: "ORD002", customer: "Jane Smith", product: "Mouse", qty: 2, price: "$29.99", total: "$59.98", date: "2024-03-14", status: "Processing" },
        { id: "ORD003", customer: "Bob Johnson", product: "Keyboard", qty: 1, price: "$79.99", total: "$79.99", date: "2024-03-13", status: "Shipped" },
      ].map((order) => (
        <TableRow key={order.id}>
          <TableCell className="font-medium">{order.id}</TableCell>
          <TableCell>{order.customer}</TableCell>
          <TableCell>{order.product}</TableCell>
          <TableCell>{order.qty}</TableCell>
          <TableCell>{order.price}</TableCell>
          <TableCell>{order.total}</TableCell>
          <TableCell>{order.date}</TableCell>
          <TableCell>{order.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`,
    component: () => (
      <div className="w-full overflow-auto">
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "ORD001", customer: "John Doe", product: "Laptop", qty: 1, price: "$999.00", total: "$999.00", date: "2024-03-15", status: "Delivered" },
              { id: "ORD002", customer: "Jane Smith", product: "Mouse", qty: 2, price: "$29.99", total: "$59.98", date: "2024-03-14", status: "Processing" },
              { id: "ORD003", customer: "Bob Johnson", product: "Keyboard", qty: 1, price: "$79.99", total: "$79.99", date: "2024-03-13", status: "Shipped" },
            ].map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.qty}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
]