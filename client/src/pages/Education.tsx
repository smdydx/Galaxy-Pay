import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FileText, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Education() {
    return (
        <PageTemplate title="Education" subtitle="Digital fee collection solutions for Schools, Colleges, and EdTech platforms.">

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Streamline Fee <br /> Collection</h2>
                    <p className="text-gray-400 text-lg">
                        Say goodbye to long queues and manual reconciliation. Offer parents the convenience to pay fees online via UPI, Credit/Debit Cards, Net Banking, and EMI.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-semibold shadow-lg">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/fees_buzz_hero.png"
                            alt="Education Payments"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: GraduationCap, title: "Student Ledger", desc: "Maintain digital records of every student's payments and dues." },
                    { icon: Bell, title: "Automated Reminders", desc: "Send SMS and Email reminders to parents for upcoming due dates." },
                    { icon: FileText, title: "Fee Receipts", desc: "Instant digital receipt generation upon successful payment." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-8 text-center pt-12">
                            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-6">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
