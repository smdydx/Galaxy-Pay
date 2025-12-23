import { PageTemplate } from "@/components/PageTemplate";

export default function Privacy() {
    return (
        <PageTemplate title="Privacy Policy" subtitle="Last updated: December 2024">
            <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include your name, email address, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, such as to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Facilitate payments and settlements.</li>
                        <li>Process and complete transactions, and send you related information, including transaction confirmations and invoices.</li>
                        <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                        <li>Respond to your comments, questions, and requests and provide customer service.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect specific information associated with you against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@galaxypay.com.
                    </p>
                </section>
            </div>
        </PageTemplate>
    );
}
