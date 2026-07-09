export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  thumbnail: string
  images: string[]
  tags: string[]
  category: 'react' | 'angular' | 'fullstack' | 'experimental'
  featured: boolean
  links: {
    live?: string
    github?: string
    caseStudy?: string
  }
  date: string
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  description: string
  technologies: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
