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
  year?: number
  image?: string
}

export interface Experience {
  id: string
  company: string
  title: string
  period: string
  description: string
  icon?: string
  color?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
