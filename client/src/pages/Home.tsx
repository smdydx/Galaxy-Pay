import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  Lock,
  Globe,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Code
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const paymentMethods = [
  { id: "cards", title: "Credit & Debit Cards", desc: "Accept payments through credit and debit cards on BIDUAPAY payment gateway.", image: "/payment-methods/cards.png" },
  { id: "upi", title: "UPI", desc: "BIDUAPAY offers UPI option to collect payments via UPI apps.", image: "/payment-methods/upi.png" },
  { id: "netbanking", title: "Netbanking", desc: "Accept payments from 50+ banks including SBI, ICICI, HDFC, Axis.", image: "/payment-methods/netbanking.png" },
  { id: "wallets", title: "Mobile Wallets", desc: "Accept payments through various mobile wallets.", image: "/payment-methods/wallets.png" },
  { id: "emi", title: "EMI Plans", desc: "Make products affordable through easy EMI Plans.", image: "/payment-methods/emi.png" },
  { id: "bnpl", title: "Buy Now Pay Later", desc: "Let customers Buy Now and Pay Later.", image: "/payment-methods/bnpl.png" },
  { id: "bank", title: "Bank Transfer", desc: "Accept offline NEFT, RTGS and IMPS transfers.", image: "/payment-methods/bank.png" },
  { id: "autodebit", title: "Auto Debit", desc: "Enable auto debit for recurring payments via eNACH or UPI.", image: "/payment-methods/autodebit.png" }
];

const brands = [
  { name: "Housing", logo: "/brands/housing.png" },
  { name: "BigBasket", logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bigbasket.com&size=256" }, // Google-served high-res icon
  { name: "DLF", logo: "/brands/dlf.png" },
  { name: "Brigade", logo: "/brands/brigade.png" },
  { name: "IRCTC", logo: "/brands/irctc.png" },
  { name: "Tata Play", logo: "/brands/tataplay.png" },
];

const sliderImages = [
  "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl w-[calc(100%+3rem)] -ml-6 lg:w-full lg:ml-0 h-[350px] lg:h-auto lg:aspect-video flex items-center justify-center overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={sliderImages[currentIndex]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="text-center relative z-10 pb-8">
        <Smartphone className="w-12 h-12 lg:w-16 lg:h-16 text-purple-400 mx-auto mb-4" />
        <p className="text-white font-medium text-sm lg:text-base">iFrame Checkout Preview</p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedPayment, setSelectedPayment] = useState("cards");

  return (
    <div className="min-h-screen relative overflow-hidden text-foreground">
      <GalaxyBackground />
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 space-y-8 gpu-accelerated performance-hints">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75 gpu-accelerated"></span><span className="relative h-2 w-2 bg-purple-500 rounded-full"></span></span>
                Next Gen Payment Solutions
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-glow">
                Best Payment Gateway for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Online Payments</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Accept online payments with 150+ payment modes. Highest success rates, lowest fees, and seamless integration. Trusted by India's leading brands.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/auth">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-all font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Sign up now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/developers/guide">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/5 backdrop-blur-sm">
                    See how it works
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:w-1/2 relative min-h-[500px] flex items-center">
              <div className="relative w-full group/slider">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] animate-pulse" />

                <Carousel
                  className="w-full"
                  opts={{ loop: true }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {/* SLIDE 1: Existing Floating Cards */}
                    <CarouselItem>
                      <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                        <motion.div
                          className="w-[85%] h-[45%] sm:h-[50%] absolute top-[10%] left-[0%] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden group gpu-accelerated performance-hints"
                          animate={{ y: [0, -15, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                            <img src="https://images.unsplash.com/photo-1614850523296-e8c041de83a4?q=80&w=2940&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="relative z-10 flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-80" />
                            <div className="text-right">
                              <div className="text-xs text-gray-400 font-medium tracking-tight">Monthly Volume</div>
                              <div className="text-2xl font-bold text-white tracking-tight">₹ 42,85,000</div>
                            </div>
                          </div>
                          <div className="relative z-10">
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 2, delay: 1 }}
                              />
                            </div>
                            <div className="mt-2 text-[10px] text-gray-400">75% of your target reached</div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="w-[75%] sm:w-[65%] h-[35%] sm:h-[40%] absolute bottom-[15%] right-[0%] bg-[#0f172a]/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 overflow-hidden group gpu-accelerated performance-hints"
                          animate={{ y: [0, 15, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="relative z-10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                              <Zap size={16} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white">Payment Success</div>
                              <div className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Verified Securely</div>
                            </div>
                          </div>
                          <div className="relative z-10 flex justify-between items-center text-sm">
                            <span className="text-gray-400">Net Settled</span>
                            <span className="text-white font-mono font-bold">+ ₹85,240.00</span>
                          </div>
                        </motion.div>
                      </div>
                    </CarouselItem>

                    {/* SLIDE 2: Analytics Visualization */}
                    <CarouselItem>
                      <div className="relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center p-4">
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative group">
                          <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                            className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-[10s]"
                            alt="Analytics"
                          />
                          <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="space-y-4">
                              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold tracking-widest uppercase">Real-time Dashboard</div>
                              <h3 className="text-3xl font-bold text-white leading-tight">Actionable Insights</h3>
                              <p className="text-gray-400 text-sm max-w-sm">Gain deep clarity into your payment flows, settlement cycles, and customer behavior with our unified portal.</p>
                              <div className="flex items-end gap-1 h-12">
                                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
                                  <motion.div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-sm"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h * 100}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>

                    {/* SLIDE 3: Security & Global Network */}
                    <CarouselItem>
                      <div className="relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center p-4">
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative group">
                          <img
                            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2806&auto=format&fit=crop"
                            className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-[10s]"
                            alt="Global Network"
                          />
                          <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                            <div className="w-20 h-20 rounded-full border-2 border-purple-500/50 flex items-center justify-center mb-6 animate-pulse bg-purple-500/5">
                              <ShieldCheck className="w-10 h-10 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Enterprise-Grade Security</h3>
                            <p className="text-gray-400 text-sm max-w-xs mb-8 leading-relaxed">PCI-DSS Level 1 compliant infrastructure protecting every transaction across our global network with 256-bit encryption.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm"><div className="text-purple-400 font-bold text-xl">99.99%</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Uptime SLA</div></div>
                              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm"><div className="text-blue-400 font-bold text-xl">256-bit</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">AES Security</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>

                  {/* Slider Navigation */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                    <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-purple-400 rounded-2xl transition-all" />
                    <div className="w-12 h-[1px] bg-white/10" />
                    <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-purple-400 rounded-2xl transition-all" />
                  </div>
                </Carousel>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Trusted Brands */}
      <section className="py-20 px-6 border-y border-white/5 bg-black/20 overflow-hidden relative group">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-display font-bold text-white mb-16 opacity-50">Trusted by India's leading brands</h2>

          <div className="flex relative items-center">
            {/* Infinite Marquee Container */}
            <motion.div
              className="flex gap-20 items-center whitespace-nowrap gpu-accelerated performance-hints"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 transition-all duration-500 hover:scale-110 group/brand">
                  <div className="h-20 w-40 flex items-center justify-center p-4 rounded-2xl bg-white/10 border border-white/10 group-hover/brand:border-purple-500/30 group-hover/brand:bg-white/15 transition-all shadow-2xl opacity-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase opacity-40 group-hover/brand:opacity-100 transition-opacity whitespace-nowrap">{brand.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Fades for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 hidden sm:block" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 hidden sm:block" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Easily accept online payments</h2>
            <p className="text-gray-400 text-lg">Secure and reliable payment processing with industry-best features.</p>
          </div>

          <FeaturesCarousel features={[
            { icon: CreditCard, title: "150+ payment options", desc: "Credit cards, debit cards, UPI, wallets, EMI & BNPL." },
            { icon: Zap, title: "Best success rate", desc: "Higher success rates for better customer experience." },
            { icon: Code, title: "Easy integration", desc: "Developer friendly APIs with detailed documentation." },
            { icon: Smartphone, title: "iFrame checkout", desc: "Embed checkout page on your website or app." },
            { icon: BarChart3, title: "Unified dashboard", desc: "Real-time data and detailed payment insights." },
            { icon: CheckCircle, title: "24/7 support", desc: "Dedicated technical support for integrations." }
          ]} />
        </div>
      </section>
      {/* SECTION 4: Seamless Checkout */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Seamless checkouts with BIDUAPAY</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Embed iFrame checkout with customised branding and 150+ payment modes. Accept payments from credit cards to UPI and wallets seamlessly.</p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 font-semibold">
              View demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="lg:w-1/2 relative group">
            <Slider />
          </div>
        </div>
      </section>

      {/* SECTION 5: Payment Methods */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">150+ Payment Methods</h2>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {paymentMethods.map(method => (
              <Button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                variant={selectedPayment === method.id ? "default" : "outline"}
                className={selectedPayment === method.id ? "bg-purple-600 text-white" : "border-white/20 text-gray-300"}
              >
                {method.title}
              </Button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            {paymentMethods.map(method => (
              selectedPayment === method.id && (
                <motion.div key={method.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <CardContent className="p-0 flex flex-col md:flex-row">
                      <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-white/5">
                        <img
                          src={method.image}
                          alt={method.title}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{method.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Coupons */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Coupons & Offers</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/5 border-white/10"><CardContent className="p-8"><h3 className="text-xl font-bold text-white mb-4">Brand Coupons</h3><p className="text-gray-400">Reward customers with coupons and increase website stickiness.</p></CardContent></Card>
            <Card className="bg-white/5 border-white/10"><CardContent className="p-8"><h3 className="text-xl font-bold text-white mb-4">Discount Engine</h3><p className="text-gray-400">Create customized coupon codes with flexible validity and applicability.</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* SECTION 7: Benefits */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">8 Key Benefits</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Quick checkout", "Better experience", "Lower abandonment", "Best success rates", "Valuable insights", "Instant settlements", "Instant refunds", "Fraud management"].map((benefit, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors group">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <CheckCircle size={24} />
                    </div>
                    <p className="text-white font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Security */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Security & Compliance</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "PCI DSS Compliant", desc: "Secure payment processing with PCI DSS Level-1 compliance." },
              { icon: Code, title: "Card Tokenization", desc: "Encrypted sensitive data replacement for enhanced security." },
              { icon: Zap, title: "Encryption", desc: "Advanced encryption and vulnerability patching for all infrastructure." }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Integration */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2"><h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Integrations Made Simple</h2><p className="text-gray-400 text-lg mb-8">Simple SDKs and APIs with detailed documentation for seamless integration.</p><Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 font-semibold">View API docs <ArrowRight className="ml-2 w-4 h-4" /></Button></div>
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /><div className="ml-auto text-xs text-gray-500 font-mono">api.js</div></div>
              <div className="p-6 overflow-x-auto"><pre className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed">{`const easebuzz = require('easebuzz-sdk');
const config = {key: "KEY", salt: "SALT"};
easebuzz.initiatePayment({amount: 1000});`}</pre></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Developer Centric */}
      <section className="py-24 px-6 border-y border-white/5 bg-black/20 relative z-10" >
        <div className="container mx-auto text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold">We are Developer Centric</h2>
          <p className="text-gray-400 text-lg leading-relaxed">Easily integrate plug-and-play APIs into your website, apps, ERPs and CRMs. Get started in minutes.</p>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 font-semibold">View API docs <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </section>

      {/* SECTION 11: Testimonials */}
      <section className="py-24 px-6 relative z-10" >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">What Customers Say</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
            {[
              { quote: "4x improvement in success rates. Auto reconciliation resolved our issues.", author: "Tanya Saigal", company: "M2M Ferries", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
              { quote: "Easy to use from business and developer perspectives. Great partnership.", author: "Abhishek Kumar", company: "docOPD", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
              { quote: "Smooth onboarding. Slices and FeesBuzz help us collect payments effortlessly.", author: "Anupam Jeevan", company: "Dexpert Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors">
                  <CardContent className="p-8">
                    <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden border border-white/20">
                        <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{testimonial.author}</p>
                        <p className="text-purple-400 text-xs font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 12: CTA */}
      {/* SECTION 12: FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What payment methods does BIDUAPAY support?", a: "BIDUAPAY supports 150+ payment methods including credit cards, debit cards, UPI, net banking, digital wallets, EMI, BNPL, and bank transfers." },
              { q: "How long does onboarding take?", a: "Our streamlined onboarding process takes just minutes. You can start accepting payments within hours of signing up." },
              { q: "What are the transaction fees?", a: "Our pricing is competitive and transparent. Visit our Pricing page to see the latest rates based on your business type." },
              { q: "Is BIDUAPAY secure?", a: "Yes! We are PCI DSS Level-1 compliant with advanced encryption, card tokenization, and 24/7 security monitoring." },
              { q: "Do you provide API documentation?", a: "Absolutely! We offer comprehensive API docs, SDKs for multiple languages, and plugins for popular platforms." },
              { q: "Can I integrate with my existing system?", a: "Yes, BIDUAPAY integrates seamlessly with most e-commerce platforms, ERPs, CRMs, and custom applications via our flexible APIs." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-pointer">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.q}</h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-white/10 p-12 text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl font-display font-bold text-white">Ready to Accept Online Payments?</h2>
              <p className="text-gray-300 text-lg">Join thousands of businesses. No setup fees. Quick onboarding.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-base">Create Free Account</Button>
                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/30 text-white hover:bg-white/10 font-bold text-base">Contact Sales</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
