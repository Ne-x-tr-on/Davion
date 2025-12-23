import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Pages
import Index from "./pages/index";
import Projects from "./pages/projects";
import Marketplace from "./pages/marketplace";
import Internships from "./pages/internships";
import About from "./pages/about";
import NotFound from "./pages/notfound";


// Topics
// import Topics from "./pages/topics";
import Mechanical from "./pages/topics/mechanical";
import MechanicalGears from "./pages/topics/mechanical/gears";



import Electrical from "./pages/topics/electrical";
import Arduino from "./pages/topics/arduino";
import Automation from "./pages/topics/automation";
import Embedded from "./pages/topics/embedded";
import SoftwareAI from "./pages/topics/software-ai";



// Initialize React Query client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/about" element={<About />} />

            {/* Topics */}
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/mechanical" element={<Mechanical />} />
            <Route path="/topics/mechanical/gears" element={<MechanicalGears />} />
            <Route path="/topics/electrical" element={<Electrical />} />
            <Route path="/topics/arduino" element={<Arduino />} />
            <Route path="/topics/automation" element={<Automation />} />
            <Route path="/topics/embedded" element={<Embedded />} />
            <Route path="/topics/software-ai" element={<SoftwareAI />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

