import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Wallet, Smartphone, History, CheckCircle } from "lucide-react";

export default function SmartCollect() {
    return (
        <PageTemplate title="Smart Collect" subtitle="Automate your collections with virtual accounts and UPI IDs for every customer.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Automated <br /> Reconciliation</h2>
                    <p className="text-gray-400 text-lg">
                        Eliminate manual tracking. Assign unique Virtual Accounts and UPI IDs to every customer and automatically map every incoming payment to the right payer.
                    </p>
                    <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-gray-500">Auto-Match</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">0</div>
                            <div className="text-sm text-gray-500">Manual Effort</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">Instant</div>
                            <div className="text-sm text-gray-500">Notifications</div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/smart_collect_hero.png"
                            alt="Smart Collection Vault"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: QrCode, title: "Dynamic QR", desc: "Generate unique QR codes for every transaction or customer for easy reconciliation." },
                    { icon: Wallet, title: "Virtual Accounts", desc: "Create unlimited virtual bank account numbers mapped to your main account." },
                    { icon: Smartphone, title: "UPI Intent", desc: "Seamless deep-linking with all major UPI apps for faster payments." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-teal-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit ml-auto mt-1"><CheckCircle size={10} /> {children}</span>
}
