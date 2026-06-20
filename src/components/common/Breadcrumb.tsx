import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  light?: boolean
  className?: string
}

export default function Breadcrumb({ items, light = false, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-sm', className)}>
      <Link
        to="/"
        className={cn(
          'transition-colors hover:underline',
          light ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#7C3AED]'
        )}
      >
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className={cn('w-3.5 h-3.5', light ? 'text-slate-500' : 'text-slate-400')} />
          {item.href && i < items.length - 1 ? (
            <Link
              to={item.href}
              className={cn(
                'transition-colors hover:underline',
                light ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#7C3AED]'
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn(light ? 'text-white' : 'text-[#0F172A]', 'font-medium')}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
