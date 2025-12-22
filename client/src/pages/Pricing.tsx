import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Standard",
        price: "2%",
        description: "Perfect for startups and small businesses.",
        features: [
            "100+ Payment Modes",
            "Standard Integration",
            "Real-time Dashboard",
            "24/7 Support",
            "No setup fees"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large scale operations.",
        features: [
            "Everything in Standard",
            "Dedicated account manager",
            "Custom integration support",
            "Volume-based pricing",
            "Priority priority support"
        ],
        cta: "Contact Sales",
        popular: true
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen relative overflow-hidden text-foreground">
            <GalaxyBackground />
            <Navbar />

            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow"
                        >
                            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Pricing</span>
                        </motion.h1>
                        <p className="text-gray-400 text-lg">
                            No hidden charges. No setup fees. Only pay for what you use.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full z-10">
                                        Recommended
                                    </div>
                                )}
                                <Card className={`h-full bg-white/5 border-white/10 backdrop-blur-xl group-hover:border-purple-500/50 transition-all ${plan.popular ? 'ring-2 ring-purple-500/30' : ''}`}>
                                    <CardContent className="p-10 flex flex-col h-full">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <div className="mb-6">
                                            <span className="text-5xl font-bold text-white">{plan.price}</span>
                                            {plan.price !== "Custom" && <span className="text-gray-400 ml-2">per transaction</span>}
                                        </div>
                                        <p className="text-gray-400 mb-8">{plan.description}</p>

                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {plan.features.map(feature => (
                                                <li key={feature} className="flex items-center gap-3 text-gray-300">
                                                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button className={`w-full h-12 rounded-full font-bold ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-white text-black hover:bg-gray-200'}`}>
                                            {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
