import { cn } from '@/utils'
import { Search } from 'lucide-react'

// ─── Loader ───────────────────────────────────────────────────────────────────
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Loader({ size = 'md', className }: LoaderProps) {
  const sizeMap = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' }
  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <div className={cn('border-3 border-violet-200 border-t-[#7C3AED] rounded-full animate-spin', sizeMap[size])} />
    </div>
  )
}

// ─── EmptyState ───────────────────────────────────────────────────────────────
interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-20 text-center gap-4', className)}>
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
        {icon || <Search className="w-7 h-7" />}
      </div>
      <div>
        <p className="text-lg font-semibold text-slate-700">{title}</p>
        {description && <p className="text-sm text-slate-500 mt-1 max-w-xs">{description}</p>}
      </div>
      {action}
    </div>
  )
}
