import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Index from "./pages/Index";
import WebDesign from "./pages/WebDesign";
import Branding from "./pages/Branding";
import AIAutomations from "./pages/AIAutomations";
import GoogleOptimization from "./pages/GoogleOptimization";
import SEOPage from "./pages/SEO";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Watermark from "./components/Watermark";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <Watermark />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/ai-automations" element={<AIAutomations />} />
          <Route path="/google-optimization" element={<GoogleOptimization />} />
          <Route path="/seo" element={<SEOPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
