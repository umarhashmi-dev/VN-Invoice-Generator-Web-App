"use client";

import {
  FileText,
  Globe,
  Download,
  Smartphone,
  CheckCircle,
  Search
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-full mb-4 text-blue-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Easy to Use",
      description: "Simple interface designed for everyone - no accounting knowledge required.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Currency Support",
      description: "Support for multiple currencies including PKR, USD, EUR, and more.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Download as PDF",
      description: "Easily export and download your invoices in PDF format.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Friendly",
      description: "Create and manage invoices on any device - mobile, tablet, or desktop.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "No Watermark",
      description: "Your invoices are clean and professional with no watermarks or branding.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO and AdSense Friendly",
      description: "Optimized for search engines and compatible with Google AdSense.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-600">
            Everything you need to create professional invoices quickly and easily.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
