import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentColor: string;
  icon: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ThuBon AquaChain",
    subtitle: "Edge AI & Blockchain Seafood Traceability",
    description:
      "Decentralized traceability platform for seafood supply chains along the ThuBon river basin. Integrates Edge AI inference on IoT sensor data with Solidity smart contracts for immutable on-chain provenance recording. FastAPI handles ML inference pipeline while Next.js provides a real-time dashboard for stakeholders.",
    tags: ["Solidity", "Next.js", "FastAPI", "AI"],
    accentColor: "#66FCF1",
    icon: "🐟",
  },
  {
    id: 2,
    title: "VKU Alumni",
    subtitle: "Complex RESTful API Architecture",
    description:
      "Enterprise-grade alumni management system built on Spring Boot microservices architecture. Features JWT authentication, fine-grained role-based access control, optimized MySQL queries with indexed relations, and pagination-ready endpoints. Serves thousands of concurrent alumni connections with sub-100ms response times.",
    tags: ["Java 17", "Spring Boot", "MySQL"],
    accentColor: "#45A29E",
    icon: "🏛️",
  },
  {
    id: 3,
    title: "TKApp",
    subtitle: "Cross-Platform E-Commerce with Smart Checkout",
    description:
      "Full-featured cross-platform e-commerce mobile app built with React Native. Integrates Stripe payment processing, real-time inventory synchronization via Firebase Firestore, push notifications, and an intelligent recommendation engine. Features a streamlined checkout flow that reduced cart abandonment significantly.",
    tags: ["React Native", "Stripe", "Firebase"],
    accentColor: "#7B61FF",
    icon: "🛒",
  },
  {
    id: 4,
    title: "ThichDiCho",
    subtitle: "UI Architecture & Performance Optimization",
    description:
      "High-performance marketplace web application built with Next.js App Router and strict TypeScript. Achieved 98/100 Lighthouse performance score through advanced code splitting, Incremental Static Regeneration, route-level prefetching, and a sophisticated glassmorphic component architecture optimized for Core Web Vitals.",
    tags: ["Next.js", "TypeScript"],
    accentColor: "#FF6B6B",
    icon: "🗺️",
  },
];

const TAG_PALETTE: Record<string, string> = {
  "Solidity": "#FFB86C",
  "Next.js": "#e2e8f0",
  "FastAPI": "#00D4AA",
  "AI": "#66FCF1",
  "Java 17": "#FF6B6B",
  "Spring Boot": "#6BCB77",
  "MySQL": "#4FC3F7",
  "React Native": "#61DAFB",
  "Stripe": "#A78BFA",
  "Firebase": "#FFA000",
  "TypeScript": "#3B82F6",
};

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const sectionTop = section.offsetTop;
      const totalScrollable = section.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - sectionTop;

      if (scrolled >= 0 && scrolled <= totalScrollable) {
        const progress = scrolled / totalScrollable;
        const maxTranslate = track.scrollWidth - window.innerWidth + 80;
        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ height: "340vh", background: "#0B0C10" }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "#0B0C10" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(102,252,241,0.03) 0%, transparent 60%)",
          }}
        />

        {/* Header */}
        <div
          className="relative z-10 flex flex-col justify-end"
          style={{ padding: "0 3rem", height: "22vh" }}
        >
          <p
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#66FCF1",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}
          >
            // projects.map(p =&gt; &lt;Card key={"{p.id}"} /&gt;)
          </p>
          <div className="flex items-end justify-between">
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Fira Code', monospace",
                color: "#8a9aaa",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                paddingBottom: "0.4rem",
              }}
            >
              ← drag to scroll →
            </p>
          </div>
          {/* Separator */}
          <div
            className="mt-5"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(102,252,241,0.25), transparent)",
            }}
          />
        </div>

        {/* Horizontal track */}
        <div
          className="relative z-10 flex items-center"
          style={{ height: "68vh" }}
        >
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              padding: "0 3rem",
              willChange: "transform",
              transition: "transform 0.08s linear",
            }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0"
                style={{ width: "clamp(320px, 36vw, 480px)" }}
              >
                <div
                  className="h-full relative overflow-hidden transition-all duration-400"
                  style={{
                    height: "clamp(340px, 52vh, 440px)",
                    background: "rgba(20, 26, 36, 0.7)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(102, 252, 241, 0.15)",
                    borderRadius: "1.25rem",
                    padding: "2rem",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${project.accentColor}50`;
                    el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${project.accentColor}12`;
                    el.style.transform = "translateY(-4px) scale(1.005)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(102, 252, 241, 0.15)";
                    el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
                    el.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.accentColor}20, transparent 65%)`,
                    }}
                  />

                  {/* Card index watermark */}
                  <div
                    className="absolute bottom-4 right-5 pointer-events-none select-none"
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "5rem",
                      fontWeight: 800,
                      color: `${project.accentColor}08`,
                      lineHeight: 1,
                    }}
                  >
                    0{project.id}
                  </div>

                  {/* Icon */}
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.25,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.76rem",
                      color: project.accentColor,
                      marginBottom: "1.1rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#8a9aaa",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Fira Code', monospace",
                          fontSize: "0.72rem",
                          color: TAG_PALETTE[tag] ?? "#66FCF1",
                          background: `${TAG_PALETTE[tag] ?? "#66FCF1"}12`,
                          border: `1px solid ${TAG_PALETTE[tag] ?? "#66FCF1"}35`,
                          borderRadius: "9999px",
                          padding: "0.28rem 0.75rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom glow on hover */}
                  <div
                    className="absolute bottom-0 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      height: "1px",
                      background: `linear-gradient(to right, transparent, ${project.accentColor}60, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* End-of-track CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-6"
              style={{ width: "clamp(200px, 22vw, 300px)" }}
            >
              <div
                style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "#8a9aaa",
                  fontSize: "0.78rem",
                  textAlign: "center",
                  lineHeight: 1.7,
                }}
              >
                More projects on{" "}
                <span style={{ color: "#66FCF1" }}>GitHub</span>
              </div>
              <a
                href="https://github.com/KinhNguyenss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(31, 40, 51, 0.6)",
                  border: "1px solid rgba(102, 252, 241, 0.25)",
                  borderRadius: "0.75rem",
                  color: "#66FCF1",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.82rem",
                  padding: "0.8rem 1.4rem",
                  textDecoration: "none",
                }}
              >
                <Github size={15} />
                View All
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Progress dots */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
          style={{ zIndex: 10 }}
        >
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === 0 ? "20px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                background:
                  i === 0
                    ? "#66FCF1"
                    : "rgba(102, 252, 241, 0.25)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
