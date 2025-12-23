import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { motion } from "framer-motion";

interface PageTemplateProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export function PageTemplate({ title, subtitle, children }: PageTemplateProps) {
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
                            {title}
                        </motion.h1>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    {children ? (
                        <div className="space-y-20">
                            {children}
                        </div>
                    ) : (
                        <div className="min-h-[400px] flex items-center justify-center border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                            <p className="text-gray-500 italic">Content for {title} coming soon...</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
