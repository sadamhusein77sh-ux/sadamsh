import type { Project, Experience } from '@/shared/types'
import lxspaceImg from '@/assets/images/lxspace.png';
import irelloImg from '@/assets/images/irello.png';
import liburinImg from '@/assets/images/liburin.png';


export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxspace',
    slug: 'luxspace',
    description: 'Prototype of sample web e-commerce',
    longDescription:
      'A fully functional e-commerce web application built with React, TailwindCSS, and TypeScript. Features product listings, cart functionality, and a clean modern UI.',
    thumbnail: lxspaceImg,
    images: [],
    tags: ['React', 'Tailwindcss', 'TypeScript'],
    category: 'react',
    featured: false,
    links: {
      live: 'https://lxspace.vercel.app/',
    },
    date: '2026',
    year: 2026,
  },
  {
    id: '2',
    title: 'My Keep Notes',
    slug: 'my-keep-notes',
    description: 'Example notes with temporary storage',
    longDescription:
      'A notes application with temporary local storage, allowing users to quickly capture and organize thoughts with a clean, minimal interface.',
    thumbnail: 'https://my-keep-notes.netlify.app/og.png',
    images: [],
    tags: ['React', 'Tailwindcss', 'TypeScript'],
    category: 'react',
    featured: false,
    links: {
      live: 'https://my-keep-notes.netlify.app/',
    },
    date: '2022',
    year: 2022,
  },
  {
    id: '3',
    title: 'Liburi',
    slug: 'liburi',
    description: 'Booking Vacation Web Application',
    longDescription:
      'A vacation booking web application that allows users to browse destinations, check availability, and book travel accommodations with a seamless booking flow.',
    thumbnail: liburinImg,
    images: [],
    tags: ['React', 'Tailwindcss', 'TypeScript'],
    category: 'react',
    featured: true,
    links: {
      live: 'https://liburin-mauve.vercel.app/',
    },
    date: '2025',
    year: 2025,
  },
  {
    id: '4',
    title: 'Irello',
    slug: 'irello',
    description: 'AI-powered task management and productivity application',
    longDescription:
      'An AI-enhanced task management app that helps users organize projects, track productivity, and leverage AI to streamline workflows and boost efficiency.',
    thumbnail:
      irelloImg,
    images: [],
    tags: ['React', 'Vite', 'Tailwindcss', 'TypeScript', 'AI'],
    category: 'react',
    featured: false,
    links: {
      live: 'https://irello.vercel.app/',
    },
    date: '2026',
    year: 2026,
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Ako Media Asia, PT (IT Consultant)',
    title: 'Middle Frontend Developer',
    period: '2023 — Present',
    description:
      'As a developer, I am skilled in converting Figma designs into responsive applications...',
  },
  {
    id: '2',
    company: 'Buana Varia Komputama, PT (IT Consultant)',
    title: 'Middle Frontend Developer',
    period: '2022 — 2023',
    description:
      'I specialize in transforming Figma designs into responsive healthcare applications...',
  },
  {
    id: '3',
    company: 'Extramarks Education Indonesia, PT (Edutech)',
    title: 'Frontend Developer',
    period: '2022 — 2023',
    description: 'I am an expert in crafting educational technology platforms...',
  },
  {
    id: '4',
    company: 'Serba Mulia Auto, PT (Funding)',
    title: 'Web Developer',
    period: '2021 — 2021',
    description: 'I am an experienced web developer who transforms Figma designs...',
  },
  {
    id: '5',
    company: 'Yufendy Konsultan Indonesia, PT (Law Firm)',
    title: 'Accounting and Tax Staff',
    period: '2019 — 2021',
    description: 'As an Accounting and Tax Staff, I am responsible for managing...',
  },
  {
    id: '6',
    company: 'Bank Central Asia, PT (Bank)',
    title: 'Teller Staff',
    period: '2016 — 2019',
    description: 'As a Bank Teller, I am the first point of contact for customers...',
  },
  {
    id: '7',
    company: '20 Fit (Health Center)',
    title: 'Office Boy',
    period: '2016 — 2016',
    description: 'As an Office Boy, I am responsible for the daily upkeep and smooth operation...',
  },
]
