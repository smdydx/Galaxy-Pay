import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, RefreshCw, Globe } from "lucide-react";

export default function PaymentGateway() {
    return (
        <PageTemplate title="Payment Gateway" subtitle="Accept payments seamlessly with India's best payment gateway. Trusted by thousands of businesses.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Industry Leading <br /> Success Rates</h2>
                    <p className="text-gray-400 text-lg">
                        Our intelligent routing algorithm ensures that your transactions have the highest probability of success. We dynamically switch between multiple banking partners to deliver the best performance.
                    </p>
                    <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">150+</div>
                            <div className="text-sm text-gray-500">Payment Modes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">99.9%</div>
                            <div className="text-sm text-gray-500">System Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">T+1</div>
                            <div className="text-sm text-gray-500">Settlements</div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/gateway_hero.png"
                            alt="Payment Gateway Architecture"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: Shield, title: "Secure", desc: "PCI-DSS compliant vault to save cards securely." },
                    { icon: Zap, title: "Fast Checkout", desc: "Native OTP experience for faster transaction completion." },
                    { icon: RefreshCw, title: "Instant Refunds", desc: "Process refunds instantly to your customer's source account." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
