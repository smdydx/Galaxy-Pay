import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Share2, Bell, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentLinks() {
    return (
        <PageTemplate title="Payment Links" subtitle="The easiest way to accept payments. Create, Share, and Collect.">

            <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
                <div className="md:w-1/2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/payment_links_hero.png"
                            alt="Payment Links Interface"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-white">Get paid via WhatsApp, SMS, or Email</h2>
                    <p className="text-gray-400 text-lg">
                        Create payment links instantly from your dashboard and share them with your customers over any channel. No website or app required.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Link, text: "Create Link" },
                            { icon: Share2, text: "Share Link" },
                            { icon: Smartphone, text: "Customer Pays" },
                            { icon: Bell, text: "Instant Notification" }
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                <step.icon className="text-purple-400" size={20} />
                                <span className="text-white font-medium">{step.text}</span>
                            </div>
                        ))}
                    </div>
                    <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 mt-4">Create Payment Link</Button>
                </div>
            </div>

        </PageTemplate>
    );
}
