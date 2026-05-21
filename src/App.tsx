import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import HowWeWork from "./pages/HowWeWork";
import Insights from "./pages/Insights";
import Microsoft365 from "./pages/Microsoft365";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AzureCloud from "./pages/AzureCloud";
import BlogPost from "./pages/BlogPost";
import DiagnosticQuestionnaire from "./pages/DiagnosticQuestionnaire";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/business-solutions" element={<Solutions />} />
              <Route path="/operational-intelligence" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<BlogPost />} />
              <Route path="/microsoft-365" element={<Microsoft365 />} />
              <Route path="/azure-cloud-solutions" element={<AzureCloud />} />
              <Route path="/diagnostic-questionnaire" element={<DiagnosticQuestionnaire />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <WhatsAppButton />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
