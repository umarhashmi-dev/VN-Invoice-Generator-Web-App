"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Save,
  Plus,
  Trash2,
  CreditCard,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Hash
} from "lucide-react";

// Fetch template data
const getTemplateById = (id: string) => {
  const templates = [
    {
      id: "template-1",
      title: "Minimalist Business",
      imageSrc: "/invoice-template-1.jpg",
      isPremium: false,
      primaryColor: "#3b82f6",
      secondaryColor: "#f3f4f6",
      fontFamily: "Inter, sans-serif"
    },
    {
      id: "template-2",
      title: "Professional Square",
      imageSrc: "/invoice-template-2.jpg",
      isPremium: false,
      primaryColor: "#4b5563",
      secondaryColor: "#f9fafb",
      fontFamily: "Arial, sans-serif"
    },
    {
      id: "template-3",
      title: "Beige Aesthetic",
      imageSrc: "/invoice-template-3.jpg",
      isPremium: false,
      primaryColor: "#d6d3d1",
      secondaryColor: "#f5f5f4",
      fontFamily: "Georgia, serif"
    },
    {
      id: "template-4",
      title: "Management Consulting",
      imageSrc: "/invoice-template-4.jpg",
      isPremium: true,
      primaryColor: "#18181b",
      secondaryColor: "#fafafa",
      fontFamily: "Helvetica, sans-serif"
    },
    {
      id: "template-5",
      title: "Business Pro",
      imageSrc: "/invoice-template-5.jpg",
      isPremium: true,
      primaryColor: "#0369a1",
      secondaryColor: "#e0f2fe",
      fontFamily: "Roboto, sans-serif"
    },
    {
      id: "template-6",
      title: "Modern Minimal",
      imageSrc: "/invoice-template-6.jpg",
      isPremium: true,
      primaryColor: "#2e2e2e",
      secondaryColor: "#f6f6f6",
      fontFamily: "Montserrat, sans-serif"
    },
  ];

  return templates.find(template => template.id === id);
};

// Currency options
const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "PKR", symbol: "Rs", name: "Pakistani Rupee" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
];

// Invoice item interface
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

// Calculate the total amount
const calculateTotal = (items: InvoiceItem[]) => {
  return items.reduce((total, item) => total + item.amount, 0);
};

// Generate invoice number
const generateInvoiceNumber = () => {
  const prefix = "INV";
  const randomNum = Math.floor(Math.random() * 10000);
  const date = new Date();
  const year = date.getFullYear().toString().substr(2, 2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${prefix}-${year}${month}-${randomNum.toString().padStart(4, "0")}`;
};

// Format date
const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

// Add days to date
const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function TemplateEdit({ params }: { params: { id: string } }) {
  const router = useRouter();
  const template = getTemplateById(params.id);

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: generateInvoiceNumber(),
    issueDate: formatDate(new Date()),
    dueDate: formatDate(addDays(new Date(), 30)),
    currency: "USD",
    taxRate: 0,
    notes: "",

    // Business details
    businessName: "Your Business Name",
    businessEmail: "your.email@example.com",
    businessPhone: "+1 (234) 567-8901",
    businessAddress: "123 Business Street, City, Country",

    // Client details
    clientName: "Client Name",
    clientEmail: "client@example.com",
    clientPhone: "+1 (234) 567-8901",
    clientAddress: "456 Client Avenue, City, Country",
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      description: "Service or Product Description",
      quantity: 1,
      unitPrice: 100,
      amount: 100
    }
  ]);

  const [activeTab, setActiveTab] = useState("details");

  // For premium templates
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  useEffect(() => {
    // Check if template is premium
    if (template?.isPremium) {
      setShowPremiumModal(true);
    }
  }, [template]);

  // Add new item
  const addItem = () => {
    const newItem: InvoiceItem = {
      id: (items.length + 1).toString(),
      description: "",
      quantity: 1,
      unitPrice: 0,
      amount: 0
    };

    setItems([...items, newItem]);
  };

  // Remove item
  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Update item
  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };

        // Recalculate amount if quantity or unitPrice changes
        if (field === 'quantity' || field === 'unitPrice') {
          updatedItem.amount = Number(updatedItem.quantity) * Number(updatedItem.unitPrice);
        }

        return updatedItem;
      }
      return item;
    });

    setItems(updatedItems);
  };

  // Get currency symbol
  const getCurrencySymbol = (code: string) => {
    const currency = currencies.find(c => c.code === code);
    return currency ? currency.symbol : code;
  };

  // Calculate subtotal
  const subtotal = calculateTotal(items);

  // Calculate tax
  const taxAmount = (subtotal * Number(invoiceData.taxRate)) / 100;

  // Calculate grand total
  const grandTotal = subtotal + taxAmount;

  // Handle invoice data changes
  const handleChange = (field: string, value: string | number) => {
    setInvoiceData({
      ...invoiceData,
      [field]: value
    });
  };

  // Download as PDF
  const downloadPDF = () => {
    // In a real application, this would use a PDF generation library
    alert("This would generate a PDF in a real application. For now, consider your invoice ready!");
  };

  // Handle premium template access
  const handlePremiumAccess = () => {
    router.push("/signup");
  };

  if (!template) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
        <p className="mb-8">Sorry, the template you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/templates">Browse Templates</Link>
        </Button>
      </div>
    );
  }

  if (showPremiumModal) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[70vh]">
        <Card className="w-full max-w-lg p-6 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <CreditCard className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Premium Template</h2>
            <p className="text-gray-600">
              This is a premium template that requires an account to access.
            </p>
          </div>

          <div className="mb-8">
            <Image
              src={template.imageSrc}
              alt={template.title}
              width={300}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <Button onClick={handlePremiumAccess}>Sign Up to Unlock</Button>
            <Button variant="outline" asChild>
              <Link href="/templates">Browse Free Templates</Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Editor */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Create Invoice with {template.title}
            </h1>
            <p className="text-gray-600">
              Fill in the details below to create your invoice
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Invoice Details</TabsTrigger>
              <TabsTrigger value="business">Your Business</TabsTrigger>
              <TabsTrigger value="client">Client Info</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input
                    id="invoiceNumber"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => handleChange('invoiceNumber', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={invoiceData.currency}
                    onValueChange={(value) => handleChange('currency', value)}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name} ({currency.symbol})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issueDate">Issue Date</Label>
                  <Input
                    id="issueDate"
                    type="date"
                    value={invoiceData.issueDate}
                    onChange={(e) => handleChange('issueDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) => handleChange('dueDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="taxRate">Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    value={invoiceData.taxRate}
                    onChange={(e) => handleChange('taxRate', parseFloat(e.target.value))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional notes or payment instructions"
                  value={invoiceData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                />
              </div>

              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Invoice Items</h3>
                  <Button variant="outline" size="sm" onClick={addItem}>
                    <Plus className="h-4 w-4 mr-2" /> Add Item
                  </Button>
                </div>

                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-5">
                      <Input
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      />
                    </div>

                    <div className="col-span-2">
                      <Input
                        type="number"
                        placeholder="Qty"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value))}
                      />
                    </div>

                    <div className="col-span-2">
                      <Input
                        type="number"
                        placeholder="Price"
                        value={item.unitPrice}
                        onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value))}
                      />
                    </div>

                    <div className="col-span-2">
                      <div className="p-2 bg-gray-100 rounded text-right">
                        {getCurrencySymbol(invoiceData.currency)} {item.amount.toFixed(2)}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        disabled={items.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-12 gap-2 pt-4 border-t">
                  <div className="col-span-9 text-right font-medium">Subtotal:</div>
                  <div className="col-span-3 text-right font-medium">
                    {getCurrencySymbol(invoiceData.currency)} {subtotal.toFixed(2)}
                  </div>

                  <div className="col-span-9 text-right">Tax ({invoiceData.taxRate}%):</div>
                  <div className="col-span-3 text-right">
                    {getCurrencySymbol(invoiceData.currency)} {taxAmount.toFixed(2)}
                  </div>

                  <div className="col-span-9 text-right font-bold text-lg">Total:</div>
                  <div className="col-span-3 text-right font-bold text-lg">
                    {getCurrencySymbol(invoiceData.currency)} {grandTotal.toFixed(2)}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={invoiceData.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessEmail">Email</Label>
                <Input
                  id="businessEmail"
                  type="email"
                  value={invoiceData.businessEmail}
                  onChange={(e) => handleChange('businessEmail', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessPhone">Phone</Label>
                <Input
                  id="businessPhone"
                  value={invoiceData.businessPhone}
                  onChange={(e) => handleChange('businessPhone', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessAddress">Address</Label>
                <Textarea
                  id="businessAddress"
                  value={invoiceData.businessAddress}
                  onChange={(e) => handleChange('businessAddress', e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="client" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  value={invoiceData.clientName}
                  onChange={(e) => handleChange('clientName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientEmail">Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  value={invoiceData.clientEmail}
                  onChange={(e) => handleChange('clientEmail', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientPhone">Phone</Label>
                <Input
                  id="clientPhone"
                  value={invoiceData.clientPhone}
                  onChange={(e) => handleChange('clientPhone', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientAddress">Address</Label>
                <Textarea
                  id="clientAddress"
                  value={invoiceData.clientAddress}
                  onChange={(e) => handleChange('clientAddress', e.target.value)}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex gap-4 justify-end">
            <Button variant="outline" asChild>
              <Link href="/templates">Cancel</Link>
            </Button>
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" /> Save Draft
            </Button>
            <Button onClick={downloadPDF}>
              <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
          </div>
        </div>

        {/* Right side - Preview */}
        <div className="w-full lg:w-1/2 border rounded-lg p-6 bg-white shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold" style={{ color: template.primaryColor }}>
                {invoiceData.businessName}
              </h2>
              <div className="space-y-1 mt-2 text-sm">
                <div className="flex items-start">
                  <Mail className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.businessEmail}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.businessPhone}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.businessAddress}</span>
                </div>
              </div>
            </div>

            <div className="text-4xl font-bold uppercase" style={{ color: template.primaryColor }}>
              Invoice
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-bold" style={{ color: template.primaryColor }}>BILL TO:</h3>
              <div className="space-y-1">
                <div className="flex items-start">
                  <User className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.clientName}</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.clientEmail}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.clientPhone}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{invoiceData.clientAddress}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Hash className="h-4 w-4 mr-2" />
                  <span className="font-medium">Invoice No:</span>
                </div>
                <span>{invoiceData.invoiceNumber}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-medium">Issue Date:</span>
                </div>
                <span>{invoiceData.issueDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-medium">Due Date:</span>
                </div>
                <span>{invoiceData.dueDate}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b" style={{ backgroundColor: template.secondaryColor }}>
                  <th className="text-left p-2 font-medium">Description</th>
                  <th className="p-2 font-medium text-center">Qty</th>
                  <th className="p-2 font-medium text-right">Unit Price</th>
                  <th className="p-2 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">{item.description}</td>
                    <td className="p-2 text-center">{item.quantity}</td>
                    <td className="p-2 text-right">{getCurrencySymbol(invoiceData.currency)} {item.unitPrice.toFixed(2)}</td>
                    <td className="p-2 text-right">{getCurrencySymbol(invoiceData.currency)} {item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <div className="w-1/2">
              <div className="flex justify-between py-2">
                <span className="font-medium">Subtotal:</span>
                <span>{getCurrencySymbol(invoiceData.currency)} {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Tax ({invoiceData.taxRate}%):</span>
                <span>{getCurrencySymbol(invoiceData.currency)} {taxAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span>{getCurrencySymbol(invoiceData.currency)} {grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {invoiceData.notes && (
            <div className="mt-8 border-t pt-4">
              <h3 className="font-medium mb-2">Notes</h3>
              <p className="text-sm">{invoiceData.notes}</p>
            </div>
          )}

          <div className="mt-8 text-center text-gray-500 text-xs pt-4 border-t">
            <p>Thank you for your business!</p>
            <p>Invoice generated with VNInvoice - Free Invoice Generator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
