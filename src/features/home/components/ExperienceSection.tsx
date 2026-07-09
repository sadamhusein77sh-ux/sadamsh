import { motion } from 'framer-motion'
import { Section } from '@/shared/components/layout/Section'
import { ScrollReveal } from '@/shared/components/animation/ScrollReveal'
import { Badge } from '@/shared/components/ui/Badge'
import { experiences } from '@/features/projects/data/projects'

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-text-muted text-lg mb-16">
            My professional journey building products at scale.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-text-muted whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-text-muted mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
