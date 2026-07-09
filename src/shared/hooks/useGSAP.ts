import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAP() {
  useEffect(() => {
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return { gsap, ScrollTrigger }
}

// Animate elements on scroll
export function scrollReveal(
  element: gsap.DOMTarget,
  options: {
    y?: number
    opacity?: number
    duration?: number
    delay?: number
    stagger?: number
  } = {}
) {
  const { y = 50, opacity = 0, duration = 0.8, delay = 0, stagger = 0.1 } = options

  gsap.fromTo(
    element,
    { y, opacity },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

// Parallax effect
export function parallax(element: gsap.DOMTarget, speed: number = 0.5) {
  gsap.to(element, {
    yPercent: -30 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}
