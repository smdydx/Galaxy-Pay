import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface FeaturesCarouselProps {
    features: Feature[];
}

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
    const [activeindex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-[850px] lg:h-[450px] w-full max-w-6xl mx-auto">
            {features.map((feature, index) => {
                const isActive = activeindex === index;

                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                            "relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10",
                            isActive ? "lg:flex-[3] flex-[3]" : "lg:flex-[1] flex-[1]"
                        )}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {/* Background Image/Gradient for Active State */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40" />
                                    <img
                                        src={`https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop`}
                                        alt="Background"
                                        className="h-full w-full object-cover opacity-10"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className={cn(
                            "relative z-10 flex h-full transition-all duration-300",
                            isActive
                                ? "flex-col justify-between p-4 lg:p-8"
                                : "flex-row items-center gap-4 p-4 lg:flex-col lg:justify-between lg:p-4"
                        )}>
                            {/* Icon */}
                            <motion.div
                                layout="position"
                                className={cn(
                                    "flex items-center justify-center rounded-xl border border-white/10 transition-colors duration-300 flex-shrink-0",
                                    isActive
                                        ? "h-14 w-14 bg-gradient-to-br from-purple-600 to-blue-600 text-white"
                                        : "h-12 w-12 bg-white/5 text-gray-400"
                                )}
                            >
                                <feature.icon size={isActive ? 28 : 24} />
                            </motion.div>

                            {/* Content */}
                            <div className={cn("space-y-2", !isActive && "lg:text-center w-full")}>
                                <motion.h3
                                    layout="position"
                                    className={cn(
                                        "font-display font-bold text-white transition-all duration-300",
                                        isActive ? "text-2xl lg:text-3xl" : "text-sm whitespace-nowrap lg:whitespace-normal lg:text-sm"
                                    )}
                                >
                                    {feature.title}
                                </motion.h3>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ delay: 0.1, duration: 0.2 }}
                                            className="text-base text-gray-300 lg:text-lg leading-relaxed"
                                        >
                                            {feature.desc}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Active Indicator (optional arrow or dot) */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute top-6 right-6 lg:top-8 lg:right-8"
                                >
                                    <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
