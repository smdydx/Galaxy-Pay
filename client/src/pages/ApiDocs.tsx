import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";

export default function ApiDocs() {
    return (
        <PageTemplate title="API Reference" subtitle="Comprehensive guides and documentation to help you start working with Galaxy Pay APIs as quickly as possible.">

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Navigation Mockup */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 hidden lg:block h-fit">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Resources</div>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="text-white font-medium border-l-2 border-purple-500 pl-3">Authentication</li>
                        <li className="pl-3 hover:text-white cursor-pointer">Errors</li>
                        <li className="pl-3 hover:text-white cursor-pointer">Orders</li>
                        <li className="pl-3 hover:text-white cursor-pointer">Payments</li>
                        <li className="pl-3 hover:text-white cursor-pointer">Refunds</li>
                        <li className="pl-3 hover:text-white cursor-pointer">Webhooks</li>
                    </ul>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                        <p className="text-gray-400 mb-6">
                            Authenticate your API requests using Basic Auth. Use your Key ID as the username and Key Secret as the password.
                        </p>
                        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                            <div className="flex gap-2 mb-4">
                                <span className="text-purple-400">curl</span>
                                <span className="text-green-400">-u</span>
                                <span className="text-yellow-300">[YOUR_KEY_ID]:[YOUR_KEY_SECRET]</span>
                                <span className="text-blue-400">https://api.galaxypay.com/v1/orders</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
                        <p className="text-gray-400 mb-4">All API requests should be made to the following base URL:</p>
                        <code className="bg-white/10 px-3 py-1 rounded text-purple-300 font-mono">https://api.galaxypay.com/v1</code>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Postman Collection</h2>
                        <p className="text-gray-400 mb-6">Download our Postman collection to test the APIs instantly.</p>
                        <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-950">Run in Postman</Button>
                    </section>
                </div>
            </div>

        </PageTemplate>
    );
}
