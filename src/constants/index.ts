import type { NavLink, Stat, Program } from '@/types'

export const SITE_NAME = 'Acs Films'
export const SITE_FULL_NAME = 'Mukesh Chhabra Casting Company'
export const SITE_TAGLINE = 'Your Gateway To The Big Screen'
export const SITE_EMAIL = 'hello@acsfilms.in'
export const SITE_PHONE = '+91 98765 43210'
export const SITE_ADDRESS = 'Mumbai, Maharashtra, India'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'News', href: '/news' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export const STATS: Stat[] = [
  { value: '400+', label: 'Movies' },
  { value: '150+', label: 'Web Series' },
  { value: '3000+', label: 'Commercials' },
  { value: '15+', label: 'Years' },
]

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Acting Workshops',
    description: 'Intensive training programs designed to sharpen your skills under the guidance of industry veterans.',
    icon: '🎭',
    color: 'violet',
    link: '/workshops?type=acting',
  },
  {
    id: '2',
    title: "Children's Programs",
    description: 'Age-appropriate workshops to nurture young talent and build confidence through performing arts.',
    icon: '🌟',
    color: 'coral',
    link: '/workshops?type=children',
  },
  {
    id: '3',
    title: 'Theatre Festivals',
    description: 'Annual festivals celebrating the art of theatre, bringing together performers from across India.',
    icon: '🎪',
    color: 'gold',
    link: '/workshops?type=theatre',
  },
  {
    id: '4',
    title: 'Special Programs',
    description: 'Curated masterclasses and one-on-one sessions with celebrated casting directors and filmmakers.',
    icon: '🏆',
    color: 'navy',
    link: '/workshops?type=special',
  },
]

export const WORKSHOP_TYPES = ['All', 'Acting', 'Children', 'Theatre', 'Special', 'Masterclass']
export const WORKSHOP_LOCATIONS = ['All', 'Mumbai', 'Delhi', 'Pune', 'Bengaluru', 'Hyderabad', 'Online']

export const TRANSITION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
} as const

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}
