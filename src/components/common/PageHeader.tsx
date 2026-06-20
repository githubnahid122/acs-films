import { motion } from 'framer-motion'
import { TRANSITION_VARIANTS } from '@/constants'
import Breadcrumb from './Breadcrumb'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{
        background: backgroundImage
          ? `linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.7) 100%), url(${backgroundImage}) center/cover no-repeat`
          : 'linear-gradient(135deg, #0F172A 0%, #1e1b4b 50%, #0F172A 100%)',
      }}
    >
      {/* Decorative accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #7C3AED 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF5C35 0%, transparent 50%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} light className="mb-6" />}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={TRANSITION_VARIANTS.fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={TRANSITION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-300 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
