import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "Payment Gateway", href: "/products/gateway" },
      { label: "Payment Links", href: "/products/links" },
      { label: "Payment Buttons", href: "/products/buttons" },
      { label: "Wire", href: "/products/wire" },
      { label: "Smart Collect", href: "/products/collect" },
      { label: "FeesBuzz", href: "/products/feesbuzz" },
      { label: "InstaCollect", href: "/products/insta" },
      { label: "Payouts", href: "/products/payouts" },
      { label: "International Payments", href: "/products/international" },
      { label: "Subscriptions", href: "/products/subscriptions" },
    ]
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    submenu: [
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Education", href: "/industries/education" },
      { label: "Financial Services", href: "/industries/financial" },
      { label: "SaaS", href: "/industries/saas" },
    ]
  },
  {
    label: "Developers",
    href: "/developers",
    submenu: [
      { label: "API Reference", href: "/developers/docs" },
      { label: "SDKs", href: "/developers/sdk" },
      { label: "Plugins", href: "/developers/plugins" },
      { label: "Integration Guide", href: "/developers/guide" },
    ]
  },
  {
    label: "Company",
    href: "/about",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ]
  },
  {
    label: "Pricing",
    href: "/pricing",
    submenu: []
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-background/80 backdrop-blur-md border-b border-white/10 h-20" : "bg-transparent h-24"
        }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="BiduaPay Logo" className="h-25 md:h-50 w-auto" />
        </Link>

        {/* Desktop Links with Submenus */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative flex items-center gap-1 py-2"
              >
                {item.label}
                {item.submenu.length > 0 && (
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                )}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </Link>

              {/* Submenu */}
              {item.submenu.length > 0 && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/auth">
            <Button variant="ghost" className="text-white hover:text-purple-300 hover:bg-white/5">
              Login
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.submenu.length > 0 ? (
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                  className="w-full text-left text-lg font-medium text-gray-300 hover:text-white py-3 border-b border-white/5 flex justify-between items-center"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="block w-full text-left text-lg font-medium text-gray-300 hover:text-white py-3 border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}

              {/* Mobile Submenu */}
              {item.submenu.length > 0 && openSubmenu === item.label && (
                <div className="bg-white/5 pl-4">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className="block text-sm text-gray-400 hover:text-white py-2 border-b border-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
            <Link href="/auth">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setMobileMenuOpen(false)}>
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
