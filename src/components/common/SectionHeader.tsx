import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { TRANSITION_VARIANTS } from '@/constants'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  const alignMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={cn('flex flex-col gap-3', alignMap[align], className)}
    >
      {eyebrow && (
        <motion.span
          variants={TRANSITION_VARIANTS.fadeUp}
          className={cn(
            'text-xs font-semibold tracking-[0.2em] uppercase',
            light ? 'text-violet-300' : 'text-[#7C3AED]'
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={TRANSITION_VARIANTS.fadeUp}
        className={cn(
          'font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
          light ? 'text-white' : 'text-[#0F172A]'
        )}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={TRANSITION_VARIANTS.fadeUp}
          className={cn(
            'text-base sm:text-lg max-w-2xl leading-relaxed',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
