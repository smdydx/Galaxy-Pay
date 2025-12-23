import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftRight, Building, Clock, Globe } from "lucide-react";

export default function Wire() {
    return (
        <PageTemplate title="Wire Transfers" subtitle="Automated, secure, and fast wire transfers for your high-value business transactions.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Fast Global <br /> Settlements</h2>
                    <p className="text-gray-400 text-lg">
                        Move money across borders with ease. Our Wire solution offers competitive exchange rates, real-time tracking, and automated reconciliation for all your international and domestic high-value transfers.
                    </p>
                    <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">100+</div>
                            <div className="text-sm text-gray-500">Countries</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-gray-500">Processing</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">0%</div>
                            <div className="text-sm text-gray-500">Hidden Fees</div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/wire_hero.png"
                            alt="Global Wire Transfers"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: Globe, title: "Global Reach", desc: "Send payments to over 100 countries in local currencies." },
                    { icon: Clock, title: "Real-time Tracking", desc: "Track your funds at every step of the journey with live updates." },
                    { icon: Building, title: "Enterprise Grade", desc: "Built for high-volume, high-value corporate treasury needs." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
