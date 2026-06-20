import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, Tag, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { MOCK_WORKSHOPS } from '@/constants/mockData'
import { formatDate } from '@/utils'
import { TRANSITION_VARIANTS } from '@/constants'
import Breadcrumb from '@/components/common/Breadcrumb'
import Button from '@/components/common/Button'
import { EmptyState } from '@/components/common/Feedback'

export default function WorkshopDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const workshop = MOCK_WORKSHOPS.find((w) => w.slug === slug)

  if (!workshop) {
    return (
      <div className="pt-24">
        <EmptyState
          title="Workshop not found"
          description="This workshop may have ended or the link might be wrong."
          action={<Link to="/workshops" className="text-[#7C3AED] font-semibold hover:underline">Browse all workshops</Link>}
        />
      </div>
    )
  }

  const spotsLeft = workshop.capacity - workshop.enrolled

  const details = [
    { icon: Calendar, label: 'Date', value: formatDate(workshop.date) },
    { icon: Clock, label: 'Time', value: workshop.time },
    { icon: MapPin, label: 'Venue', value: workshop.venue },
    { icon: Users, label: 'Age Group', value: workshop.ageGroup },
    { icon: Tag, label: 'Duration', value: workshop.duration },
  ]

  return (
    <>
      {/* Banner */}
      <section className="relative pt-20 min-h-[50vh] flex items-end overflow-hidden bg-[#0F172A]">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-12">
          <Breadcrumb
            items={[{ label: 'Workshops', href: '/workshops' }, { label: workshop.title }]}
            light
            className="mb-6"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {workshop.tags.map((tag) => (
              <span key={tag} className="bg-[#7C3AED]/80 text-white text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {workshop.title}
          </motion.h1>
          <p className="text-slate-300 mt-3 text-lg">Taught by <strong className="text-white">{workshop.instructor}</strong></p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={TRANSITION_VARIANTS.fadeUp} className="bg-white rounded-2xl border border-slate-100 p-8">
                <h2 className="text-xl font-bold text-[#0F172A] mb-4">About This Workshop</h2>
                <p className="text-slate-600 leading-relaxed">{workshop.description}</p>
              </motion.div>

              {workshop.instructorBio && (
                <motion.div variants={TRANSITION_VARIANTS.fadeUp} className="bg-white rounded-2xl border border-slate-100 p-8">
                  <h2 className="text-xl font-bold text-[#0F172A] mb-4">About the Instructor</h2>
                  <p className="text-slate-600 leading-relaxed">{workshop.instructorBio}</p>
                </motion.div>
              )}

              {/* What you'll learn */}
              <motion.div variants={TRANSITION_VARIANTS.fadeUp} className="bg-white rounded-2xl border border-slate-100 p-8">
                <h2 className="text-xl font-bold text-[#0F172A] mb-5">What You'll Learn</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Screen acting fundamentals',
                    'Emotional recall techniques',
                    'Camera awareness',
                    'Script analysis and cold reading',
                    'Audition preparation',
                    'Industry insights',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-[#0F172A]">{workshop.fees}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${spotsLeft < 5 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {spotsLeft} spots left
                    </span>
                  </div>

                  {/* Enrollment progress */}
                  <div className="mb-6">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#FF5C35] rounded-full"
                        style={{ width: `${(workshop.enrolled / workshop.capacity) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">{workshop.enrolled} of {workshop.capacity} spots filled</p>
                  </div>

                  {/* Details list */}
                  <ul className="space-y-3 mb-7 border-t border-slate-100 pt-5">
                    {details.map(({ icon: Icon, label, value }) => (
                      <li key={label} className="flex items-start gap-3 text-sm">
                        <Icon className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 text-xs block">{label}</span>
                          <span className="text-[#0F172A] font-medium">{value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Button variant="primary" size="lg" className="w-full">
                    Register Now
                  </Button>
                  <p className="text-xs text-slate-400 text-center mt-3">Secure checkout · Instant confirmation</p>
                </motion.div>

                <Link
                  to="/workshops"
                  className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-[#7C3AED] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to all workshops
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
