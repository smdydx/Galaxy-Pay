import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen relative overflow-hidden text-foreground">
            <GalaxyBackground />
            <Navbar />

            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow"
                            >
                                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
                            </motion.h1>
                            <p className="text-gray-400 text-lg">
                                Have questions? Our team is here to help you scale your business.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1 space-y-8">
                                {[
                                    { icon: Mail, title: "Email Us", detail: "support@biduapay.com", sub: "Response within 24 hours" },
                                    { icon: Phone, title: "Call Us", detail: "+91 800 123 4567", sub: "Mon-Sat, 9AM-6PM" },
                                    { icon: MapPin, title: "Visit Us", detail: "Sector 44, Gurgaon", sub: "Haryana, India" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{item.title}</h3>
                                            <p className="text-lg text-gray-300 font-medium">{item.detail}</p>
                                            <p className="text-sm text-gray-500">{item.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
                            >
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Name</label>
                                            <Input className="bg-white/5 border-white/10 text-white" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email</label>
                                            <Input className="bg-white/5 border-white/10 text-white" type="email" placeholder="name@company.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Subject</label>
                                        <Input className="bg-white/5 border-white/10 text-white" placeholder="How can we help?" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Message</label>
                                        <Textarea className="bg-white/5 border-white/10 text-white min-h-[150px]" placeholder="Tell us more about your requirements..." />
                                    </div>
                                    <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                                        Send Message <Send size={18} />
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
