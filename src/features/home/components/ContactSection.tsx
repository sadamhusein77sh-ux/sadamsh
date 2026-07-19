import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Globe } from 'lucide-react'
import { Section } from '@/shared/components/layout/Section'
import { ScrollReveal } from '@/shared/components/animation/ScrollReveal'
import { Button } from '@/shared/components/ui/Button'
import { socialLinks } from '@/constants/nav'
import linkedinIcon from '@/assets/images/linked.png'
import githubIcon from '@/assets/images/github.png'

type IconValue = string | React.ElementType
const iconMap: Record<string, IconValue> = {
  github: githubIcon,
  linkedin: linkedinIcon,
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

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
                  href="mailto:sadamhusein77.sh@gmail.com"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  sadamhusein77.sh@gmail.com
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
                      {typeof Icon === 'string' ? (
                        // image import (path)
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={Icon} alt={link.name} className="w-5 h-5" />
                      ) : (
                        <Icon size={20} />
                      )}
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
