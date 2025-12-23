import { PageTemplate } from "@/components/PageTemplate";

export default function Terms() {
    return (
        <PageTemplate title="Terms of Use" subtitle="Please read these terms carefully before using our services.">
            <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Galaxy Pay's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Modify or copy the materials.</li>
                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                        <li>Attempt to decompile or reverse engineer any software contained on Galaxy Pay's website.</li>
                        <li>Remove any copyright or other proprietary notations from the materials.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                    <p>
                        The materials on Galaxy Pay's website are provided on an 'as is' basis. Galaxy Pay makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                    <p>
                        In no event shall Galaxy Pay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Galaxy Pay's website.
                    </p>
                </section>
            </div>
        </PageTemplate>
    );
}
