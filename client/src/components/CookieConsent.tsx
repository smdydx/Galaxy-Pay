import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consented = localStorage.getItem("cookie-consent");
        if (!consented) {
            // Show popup after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 md:max-w-md w-auto"
                >
                    <div className="bg-[#0f111a]/90 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 shadow-2xl shadow-purple-900/10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-full shrink-0">
                                <Cookie className="w-6 h-6 text-purple-400" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3 className="font-semibold text-white">We use cookies</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    We use cookies to enhance your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking “Accept”, you consent to our use of cookies.
                                </p>
                            </div>
                            <button
                                onClick={handleDecline}
                                className="text-gray-500 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex gap-3 mt-6 justify-end">
                            <Button
                                variant="outline"
                                onClick={handleDecline}
                                className="border-white/10 hover:bg-white/5 text-gray-300 hover:text-white"
                            >
                                Decline
                            </Button>
                            <Button
                                onClick={handleAccept}
                                className="bg-purple-600 hover:bg-purple-700 text-white"
                            >
                                Accept Cookies
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
