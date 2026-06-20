import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      {/* Decorative film frames */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white rounded-sm"
            style={{
              width: 80 + Math.random() * 120,
              height: 120 + Math.random() * 160,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              transform: `rotate(${(Math.random() - 0.5) * 20}deg)`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">404</span>
        <h1
          className="text-6xl sm:text-8xl font-bold text-white mt-2 mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Cut!
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-sm mx-auto">
          Looks like this scene wasn't in the script. The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6d28d9] transition-colors"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:border-[#7C3AED] transition-colors"
          >
            <Search className="w-4 h-4" /> Browse Workshops
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
