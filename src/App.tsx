
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DoshaQuiz from "./pages/DoshaQuiz";
import NotFound from "./pages/NotFound";
import Journal from "./pages/Journal";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import PersonalizedPlan from "./pages/PersonalizedPlan";
import Consult from "./pages/Consult";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dosha-quiz" element={<DoshaQuiz />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/personalized-plan" element={<PersonalizedPlan />} />
          <Route path="/consult" element={<Consult />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
