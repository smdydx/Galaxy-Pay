import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Partners from "@/pages/Partners";
import Blog from "@/pages/Blog";
import Developers from "@/pages/Developers";
import ApiDocs from "@/pages/ApiDocs";
import SDK from "@/pages/SDK";
import Plugins from "@/pages/Plugins";
import Products from "@/pages/Products";
import PaymentGateway from "@/pages/PaymentGateway";
import PaymentLinks from "@/pages/PaymentLinks";
import Wire from "@/pages/Wire";
import SmartCollect from "@/pages/SmartCollect";
import FeesBuzz from "@/pages/FeesBuzz";
import InstaCollect from "@/pages/InstaCollect";
import PaymentButtons from "@/pages/PaymentButtons";
import Payouts from "@/pages/Payouts";
import International from "@/pages/International";
import Subscriptions from "@/pages/Subscriptions";
import Ecommerce from "@/pages/Ecommerce";
import Education from "@/pages/Education";
import FinancialServices from "@/pages/FinancialServices";
import SaaS from "@/pages/SaaS";
import IntegrationGuide from "@/pages/IntegrationGuide";

import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/careers" component={Careers} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/partners" component={Partners} />
        <Route path="/blog" component={Blog} />
        <Route path="/developers" component={Developers} />
        <Route path="/developers/docs" component={ApiDocs} />
        <Route path="/developers/sdk" component={SDK} />
        <Route path="/developers/plugins" component={Plugins} />
        <Route path="/products" component={Products} />
        <Route path="/products/gateway" component={PaymentGateway} />
        <Route path="/products/links" component={PaymentLinks} />
        <Route path="/products/wire" component={Wire} />
        <Route path="/products/collect" component={SmartCollect} />
        <Route path="/products/feesbuzz" component={FeesBuzz} />
        <Route path="/products/insta" component={InstaCollect} />
        <Route path="/products/buttons" component={PaymentButtons} />
        <Route path="/products/payouts" component={Payouts} />
        <Route path="/products/international" component={International} />
        <Route path="/products/subscriptions" component={Subscriptions} />
        <Route path="/industries/ecommerce" component={Ecommerce} />
        <Route path="/industries/education" component={Education} />
        <Route path="/industries/financial" component={FinancialServices} />
        <Route path="/industries/saas" component={SaaS} />
        <Route path="/developers/guide" component={IntegrationGuide} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

import { CookieConsent } from "@/components/CookieConsent";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CookieConsent />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
