"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to create professional invoices?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sign up today to unlock premium templates and advanced features.
                Our free plan is always available, but premium gives you more options.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mr-3">
                    Free Forever
                  </span>
                  No hidden fees
                </h3>

                <ul className="space-y-3">
                  {[
                    "Access to 3 free templates",
                    "Multi-currency support",
                    "PDF downloads",
                    "100% free to use, no watermarks",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign Up Free
                  </Button>
                </Link>
                <Link href="/templates">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse Templates
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                  Premium
                </div>
                <h3 className="text-lg font-semibold mb-4">Premium Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Unlock all premium templates",
                    "Custom branding options",
                    "Client database management",
                    "Invoice tracking",
                    "Recurring invoices",
                    "Priority support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button className="w-full">
                      Get Premium
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full z-[-1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
