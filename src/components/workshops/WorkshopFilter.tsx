import { Search, SlidersHorizontal } from 'lucide-react'
import { WORKSHOP_TYPES, WORKSHOP_LOCATIONS } from '@/constants'
import type { WorkshopFilter as WFilter } from '@/types'
import { cn } from '@/utils'

interface Props {
  filter: WFilter
  onChange: (f: Partial<WFilter>) => void
}

export default function WorkshopFilter({ filter, onChange }: Props) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={filter.search}
            onChange={(e) => onChange({ search: e.target.value })}
            placeholder="Search workshops…"
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-violet-100 transition"
          />
        </div>

        {/* Type filter */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {WORKSHOP_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => onChange({ type: type === 'All' ? '' : type })}
                className={cn(
                  'shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap',
                  (type === 'All' && !filter.type) || filter.type === type
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-[#7C3AED]'
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <select
          value={filter.location}
          onChange={(e) => onChange({ location: e.target.value === 'All' ? '' : e.target.value })}
          className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#7C3AED] bg-white"
        >
          {WORKSHOP_LOCATIONS.map((loc) => (
            <option key={loc} value={loc === 'All' ? '' : loc}>{loc}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
