import { useState } from "react";
import { LucideIcon } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
    image: string;
}

interface FeaturesCarouselProps {
    features: Feature[];
}

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
    return (
        <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{ loop: true, align: "center" }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
        >
            <CarouselContent className="-ml-4">
                {features.map((feature, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="relative h-[400px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                                    <feature.icon size={28} />
                                </div>

                                {/* Text */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-display font-bold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-purple-400 rounded-full transition-all" />
                <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-purple-400 rounded-full transition-all" />
            </div>
        </Carousel>
    );
}
