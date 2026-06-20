import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import SectionHeader from '@/components/common/SectionHeader'
import { MOCK_TESTIMONIALS } from '@/constants/mockData'
import { STAGGER_CONTAINER, TRANSITION_VARIANTS } from '@/constants'

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Stories from students and collaborators who've been part of the Acs Films journey."
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Real People. Real Stories."
            title="What Our Community Says"
            className="mb-12"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER_CONTAINER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MOCK_TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                variants={TRANSITION_VARIANTS.fadeUp}
                className="bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 p-7 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-[#FF5C35] text-[#FF5C35]' : 'text-slate-200'}`} />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-violet-100" />
                  <p className="text-slate-600 text-sm leading-relaxed pl-4">{t.quote}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-violet-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    {t.project && <p className="text-xs text-[#7C3AED] font-medium mt-0.5">{t.project}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
