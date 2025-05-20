"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Map, Clock, Send, CheckCircle } from "lucide-react";

// Let's install the required dependencies first
// Run: cd vninvoice && bun add zod @hookform/resolvers react-hook-form

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, we would send the form data to a server
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll respond within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-4">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
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
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="What would you like to tell us?"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach us directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@vninvoice.org" className="text-blue-600 hover:underline">
                      contact@vninvoice.org
                    </a>
                    <br />
                    <a href="mailto:support@vninvoice.org" className="text-blue-600 hover:underline">
                      support@vninvoice.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+923021550385" className="hover:underline">
                      +92 302 1550 385
                    </a>
                    <br />
                    <a href="tel:+925127162104" className="hover:underline">
                      +92 51 2716 210
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Map className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>Shams Colony H-13 Islamabad</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p>Monday to Saturday, 9AM to 6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
                <CardDescription>Follow us on social media for updates and tips.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 5.16c-.69.31-1.43.52-2.21.65.79-.47 1.4-1.22 1.69-2.12-.74.44-1.56.76-2.44.93a3.7 3.7 0 0 0-6.29 3.37A10.47 10.47 0 0 1 5.5 4.37c-.77 1.33-.38 3.07.91 3.95-.52-.02-1.04-.16-1.49-.4v.04c0 1.79 1.28 3.29 2.98 3.63a3.7 3.7 0 0 1-1.67.07c.47 1.48 1.84 2.55 3.47 2.58A7.4 7.4 0 0 1 3 16.27c1.63 1.05 3.56 1.65 5.64 1.65 6.77 0 10.46-5.61 10.46-10.46v-.48c.71-.52 1.33-1.17 1.83-1.91l-.02-.01Z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.48 10-10 0-5.52-4.49-10-10-10zm4.85 6.65c.54 0 .99.45.99.99 0 .2-.05.39-.19.55-.45.31-.89.62-1.34.93-.49 1.61-1.11 3.18-2.02 4.64-.73 1.2-1.71 2.24-2.9 3.03-.85.56-1.82.9-2.85.9-.07 0-.13-.01-.2-.02a2.98 2.98 0 0 1-1.87-.69c-.47-.39-.75-.95-.79-1.56 0-.05 0-.09.01-.14.06-.72.57-1.31 1.2-1.57.41-.17.85-.18 1.27-.04.71.25 1.46.12 2.03-.35.38-.32.69-.97.39-1.46-.29-.48-.88-.64-1.4-.53-.56.11-1.15.1-1.72-.02a2.502 2.502 0 0 1-1.99-2.45c0-.32.06-.63.18-.92.75-1.82 2.76-2.76 4.61-2.16a3.01 3.01 0 0 1 2.05 3.43c-.09.51-.29.98-.58 1.38.29.34.72.52 1.17.52z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.52 15.52a7.68 7.68 0 0 1-5.35 2.17c-.48 0-.96-.05-1.43-.14-.24-.04-.49-.09-.73-.15l-1.58.89c-.88.5-1.94-.09-1.94-1.11v-1.04a7.629 7.629 0 0 1-3.2-6.14c0-4.24 3.44-7.7 7.7-7.7s7.7 3.46 7.7 7.7c0 1.71-.57 3.34-1.59 4.67-.62.81-1.54 1.48-2.58 1.85zm-1.01-8.27c.56 0 1.01-.45 1.01-1.01 0-.56-.45-1.01-1.01-1.01h-9.01c-.56 0-1.01.45-1.01 1.01 0 .56.45 1.01 1.01 1.01h9.01zm0 3.01c.56 0 1.01-.45 1.01-1.01 0-.56-.45-1.01-1.01-1.01h-9.01c-.56 0-1.01.45-1.01 1.01 0 .56.45 1.01 1.01 1.01h9.01z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10s10-4.49 10-10c0-5.52-4.48-10-10-10zm4.71 11.71a.996.996 0 0 1-1.41 0L12 10.41l-3.29 3.29a.996.996 0 1 1-1.41-1.41l4-4a.996.996 0 0 1 1.41 0l4 4c.39.39.39 1.02 0 1.42z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
