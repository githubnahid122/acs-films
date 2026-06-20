import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { STATS, TRANSITION_VARIANTS } from '@/constants'
import Button from '@/components/common/Button'

// Poster grid backgrounds (real posters via picsum)
const POSTER_SEEDS = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6', 'movie7', 'movie8', 'movie9']

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="grain relative min-h-[100svh] flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Parallax poster grid background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 opacity-25 scale-110">
          {POSTER_SEEDS.map((seed) => (
            <div
              key={seed}
              className="aspect-[2/3] overflow-hidden"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${seed}/400/560)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          {/* Repeat for fill */}
          {POSTER_SEEDS.map((seed) => (
            <div
              key={seed + 'b'}
              className="aspect-[2/3] overflow-hidden"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${seed}x/400/560)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/80 to-[#1e1b4b]/90" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A] to-transparent" />
        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7C3AED]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FF5C35]/15 blur-3xl pointer-events-none" />
      </motion.div>

      {/* Filmstrip top accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7C3AED] via-[#FF5C35] to-[#7C3AED]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Casting Since 2008</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your Gateway
            <br />
            <em className="not-italic" style={{ color: '#7C3AED' }}>To The</em>{' '}
            Big Screen
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            India's foremost casting company — discovering exceptional talent and shaping
            the faces of Bollywood since 2008.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/workshops'}
            >
              Explore Workshops
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 text-white/80 hover:text-white font-semibold text-base transition-colors group"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED]/10 transition-all">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex flex-col items-center py-6 px-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
