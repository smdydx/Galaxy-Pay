import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Trophy, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Partners() {
    return (
        <PageTemplate title="Partner Program" subtitle="Grow your business by partnering with Galaxy Pay. Earn commissions and deliver value to your customers.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Better Together</h2>
                    <p className="text-gray-400 text-lg">
                        Join our ecosystem of agencies, platforms, and developers. Whether you are an ERP, an e-commerce platform, or a digital agency, we have a partnership model for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold">
                            Become a Partner
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                        <img
                            src="/assets/gateway_hero.png"
                            alt="Partner Ecosystem"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: DollarSign, title: "Attractive Commission", desc: "Earn recurring revenue sharing on every transaction your merchants process." },
                    { icon: Handshake, title: "Dedicated Support", desc: "Get a dedicated partnership manager to help you onboard and grow." },
                    { icon: Users, title: "Co-Marketing", desc: "Leverage our brand assets and reach to grow your customer base together." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8 text-center">
                            <feature.icon className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
