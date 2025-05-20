"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="flex flex-col space-y-6 max-w-xl">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text leading-tight">
            Create Invoices Easily
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Professional templates, multi-currency support, and PDF downloads.
            No watermarks, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/templates">
              <Button size="lg" className="gap-2">
                Create Invoice <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-[340px] md:h-[420px] shadow-2xl rounded-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/invoice-template-preview.png"
              alt="Invoice Template Preview"
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-[-1]" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-[-1]" />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-blue-200 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-100 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-100 rounded-full" />
    </section>
  );
}
