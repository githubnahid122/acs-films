import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { MOCK_NEWS } from '@/constants/mockData'
import { formatDate } from '@/utils'
import { TRANSITION_VARIANTS } from '@/constants'
import Breadcrumb from '@/components/common/Breadcrumb'
import { EmptyState } from '@/components/common/Feedback'

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = MOCK_NEWS.find((a) => a.slug === slug)
  const related = MOCK_NEWS.filter((a) => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <div className="pt-24">
        <EmptyState
          title="Article not found"
          action={<Link to="/news" className="text-[#7C3AED] font-semibold hover:underline">Back to News</Link>}
        />
      </div>
    )
  }

  return (
    <>
      {/* Banner */}
      <section className="relative pt-20 overflow-hidden bg-[#0F172A]">
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20">
          <Breadcrumb items={[{ label: 'News', href: '/news' }, { label: article.title }]} light className="mb-6" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 max-w-4xl leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {article.title}
          </motion.h1>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(article.date)}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</span>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article body */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={TRANSITION_VARIANTS.fadeUp}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-slate-100 p-8 prose prose-slate max-w-none">
                <p className="text-lg font-medium text-slate-700 leading-relaxed">{article.excerpt}</p>
                <hr />
                <p className="text-slate-600 leading-relaxed">{article.content}</p>
                <p className="text-slate-600 leading-relaxed">
                  This is placeholder article body content. In a real implementation, this would be rich text from a CMS or API, with proper headings, inline images, pull quotes, and formatted paragraphs that tell the full story.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <Tag className="w-4 h-4 text-slate-400 mt-0.5" />
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <Link to="/news" className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#7C3AED] transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to all news
              </Link>
            </motion.div>

            {/* Related */}
            <div className="lg:col-span-1">
              <h3 className="text-base font-bold text-[#0F172A] mb-4">More Stories</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link key={r.id} to={`/news/${r.slug}`} className="flex gap-4 group">
                    <img src={r.image} alt={r.title} className="w-20 h-16 rounded-xl object-cover shrink-0 group-hover:opacity-80 transition" />
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-[#7C3AED]">{r.category}</span>
                      <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors line-clamp-2 mt-0.5">{r.title}</p>
                      <p className="text-xs text-slate-400 mt-1">{formatDate(r.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
