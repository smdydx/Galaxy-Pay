import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Repeat, Calendar, CreditCard, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Subscriptions() {
    return (
        <PageTemplate title="Subscriptions" subtitle="Automate recurring payments. Build stable revenue streams with flexible subscription plans.">

            {/* Cycle Visual */}
            {/* Cycle Visual */}
            <div className="flex justify-center mb-16 relative group max-w-4xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 w-full">
                    <img
                        src="/assets/gateway_hero.png"
                        alt="Subscription Logic"
                        className="w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                        <p className="text-white/80 font-mono text-sm">Automated Recurring Billing Engine</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Calendar, title: "Flexible Plans", desc: "Create daily, weekly, monthly or yearly subscription plans." },
                    { icon: CreditCard, title: "Multiple Modes", desc: "Recurring via Cards, UPI AutoPay, and e-NACH mandates." },
                    { icon: Repeat, title: "Smart Retries", desc: "Automatically retry failed payments to rescue revenue." },
                    { icon: BellRing, title: "Automated Invoices", desc: "Send automated GST compliant invoices to customers." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                                <feature.icon size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">Start your Subscription Business</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Ideal for SaaS, OTT platforms, Gyms, Schools, and any business with a recurring revenue model.</p>
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">Create Subscription Plan</Button>
            </div>

        </PageTemplate>
    );
}
