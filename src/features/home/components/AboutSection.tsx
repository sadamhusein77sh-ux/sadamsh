import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, FileCode, Layout, Server, Palette, GitBranch, Database, Cloud } from 'lucide-react'
import { Section } from '@/shared/components/layout/Section'
import { Badge } from '@/shared/components/ui/Badge'
import { Button } from '@/shared/components/ui/Button'
import { skills } from '@/constants/nav'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, React.ElementType> = {
  'code-2': Code2,
  'file-code': FileCode,
  layout: Layout,
  server: Server,
  palette: Palette,
  'git-branch': GitBranch,
  database: Database,
  cloud: Cloud,
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column - slide in from left
      gsap.fromTo(
        leftColRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Right column - slide in from right
      gsap.fromTo(
        rightColRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Skill cards - stagger animation
      skillRefs.current.forEach((skill, index) => {
        if (skill) {
          gsap.fromTo(
            skill,
            { y: 40, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              delay: index * 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="about" className="bg-surface/50" ref={sectionRef}>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left column - Bio */}
        <div ref={leftColRef} className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            About Me
          </h2>

          <p className="text-text-muted text-lg leading-relaxed">
            I'm a passionate Senior Frontend Engineer with over 6 years of experience
            building modern web applications. I specialize in creating intuitive,
            performant, and accessible user interfaces using React and Angular.
          </p>

          <p className="text-text-muted text-lg leading-relaxed">
            My journey started with vanilla JavaScript, evolved through jQuery, and
            matured with modern frameworks. Today, I focus on building scalable
            component architectures, implementing smooth animations, and optimizing
            for Core Web Vitals.
          </p>

          <p className="text-text-muted text-lg leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects,
            writing technical articles, or exploring new web technologies. I believe
            in continuous learning and sharing knowledge with the community.
          </p>

          <Button
            variant="secondary"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download Resume
          </Button>
        </div>

        {/* Right column - Skills Grid */}
        <div ref={rightColRef}>
          <h3 className="text-2xl font-semibold text-text-primary mb-8">
            Technologies I Work With
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code2
              return (
                <div
                  key={skill.name}
                  ref={(el) => { skillRefs.current[index] = el }}
                  className="skill-card flex items-center gap-3 p-4 bg-background border border-border rounded-xl cursor-pointer"
                >
                  <Icon size={24} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-text-primary">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Performance', 'Accessibility', 'SEO', 'Testing', 'CI/CD', 'Mentoring'].map(
              (tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .skill-card {
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 40px -10px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </Section>
  )
}
