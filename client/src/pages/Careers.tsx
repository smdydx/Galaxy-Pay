import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Zap } from "lucide-react";

export default function Careers() {
    return (
        <PageTemplate title="Careers" subtitle="Come build the future of finance with us. We are looking for passionate problem solvers.">

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Join the <br /> Fintech Revolution</h2>
                    <p className="text-gray-400 text-lg">
                        We are building the финансовый backbone of the internet. Join our team of passionate engineers, designers, and product thinkers.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-semibold shadow-lg">
                            View Openings
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/assets/buttons_hero.png"
                            alt="Careers at Galaxy Pay"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Culture */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                    { icon: Zap, title: "Impact", desc: "Work on products used by millions of people daily." },
                    { icon: Heart, title: "Wellness", desc: "Comprehensive health insurance and wellness benefits." },
                    { icon: Users, title: "Diversity", desc: "An inclusive workplace where everyone belongs." }
                ].map((item, i) => (
                    <div key={i} className="text-center p-6">
                        <item.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Open Positions */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
                <div className="space-y-4">
                    {[
                        { role: "Senior Frontend Engineer", dept: "Engineering", loc: "Bangalore" },
                        { role: "Product Manager", dept: "Product", loc: "Gurgaon" },
                        { role: "Backend Developer (Go/Python)", dept: "Engineering", loc: "Bangalore" },
                        { role: "Sales Development Rep", dept: "Sales", loc: "Mumbai" }
                    ].map((job, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{job.role}</h3>
                                <p className="text-gray-400">{job.dept} · {job.loc}</p>
                            </div>
                            <Button variant="outline" className="border-white/20 text-white">Apply Now</Button>
                        </div>
                    ))}
                </div>
            </div>

        </PageTemplate>
    );
}
