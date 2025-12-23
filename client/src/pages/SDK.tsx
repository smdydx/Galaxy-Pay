import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Monitor } from "lucide-react";

export default function SDK() {
    return (
        <PageTemplate title="SDKs & Libraries" subtitle="Official SDKs to integrate Galaxy Pay into your mobile and web applications.">

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Smartphone className="text-blue-400" /> Mobile SDKs
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Android", ver: "v4.2.1", lang: "Java / Kotlin" },
                        { title: "iOS", ver: "v3.0.5", lang: "Swift / Obj-C" },
                        { title: "React Native", ver: "v2.1.0", lang: "JavaScript" },
                        { title: "Flutter", ver: "v1.8.2", lang: "Dart" }
                    ].map((sdk, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white">{sdk.title}</h3>
                                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">{sdk.ver}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{sdk.lang}</p>
                                <a href="#" className="text-blue-400 text-sm font-medium hover:underline">View Documentation →</a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Monitor className="text-purple-400" /> Server-side SDKs
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Node.js", ver: "v2.0.0", color: "text-green-400" },
                        { title: "Python", ver: "v1.5.0", color: "text-yellow-400" },
                        { title: "PHP", ver: "v3.1.2", color: "text-purple-400" },
                        { title: "Java", ver: "v1.2.0", color: "text-red-400" },
                        { title: ".NET", ver: "v1.1.0", color: "text-blue-400" }
                    ].map((sdk, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                            <h3 className={`font-bold ${sdk.color}`}>{sdk.title}</h3>
                            <span className="text-xs text-gray-500">{sdk.ver}</span>
                        </div>
                    ))}
                </div>
            </div>

        </PageTemplate>
    );
}
