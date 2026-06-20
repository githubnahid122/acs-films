import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, Tag } from 'lucide-react'
import type { Workshop } from '@/types'
import { formatDate } from '@/utils'
import { TRANSITION_VARIANTS } from '@/constants'
import Button from '@/components/common/Button'

interface WorkshopCardProps {
  workshop: Workshop
  layout?: 'grid' | 'list'
}

export default function WorkshopCard({ workshop, layout = 'grid' }: WorkshopCardProps) {
  const spotsLeft = workshop.capacity - workshop.enrolled
  const pct = (workshop.enrolled / workshop.capacity) * 100

  if (layout === 'list') {
    return (
      <motion.article
        variants={TRANSITION_VARIANTS.fadeUp}
        className="group flex flex-col sm:flex-row gap-4 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300 overflow-hidden p-0"
      >
        <Link to={`/workshops/${workshop.slug}`} className="sm:w-52 shrink-0 block overflow-hidden">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-44 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="flex flex-col justify-between p-5 flex-1">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {workshop.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-violet-50 text-[#7C3AED] px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <Link to={`/workshops/${workshop.slug}`}>
              <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors mb-2">
                {workshop.title}
              </h3>
            </Link>
            <p className="text-sm text-slate-500 line-clamp-2">{workshop.shortDescription}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(workshop.date)}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{workshop.location}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{workshop.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-base font-bold text-[#0F172A]">{workshop.fees}</span>
              <Button variant="primary" size="sm" onClick={() => window.location.href = `/workshops/${workshop.slug}`}>Register</Button>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      variants={TRANSITION_VARIANTS.fadeUp}
      className="group bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <Link to={`/workshops/${workshop.slug}`} className="block overflow-hidden relative">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {workshop.isFeatured && (
          <span className="absolute top-3 left-3 bg-[#7C3AED] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <span className="absolute top-3 right-3 bg-[#0F172A]/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
          {workshop.fees}
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {workshop.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs font-medium bg-violet-50 text-[#7C3AED] px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Tag className="w-2.5 h-2.5" /> {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link to={`/workshops/${workshop.slug}`}>
          <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors mb-2 line-clamp-2">
            {workshop.title}
          </h3>
        </Link>

        {/* Meta */}
        <ul className="text-xs text-slate-500 space-y-1.5 mb-4">
          <li className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />{formatDate(workshop.date)}</li>
          <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />{workshop.location}</li>
          <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />{workshop.duration}</li>
          <li className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />{spotsLeft} spots left</li>
        </ul>

        {/* Enrollment bar */}
        <div className="mb-4">
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#FF5C35] rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">{workshop.enrolled}/{workshop.capacity} enrolled</p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link to={`/workshops/${workshop.slug}`} className="block">
            <Button variant="primary" size="sm" className="w-full">Register Now</Button>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
