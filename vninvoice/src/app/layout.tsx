import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VNInvoice - Free Invoice Generator",
  description: "Create professional invoices with our free online invoice generator. Multiple templates, multi-currency support, and PDF downloads.",
  keywords: ["invoice generator", "free invoice", "invoice templates", "pdf invoice", "online invoice", "business invoice"],
  authors: [{ name: "VNInvoice Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vninvoice.org",
    title: "VNInvoice - Free Invoice Generator",
    description: "Create professional invoices with our free online invoice generator. Multiple templates, multi-currency support, and PDF downloads.",
    siteName: "VNInvoice",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-[100dvh] flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
