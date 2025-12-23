import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Smartphone, CheckCheck } from "lucide-react";

export default function InstaCollect() {
    return (
        <PageTemplate title="InstaCollect" subtitle="Instant settlement for your UPI collections. Cash flow moving at the speed of business.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Instant <br /> Settlements</h2>
                    <p className="text-gray-400 text-lg">
                        Don't wait T+1 days for your money. With InstaCollect, access your funds immediately after the customer pays. Perfect for businesses that need liquidity now.
                    </p>
                    <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">0s</div>
                            <div className="text-sm text-gray-500">Wait Time</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">24x7</div>
                            <div className="text-sm text-gray-500">Access</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-gray-500">Liquidity</div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/wire_hero.png"
                            alt="Instant Settlements"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: Zap, title: "Real-time Access", desc: "Funds are available in your bank account within seconds of the transaction." },
                    { icon: Smartphone, title: "UPI Power", desc: "Leverage the ubiquity of UPI for seamless customer payments." },
                    { icon: CheckCheck, title: "High Reliability", desc: "Direct integrations with top banks ensure 99.9% uptime for settlements." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-pink-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
