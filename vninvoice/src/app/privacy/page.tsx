import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy - VNInvoice",
  description: "Read our privacy policy to understand how we collect, use, and protect your data when using the VNInvoice free invoice generator.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: May 20, 2025</p>

        <div className="prose prose-blue max-w-none">
          <p>
            At VNInvoice, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our invoicing services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create an account</li>
            <li>Create invoices</li>
            <li>Contact us via email, online forms, or other direct contact methods</li>
            <li>Provide feedback or respond to surveys</li>
          </ul>
          <p className="mt-4">
            The types of information we may collect include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Business information (business name, address, tax ID)</li>
            <li>Client information provided in your invoices</li>
            <li>Financial information necessary for processing payments</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, and administrative messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>With service providers who perform services on our behalf</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a business transaction such as a merger or acquisition</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission or storage of information can be entirely secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate or incomplete information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us at <a href="mailto:privacy@vninvoice.org" className="text-blue-600 hover:underline">privacy@vninvoice.org</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@vninvoice.org" className="text-blue-600 hover:underline">privacy@vninvoice.org</a>.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/terms">
            <Button variant="outline" className="w-full sm:w-auto">Terms and Conditions</Button>
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
