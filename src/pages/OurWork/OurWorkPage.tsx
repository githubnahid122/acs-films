import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import SectionHeader from '@/components/common/SectionHeader'
import { MOCK_PROJECTS } from '@/constants/mockData'
import { STAGGER_CONTAINER, TRANSITION_VARIANTS } from '@/constants'
import { cn } from '@/utils'

const TABS = ['All', 'Released', 'Upcoming']
const TYPES = ['All', 'movie', 'web-series', 'commercial']

export default function OurWorkPage() {
  const [status, setStatus] = useState('All')
  const [type, setType] = useState('All')

  const filtered = MOCK_PROJECTS.filter((p) => {
    const matchStatus = status === 'All' || p.status === status.toLowerCase()
    const matchType = type === 'All' || p.type === type
    return matchStatus && matchType
  })

  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="From blockbuster films to acclaimed web series — discover the stories MCCC has helped tell."
        breadcrumbs={[{ label: 'Our Work' }]}
      />

      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Portfolio"
            title="Projects We've Cast"
            className="mb-10"
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-6 justify-center mb-10">
            {/* Status tabs */}
            <div className="flex gap-2 p-1 bg-white rounded-xl border border-slate-100 shadow-sm">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatus(tab)}
                  className={cn(
                    'px-5 py-2 rounded-lg text-sm font-medium transition-all',
                    status === tab ? 'bg-[#7C3AED] text-white shadow' : 'text-slate-500 hover:text-[#0F172A]'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Type filter */}
            <div className="flex gap-2 flex-wrap">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-semibold transition-all capitalize',
                    type === t ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-500 border border-slate-200 hover:border-[#7C3AED]'
                  )}
                >
                  {t === 'web-series' ? 'Web Series' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            key={`${status}-${type}`}
            initial="hidden"
            animate="visible"
            variants={STAGGER_CONTAINER}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={TRANSITION_VARIANTS.scaleIn}
                className="group relative rounded-xl overflow-hidden aspect-[2/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-sm leading-tight">{project.title}</p>
                  <p className="text-slate-300 text-xs mt-0.5 capitalize">{project.type.replace('-', ' ')} · {project.year}</p>
                </div>
                {project.status === 'upcoming' && (
                  <span className="absolute top-2 right-2 bg-[#FF5C35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-slate-400 text-sm mt-10">
            Showing {filtered.length} of 400+ projects.
          </p>
        </div>
      </section>
    </>
  )
}
