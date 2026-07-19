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
  const cursorRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const shape1Ref = useRef<SVGSVGElement>(null)
  const shape2Ref = useRef<SVGSVGElement>(null)
  const shape3Ref = useRef<SVGSVGElement>(null)
  const bracketLeftRef = useRef<HTMLSpanElement>(null)
  const bracketRightRef = useRef<HTMLSpanElement>(null)
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

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

      // Floating shapes entrance
      gsap.fromTo(
        [shape1Ref.current, shape2Ref.current, shape3Ref.current],
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 0.6, rotation: 0, duration: 1.5, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
      )

      // Bracket decorations animation
      gsap.fromTo(
        bracketLeftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      gsap.fromTo(
        bracketRightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
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

      // Floating shapes parallax
      gsap.to(shape1Ref.current, {
        y: -200,
        rotation: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      })

      gsap.to(shape2Ref.current, {
        y: -120,
        rotation: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(shape3Ref.current, {
        y: -160,
        rotation: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2.5,
        },
      })

      // Continuous floating animation for shapes
      gsap.to(shape1Ref.current, {
        y: '+=20',
        rotation: '+=15',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(shape2Ref.current, {
        y: '+=15',
        rotation: '-=10',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(shape3Ref.current, {
        y: '+=25',
        rotation: '+=20',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Grid animation
      gsap.to(gridRef.current, {
        backgroundPosition: '0 50px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      // Badge hover proximity effect
      badgeRefs.current.forEach((badge, index) => {
        if (!badge) return

        const handleMouseMove = (e: MouseEvent) => {
          const rect = badge.getBoundingClientRect()
          const badgeCenterX = rect.left + rect.width / 2
          const badgeCenterY = rect.top + rect.height / 2
          const distance = Math.sqrt(
            Math.pow(e.clientX - badgeCenterX, 2) + Math.pow(e.clientY - badgeCenterY, 2)
          )
          const maxDistance = 150
          const scale = distance < maxDistance ? 1 + (1 - distance / maxDistance) * 0.3 : 1
          const glowOpacity = distance < maxDistance ? (1 - distance / maxDistance) * 0.8 : 0

          gsap.to(badge, {
            scale: scale,
            boxShadow: `0 0 ${20 * (1 - distance / maxDistance)}px rgba(99, 102, 241, ${glowOpacity})`,
            duration: 0.3,
            ease: 'power2.out',
          })
        }

        const handleMouseLeave = () => {
          gsap.to(badge, {
            scale: 1,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
          })
        }

        badge.addEventListener('mousemove', handleMouseMove)
        badge.addEventListener('mouseleave', handleMouseLeave)

        // Entrance animation for badges
        gsap.fromTo(
          badge,
          { y: 30, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.5 + index * 0.1,
            ease: 'back.out(1.7)',
          }
        )
      })
    }, heroRef)

    // Cursor follower
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        gsap.set(cursorRef.current, { left: 0, top: 0 })
        gsap.to(cursorRef.current, {
          left: e.clientX - rect.left - 12,
          top: e.clientY - rect.top - 12,
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    heroRef.current?.addEventListener('mousemove', handleMouseMove)
    heroRef.current?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ctx.revert()
      heroRef.current?.removeEventListener('mousemove', handleMouseMove)
      heroRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

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

      {/* Floating geometric shapes */}
      <svg
        ref={shape1Ref}
        className="absolute top-20 left-[10%] w-16 h-16 text-accent/40 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="25" />
      </svg>

      <svg
        ref={shape2Ref}
        className="absolute top-40 right-[15%] w-12 h-12 text-accent-glow/30 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="15" y="15" width="70" height="70" rx="8" />
        <rect x="30" y="30" width="40" height="40" rx="4" />
      </svg>

      <svg
        ref={shape3Ref}
        className="absolute bottom-32 left-[20%] w-14 h-14 text-accent/30 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="50,10 90,90 10,90" />
        <polygon points="50,30 75,75 25,75" />
      </svg>

      {/* Cursor follower glow */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-24 h-24 rounded-full pointer-events-none opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%)',
          filter: 'blur(15px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Floating code brackets */}
        <div className="relative inline-block">
          <span
            ref={bracketLeftRef}
            className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-mono text-accent/20"
          >
            {'{'}
          </span>
          <span
            ref={bracketRightRef}
            className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-mono text-accent/20"
          >
            {'}'}
          </span>

          {/* Floating tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.name}
                ref={(el) => { badgeRefs.current[index] = el }}
                className="cursor-pointer transition-shadow duration-300"
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
            Sadam Husein
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-text-muted mb-4"
          style={{ opacity: 0 }}
        >
          Front-End Developer
        </p>

        <p
          ref={descRef}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10"
          style={{ opacity: 0 }}
        >
          A dedicated Front-End Developer with over 5 years of hands-on experience
          crafting dynamic and responsive user interfaces. Specializing in the React.js
          ecosystem — building efficient, scalable, and visually appealing web
          applications with seamless user experiences.
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

      {/* <style>{`
        .scroll-indicator {
          animation: bounce 1.5s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(8px) translateX(-50%); }
        }
      `}</style> */}
    </section>
  )
}
