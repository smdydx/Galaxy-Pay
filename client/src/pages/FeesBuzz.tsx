import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Receipt, CalendarClock } from "lucide-react";

export default function FeesBuzz() {
    return (
        <PageTemplate title="FeesBuzz" subtitle="The comprehensive fee management solution for educational institutions.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Simplify Fee <br /> Collections</h2>
                    <p className="text-gray-400 text-lg">
                        Designed for schools, colleges, and coaching centers. FeesBuzz streamlines the entire fee collection lifecycle from demand generation to reconciliation and receipt issuance.
                    </p>
                    <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">500+</div>
                            <div className="text-sm text-gray-500">Institutions</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">1M+</div>
                            <div className="text-sm text-gray-500">Students</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">3x</div>
                            <div className="text-sm text-gray-500">Faster Collection</div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/fees_buzz_hero.png"
                            alt="Education Fee Management"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: School, title: "Institution Dashboard", desc: "Centralized view of all fee structures, student records, and collection status." },
                    { icon: CalendarClock, title: "Automated Reminders", desc: "Send SMS and Email reminders to parents automatically before due dates." },
                    { icon: Receipt, title: "Digital Receipts", desc: "Instant automated receipt generation and distribution upon successful payment." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
