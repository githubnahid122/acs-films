import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { LayoutGrid, List } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import WorkshopFilter from '@/components/workshops/WorkshopFilter'
import { EmptyState } from '@/components/common/Feedback'
import { MOCK_WORKSHOPS } from '@/constants/mockData'
import { STAGGER_CONTAINER } from '@/constants'
import type { WorkshopFilter as WFilter } from '@/types'

export default function WorkshopsPage() {
  const [filter, setFilter] = useState<WFilter>({ search: '', type: '', location: '', priceRange: [0, 50000] })
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filtered = useMemo(() => {
    return MOCK_WORKSHOPS.filter((w) => {
      const matchSearch = !filter.search || w.title.toLowerCase().includes(filter.search.toLowerCase()) || w.shortDescription.toLowerCase().includes(filter.search.toLowerCase())
      const matchType = !filter.type || w.tags.some((t) => t.toLowerCase() === filter.type.toLowerCase())
      const matchLocation = !filter.location || w.location.toLowerCase() === filter.location.toLowerCase()
      return matchSearch && matchType && matchLocation
    })
  }, [filter])

  return (
    <>
      <PageHeader
        title="Workshops & Programs"
        subtitle="Craft-focused programs led by industry professionals. Find your next step on the path to the big screen."
        breadcrumbs={[{ label: 'Workshops' }]}
      />

      <section className="py-14 bg-[#F8FAFC] min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filter bar */}
          <div className="mb-8">
            <WorkshopFilter filter={filter} onChange={(partial) => setFilter((f) => ({ ...f, ...partial }))} />
          </div>

          {/* Result count + view toggle */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold text-[#0F172A]">{filtered.length}</span> workshop{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-1 bg-white border border-slate-100 rounded-xl p-1">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-[#7C3AED] text-white' : 'text-slate-400 hover:text-slate-600'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-[#7C3AED] text-white' : 'text-slate-400 hover:text-slate-600'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid or List */}
          {filtered.length === 0 ? (
            <EmptyState
              title="No workshops match your filters"
              description="Try adjusting your search or clearing filters to see more results."
            />
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER_CONTAINER}
              className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}
            >
              {filtered.map((w) => (
                <WorkshopCard key={w.id} workshop={w} layout={view} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
