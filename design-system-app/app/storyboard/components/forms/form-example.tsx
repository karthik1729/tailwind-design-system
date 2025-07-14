"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { toast } from "@/components/ui/toast"

const basicFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).min(4),
})

const advancedFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string({
    required_error: "Please select a role",
  }),
  notifications: z.boolean().default(false),
  type: z.enum(["personal", "business"], {
    required_error: "Please select an account type",
  }),
  marketing: z.boolean().default(false).optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export function FormExample() {
  const basicForm = useForm<z.infer<typeof basicFormSchema>>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
    },
  })

  const advancedForm = useForm<z.infer<typeof advancedFormSchema>>({
    resolver: zodResolver(advancedFormSchema),
    defaultValues: {
      name: "",
      email: "",
      notifications: false,
      marketing: false,
      terms: false,
    },
  })

  function onBasicSubmit(values: z.infer<typeof basicFormSchema>) {
    toast({
      title: "Form submitted!",
      description: "Check the console for the form values.",
    })
    console.log(values)
  }

  function onAdvancedSubmit(values: z.infer<typeof advancedFormSchema>) {
    toast({
      title: "Advanced form submitted!",
      description: "Check the console for the form values.",
    })
    console.log(values)
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Form</h2>
        <p className="text-muted-foreground mb-6">
          Complete form management with validation, error handling, and accessibility built-in.
        </p>
      </div>

      {/* Basic Form */}
      <PreviewContainer
        title="Basic Form"
        description="Simple form with validation"
        code={`const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).min(4),
})

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write a short bio (max 160 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
        component={
          <div className="max-w-md">
            <Form {...basicForm}>
              <form onSubmit={basicForm.handleSubmit(onBasicSubmit)} className="space-y-6">
                <FormField
                  control={basicForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={basicForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={basicForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about yourself"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write a short bio (max 160 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        }
      />

      {/* Advanced Form */}
      <PreviewContainer
        title="Advanced Form"
        description="Form with multiple field types and complex validation"
        code={`<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel data-required="true">Name</FormLabel>
          <FormControl>
            <Input placeholder="John Doe" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <FormField
      control={form.control}
      name="role"
      render={({ field }) => (
        <FormItem>
          <FormLabel data-required="true">Role</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel data-required="true">Account Type</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="personal" />
                </FormControl>
                <FormLabel className="font-normal">
                  Personal Account
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="business" />
                </FormControl>
                <FormLabel className="font-normal">
                  Business Account
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <FormField
      control={form.control}
      name="notifications"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">
              Email Notifications
            </FormLabel>
            <FormDescription>
              Receive emails about your account activity.
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
    
    <FormField
      control={form.control}
      name="terms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              Accept terms and conditions
            </FormLabel>
            <FormDescription>
              You agree to our Terms of Service and Privacy Policy.
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
    
    <Button type="submit">Create Account</Button>
  </form>
</Form>`}
        component={
          <div className="max-w-md">
            <Form {...advancedForm}>
              <form onSubmit={advancedForm.handleSubmit(onAdvancedSubmit)} className="space-y-6">
                <FormField
                  control={advancedForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-required="true">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-required="true">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-required="true">Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel data-required="true">Account Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="personal" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Personal Account
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="business" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Business Account
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="notifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Email Notifications
                        </FormLabel>
                        <FormDescription>
                          Receive emails about your account activity.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="marketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Marketing Emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails about new products and features.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={advancedForm.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Accept terms and conditions
                        </FormLabel>
                        <FormDescription>
                          You agree to our Terms of Service and Privacy Policy.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit">Create Account</Button>
              </form>
            </Form>
          </div>
        }
      />

      {/* Form with Inline Errors */}
      <PreviewContainer
        title="Form Validation States"
        description="Form showing various validation and error states"
        code={`// Try submitting the form without filling in the required fields
// or with invalid data to see the error states

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel data-required="true">Username</FormLabel>
          <FormControl>
            <Input placeholder="At least 2 characters" {...field} />
          </FormControl>
          <FormDescription>
            Choose a unique username.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel data-required="true" data-invalid={!!form.formState.errors.email}>
            Email
          </FormLabel>
          <FormControl>
            <Input 
              placeholder="valid@email.com" 
              className={form.formState.errors.email ? "border-destructive" : ""}
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <Button type="submit">Validate Form</Button>
  </form>
</Form>`}
        component={
          <div className="max-w-md">
            <p className="text-sm text-muted-foreground mb-4">
              Try submitting without filling the fields to see validation errors.
            </p>
            <Form {...basicForm}>
              <form onSubmit={basicForm.handleSubmit(onBasicSubmit)} className="space-y-6">
                <FormField
                  control={basicForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-required="true">Username</FormLabel>
                      <FormControl>
                        <Input placeholder="At least 2 characters" {...field} />
                      </FormControl>
                      <FormDescription>
                        Choose a unique username.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={basicForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel 
                        data-required="true" 
                        data-invalid={!!basicForm.formState.errors.email}
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="valid@email.com" 
                          className={basicForm.formState.errors.email ? "border-destructive" : ""}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit">Validate Form</Button>
              </form>
            </Form>
          </div>
        }
      />
    </section>
  )
}