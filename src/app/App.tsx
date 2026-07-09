import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from '@/features/home/components/Navbar'
import { HeroSection } from '@/features/home/components/HeroSection'
import { AboutSection } from '@/features/home/components/AboutSection'
import { ProjectsSection } from '@/features/projects/components/ProjectsSection'
import { ExperienceSection } from '@/features/home/components/ExperienceSection'
import { ContactSection } from '@/features/home/components/ContactSection'
import { Footer } from '@/features/home/components/Footer'
import { ScrollProgress } from '@/shared/components/animation/ScrollProgress'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="min-h-screen bg-background text-text-primary">
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  )
}
