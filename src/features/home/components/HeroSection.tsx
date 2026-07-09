import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Download } from 'lucide-react'
import { Button } from '@/shared/components/ui/Button'
import { Badge } from '@/shared/components/ui/Badge'
import { skills } from '@/constants/nav'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Title animation - split text effect
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2 }
      )

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )

      // Description
      tl.fromTo(
        descRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
      )

      // Parallax orbs on scroll
      gsap.to(orb1Ref.current, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(orb2Ref.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background gradient orbs with GSAP parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={orb1Ref}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50"
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Floating tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.slice(0, 6).map((skill, index) => (
            <div
              key={skill.name}
              className="badge-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Badge variant="default" className="text-xs">
                {skill.name}
              </Badge>
            </div>
          ))}
        </div>

        {/* Main heading with GSAP animation */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary mb-6 leading-tight"
          style={{ opacity: 0 }}
        >
          John Doe
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-text-muted mb-4"
          style={{ opacity: 0 }}
        >
          Senior Frontend Engineer
        </p>

        <p
          ref={descRef}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10"
          style={{ opacity: 0 }}
        >
          Crafting performant, accessible, and visually stunning web experiences
          with React and Angular. 6+ years of transforming complex problems into
          elegant solutions.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <Button size="lg" onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button variant="secondary" size="lg">
            <Download size={18} className="mr-2" />
            Download CV
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <div
            className="cursor-pointer"
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <ArrowDown className="text-text-muted" size={28} />
          </div>
        </div>
      </div>

      <style>{`
        .badge-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .scroll-indicator {
          animation: bounce 1.5s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(8px) translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
