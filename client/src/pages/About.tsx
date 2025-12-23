import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Users } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen relative overflow-hidden text-foreground">
            <GalaxyBackground />
            <Navbar />

            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-display font-bold mb-8 text-glow"
                        >
                            Driving the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Digital Payments</span>
                        </motion.h1>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            BIDUAPAY is India's fastest growing full-stack payment solutions provider.
                            We empower businesses of all sizes with secure, reliable, and innovative financial technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                        {[
                            { icon: Shield, title: "Trust", desc: "Security is at the heart of everything we build." },
                            { icon: Zap, title: "Speed", desc: "Engineered for high-frequency, low-latency transactions." },
                            { icon: Globe, title: "Scale", desc: "Infrastructure that grows with your business ambition." },
                            { icon: Users, title: "Partnership", desc: "Dedicated support for every stage of your journey." }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 mx-auto mb-6">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                                <p className="text-gray-400 text-sm">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 rounded-3xl backdrop-blur-xl h-full flex flex-col justify-center">
                            <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                To provide Indian merchants with a world-class payment infrastructure that eliminates technical barriers and allows them to focus purely on growth. We believe that every transaction is an opportunity for a business to build trust with its customers.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div><div className="text-4xl font-bold text-purple-400 mb-1">10M+</div><div className="text-gray-500 text-sm font-medium uppercase tracking-widest">Transactions</div></div>
                                <div><div className="text-4xl font-bold text-blue-400 mb-1">50K+</div><div className="text-gray-500 text-sm font-medium uppercase tracking-widest">Merchants</div></div>
                                <div><div className="text-4xl font-bold text-pink-400 mb-1">99.9%</div><div className="text-gray-500 text-sm font-medium uppercase tracking-widest">Uptime</div></div>
                            </div>
                        </div>
                        <div className="relative group h-full">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full min-h-[400px]">
                                <img
                                    src="/assets/gateway_hero.png"
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
