import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import SectionHeader from '@/components/common/SectionHeader'
import Timeline from '@/components/common/Timeline'
import { TRANSITION_VARIANTS, STAGGER_CONTAINER } from '@/constants'

const TIMELINE_ITEMS = [
  { year: '2008', title: 'Acs Films Founded', description: 'Mukesh Chhabra established Acs Films with a singular vision to transform how talent is discovered in Indian cinema.' },
  { year: '2010', title: 'First Bollywood Blockbuster', description: 'Cast the ensemble for a landmark Hindi film, marking Acs Films entry into mainstream Bollywood.' },
  { year: '2013', title: 'The Lootera Era', description: 'Collaborated on critically acclaimed parallel cinema projects, building a reputation for nuanced casting.' },
  { year: '2016', title: 'Dangal & Nationwide Discovery', description: 'The nationwide audition drive for Dangal put Acs Films on a new map — discovering non-actors from small towns.' },
  { year: '2019', title: 'Dil Bechara — Directorial Debut', description: 'Mukesh made his directorial debut, marking a milestone that brought new dimension to Acs Films identity.' },
  { year: '2021', title: 'CSA Membership', description: 'Inducted into the Casting Society of America — only the second Indian company to receive this honour.' },
  { year: '2024', title: 'Workshop Division Launch', description: 'Formally launched the Acs Films Workshop Division, making our craft accessible to aspiring actors nationwide.' },
  { year: '2026', title: '400+ Films & Counting', description: 'Acs Films has now cast for over 400 feature films, 150+ web series, and 3000+ commercials.' },
]

const VALUES = [
  { title: 'Our Vision', text: 'A world where raw talent — irrespective of background — has a clear, accessible path to the screen. Acs Films exists to make that path real.', icon: '🔭' },
  { title: 'Our Mission', text: 'To discover, nurture, and champion exceptional performers across India. We connect talent with storytellers, and elevate the craft of casting as an art form.', icon: '🎯' },
  { title: 'Our Values', text: 'Authenticity over polish. Craft over celebrity. We believe in building careers that last, rooted in genuine talent and relentless training.', icon: '💎' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Acs Films"
        subtitle="Fifteen years of discovering India's most compelling performers and shaping the stories that define a generation."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <SectionHeader
            eyebrow="Who We Are"
            title="More Than a Casting Company"
            align="left"
            className="mb-8"
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={TRANSITION_VARIANTS.fadeUp}
            viewport={{ once: true }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Mukesh Chhabra Casting Company (Acs Films) strives to discover exceptional talents and
            bring together the perfect cast for every project. Incepted in 2008, Acs Films has evolved
            into one of the finest casting companies catering to worldwide clientele. We've been the
            creative force behind Bollywood's biggest blockbusters, the most-streamed web series on
            OTT platforms, and some of the most talked-about commercial campaigns in the country.
          </motion.p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={STAGGER_CONTAINER}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={TRANSITION_VARIANTS.fadeUp}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={TRANSITION_VARIANTS.slideLeft}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://picsum.photos/seed/founderb/600/800"
                  alt="Mukesh Chhabra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#7C3AED] text-white rounded-2xl p-4">
                <p className="text-2xl font-bold">Dil Bechara</p>
                <p className="text-violet-200 text-xs">Directorial Debut</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={TRANSITION_VARIANTS.slideRight}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7C3AED]">The Founder</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0F172A] mt-3 mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Mukesh Chhabra
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-4">Casting Director · Director · Acting Coach · Writer</p>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Mukesh Chhabra is the driving force behind streamlining the casting process in the
                Hindi Film Industry. After training for 2 years to understand the craft of acting
                from Shri Ram Centre, he completed 9 years acting and teaching with the Theatre in
                Education Company (TIE) affiliated with the National School of Drama.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                With an extraordinary eye for talent, Mukesh has discovered faces like Rajkummar Rao,
                Sushant Singh Rajput, Mrunal Thakur, Pratik Gandhi, Sanya Malhotra, and Fatima Sana
                Shaikh — transforming unknowns into stars of the first magnitude.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="15 Years in the Making"
            align="center"
            className="mb-14"
          />
          <Timeline items={TIMELINE_ITEMS} />
        </div>
      </section>
    </>
  )
}
