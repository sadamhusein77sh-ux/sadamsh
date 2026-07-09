import type { Project, Experience } from '@/shared/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'A full-featured online store with cart, checkout, and admin dashboard.',
    longDescription: `Built a comprehensive e-commerce platform featuring product catalog with advanced filtering, real-time inventory management, secure payment processing via Stripe, and a complete admin dashboard for managing orders and products.

The application includes JWT authentication, role-based access control, and a responsive design that works seamlessly across desktop and mobile devices. Real-time notifications keep users updated on order status.`,
    thumbnail: 'https://picsum.photos/seed/ecommerce/800/600',
    images: [
      'https://picsum.photos/seed/ecommerce1/1200/800',
      'https://picsum.photos/seed/ecommerce2/1200/800',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    featured: true,
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
    date: '2024',
  },
  {
    id: '2',
    title: 'Task Management App',
    slug: 'task-management',
    description: 'Collaborative project management tool with real-time updates.',
    longDescription: `A Trello-inspired task management application enabling teams to organize projects using boards, lists, and cards. Features include drag-and-drop functionality, real-time collaboration via WebSockets, commenting, file attachments, and due dates.

Built with Angular on the frontend and Node.js/Express with Socket.io for real-time synchronization. Uses MongoDB for flexible data storage.`,
    thumbnail: 'https://picsum.photos/seed/task/800/600',
    images: [
      'https://picsum.photos/seed/task1/1200/800',
      'https://picsum.photos/seed/task2/1200/800',
    ],
    tags: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'angular',
    featured: false,
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
    date: '2024',
  },
  {
    id: '3',
    title: 'AI Image Generator',
    slug: 'ai-image-generator',
    description: 'Generate stunning images using AI with style transfer capabilities.',
    longDescription: `An experimental application leveraging machine learning models for image generation and style transfer. Users can input text prompts or upload reference images to generate unique artwork.

Features include multiple AI models (Stable Diffusion, DALL-E integration), style customization, high-resolution export, and a gallery of community creations.`,
    thumbnail: 'https://picsum.photos/seed/ai/800/600',
    images: [
      'https://picsum.photos/seed/ai1/1200/800',
      'https://picsum.photos/seed/ai2/1200/800',
    ],
    tags: ['React', 'Python', 'FastAPI', 'TensorFlow', 'AWS'],
    category: 'experimental',
    featured: false,
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
    date: '2023',
  },
  {
    id: '4',
    title: 'Real-time Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'Interactive dashboard with live data visualization and reporting.',
    longDescription: `A comprehensive analytics platform for tracking key business metrics in real-time. Features interactive charts, customizable widgets, automated reporting, and exportable data.

Built with React and TypeScript on the frontend, using D3.js and Recharts for data visualization. Backend services process millions of events daily with sub-second query response times.`,
    thumbnail: 'https://picsum.photos/seed/analytics/800/600',
    images: [
      'https://picsum.photos/seed/analytics1/1200/800',
      'https://picsum.photos/seed/analytics2/1200/800',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Redis'],
    category: 'react',
    featured: false,
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
    date: '2023',
  },
  {
    id: '5',
    title: 'Healthcare Patient Portal',
    slug: 'healthcare-portal',
    description: 'HIPAA-compliant portal for patient records and appointment scheduling.',
    longDescription: `A secure patient portal enabling users to view medical records, schedule appointments, message healthcare providers, and access test results.

Built with Angular and .NET Core following HIPAA compliance requirements. Features end-to-end encryption, detailed audit logging, and role-based access for patients and medical staff.`,
    thumbnail: 'https://picsum.photos/seed/health/800/600',
    images: [
      'https://picsum.photos/seed/health1/1200/800',
      'https://picsum.photos/seed/health2/1200/800',
    ],
    tags: ['Angular', '.NET Core', 'C#', 'SQL Server', 'Azure'],
    category: 'angular',
    featured: false,
    links: {
      live: 'https://example.com',
    },
    date: '2023',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Senior Frontend Engineer',
    duration: 'Jan 2023 - Present',
    description: 'Leading frontend architecture for enterprise SaaS products. Mentoring junior developers and establishing code quality standards.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'TailwindCSS'],
  },
  {
    id: '2',
    company: 'Digital Dynamics',
    role: 'Frontend Developer',
    duration: 'Jun 2020 - Dec 2022',
    description: 'Developed responsive web applications using Angular and React. Collaborated with UX designers to implement pixel-perfect interfaces.',
    technologies: ['Angular', 'React', 'SCSS', 'Node.js'],
  },
  {
    id: '3',
    company: 'StartupXYZ',
    role: 'Junior Web Developer',
    duration: 'Mar 2018 - May 2020',
    description: 'Built and maintained company websites and internal tools. First professional experience with modern JavaScript frameworks.',
    technologies: ['JavaScript', 'React', 'WordPress', 'PHP'],
  },
]
