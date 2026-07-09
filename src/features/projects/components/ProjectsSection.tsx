import { useState, useMemo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/shared/components/layout/Section'
import { ProjectCard } from '../components/ProjectCard'
import { Badge } from '@/shared/components/ui/Badge'
import { projects } from '../data/projects'
import type { Project } from '@/shared/types'

gsap.registerPlugin(ScrollTrigger)

const categories = ['all', 'react', 'angular', 'fullstack', 'experimental'] as const

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>('all')
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  const featuredProject = projects.find((p) => p.featured)
  const nonFeaturedProjects = filteredProjects.filter((p) => !p.featured)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      // Filter animation
      gsap.fromTo(
        filterRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate cards when filter changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }
  }, [activeFilter])

  return (
    <Section id="projects" ref={sectionRef}>
      <div ref={headerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Featured Projects
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-2xl">
          A selection of projects I've built that showcase my expertise in building
          modern, scalable web applications.
        </p>
      </div>

      {/* Filter */}
      <div ref={filterRef} className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat
                ? 'bg-accent text-white'
                : 'bg-surface border border-border text-text-muted hover:text-text-primary'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      {activeFilter === 'all' && featuredProject && (
        <div className="featured-container mb-12">
          <FeaturedProjectCard project={featuredProject} />
        </div>
      )}

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {(activeFilter === 'all' ? nonFeaturedProjects : filteredProjects).map(
            (project, index) => (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
              >
                <ProjectCard project={project} />
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-muted mb-4">
            No projects match the selected filter.
          </p>
          <button
            onClick={() => setActiveFilter('all')}
            className="text-accent hover:text-accent-glow font-medium"
          >
            View all projects
          </button>
        </div>
      )}
    </Section>
  )
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <div ref={cardRef} className="featured-card">
      <motion.article
        whileHover={{ y: -4 }}
        className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto">
            <img
              src={project.images[0] || project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <Badge variant="active" className="w-fit mb-4">
              Featured Project
            </Badge>

            <h3 className="text-3xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-glow transition-colors"
                >
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-background border border-border text-text-primary rounded-lg font-medium hover:bg-border transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}
