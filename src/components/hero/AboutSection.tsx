import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { TRANSITION_VARIANTS } from '@/constants'
import Button from '@/components/common/Button'

const HIGHLIGHTS = [
  'Leading Casting Company - one of India\'s finest since 2008',
  'Talent Discovery - found stars like Rajkummar Rao, Mrunal Thakur',
  'Industry Recognition - Member of the Casting Society of America',
  '15+ Years Experience in movies, web series, and commercials',
]

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={TRANSITION_VARIANTS.slideLeft}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://picsum.photos/seed/mukesh/600/750"
                alt="Mukesh Chhabra, Casting Director"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Mukesh Chhabra
                </p>
                <p className="text-slate-300 text-sm mt-1">Casting Director · Director · Writer</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:right-0 bg-[#7C3AED] text-white rounded-2xl p-5 shadow-xl"
            >
              <p
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                15+
              </p>
              <p className="text-sm text-violet-200 mt-1">Years of Excellence</p>
            </motion.div>

            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 rounded-3xl bg-violet-50 rotate-6" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span
              variants={TRANSITION_VARIANTS.fadeUp}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7C3AED]"
            >
              About MCCC
            </motion.span>

            <motion.h2
              variants={TRANSITION_VARIANTS.fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Meet the Heart
              <br />
              of MCCC
            </motion.h2>

            <motion.p
              variants={TRANSITION_VARIANTS.fadeUp}
              className="text-base text-slate-600 leading-relaxed mb-4"
            >
              Mukesh Chhabra is the driving force behind streamlining the casting process in the
              Hindi Film Industry. After training for 2 years at Shri Ram Centre, he spent 9 years
              acting and teaching with the Theatre in Education Company (TIE) affiliated with the
              National School of Drama.
            </motion.p>

            <motion.p
              variants={TRANSITION_VARIANTS.fadeUp}
              className="text-base text-slate-600 leading-relaxed mb-8"
            >
              Founded in 2008, MCCC has grown to become India's leading casting company, discovering
              faces like Rajkummar Rao, Sushant Singh Rajput, Mrunal Thakur, Pratik Gandhi, Sanya
              Malhotra, and Fatima Sana Shaikh.
            </motion.p>

            <motion.ul
              variants={TRANSITION_VARIANTS.fadeUp}
              className="space-y-3 mb-8"
            >
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={TRANSITION_VARIANTS.fadeUp} className="flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => { window.location.href = '/about' }}
              >
                Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link
                to="/our-work"
                className="text-sm font-semibold text-[#0F172A] hover:text-[#7C3AED] transition-colors flex items-center gap-1"
              >
                See Our Work <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
