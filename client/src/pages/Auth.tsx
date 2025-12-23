import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Phone, ArrowRight, Chrome, Shield, Zap, CreditCard } from "lucide-react";

export default function Auth() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 lg:p-8">
            <GalaxyBackground />

            {/* Decorative gradient blurs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* LEFT SIDE - Branding & Features (Hidden on mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:flex lg:w-1/2 flex-col items-start space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                                Welcome to the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">payments</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-md">
                                Join thousands of businesses using BIDUAPAY for seamless, secure payment processing.
                            </p>
                        </div>

                        {/* Feature highlights */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Bank-Grade Security</h3>
                                    <p className="text-gray-500 text-sm">256-bit encryption & PCI-DSS compliant</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Instant Settlements</h3>
                                    <p className="text-gray-500 text-sm">Get your money within 24 hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">150+ Payment Modes</h3>
                                    <p className="text-gray-500 text-sm">Accept UPI, cards, wallets & more</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 max-w-[450px]"
                    >
                        <Card className="bg-black/40 backdrop-blur-xl border-white/10 overflow-hidden relative group">
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-1000">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <CardContent className="p-6 pt-8 relative z-10">
                                {/* Logo inside card */}
                                <div className="text-center mb-6">
                                    <Link href="/" className="inline-block group/logo">
                                        <img
                                            src="/logo.png"
                                            alt="BIDUAPAY"
                                            className="h-[100px] lg:h-[200px] w-auto mx-auto group-hover/logo:scale-105 transition-transform duration-300"
                                        />
                                    </Link>
                                </div>

                                <Tabs defaultValue="login" className="w-full">
                                    <TabsList className="grid grid-cols-2 mb-6 bg-white/5 border border-white/10 p-1 rounded-full">
                                        <TabsTrigger value="login" className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white">Login</TabsTrigger>
                                        <TabsTrigger value="signup" className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white">Sign Up</TabsTrigger>
                                    </TabsList>

                                    <AnimatePresence mode="wait">
                                        <TabsContent value="login">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <form onSubmit={handleSubmit} className="space-y-5">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="login-email">Email or Phone</Label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="login-email"
                                                                type="email"
                                                                placeholder="name@company.com"
                                                                className="bg-white/5 border-white/10 pl-10 h-12 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-center">
                                                            <Label htmlFor="login-password">Password</Label>
                                                            <a href="#" className="text-xs text-purple-400 hover:text-purple-300">Forgot?</a>
                                                        </div>
                                                        <div className="relative">
                                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="login-password"
                                                                type="password"
                                                                placeholder="••••••••"
                                                                className="bg-white/5 border-white/10 pl-10 h-12 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <Button className="w-full h-12 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-base transition-all group" disabled={isLoading}>
                                                        {isLoading ? "Signing in..." : (
                                                            <>
                                                                Sign In <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </>
                                                        )}
                                                    </Button>
                                                </form>
                                            </motion.div>
                                        </TabsContent>

                                        <TabsContent value="signup">
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-name">Full Name</Label>
                                                        <div className="relative">
                                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="signup-name"
                                                                placeholder="John Doe"
                                                                className="bg-white/5 border-white/10 pl-10 h-11 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-email">Email</Label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="signup-email"
                                                                type="email"
                                                                placeholder="john@example.com"
                                                                className="bg-white/5 border-white/10 pl-10 h-11 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-phone">Phone Number</Label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="signup-phone"
                                                                placeholder="+91 98765 43210"
                                                                className="bg-white/5 border-white/10 pl-10 h-11 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-password">Password</Label>
                                                        <div className="relative">
                                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                            <Input
                                                                id="signup-password"
                                                                type="password"
                                                                placeholder="Create a strong password"
                                                                className="bg-white/5 border-white/10 pl-10 h-11 rounded-xl focus:ring-purple-500/50"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <Button className="w-full h-12 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-base transition-all group mt-2" disabled={isLoading}>
                                                        {isLoading ? "Creating account..." : (
                                                            <>
                                                                Create Account <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </>
                                                        )}
                                                    </Button>
                                                </form>
                                            </motion.div>
                                        </TabsContent>
                                    </AnimatePresence>
                                </Tabs>

                                <div className="mt-6 text-center space-y-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-transparent px-4 text-gray-500">Or continue with</span></div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button variant="outline" className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 h-11 rounded-xl">
                                            <Chrome className="w-4 h-4 mr-2" /> Google
                                        </Button>
                                        <Button variant="outline" className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 h-11 rounded-xl">
                                            <svg className="w-4 h-4 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                            </svg>
                                            Apple
                                        </Button>
                                    </div>

                                    <p className="text-xs text-gray-500 px-4">
                                        By clicking continue, you agree to our <a href="#" className="underline hover:text-gray-300">Terms of Service</a> and <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
