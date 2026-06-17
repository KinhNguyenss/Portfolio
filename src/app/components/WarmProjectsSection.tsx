import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import logoThichDiCho from "../../assets/images/logo_thichdicho.png";
import logoVKUMentor from "../../assets/images/logo_vkumentor.png";

interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  role?: string;
  description: string;
  tags: string[];
  accentColor: string;
  tagBg: string;
  icon: string;
  logo?: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    number: "01",
    title: "ThuBon AquaChain",
    subtitle: "Edge AI · XAI · Blockchain · Web3",
    role: "Full-stack Web3 Developer — Team size: 3",
    description:
      "Developed a decentralized traceability platform combining Edge AI and Blockchain to solve the transparency crisis in Vietnam's seafood supply chain, directly supporting the national effort to lift the EC's IUU yellow card.",
    tags: ["Solidity", "Ethereum", "FastAPI", "Next.js",],
    accentColor: "#D4A373",
    tagBg: "rgba(212,163,115,0.1)",
    icon: "🐟",
    link: "https://github.com/KinhNguyenss/blockchain-thubon.git",
  },
  {
    id: 2,
    number: "02",
    title: "VKU Alumni Platform",
    subtitle: "Java · Spring Boot · RESTful API",
    role: "Backend Developer — Team size: 4",
    description:
      `An educational ecosystem bridging experienced alumni and professionals with students seeking academic and career guidance.`,
    tags: ["Java 17", "Spring Boot", "MySQL"],
    accentColor: "#8FAF86",
    tagBg: "rgba(91,123,83,0.1)",
    icon: "🏛️",
    logo: logoVKUMentor,
    link: "https://vku-mentor.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "TKApp E-Commerce",
    subtitle: "React Native · Stripe · Firebase",
    role: "Mobile Developer — Team size: 2",
    description:
      "Cross-platform mobile e-commerce app with Stripe payments, real-time Firebase inventory sync, smart product recommendations, and a streamlined checkout experience.",
    tags: ["React Native", "Stripe", "Firebase"],
    accentColor: "#C8956C",
    tagBg: "rgba(200,149,108,0.1)",
    icon: "🛒",
    link: "https://github.com/KinhNguyenss/TKApp_ecommerce_danentang.git",
  },
  {
    id: 4,
    number: "04",
    title: "ThichDiCho Platform",
    subtitle: "Next.js · TypeScript · UI Architecture",
    role: "Frontend Developer — Team size: 11",
    description:
      `ThichDiCho is a comprehensive online grocery platform that digitizes the daily shopping experience, functioning as a highly convenient digital supermarket. It empowers users to effortlessly browse and purchase household essentials from home through dynamic "Popular & Hot" product showcases and interactive dual-carousel media galleries for detailed item inspection. Coupled with a seamless user management system for secure cart tracking and ordering, it delivers a complete, end-to-end e-commerce solution.`,
    tags: ["Next.js", "TypeScript"],
    accentColor: "#9A9088",
    tagBg: "rgba(154,144,136,0.1)",
    icon: "🗺️",
    logo: logoThichDiCho,
    link: "https://thichdicho.com/",
  },
];

interface TiltState {
  x: number;
  y: number;
  active: boolean;
}

export function WarmProjectsSection() {
  const [tilts, setTilts] = useState<Record<number, TiltState>>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilts((prev) => ({
      ...prev,
      [id]: { x: (y - 0.5) * -8, y: (x - 0.5) * 8, active: true },
    }));
  };

  const handleMouseLeave = (id: number) => {
    setTilts((prev) => ({
      ...prev,
      [id]: { x: 0, y: 0, active: false },
    }));
  };

  return (
    <section
      id="projects"
      style={{ background: "#141210", padding: "9rem 2.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "#D4A373",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Selected work
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F4F0E6",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            Featured{" "}
            <span style={{ fontStyle: "italic", color: "#D4A373" }}>
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ perspective: "1000px" }}
        >
          {PROJECTS.map((project, index) => {
            const tilt = tilts[project.id] ?? { x: 0, y: 0, active: false };
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                style={{
                  transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${tilt.active ? "translateZ(6px)" : "translateZ(0px)"}`,
                  transition: tilt.active
                    ? "transform 0.08s ease-out"
                    : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div
                  className="h-full relative overflow-hidden"
                  onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(42, 38, 34, 0.92) 0%, rgba(30, 27, 24, 0.95) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: "1.25rem",
                    padding: "2rem",
                    boxShadow:
                      "0 1px 0px rgba(255,255,255,0.04) inset, 0 2px 10px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.35)",
                    cursor: "pointer",
                  }}
                >
                  {/* Accent corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "160px",
                      height: "120px",
                      background: `radial-gradient(circle at top right, ${project.accentColor}14, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      {project.logo ? (
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "0.75rem",
                            background: `${project.accentColor}10`,
                            border: `1px solid ${project.accentColor}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              padding: "4px",
                            }}
                          />
                        </div>
                      ) : (
                        <span style={{ fontSize: "1.8rem" }}>{project.icon}</span>
                      )}
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.72rem",
                          color: "#9A9088",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {project.number}
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#9A9088",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${project.accentColor}18`;
                        el.style.borderColor = `${project.accentColor}35`;
                        el.style.color = project.accentColor;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.05)";
                        el.style.borderColor = "rgba(255,255,255,0.08)";
                        el.style.color = "#9A9088";
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#F4F0E6",
                      lineHeight: 1.25,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: project.accentColor,
                      letterSpacing: "0.04em",
                      marginBottom: project.role ? "0.5rem" : "1rem",
                      opacity: 0.85,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Role badge (optional) */}
                  {project.role && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: `${project.accentColor}10`,
                        border: `1px solid ${project.accentColor}28`,
                        borderRadius: "0.5rem",
                        padding: "0.3rem 0.7rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "0.68rem" }}>👤</span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.68rem",
                          color: project.accentColor,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {project.role}
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(255,255,255,0.05)",
                      marginBottom: "1rem",
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "#9A9088",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
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
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.7rem",
                          color: project.accentColor,
                          background: project.tagBg,
                          border: `1px solid ${project.accentColor}28`,
                          borderRadius: "9999px",
                          padding: "0.25rem 0.75rem",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "2rem",
                      right: "2rem",
                      height: "1px",
                      background: `linear-gradient(to right, transparent, ${project.accentColor}50, transparent)`,
                      opacity: tilt.active ? 1 : 0,
                      transition: "opacity 0.35s",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
