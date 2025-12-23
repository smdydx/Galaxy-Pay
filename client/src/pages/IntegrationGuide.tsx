import { PageTemplate } from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Book, Terminal, Layers } from "lucide-react";

export default function IntegrationGuide() {
    return (
        <PageTemplate title="Integration Guide" subtitle="Comprehensive documentation to help you integrate our payments stack.">

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-8">
                        <Code2 className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                        <h2 className="text-2xl font-bold text-white mb-2">Web Integration</h2>
                        <p className="text-gray-400 mb-4">Add payments to your website using our Standard Checkout, Custom UI, or Plugins.</p>
                        <div className="flex gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">JavaScript</span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">React</span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">PHP</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-8">
                        <Terminal className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                        <h2 className="text-2xl font-bold text-white mb-2">Mobile SDKs</h2>
                        <p className="text-gray-400 mb-4">Native SDKs for iOS and Android to accept payments within your mobile applications.</p>
                        <div className="flex gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Android</span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">iOS</span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Flutter</span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">React Native</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: Book, title: "API Reference", desc: "Detailed API endpoints, request/response examples." },
                    { icon: Layers, title: "Server Side", desc: "Backend integration for validating payments via webhooks." },
                    { icon: Code2, title: "Test Mode", desc: "Test your integration using dummy cards and netbanking." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <item.icon className="w-8 h-8 text-gray-400 mt-1" />
                        <div>
                            <h3 className="font-bold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </PageTemplate>
    );
}
