import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Terms and Conditions - VNInvoice",
  description: "Read our terms and conditions for using the VNInvoice free invoice generator.",
};

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: May 20, 2025</p>

        <div className="prose prose-blue max-w-none">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the VNInvoice website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
          <p>
            VNInvoice provides an online platform for creating and managing invoices. You must use our service responsibly and for legitimate business purposes only.
          </p>
          <p>
            You agree not to use the service:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>For any unlawful purpose or to conduct illegal activities</li>
            <li>To create fraudulent or misleading invoices</li>
            <li>To impersonate or attempt to impersonate another person or entity</li>
            <li>To engage in any activity that interferes with or disrupts the service</li>
            <li>To attempt to access any parts of the service that you are not authorized to access</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>
          <p>
            You agree to notify us immediately of any unauthorized access to or use of your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Content</h2>
          <p>
            Our service allows you to create, upload, and share content. You retain all ownership rights to your content, but you grant us a license to use, reproduce, and display it in connection with the service.
          </p>
          <p>
            You are solely responsible for the content you create, including its legality, reliability, and appropriateness.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by VNInvoice and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall VNInvoice, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:contact@vninvoice.org" className="text-blue-600 hover:underline">contact@vninvoice.org</a>.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/privacy">
            <Button variant="outline" className="w-full sm:w-auto">Privacy Policy</Button>
          </Link>
          <Link href="/disclaimer">
            <Button variant="outline" className="w-full sm:w-auto">Disclaimer</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
