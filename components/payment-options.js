import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, CopyIcon, ExternalLink, Heart, Smartphone, Wallet } from "lucide-react";
import Image from "next/image";



export default function PaymentOptions() {
   
    return (
        <Tabs defaultValue="gofundme" className="w-full">
            <TabsList className="grid md:grid-cols-4 md:grid-rows-1 grid-rows-2 grid-cols-2 mb-6 break-words">
                <TabsTrigger value="gofundme" className="flex items-center gap-2">
                    <Image src="gofund.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />

                    GoFundMe
                </TabsTrigger>
                <TabsTrigger value="bkash" className="flex items-center gap-2">
                    <Image src="bkash.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />

                    bKash
                </TabsTrigger>
                <TabsTrigger value="nagad" className="flex items-center gap-2">
                    <Image src="nagad.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />

                    Nagad
                </TabsTrigger>
                <TabsTrigger value="ebl" className="flex items-center gap-2">
                    <Image src="ebl.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />

                    EBL Bank
                </TabsTrigger>
            </TabsList>

            <TabsContent value="gofundme">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-500">
                            <Image src="gofund.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />

                            GoFundMe
                        </CardTitle>
                        <CardDescription>Support us through our GoFundMe campaign</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       
                        <Button className="w-full" asChild>
                            <a
                                href="http://gofund.me/3bee3e6f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                Donate via GoFundMe
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="bkash">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-pink-500">
                            <Image src="bkash.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />
                            bKash
                        </CardTitle>
                        <CardDescription className="text-white">Send your donation directly to our bKash account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden bg-gray-100 p-4">
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 flex items-center gap-1">
                                        <Smartphone className="h-4 w-4" />
                                        bKash Number:
                                    </span>
                                    <div className="flex items-center">
                                        <span className="font-medium">01969-844062</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Receiver:</span>
                                    <span className="font-medium">Rashid-ul-Islam, lecturer</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Account Type:</span>
                                    <span className="font-medium">Personal</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Reference:</span>
                                    <div className="flex items-center">
                                        <span className="font-medium">URC donation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <div className="flex">
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        Please include &quot;URC donation&quot; as reference when sending your donation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="nagad">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-500">
                            <Image src="nagad.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />
                            Nagad
                        </CardTitle>
                        <CardDescription className="text-white">Send your donation directly to our Nagad account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden bg-gray-100 p-4">
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 flex items-center gap-1">
                                        <Wallet className="h-4 w-4" />
                                        Nagad Number:
                                    </span>
                                    <div className="flex items-center">
                                        <span className="font-medium">01969-844062</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Receiver:</span>
                                    <span className="font-medium">Rashid-ul-Islam, lecturer</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Account Type:</span>
                                    <span className="font-medium">Personal</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Reference:</span>
                                    <div className="flex items-center">
                                        <span className="font-medium">URC donation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <div className="flex">
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        Please include &quot;URC donation&quot; as reference when sending your donation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="ebl">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-yellow-200">
                            <Image src="ebl.svg" alt="bKash" width={24} height={24} className="h-5 w-5" />
                            EBL Bank Transfer
                        </CardTitle>
                        <CardDescription className="text-white">Transfer your donation to our EBL bank account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden bg-gray-100 p-4">
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Bank Name:</span>
                                    <span className="font-medium">Eastern Bank Limited (EBL)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Branch:</span>
                                    <span className="font-medium">Board Bazar Branch</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Account Number:</span>
                                    <div className="flex items-center">
                                        <span className="font-medium">1601440005004</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Account Name:</span>
                                    <div className="flex items-center">
                                        <span className="font-medium">MD. FAYSAL HOSSAIN</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Reference:</span>
                                    <div className="flex items-center">
                                        <span className="font-medium">URC donation</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <div className="flex">
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        Please include &quot;URC donation&quot; as reference when making your bank transfer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}