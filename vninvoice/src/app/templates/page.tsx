"use client";

import { useState } from "react";
import { TemplatesSection } from "@/components/ui/templates-section";
import { CTASection } from "@/components/ui/cta-section";

export default function TemplatesPage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Invoice Templates</h1>
            <p className="text-lg text-gray-600">
              Choose from our collection of professional invoice templates.
              Free templates are ready to use right away, or sign up to unlock premium designs.
            </p>
          </div>
        </div>
      </div>

      <TemplatesSection />

      <CTASection />
    </div>
  );
}
