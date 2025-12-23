import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Phone, ArrowRight, Chrome } from "lucide-react";

export default function Auth() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-6">
            <GalaxyBackground />

            {/* Decorative gradient blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-[450px]"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
                            B
                        </div>
                        <span className="text-2xl font-display font-bold text-white tracking-tight">
                            BIDUAPAY<span className="text-purple-400">.</span>
                        </span>
                    </Link>
                    <p className="text-gray-400">Secure entry to your galactic payments</p>
                </div>

                <Card className="bg-black/40 backdrop-blur-xl border-white/10 overflow-hidden relative group">
                    {/* Professional background image with overlay */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <CardContent className="p-8 relative z-10">
                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid grid-cols-2 mb-8 bg-white/5 border border-white/10 p-1 rounded-full">
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
                                        <form onSubmit={handleSubmit} className="space-y-6">
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

                        <div className="mt-8 text-center space-y-4">
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
    );
}
