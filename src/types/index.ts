// ─── Workshop ────────────────────────────────────────────────────────────────
export interface Workshop {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  image: string
  date: string
  endDate?: string
  location: string
  duration: string
  fees: string
  ageGroup: string
  time: string
  venue: string
  tags: string[]
  instructor: string
  instructorBio?: string
  capacity: number
  enrolled: number
  isFeatured: boolean
}

// ─── Project / Work ──────────────────────────────────────────────────────────
export interface Project {
  id: string
  slug: string
  title: string
  image: string
  type: 'movie' | 'web-series' | 'commercial' | 'theatre'
  year: number
  status: 'released' | 'upcoming'
  description?: string
  genre?: string
}

// ─── News ────────────────────────────────────────────────────────────────────
export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  category: string
  tags: string[]
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  quote: string
  project?: string
  rating: number
}

// ─── Program ─────────────────────────────────────────────────────────────────
export interface Program {
  id: string
  title: string
  description: string
  icon: string
  color: string
  link: string
}

// ─── Gallery ─────────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  width?: number
  height?: number
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
export interface NewsletterData {
  email: string
}

// ─── API Response wrapper ────────────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

// ─── Pagination ───────────────────────────────────────────────────────────────
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> {
  items: T[]
  meta: PaginationMeta
}

// ─── Filter ──────────────────────────────────────────────────────────────────
export interface WorkshopFilter {
  search: string
  type: string
  location: string
  priceRange: [number, number]
}

// ─── Stats ───────────────────────────────────────────────────────────────────
export interface Stat {
  value: string
  label: string
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

// ─── SEO ─────────────────────────────────────────────────────────────────────
export interface SEOMeta {
  title: string
  description: string
  image?: string
  canonical?: string
}
