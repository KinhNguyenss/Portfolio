import { motion } from "motion/react";
import { Mail, Github, ExternalLink, MapPin, Zap } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "kinhnguyen.dev@gmail.com",
    href: "mailto:kinhnguyen.dev@gmail.com",
    icon: Mail,
    accent: "#66FCF1",
    description: "Email",
  },
  {
    label: "github.com/KinhNguyenss",
    href: "https://github.com/KinhNguyenss",
    icon: Github,
    accent: "#C5C6C7",
    description: "GitHub",
    external: true,
  },
];

const AVAILABILITY_ITEMS = [
  "Internship Opportunities",
  "Web3 Protocol Projects",
  "AI/ML Integration Work",
  "Open Source Collaboration",
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ padding: "8rem 1.5rem 5rem", background: "#0B0C10" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background:
              "radial-gradient(ellipse, rgba(102,252,241,0.055) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(69,162,158,0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Fira Code', monospace",
            color: "#66FCF1",
            fontSize: "0.82rem",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        >
          // let's.connect()
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Let's Build Something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Extraordinary
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#8a9aaa",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            marginBottom: "3.5rem",
          }}
        >
          Open to internship opportunities, collaborative Web3 research, and
          exciting AI integrations. Currently based in Da Nang, Vietnam. Let's
          create something that matters.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 transition-all duration-300"
                  style={{
                    background: "rgba(31, 40, 51, 0.5)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: `1px solid rgba(102, 252, 241, 0.15)`,
                    borderRadius: "1rem",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${link.accent}50`;
                    el.style.background = "rgba(31, 40, 51, 0.8)";
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 20px ${link.accent}10`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(102, 252, 241, 0.15)";
                    el.style.background = "rgba(31, 40, 51, 0.5)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{
                      background: `${link.accent}12`,
                      border: `1px solid ${link.accent}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: link.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.78rem",
                        color: "#8a9aaa",
                        marginBottom: "0.15rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {link.description}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.87rem",
                        color: link.accent,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {link.label}
                    </div>
                  </div>
                  {link.external && (
                    <ExternalLink
                      size={14}
                      style={{
                        color: "#8a9aaa",
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Location */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{
                background: "rgba(20, 26, 36, 0.4)",
                border: "1px solid rgba(102, 252, 241, 0.08)",
                borderRadius: "1rem",
              }}
            >
              <MapPin size={16} style={{ color: "#8a9aaa", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.82rem",
                  color: "#8a9aaa",
                }}
              >
                Da Nang, Vietnam — UTC+7
              </span>
            </div>
          </motion.div>

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="p-6"
              style={{
                background: "rgba(20, 26, 36, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(102, 252, 241, 0.15)",
                borderRadius: "1.1rem",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{
                    background: "rgba(102, 252, 241, 0.1)",
                    border: "1px solid rgba(102, 252, 241, 0.3)",
                  }}
                >
                  <Zap size={15} style={{ color: "#66FCF1" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      color: "#66FCF1",
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    STATUS
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                  >
                    Open to Opportunities
                  </div>
                </div>
                <div
                  className="ml-auto"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#28c840",
                    boxShadow: "0 0 8px #28c840",
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3">
                {AVAILABILITY_ITEMS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span style={{ color: "#66FCF1", fontSize: "0.6rem" }}>◆</span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#C5C6C7",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(102, 252, 241, 0.08)" }}
              >
                <p
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    color: "#8a9aaa",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                  }}
                >
                  Response time:{" "}
                  <span style={{ color: "#66FCF1" }}>&lt; 24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer divider */}
        <div
          className="mt-20 mb-8"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(102,252,241,0.18), transparent)",
          }}
        />

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#8a9aaa",
              fontSize: "0.75rem",
            }}
          >
            © 2024 Nguyễn Quang Kính — Crafted with precision &amp; Web3 spirit
          </span>
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#8a9aaa",
              fontSize: "0.75rem",
            }}
          >
            <span style={{ color: "rgba(102,252,241,0.5)" }}>◆</span>
            <span>VKU · Software Engineering</span>
            <span style={{ color: "rgba(102,252,241,0.5)" }}>◆</span>
            <span style={{ color: "#66FCF1" }}>Da Nang, VN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
