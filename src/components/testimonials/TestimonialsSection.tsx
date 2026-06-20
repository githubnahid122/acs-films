import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { MOCK_TESTIMONIALS } from '@/constants/mockData'
import SectionHeader from '@/components/common/SectionHeader'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-[#FF5C35] text-[#FF5C35]' : 'text-slate-200'}`} />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length)
  const next = () => setActive((a) => (a + 1) % MOCK_TESTIMONIALS.length)

  const testimonial = MOCK_TESTIMONIALS[active]

  return (
    <section className="py-20 sm:py-28 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="What They Say"
          title="Stories of Transformation"
          light
          className="mb-14"
        />

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-[#7C3AED]/30" />

              <StarRating rating={testimonial.rating} />

              <blockquote className="mt-5 text-lg sm:text-xl text-white/90 leading-relaxed font-light italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#7C3AED]"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  {testimonial.project && (
                    <p className="text-[#7C3AED] text-xs mt-0.5 font-medium">{testimonial.project}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {MOCK_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-[#7C3AED] w-6' : 'bg-white/20 w-1.5 hover:bg-white/40'}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
