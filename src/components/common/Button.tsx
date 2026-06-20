import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}

const sizeMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantMap = {
  primary: 'bg-[#7C3AED] text-white hover:bg-[#6d28d9] shadow-lg shadow-violet-500/20',
  secondary: 'bg-[#FF5C35] text-white hover:bg-[#e84e29] shadow-lg shadow-orange-500/20',
  ghost: 'bg-transparent text-[#0F172A] hover:bg-slate-100',
  outline: 'border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, className, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        disabled={disabled || loading}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 cursor-pointer',
          sizeMap[size],
          variantMap[variant],
          className
        )}
        {...(props as Parameters<typeof motion.button>[0])}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
