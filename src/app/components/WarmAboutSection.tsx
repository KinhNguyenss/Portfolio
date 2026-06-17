import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const BOOKSTORE_IMG =
  "https://images.unsplash.com/photo-1762553338304-c4bfc4000488?w=800&h=1040&fit=crop&auto=format&q=80";

export function WarmAboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#1A1817",
        padding: "9rem 2.5rem",
        overflow: "hidden",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-20 items-center">
        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Label */}
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
            About me
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F4F0E6",
              lineHeight: 1.18,
              letterSpacing: "-0.015em",
              marginBottom: "1.8rem",
            }}
          >
            Building things that{" "}
            <span style={{ fontStyle: "italic", color: "#D4A373" }}>
              matter
            </span>{" "}
            — one system at a time.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#9A9088",
                lineHeight: 1.8,
              }}
            >
              I'm a 3rd-year Software Engineering student at{" "}
              <span style={{ color: "#F4F0E6", fontWeight: 500 }}>
                Vietnam-Korea University of Information and Communication Technology (VKU)
              </span>
              , with a GPA of 3.22.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#9A9088",
                lineHeight: 1.8,
              }}
            >
              I specialize in{" "}
              <span style={{ color: "#D4A373", fontWeight: 500 }}>
                backend architecture
              </span>{" "}
              and{" "}
              <span style={{ color: "#D4A373", fontWeight: 500 }}>
                full-stack development
              </span>
              , with a deep curiosity for Web3 smart contracts and
              AI-powered systems integration.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#9A9088",
                lineHeight: 1.8,
              }}
            >
              When I'm not writing code, I find clarity in cozy bookstores and
              long walks — I believe the best engineering comes from a calm,
              well-rested mind.
            </p>
          </div>

          {/* Details strip */}
          <div className="flex flex-col gap-4 mt-10">
            {[
              {
                icon: "🏛️",
                label: "Institution",
                value: "Vietnam-Korea University (VKU)",
              },
              {
                icon: "📚",
                label: "Major",
                value: "Software Engineering — 3rd Year",
              },
              { icon: "⭐", label: "GPA", value: "3.22 / 4.0" },
              {
                icon: "🎯",
                label: "Focus",
                value: "Backend, Full-Stack, Web3 & AI",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
                style={{
                  padding: "0.85rem 1.2rem",
                  background: "rgba(38, 34, 30, 0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "0.75rem",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.03) inset, 0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <div className="flex-1">
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#9A9088",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.1rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#F4F0E6",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Warm glow behind the image */}
            <div
              style={{
                position: "absolute",
                inset: "-24px",
                borderRadius: "calc(24px + 24px)",
                background:
                  "radial-gradient(ellipse, rgba(212,163,115,0.10) 0%, transparent 65%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />

            {/* Shadow layers */}
            <div
              style={{
                position: "absolute",
                inset: "0",
                borderRadius: "24px",
                boxShadow:
                  "0 3px 10px rgba(0,0,0,0.5), 0 24px 80px rgba(0,0,0,0.55)",
                zIndex: 1,
              }}
            />

            {/* The image */}
            <ImageWithFallback
              src={BOOKSTORE_IMG}
              alt="Person in a cozy, atmospheric bookstore"
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "540px",
                objectFit: "cover",
                borderRadius: "24px",
                position: "relative",
                zIndex: 2,
                border: "1px solid rgba(255,255,255,0.07)",
                display: "block",
              }}
            />

            {/* Inner-border highlight (3D edge) */}
            <div
              style={{
                position: "absolute",
                inset: "0",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />

            {/* Floating info chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                bottom: "24px",
                left: "-20px",
                background: "rgba(26, 24, 23, 0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0.875rem",
                padding: "0.9rem 1.2rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                zIndex: 4,
                minWidth: "160px",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#9A9088",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.06em",
                }}
              >
                LOCATION
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#F4F0E6",
                  fontWeight: 500,
                }}
              >
                🇻🇳 Da Nang, Vietnam
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
