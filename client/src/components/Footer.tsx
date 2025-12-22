import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-white/5 backdrop-blur-lg pt-20 pb-10 relative overflow-hidden">
      {/* Glow effect for footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
                B
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                BIDUAPAY<span className="text-purple-400">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Helping Indian businesses grow with full-stack payment solutions.
              Accept payments, manage subscriptions, and automate payouts with our robust platform.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                { label: "Payment Gateway", href: "/products/gateway" },
                { label: "Payment Links", href: "/products/links" },
                { label: "Wire", href: "/products/wire" },
                { label: "Smart Collect", href: "/products/collect" },
                { label: "FeesBuzz", href: "/products/feesbuzz" },
                { label: "InstaCollect", href: "/products/insta" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Partners", href: "/partners" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600" />
              <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BIDUAPAY Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-400 text-sm">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
