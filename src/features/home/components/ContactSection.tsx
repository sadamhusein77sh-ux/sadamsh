import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Globe } from 'lucide-react'
import { Section } from '@/shared/components/layout/Section'
import { ScrollReveal } from '@/shared/components/animation/ScrollReveal'
import { Button } from '@/shared/components/ui/Button'
import { socialLinks } from '@/constants/nav'

const iconMap: Record<string, React.ElementType> = {
  github: Globe,
  linkedin: Globe,
  twitter: Globe,
  mail: Mail,
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })

    // Reset success message after 3s
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Let's Connect
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-muted text-lg mb-8">
                Have a project in mind or just want to chat? I'm always open to
                discussing new opportunities and interesting ideas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:john.doe@email.com"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  john.doe@email.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || Mail
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surface border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent/50 transition-all"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
