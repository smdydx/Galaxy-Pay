import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Copy, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentButtons() {
    return (
        <PageTemplate title="Payment Buttons" subtitle="Collect payments without a website or app. Just copy, paste and start collecting.">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Zero Coding. <br /> Maximum Conversions.</h2>
                    <p className="text-gray-400 text-lg">
                        Add a simple "Pay Now" button to your website in less than 5 minutes. No developer needed. Customizable to match your brand.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-semibold shadow-lg">
                            Create Button
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 rounded-full px-8 py-6 hover:bg-white/10">
                            View Demo
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/buttons_hero.png"
                            alt="Payment Button Design"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Code, title: "No Coding Required", desc: "Create a button in seconds from your dashboard. No technical knowledge needed." },
                    { icon: Copy, title: "Copy & Paste", desc: "Simply copy the generated HTML code and paste it anywhere on your blog or website." },
                    { icon: Zap, title: "Instant Activation", desc: "Start accepting payments immediately. Supports 150+ payment modes." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-8">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Steps / How it works */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">How it works</h2>
                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 border-t border-dashed border-white/20" />

                    {[
                        { step: "1", title: "Create Button", desc: "Customize the look and feel of your button from the dashboard." },
                        { step: "2", title: "Copy Code", desc: "Get the auto-generated HTML code snippet for your button." },
                        { step: "3", title: "Paste & Collect", desc: "Paste it on your webpage and start accepting payments securely." }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-lg">
                    Create Your First Button
                </Button>
            </div>
        </PageTemplate>
    );
}
