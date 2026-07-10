import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/shared/lib/cn'
import { navItems } from '@/constants/nav'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { Button } from '@/shared/components/ui/Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useActiveSection(navItems.map((item) => item.href.slice(1)))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const element = document.getElementById(href.slice(1))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border'
            : 'py-5 bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            SH
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-text-primary',
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-muted'
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <Button
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() =>
              window.open('mailto:john.doe@email.com', '_blank')
            }
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface border-l border-border z-50 md:hidden p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-text-muted hover:text-text-primary"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'text-lg font-medium block w-full text-left py-2 transition-colors',
                        activeSection === item.href.slice(1)
                          ? 'text-accent'
                          : 'text-text-muted hover:text-text-primary'
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
