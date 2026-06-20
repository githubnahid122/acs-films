import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import { MOCK_WORKSHOPS } from '@/constants/mockData'
import { STAGGER_CONTAINER } from '@/constants'

export default function FeaturedWorkshops() {
  const featured = MOCK_WORKSHOPS.filter((w) => w.isFeatured).slice(0, 3)

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Learn & Grow"
            title="Featured Workshops"
            subtitle="Craft-focused programs designed by India's leading casting professionals."
            align="left"
          />
          <Link
            to="/workshops"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:gap-3 transition-all"
          >
            View all workshops <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
