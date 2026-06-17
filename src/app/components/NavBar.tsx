import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(11, 12, 16, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(102, 252, 241, 0.08)" : "none",
          padding: "1.1rem 3rem",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#"
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#66FCF1",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            &lt;NQK /&gt;
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#8a9aaa",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#66FCF1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8a9aaa")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:kinhnguyen.dev@gmail.com"
            className="hidden md:inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(102, 252, 241, 0.08)",
              border: "1px solid rgba(102, 252, 241, 0.3)",
              borderRadius: "0.5rem",
              color: "#66FCF1",
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.8rem",
              padding: "0.55rem 1.1rem",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(102, 252, 241, 0.15)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(102, 252, 241, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(102, 252, 241, 0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            hire_me()
          </a>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ color: "#66FCF1", background: "none", border: "none", cursor: "pointer" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 p-6 rounded-xl md:hidden"
            style={{
              background: "rgba(15, 18, 24, 0.95)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(102, 252, 241, 0.15)",
            }}
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#C5C6C7",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:kinhnguyen.dev@gmail.com"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.85rem",
                  color: "#66FCF1",
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
