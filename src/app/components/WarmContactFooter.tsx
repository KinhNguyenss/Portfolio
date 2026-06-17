import { motion } from "motion/react";
import { Mail, Github, ArrowUpRight, MapPin } from "lucide-react";

export function WarmContactFooter() {
  return (
    <footer id="contact" style={{ background: "#141210" }}>
      {/* ── Gradient divider ── */}
      <div
        style={{
          height: "200px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,163,115,0.09) 0%, rgba(91,123,83,0.04) 40%, transparent 70%)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "1px",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(212,163,115,0.3), transparent)",
          }}
        />
      </div>

      {/* ── Contact content ── */}
      <div style={{ padding: "0 2.5rem 6rem" }}>
        <div className="max-w-6xl mx-auto">
          {/* Main contact block */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#D4A373",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              Let's connect
            </p>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#F4F0E6",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.4rem",
              }}
            >
              Have something in mind?{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#D4A373",
                }}
              >
                Let's talk.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#9A9088",
                lineHeight: 1.75,
                maxWidth: "480px",
                margin: "0 auto 2.5rem",
              }}
            >
              I'm currently open to internships, collaborative projects.
            </p>

            {/* Primary email CTA */}
            <a
              href="mailto:kinhnguyen.dev@gmail.com"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "#D4A373",
                borderRadius: "0.75rem",
                color: "#1A1817",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "1rem 2rem",
                textDecoration: "none",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.35), 0 12px 40px rgba(212,163,115,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#E0B585";
                el.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.4), 0 16px 52px rgba(212,163,115,0.32)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#D4A373";
                el.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.35), 0 12px 40px rgba(212,163,115,0.2)";
              }}
            >
              <Mail size={18} />
              kinhnguyen.dev@gmail.com
            </a>
          </motion.div>

          {/* Info cards row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
          >
            {[
              {
                icon: <Mail size={16} />,
                label: "Email",
                value: "kinhnguyen.dev@gmail.com",
                href: "mailto:kinhnguyen.dev@gmail.com",
                accent: "#D4A373",
              },
              {
                icon: <Github size={16} />,
                label: "GitHub",
                value: "KinhNguyenss",
                href: "https://github.com/KinhNguyenss",
                accent: "#9A9088",
                external: true,
              },
              {
                icon: <MapPin size={16} />,
                label: "Location",
                value: "Da Nang, Vietnam",
                href: undefined,
                accent: "#8FAF86",
              },
            ].map((item) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Tag
                  key={item.label}
                  {...(item.href
                    ? {
                      href: item.href,
                      target: item.external ? "_blank" : undefined,
                      rel: item.external ? "noopener noreferrer" : undefined,
                    }
                    : {})}
                  className="flex items-center gap-3 p-4 transition-all duration-250"
                  style={{
                    background: "rgba(38, 34, 30, 0.55)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "1rem",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.03) inset, 0 4px 16px rgba(0,0,0,0.2)",
                    textDecoration: "none",
                    cursor: item.href ? "pointer" : "default",
                  }}
                  onMouseEnter={
                    item.href
                      ? (e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `${item.accent}28`;
                        el.style.transform = "translateY(-2px)";
                      }
                      : undefined
                  }
                  onMouseLeave={
                    item.href
                      ? (e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(255,255,255,0.06)";
                        el.style.transform = "translateY(0)";
                      }
                      : undefined
                  }
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "0.625rem",
                      background: `${item.accent}10`,
                      border: `1px solid ${item.accent}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.accent,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#9A9088",
                        letterSpacing: "0.08em",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "#F4F0E6",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                  {item.external && (
                    <ArrowUpRight
                      size={13}
                      style={{ color: "#9A9088", flexShrink: 0, opacity: 0.6 }}
                    />
                  )}
                </Tag>
              );
            })}
          </motion.div>

          {/* Footer bottom bar */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
              marginBottom: "2rem",
            }}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#F4F0E6",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                NQK
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#9A9088",
                }}
              >
                © 2024 Nguyễn Quang Kính
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#9A9088",
                }}
              >
                Crafted with care · VKU Software Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
