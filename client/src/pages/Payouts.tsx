import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Clock, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Payouts() {
    return (
        <PageTemplate title="Payouts" subtitle="Send money instantly to everyone. Automate transfers to bank accounts, UPI IDs, and cards.">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Instant Payouts <br /> for Modern Businesses</h2>
                    <p className="text-gray-400 text-lg">
                        Make bulk payouts to bank accounts, UPI IDs, and cards instantly. 24x7 settlements with the highest success rates in the industry.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-semibold shadow-lg">
                            Start Sending Money
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/wire_hero.png"
                            alt="Payouts Dashboard"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Send, title: "Instant Transfers", desc: "Send money 24x7, even on bank holidays." },
                    { icon: Users, title: "Bulk Payouts", desc: "Process thousands of payouts in a single file upload." },
                    { icon: Clock, title: "Real-time Updates", desc: "Get instant status updates for all your transactions." },
                    { icon: ShieldCheck, title: "Secure & Reliable", desc: "Bank-grade security ensures your funds are safe." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                <feature.icon size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Use Cases */}
            <div className="border border-white/10 rounded-3xl overflow-hidden">
                <div className="bg-white/5 p-8 border-b border-white/10">
                    <h2 className="text-2xl font-bold text-white">Built for every payout need</h2>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {[
                        { title: "Vendor Payments", desc: "Automate payments to your suppliers and service providers on time." },
                        { title: "Employee Salaries", desc: "Disburse salaries and reimbursements instantly to employees." },
                        { title: "Customer Refunds", desc: "Process instant refunds to improve customer loyalty and trust." }
                    ].map((useCase, i) => (
                        <div key={i} className="p-8 hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold text-purple-400 mb-3">{useCase.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{useCase.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Snippet */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-white">Developer Friendly API</h2>
                    <p className="text-gray-400 text-lg">Integrate Payouts directly into your product workflow with our robust and easy-to-use APIs.</p>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Read API Docs</Button>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="bg-[#0d1117] rounded-xl border border-white/10 p-6 font-mono text-sm text-gray-300 overflow-x-auto shadow-2xl">
                        <pre>{`// Initiate a Payout
const payout = await client.payouts.create({
  "account_number": "78910111213",
  "fund_account_id": "fa_00000000000001",
  "amount": 100000,
  "currency": "INR",
  "mode": "IMPS",
  "purpose": "vendor_bill"
});`}</pre>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
