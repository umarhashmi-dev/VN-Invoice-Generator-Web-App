import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Disclaimer - VNInvoice",
  description: "Read our disclaimer for using the VNInvoice free invoice generator.",
};

export default function DisclaimerPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-gray-500 mb-8">Last updated: May 20, 2025</p>

        <div className="prose prose-blue max-w-none">
          <p>
            The information provided by VNInvoice ("we," "us," or "our") on our website is for general informational purposes only. All information on our website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">No Responsibility for Accuracy</h2>
          <p>
            While we strive to keep all information accurate and up-to-date, we cannot guarantee that all information on our website is accurate, complete, or current at all times. The content on our website is provided without any guarantees, conditions, or warranties as to its accuracy.
          </p>
          <p>
            We are not responsible for any errors or omissions in the content of our website, or for any actions taken in reliance thereon. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use at Your Own Risk</h2>
          <p>
            The use of our website and the content is at your own risk. The materials and information contained on our website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
          </p>
          <p>
            You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Invoicing Data and Information</h2>
          <p>
            The invoices generated through our platform are based on the information provided by you. We are not responsible for the accuracy of the information provided by you or for any errors in the invoices generated as a result of incorrect information.
          </p>
          <p>
            VNInvoice does not provide accounting, tax, or legal advice. We recommend consulting with a professional accountant or legal advisor regarding your specific business needs and requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">No Responsibility for User-Generated Content</h2>
          <p>
            Our website may include content provided by users or third parties. We do not control, verify, or endorse any user-generated content and cannot guarantee its accuracy or quality. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall VNInvoice, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your access to or use of or inability to access or use our website</li>
            <li>Any conduct or content of any third party on our website</li>
            <li>Any content obtained from our website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            <li>Any inaccurate information or errors in the invoices generated</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at <a href="mailto:contact@vninvoice.org" className="text-blue-600 hover:underline">contact@vninvoice.org</a>.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/terms">
            <Button variant="outline" className="w-full sm:w-auto">Terms and Conditions</Button>
          </Link>
          <Link href="/privacy">
            <Button variant="outline" className="w-full sm:w-auto">Privacy Policy</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
