import { motion } from "motion/react";

const TECH_STACK = [
  "Java 17",
  "Spring Boot",
  "Next.js 14",
  "Solidity",
  "React Native",
  "Firebase",
  "FastAPI",
  "TypeScript",
  "Python",
  "Docker",
  "Web3.js",
  "IPFS",
  "PostgreSQL",
  "TensorFlow Lite",
  "Redis",
  "Hardhat",
  "GraphQL",
  "Prisma",
];

const STATS = [
  { label: "GPA", value: "3.22 / 4.0", icon: "📊", sub: "Academic Score" },
  { label: "Year", value: "3rd Year", icon: "🎓", sub: "SE Student" },
  { label: "Award", value: "3rd Prize", icon: "🏆", sub: "Best Web Design" },
  { label: "Focus", value: "Web3 + AI", icon: "⚡", sub: "Specialization" },
];

export function IdentitySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ padding: "8rem 1.5rem 6rem", background: "#0B0C10" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(102,252,241,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#66FCF1",
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              marginBottom: "0.6rem",
            }}
          >
            // about.me
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Academic &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tech Identity
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.02rem",
                color: "#8a9aaa",
                lineHeight: 1.8,
              }}
            >
              3rd-year Software Engineering student at{" "}
              <span style={{ color: "#C5C6C7", fontWeight: 600 }}>
                Vietnam-Korea University of Information and Communication Technology (VKU)
              </span>
              . Building at the intersection of distributed ledger technology, intelligent
              AI pipelines, and high-performance full-stack systems.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="p-5 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "rgba(31, 40, 51, 0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(102, 252, 241, 0.13)",
                    borderRadius: "0.875rem",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(102, 252, 241, 0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 20px rgba(102, 252, 241, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(102, 252, 241, 0.13)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      color: "#66FCF1",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: "0.15rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8a9aaa",
                      fontSize: "0.75rem",
                    }}
                  >
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Award callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(102, 252, 241, 0.07) 0%, rgba(69, 162, 158, 0.04) 100%)",
                border: "1px solid rgba(102, 252, 241, 0.22)",
                borderRadius: "1rem",
              }}
            >
              <div style={{ fontSize: "2.2rem", flexShrink: 0 }}>🏆</div>
              <div>
                <div
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    color: "#66FCF1",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    marginBottom: "0.25rem",
                  }}
                >
                  AWARD_RECOGNITION
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  3rd Prize — Best Web Design
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#8a9aaa",
                    fontSize: "0.82rem",
                  }}
                >
                  National Student Technology Competition
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Terminal code window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="animate-float"
          >
            <div
              className="p-6"
              style={{
                background: "rgba(11, 12, 16, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(102, 252, 241, 0.18)",
                borderRadius: "1.1rem",
                boxShadow:
                  "0 0 40px rgba(102, 252, 241, 0.05), 0 30px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Terminal chrome */}
              <div
                className="flex items-center gap-2 mb-5 pb-4"
                style={{ borderBottom: "1px solid rgba(102, 252, 241, 0.08)" }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#febc2e" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#28c840" }}
                />
                <span
                  className="ml-3"
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.78rem",
                    color: "#8a9aaa",
                  }}
                >
                  kính@vku:~/portfolio ~
                </span>
              </div>

              {/* Code content */}
              <div
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.83rem",
                  lineHeight: 1.75,
                }}
              >
                <div style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#7B61FF" }}>const</span>{" "}
                  <span style={{ color: "#66FCF1" }}>engineer</span>{" "}
                  <span style={{ color: "#ffffff" }}>=</span>{" "}
                  <span style={{ color: "#ffffff" }}>{"{"}</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>name</span>
                  <span style={{ color: "#ffffff" }}>: </span>
                  <span style={{ color: "#ffd700" }}>"Nguyễn Quang Kính"</span>
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>role</span>
                  <span style={{ color: "#ffffff" }}>: </span>
                  <span style={{ color: "#ffd700" }}>"Software Engineer"</span>
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>university</span>
                  <span style={{ color: "#ffffff" }}>: </span>
                  <span style={{ color: "#ffd700" }}>"VKU"</span>
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>gpa</span>
                  <span style={{ color: "#ffffff" }}>: </span>
                  <span style={{ color: "#FF6B6B" }}>3.22</span>
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>specializations</span>
                  <span style={{ color: "#ffffff" }}>: [</span>
                </div>
                <div className="pl-12" style={{ color: "#ffd700" }}>
                  "Web3"{" "}
                  <span style={{ color: "#ffffff" }}>,</span>{" "}
                  "Edge AI"{" "}
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div className="pl-12" style={{ color: "#ffd700" }}>
                  "Full-stack"{" "}
                  <span style={{ color: "#ffffff" }}>,</span>{" "}
                  "DeFi"
                </div>
                <div className="pl-6" style={{ color: "#ffffff" }}>
                  ],
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>awards</span>
                  <span style={{ color: "#ffffff" }}>: [</span>
                  <span style={{ color: "#ffd700" }}>"3rd Prize Best Web Design"</span>
                  <span style={{ color: "#ffffff" }}>],</span>
                </div>
                <div className="pl-6" style={{ color: "#8a9aaa" }}>
                  <span style={{ color: "#c5a9f0" }}>status</span>
                  <span style={{ color: "#ffffff" }}>: </span>
                  <span style={{ color: "#28c840" }}>"open_to_opportunities"</span>
                  <span style={{ color: "#ffffff" }}>,</span>
                </div>
                <div style={{ color: "#ffffff" }}>{"}"}</div>
                <div className="mt-3" style={{ color: "#66FCF1" }}>
                  <span style={{ color: "#8a9aaa" }}>$</span> Ready to build the
                  future
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "14px",
                      background: "#66FCF1",
                      marginLeft: "2px",
                      verticalAlign: "middle",
                      animation: "pulse 1.1s step-end infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="mt-24">
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Fira Code', monospace",
            color: "#8a9aaa",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            marginBottom: "1.8rem",
          }}
        >
          // tech_stack.loaded() ——
        </p>

        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0B0C10 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #0B0C10 0%, transparent 100%)",
            }}
          />

          <div
            className="flex gap-4 animate-marquee"
            style={{ width: "max-content" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 whitespace-nowrap transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(31, 40, 51, 0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(102, 252, 241, 0.13)",
                  borderRadius: "9999px",
                  cursor: "default",
                }}
              >
                <span style={{ color: "#66FCF1", fontSize: "0.55rem" }}>◆</span>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    color: "#C5C6C7",
                    fontSize: "0.82rem",
                  }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
