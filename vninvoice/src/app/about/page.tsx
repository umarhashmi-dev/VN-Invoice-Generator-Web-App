import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Map, Clock } from "lucide-react";

export const metadata = {
  title: "About Us - VNInvoice",
  description: "Learn about the VNInvoice team and our mission to make invoicing easy and accessible for everyone.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            We help small businesses create professional invoices for free. Our goal is to make invoicing easy and accessible for everyone.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
          <p>
            At VNInvoice, we believe that professional invoicing should be accessible to everyone, from freelancers and small businesses to large corporations.
            Our mission is to provide a simple, intuitive, and powerful invoicing solution that helps businesses get paid faster and look more professional.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
          <p>
            VNInvoice was founded in 2023 by a team of entrepreneurs who were frustrated with the complexity and cost of existing invoicing solutions.
            We wanted to create a platform that was easy to use, affordable, and powerful enough to meet the needs of growing businesses.
          </p>
          <p>
            Today, VNInvoice is used by thousands of businesses around the world to create professional invoices, track payments, and get paid faster.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Simplicity:</strong> We believe in keeping things simple and easy to use.</li>
            <li><strong>Accessibility:</strong> Our core features are free forever, making professional invoicing accessible to everyone.</li>
            <li><strong>Professionalism:</strong> We help businesses look more professional and get paid faster.</li>
            <li><strong>Innovation:</strong> We're constantly improving our platform to meet the evolving needs of our users.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:contact@vninvoice.org" className="text-blue-600 hover:underline">contact@vninvoice.org</a><br />
                  <a href="mailto:support@vninvoice.org" className="text-blue-600 hover:underline">support@vninvoice.org</a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <a href="tel:+923021550385" className="hover:underline">+92 302 1550 385</a><br />
                  <a href="tel:+925127162104" className="hover:underline">+92 51 2716 210</a>
                </div>
              </div>

              <div className="flex items-start">
                <Map className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p>Shams Colony H-13 Islamabad</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Working Hours:</p>
                  <p>Monday to Saturday, 9AM to 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button className="w-full sm:w-auto">Contact Us</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
