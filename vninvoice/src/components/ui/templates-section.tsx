"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface TemplateProps {
  id: string;
  title: string;
  imageSrc: string;
  isPremium: boolean;
}

const templates: TemplateProps[] = [
  {
    id: "template-1",
    title: "Minimalist Business",
    imageSrc: "/invoice-template-1.jpg",
    isPremium: false,
  },
  {
    id: "template-2",
    title: "Professional Square",
    imageSrc: "/invoice-template-2.jpg",
    isPremium: false,
  },
  {
    id: "template-3",
    title: "Beige Aesthetic",
    imageSrc: "/invoice-template-3.jpg",
    isPremium: false,
  },
  {
    id: "template-4",
    title: "Management Consulting",
    imageSrc: "/invoice-template-4.jpg",
    isPremium: true,
  },
  {
    id: "template-5",
    title: "Business Pro",
    imageSrc: "/invoice-template-5.jpg",
    isPremium: true,
  },
  {
    id: "template-6",
    title: "Modern Minimal",
    imageSrc: "/invoice-template-6.jpg",
    isPremium: true,
  },
];

export function TemplatesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Templates Showcase</h2>
          <p className="text-gray-600">
            Choose from our beautiful invoice templates. Free ones are ready to use,
            or sign up to unlock our premium collection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                {template.isPremium && (
                  <div className="absolute right-0 top-0 z-10 bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
                    Premium
                  </div>
                )}
                <Image
                  src={template.imageSrc}
                  alt={template.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                {template.isPremium && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <Lock className="h-8 w-8" />
                      <span className="text-sm font-medium">Sign Up to Unlock</span>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{template.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                {template.isPremium ? (
                  <Link href="/signup" className="w-full">
                    <Button variant="outline" className="w-full gap-2">
                      <Lock className="h-4 w-4" /> Unlock Template
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/templates/${template.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      Use Template
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
