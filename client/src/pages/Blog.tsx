import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function Blog() {
    return (
        <PageTemplate title="Blog" subtitle="Insights, updates, and stories from the world of fintech and payments.">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "The Future of Digital Payments in India", date: "Oct 12, 2024", cat: "Trends" },
                    { title: "How to reduce checkout abandonment", date: "Sep 28, 2024", cat: "Growth" },
                    { title: "Introducing Galaxy Pay Subscriptions", date: "Sep 15, 2024", cat: "Product" },
                    { title: "Security best practices for e-commerce", date: "Aug 30, 2024", cat: "Security" },
                    { title: "Understanding UPI Autopay mandates", date: "Aug 10, 2024", cat: "Guides" },
                    { title: "Scaling your SaaS business globally", date: "Jul 22, 2024", cat: "Growth" }
                ].map((post, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer group h-full">
                        <div className="h-48 bg-gray-800 rounded-t-xl overflow-hidden relative">
                            {/* Placeholder generic abstract pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 group-hover:scale-105 transition-transform duration-500"></div>
                            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded uppercase tracking-wider font-bold">
                                {post.cat}
                            </span>
                        </div>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                <Calendar size={14} /> {post.date}
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{post.title}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </PageTemplate>
    );
}
