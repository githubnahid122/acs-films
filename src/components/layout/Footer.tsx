import { Link } from 'react-router-dom'
import { Clapperboard, Camera, Play, Rss, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { NAV_LINKS, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/constants'

const SOCIAL_LINKS = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: Globe, href: '#', label: 'Twitter / X' },
  { icon: Rss, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED] flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                MCCC
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Your Gateway to the Big Screen. Discovering exceptional talent and shaping India's
              cinematic landscape since 2008.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#7C3AED] hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshops */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Workshops</p>
            <ul className="flex flex-col gap-2.5">
              {['Acting Workshops', "Children's Programs", 'Theatre Festivals', 'Masterclasses', 'Audition Bootcamps', 'Online Workshops'].map((item) => (
                <li key={item}>
                  <Link
                    to="/workshops"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Get in Touch</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[#7C3AED] group-hover:scale-110 transition-transform shrink-0" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[#7C3AED] group-hover:scale-110 transition-transform shrink-0" />
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#7C3AED] shrink-0" />
                {SITE_ADDRESS}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Mukesh Chhabra Casting Company. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
