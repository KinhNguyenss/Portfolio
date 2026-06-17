import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export function WarmNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(26, 24, 23, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.05)"
            : "none",
          padding: "1.2rem 2.5rem",
        }}
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between"
        >
          {/* Wordmark */}
          <a
            href="#"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F0E6",
              fontWeight: 700,
              fontSize: "1.15rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            NQK
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: "#9A9088",
                  textDecoration: "none",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F4F0E6")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9A9088")
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:kinhnguyen.dev@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 transition-all duration-250 hover:scale-[1.03]"
            style={{
              background: "rgba(212, 163, 115, 0.1)",
              border: "1px solid rgba(212, 163, 115, 0.3)",
              borderRadius: "9999px",
              color: "#D4A373",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.83rem",
              fontWeight: 500,
              padding: "0.5rem 1.2rem",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(212, 163, 115, 0.18)";
              el.style.borderColor = "rgba(212, 163, 115, 0.55)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(212, 163, 115, 0.1)";
              el.style.borderColor = "rgba(212, 163, 115, 0.3)";
            }}
          >
            Say hello
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            style={{
              color: "#F4F0E6",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-3 right-3 z-40 p-6 rounded-2xl md:hidden"
            style={{
              background: "rgba(30, 27, 25, 0.97)",
              backdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "#F4F0E6",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:kinhnguyen.dev@gmail.com"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.82rem",
                  color: "#D4A373",
                  textDecoration: "none",
                }}
              >
                kinhnguyen.dev@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
