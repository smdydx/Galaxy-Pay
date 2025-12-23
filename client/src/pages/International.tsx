import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, RefreshCw, CreditCard, Shield } from "lucide-react";

export default function International() {
    return (
        <PageTemplate title="International Payments" subtitle="Go global. Accept payments from customers anywhere in the world in 100+ currencies.">

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-white leading-tight">Sell to customers <br /> <span className="text-purple-400">worldwide</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Don't let borders limit your business. With our International Payment Gateway, you can accept payments in USD, EUR, GBP, and 100+ other currencies. We handle the currency conversion and settlement in INR directly to your bank account.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Best-in-class success rates for international cards",
                            "Real-time currency conversion",
                            "Settlement in INR",
                            "Compliant with all regulations"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                                    <Shield size={14} />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/wire_hero.png"
                            alt="International Payments"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Supported Regions */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-8">Supported across major regions</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["North America", "Europe", "South East Asia", "Middle East", "Australia", "Africa", "Latin America"].map((region) => (
                        <span key={region} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                            {region}
                        </span>
                    ))}
                </div>
            </div>

        </PageTemplate>
    );
}
