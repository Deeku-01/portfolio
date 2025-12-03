// fileName: App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import MainLayout from "./components/MainLayout"; // Import the new layout

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true , v7_relativeSplatPath: true }}>
        <Routes>
          {/* Layout Route: Sets up the persistent sidebar and header */}
          <Route path="/" element={<MainLayout />}> 
          
            {/* Child Routes: These components render inside MainLayout's <Outlet /> */}
            <Route index element={<Index />} /> {/* Renders at path: / */}
            <Route path="experience" element={<WorkExperience />} /> {/* Renders at path: /experience */}
            <Route path="projects" element={<Projects />} /> {/* Renders at path: /projects */}

            {/* Catch-all Route (Should be outside or at the bottom of the layout route) */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;