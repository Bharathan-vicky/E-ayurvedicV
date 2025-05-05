
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeRemedies from "./pages/HomeRemedies";
import PlantProperties from "./pages/PlantProperties";
import DietConsole from "./pages/DietConsole";
import DiseaseSolutions from "./pages/DiseaseSolutions";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Articles from "./pages/Articles";
import References from "./pages/References";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/remedies" element={<HomeRemedies />} />
              <Route path="/plants" element={<PlantProperties />} />
              <Route path="/diet" element={<DietConsole />} />
              <Route path="/solutions" element={<DiseaseSolutions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/references" element={<References />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
