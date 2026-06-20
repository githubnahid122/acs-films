import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-violet-200 to-transparent" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-6 pl-14 relative"
          >
            {/* Year node */}
            <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0 shadow-lg shadow-violet-200">
              <span className="text-white text-[10px] font-bold leading-tight text-center">{item.year}</span>
            </div>

            {/* Content */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex-1 hover:border-violet-200 hover:shadow-md transition-all">
              <p className="text-sm font-bold text-[#7C3AED] mb-1">{item.year}</p>
              <h4 className="text-base font-bold text-[#0F172A] mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
