"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [colorPhase, setColorPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const generateColor = () => {
    return `hsl(${colorPhase}, 80%, 60%)`;
  };

  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@vninvoice.org" className="hover:underline">
                  contact@vninvoice.org
                </a>
              </li>
              <li>
                <a href="mailto:support@vninvoice.org" className="hover:underline">
                  support@vninvoice.org
                </a>
              </li>
              <li>
                <a href="tel:+923021550385" className="hover:underline">
                  +92 302 1550 385
                </a>
              </li>
              <li>
                <a href="tel:+925127162104" className="hover:underline">
                  +92 51 2716 210
                </a>
              </li>
              <li>Shams Colony H-13 Islamabad</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:underline">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:underline">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Working Hours</h3>
            <p className="text-sm">Monday to Saturday</p>
            <p className="text-sm">9AM to 6PM</p>
            <div className="pt-4">
              <p className="text-sm">Powered by</p>
              <p
                className="text-sm font-semibold"
                style={{ color: generateColor() }}
              >
                Vnhax and PubgStuff
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VNInvoice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
