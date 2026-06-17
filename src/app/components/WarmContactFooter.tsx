import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, ArrowUpRight, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import logoImg from "/logo.png";

const WEB3FORMS_KEY = "a51f9d4a-35e4-4a6f-a373-17d570779ea5";

export function WarmContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(38, 34, 30, 0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "0.75rem",
    color: "#F4F0E6",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    padding: "0.85rem 1.1rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };
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

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ maxWidth: "640px", margin: "0 auto 5rem" }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#9A9088", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Your name</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyen Van A"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(212,163,115,0.45)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#9A9088", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Your email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(212,163,115,0.45)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#9A9088", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hi Kính, I'd like to..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(212,163,115,0.45)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  background: status === "success" ? "rgba(91,123,83,0.18)" : "#D4A373",
                  border: status === "success" ? "1px solid rgba(91,123,83,0.4)" : "none",
                  borderRadius: "0.75rem",
                  color: status === "success" ? "#8FAF86" : "#1A1817",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "0.9rem 2rem",
                  cursor: status === "loading" || status === "success" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "all 0.25s",
                  alignSelf: "flex-end",
                  boxShadow: status === "success" ? "none" : "0 2px 8px rgba(0,0,0,0.3), 0 10px 32px rgba(212,163,115,0.18)",
                }}
              >
                {status === "loading" && <span style={{ width: 16, height: 16, border: "2px solid #1A1817", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />}
                {status === "success" && <CheckCircle size={16} />}
                {status === "error" && <AlertCircle size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Try Again"}
              </button>

              {/* Error feedback */}
              {status === "error" && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#C8956C", textAlign: "center", margin: 0 }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
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
              <img
                src={logoImg}
                alt="NQK Logo"
                style={{
                  height: "28px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
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
