
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";

import Index from "./pages/Index";
import Learn from "./pages/Learn";
import Quran from "./pages/Quran";
import Prophets from "./pages/Prophets";
import History from "./pages/History";
import Questions from "./pages/Questions";
import Namaz from "./pages/Namaz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/prophets" element={<Prophets />} />
            <Route path="/history" element={<History />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/namaz" element={<Namaz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
