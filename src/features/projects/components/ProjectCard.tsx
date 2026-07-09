import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Globe, X } from 'lucide-react'
import { cn } from '@/shared/lib/cn'
import { Badge } from '@/shared/components/ui/Badge'
import type { Project } from '@/shared/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white font-medium flex items-center gap-2">
              <ExternalLink size={18} />
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <Badge variant="default" className="text-xs flex-shrink-0">
              {project.category}
            </Badge>
          </div>

          <p className="text-text-muted text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="default" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header image */}
            <div className="relative aspect-video">
              <img
                src={project.images[0] || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur rounded-full text-text-primary hover:bg-background transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-text-muted text-sm">{project.date}</p>
                </div>
                <Badge variant="active">{project.category}</Badge>
              </div>

              <p className="text-text-muted text-lg leading-relaxed mb-8 whitespace-pre-line">
                {project.longDescription}
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
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium',
                      'hover:bg-accent-glow transition-colors'
                    )}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-text-primary rounded-lg font-medium',
                      'hover:bg-border transition-colors'
                    )}
                  >
                    <Globe size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
