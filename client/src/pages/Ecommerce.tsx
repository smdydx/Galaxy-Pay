import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, CreditCard, BarChart } from "lucide-react";

export default function Ecommerce() {
    return (
        <PageTemplate title="E-commerce" subtitle="The complete payments stack for your online store. Higher success rates and seamless checkout.">

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">Powering India's D2C Brands</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Whether you are building on Shopify, WooCommerce, or a custom stack, our checkout integrates seamlessly to give your customers the best buying experience.
                    </p>
                    <div className="flex gap-4">
                        {["Shopify", "WooCommerce", "Magento", "Wix"].map(platform => (
                            <span key={platform} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm">
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Visual Representation of Checkout */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/payment_links_hero.png"
                            alt="E-commerce Checkout"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { icon: ShoppingCart, title: "Checkout", desc: "Native, seamless, and optimized for mobile." },
                    { icon: Truck, title: "COD Intelligence", desc: "Reduce RTOs with our AI-based risk engine." },
                    { icon: CreditCard, title: "Saved Cards", desc: "One-click checkout for returning users." },
                    { icon: BarChart, title: "Analytics", desc: "Deep insights into your sales and funnel." }
                ].map((feature, i) => (
                    <Card key={i} className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                            <feature.icon className="w-10 h-10 text-pink-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
