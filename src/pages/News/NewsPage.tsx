import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { MOCK_NEWS } from '@/constants/mockData'
import { formatDate } from '@/utils'
import { STAGGER_CONTAINER, TRANSITION_VARIANTS } from '@/constants'
import PageHeader from '@/components/common/PageHeader'
import SectionHeader from '@/components/common/SectionHeader'

function NewsCard({ article }: { article: typeof MOCK_NEWS[0] }) {
  return (
    <motion.article
      variants={TRANSITION_VARIANTS.fadeUp}
      className="group bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <Link to={`/news/${article.slug}`} className="block overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">{article.category}</span>
        <Link to={`/news/${article.slug}`}>
          <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors mb-2 line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{article.excerpt}</p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(article.date)}</span>
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{article.author}</span>
          </div>
          <Link
            to={`/news/${article.slug}`}
            className="text-xs font-semibold text-[#7C3AED] flex items-center gap-1 hover:gap-2 transition-all"
          >
            Read <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Updates"
        subtitle="The latest from MCCC — casting announcements, workshop news, and industry stories."
        breadcrumbs={[{ label: 'News' }]}
      />

      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Latest"
            title="What's Happening at MCCC"
            className="mb-10"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER_CONTAINER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MOCK_NEWS.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
