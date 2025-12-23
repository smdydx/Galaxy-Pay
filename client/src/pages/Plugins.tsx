import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plugins() {
    return (
        <PageTemplate title="Ecommerce Plugins" subtitle="Seamlessly integrate with your favorite e-commerce platforms. No coding required.">

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "WooCommerce", desc: "Official plugin for WordPress/WooCommerce. Supports subscriptions.", icon: ShoppingBag },
                    { title: "Shopify", desc: "High conversion checkout for your Shopify store. Easy installation.", icon: ShoppingCart },
                    { title: "Magento", desc: "Enterprise grade payment extension for Adobe Commerce.", icon: Globe },
                    { title: "Opencart", desc: "Secure payment gateway extension for Opencart stores.", icon: ShoppingCart },
                    { title: "Prestashop", desc: "Accept payments on your Prestashop site in minutes.", icon: ShoppingBag },
                    { title: "Wix", desc: "Native integration for Wix websites and stores.", icon: Globe }
                ].map((plugin, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                        <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <plugin.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{plugin.title}</h3>
                            <p className="text-gray-400 text-sm mb-6">{plugin.desc}</p>
                            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Download Plugin</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
