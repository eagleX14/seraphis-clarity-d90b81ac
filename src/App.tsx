import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const OperationalIntelligence = lazy(() => import("./pages/OperationalIntelligence"));
const Industries = lazy(() => import("./pages/Industries"));
const HowWeWork = lazy(() => import("./pages/HowWeWork"));
const Insights = lazy(() => import("./pages/Insights"));
const Microsoft365 = lazy(() => import("./pages/Microsoft365"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AzureCloud = lazy(() => import("./pages/AzureCloud"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const DiagnosticQuestionnaire = lazy(() => import("./pages/DiagnosticQuestionnaire"));
const RetailAnalyticsPrivacy = lazy(() => import("./pages/RetailAnalyticsPrivacy"));
const RetailAnalyticsSupport = lazy(() => import("./pages/RetailAnalyticsSupport"));
const CspRetailAnalyticsMarketing = lazy(() => import("./pages/CspRetailAnalyticsMarketing"));
const RetailAnalyticsScaling = lazy(() => import("./pages/RetailAnalyticsScaling"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const CareerGeneralApplication = lazy(() => import("./pages/CareerGeneralApplication"));
const CareerApplicationReceived = lazy(() => import("./pages/CareerApplicationReceived"));





















const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <Suspense fallback={<div className="min-h-[50vh]" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/business-solutions" element={<Solutions />} />
              <Route path="/operational-intelligence" element={<OperationalIntelligence />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<BlogPost />} />
              <Route path="/microsoft-365" element={<Microsoft365 />} />
              <Route path="/azure-cloud-solutions" element={<AzureCloud />} />
              <Route path="/diagnostic-questionnaire" element={<DiagnosticQuestionnaire />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/general-application" element={<CareerGeneralApplication />} />
              <Route path="/careers/application-received" element={<CareerApplicationReceived />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="/privacy/retail-analytics" element={<RetailAnalyticsPrivacy />} />
          <Route path="/privacy/retail-analytics/" element={<RetailAnalyticsPrivacy />} />
          <Route path="/support" element={<RetailAnalyticsSupport />} />
          <Route path="/support/" element={<RetailAnalyticsSupport />} />
          <Route path="/support/retail-analytics" element={<RetailAnalyticsSupport />} />
          <Route path="/support/retail-analytics/" element={<RetailAnalyticsSupport />} />
          <Route path="/partners/csp-retail-analytics" element={<CspRetailAnalyticsMarketing />} />
          <Route path="/partners/csp-retail-analytics/" element={<CspRetailAnalyticsMarketing />} />
          <Route path="/solutions/retail-analytics-scaling" element={<RetailAnalyticsScaling />} />
          <Route path="/solutions/retail-analytics-scaling/" element={<RetailAnalyticsScaling />} />
          <Route path="/retail-analytics" element={<RetailAnalyticsScaling />} />
          <Route path="/retail-analytics/" element={<RetailAnalyticsScaling />} />
          <Route path="/retail-analytics-scaling" element={<RetailAnalyticsScaling />} />
          <Route path="/retail-analytics-scaling/" element={<RetailAnalyticsScaling />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </div>
          <WhatsAppButton />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
