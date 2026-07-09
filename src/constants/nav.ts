import type { SocialLink } from '@/shared/types'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
]

export const skills = [
  { name: 'React', icon: 'code-2' },
  { name: 'TypeScript', icon: 'file-code' },
  { name: 'Angular', icon: 'layout' },
  { name: 'Node.js', icon: 'server' },
  { name: 'TailwindCSS', icon: 'palette' },
  { name: 'GraphQL', icon: 'git-branch' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'AWS', icon: 'cloud' },
]
