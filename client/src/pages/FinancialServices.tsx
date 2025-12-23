import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ShieldCheck, Wallet, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinancialServices() {
    return (
        <PageTemplate title="Financial Services" subtitle="Trusted by NBFCs, Insurance companies, and Lenders for secure collections and disbursals.">

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Secure Collections <br /> & Disbursals</h2>
                    <p className="text-gray-400 text-lg">
                        Automate your loan repayments and insurance premium collections with India's most reliable payment stack.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-semibold shadow-lg">
                            Contact Sales
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/wire_hero.png"
                            alt="Financial Infrastructure"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8 p-8 border border-white/10 rounded-3xl bg-white/5">
                    <Building2 className="w-12 h-12 text-yellow-500" />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Loan Repayments</h3>
                        <p className="text-gray-400">Collect EMI payments via recurring mandates (e-NACH, UPI Autopay) to reduce bounce rates and improve collection efficiency.</p>
                    </div>
                </div>

                <div className="space-y-8 p-8 border border-white/10 rounded-3xl bg-white/5">
                    <ShieldCheck className="w-12 h-12 text-green-500" />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Insurance Premiums</h3>
                        <p className="text-gray-400">Enable policyholders to pay premiums instantly. Offer flexible payment options and instant policy issuance confirmation.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold text-white mb-12">Why leading BFSI players choose us?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {["Highest Security Standards", "PCI-DSS Compliant", "99.9% Uptime", "Dedicated Support"].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-purple-300 font-medium">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

        </PageTemplate>
    );
}
