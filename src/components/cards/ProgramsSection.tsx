import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROGRAMS, TRANSITION_VARIANTS, STAGGER_CONTAINER } from '@/constants'
import type { Program } from '@/types'
import SectionHeader from '@/components/common/SectionHeader'

const colorMap: Record<string, { bg: string; accent: string; text: string }> = {
  violet: { bg: 'bg-violet-50', accent: 'text-[#7C3AED]', text: 'hover:bg-[#7C3AED]' },
  coral:  { bg: 'bg-orange-50', accent: 'text-[#FF5C35]', text: 'hover:bg-[#FF5C35]' },
  gold:   { bg: 'bg-yellow-50', accent: 'text-yellow-600', text: 'hover:bg-yellow-500' },
  navy:   { bg: 'bg-slate-100', accent: 'text-[#0F172A]', text: 'hover:bg-[#0F172A]' },
}

function ProgramCard({ program }: { program: Program }) {
  const colors = colorMap[program.color] ?? colorMap.violet

  return (
    <motion.div
      variants={TRANSITION_VARIANTS.fadeUp}
      className="group relative bg-white rounded-2xl border border-slate-100 p-7 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200 transition-all duration-400 overflow-hidden"
    >
      {/* Background pattern on hover */}
      <div className={`absolute inset-0 ${colors.text} opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10`}
        style={{ opacity: 0 }}
      />

      <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {program.icon}
      </div>

      <h3 className={`text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#7C3AED] transition-colors`}>
        {program.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{program.description}</p>

      <Link
        to={program.link}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.accent} hover:gap-2.5 transition-all`}
      >
        Explore Program <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

export default function ProgramsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Programs"
          subtitle="Tailored programs for every stage of your journey — from first steps to the big screen."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
