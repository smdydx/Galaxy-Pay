import { PageTemplate } from "@/components/PageTemplate";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SaaS() {
    return (
        <PageTemplate title="SaaS" subtitle="Subscription billing engine for Global SaaS companies.">

            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Scale your SaaS <br /> global from Day 1.</h2>
                    <p className="text-gray-400 text-lg">Handle complex recurring billing logic, proration, upgrades/downgrades, and taxes automatically. Focus on your product, not your billing infrastructure.</p>
                    <ul className="space-y-3">
                        {["Global Tax Compliance", "Automated Dunning Management", "Self-serve Customer Portal", "Usage-based Billing"].map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <Check size={12} />
                                </div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-4 bg-white text-black hover:bg-gray-200">Talk to Sales</Button>
                </div>
                <div className="md:w-1/2">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/assets/gateway_hero.png"
                                alt="SaaS Billing Engine"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </PageTemplate>
    );
}
