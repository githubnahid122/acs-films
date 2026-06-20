import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clapperboard } from "lucide-react";
import { cn } from "@/utils";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/common/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  // Detect scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isLight = !scrolled && !mobileOpen && location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Acs Home"
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                  isLight ? "bg-white/10" : "bg-[#7C3AED]"
                )}
              >
                <Clapperboard
                  className={cn(
                    "w-5 h-5",
                    isLight ? "text-white" : "text-white"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors",
                  isLight ? "text-white" : "text-[#0F172A]"
                )}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Acs Films
              </span>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        isActive
                          ? isLight
                            ? "bg-white/20 text-white"
                            : "bg-violet-50 text-[#7C3AED]"
                          : isLight
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>

              <button
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((o) => !o)}
                className={cn(
                  "md:hidden p-2 rounded-full transition-colors",
                  isLight
                    ? "text-white hover:bg-white/10"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-100 shadow-lg md:hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        cn(
                          "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                          isActive
                            ? "bg-violet-50 text-[#7C3AED]"
                            : "text-slate-700 hover:bg-slate-50 hover:text-[#0F172A]"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-3 border-t border-slate-100 mt-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-[#7C3AED] text-white px-4 py-3 rounded-full font-semibold hover:bg-[#6d28d9] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
