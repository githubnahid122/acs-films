import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { TRANSITION_VARIANTS } from '@/constants'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TRANSITION_VARIANTS.scaleIn}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #4c1d95 50%, #0F172A 100%)',
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#FF5C35]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300">Stay in the Loop</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Never Miss a Workshop
            </h2>
            <p className="text-slate-300 max-w-md mx-auto mb-8">
              Get early access to new workshops, casting news, and exclusive masterclasses
              straight to your inbox.
            </p>

            {status === 'success' ? (
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-6 py-3 rounded-full font-medium">
                ✓ You're on the list — watch your inbox!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-white/50 text-sm backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#7C3AED] font-semibold rounded-full hover:bg-slate-100 transition-colors disabled:opacity-60 text-sm shrink-0"
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-violet-300 border-t-[#7C3AED] rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-slate-500 text-xs mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
