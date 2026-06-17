import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

function FloatingOrb() {
  return (
    <div
      className="relative animate-float"
      style={{ width: "440px", height: "440px", flexShrink: 0 }}
    >
      {/* Ambient outer glow */}
      <div
        style={{
          position: "absolute",
          inset: "-60px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,163,115,0.09) 0%, rgba(91,123,83,0.05) 45%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Main sphere body */}
      <div
        style={{
          position: "absolute",
          inset: "60px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 38% 32%, rgba(212,163,115,0.14) 0%, rgba(200,149,108,0.08) 30%, rgba(91,123,83,0.06) 58%, transparent 78%)",
          border: "1px solid rgba(212,163,115,0.14)",
          boxShadow:
            "inset -12px -18px 50px rgba(0,0,0,0.45), inset 6px 6px 24px rgba(212,163,115,0.06), 0 24px 80px rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* Specular highlight — top-left */}
      <div
        style={{
          position: "absolute",
          width: "88px",
          height: "66px",
          top: "106px",
          left: "114px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255, 240, 210, 0.11) 0%, transparent 70%)",
        }}
      />

      {/* Outer ring 1 */}
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute",
          inset: "20px",
          borderRadius: "50%",
          border: "1px solid rgba(212,163,115,0.07)",
        }}
      />

      {/* Outer ring 2 — tilted, reverse */}
      <div
        className="animate-spin-reverse"
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "50%",
          border: "1px solid rgba(91,123,83,0.07)",
          transform: "rotateX(58deg) rotateZ(25deg)",
        }}
      />

      {/* Orbital dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = 175;
        const rad = (deg * Math.PI) / 180;
        const x = 220 + Math.cos(rad) * r;
        const y = 220 + Math.sin(rad) * r;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: i % 3 === 0 ? "5px" : "3px",
              height: i % 3 === 0 ? "5px" : "3px",
              borderRadius: "50%",
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
              background:
                i % 2 === 0
                  ? "rgba(212,163,115,0.5)"
                  : "rgba(91,123,83,0.5)",
              boxShadow:
                i % 2 === 0
                  ? "0 0 8px rgba(212,163,115,0.7)"
                  : "0 0 8px rgba(91,123,83,0.7)",
            }}
          />
        );
      })}

      {/* Sage satellite orb */}
      <div
        style={{
          position: "absolute",
          width: "72px",
          height: "72px",
          bottom: "80px",
          right: "60px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 38%, rgba(91,123,83,0.18) 0%, transparent 65%)",
          border: "1px solid rgba(91,123,83,0.12)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      {/* Gold accent pill — floating label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{
          position: "absolute",
          top: "68px",
          right: "20px",
          background: "rgba(38, 34, 30, 0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(212,163,115,0.2)",
          borderRadius: "9999px",
          padding: "0.4rem 0.9rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "#D4A373",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        ◆ Backend Developer
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        style={{
          position: "absolute",
          bottom: "72px",
          left: "16px",
          background: "rgba(38, 34, 30, 0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(91,123,83,0.2)",
          borderRadius: "9999px",
          padding: "0.4rem 0.9rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "#8FAF86",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        ◆ Frontend Developer
      </motion.div>
    </div>
  );
}

export function WarmHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#1A1817", padding: "0 2.5rem" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,163,115,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Warm ambient light — lower left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(212,163,115,0.06) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
            style={{
              background: "rgba(91, 123, 83, 0.1)",
              border: "1px solid rgba(91, 123, 83, 0.22)",
              borderRadius: "9999px",
              padding: "0.38rem 0.9rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#5B7B53",
                boxShadow: "0 0 7px rgba(91,123,83,0.8)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#8FAF86",
                letterSpacing: "0.05em",
              }}
            >
              Open to opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 700,
              color: "#F4F0E6",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Engineering seamless{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "#D4A373",
              }}
            >
              web experiences
            </span>{" "}
            &amp; intelligent systems.
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#9A9088",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            3rd-year Software Engineering student at VKU — building at the
            intersection of full-stack architecture, Web3 protocols, and
            AI-powered systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {/* Primary */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "#D4A373",
                borderRadius: "0.625rem",
                color: "#1A1817",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 600,
                padding: "0.82rem 1.6rem",
                textDecoration: "none",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.35), 0 12px 36px rgba(212,163,115,0.18)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E0B585";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.4), 0 16px 48px rgba(212,163,115,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4A373";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.35), 0 12px 36px rgba(212,163,115,0.18)";
              }}
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>

            {/* Secondary */}
            <a
              href="https://github.com/KinhNguyenss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "0.625rem",
                color: "#F4F0E6",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 500,
                padding: "0.82rem 1.6rem",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.24)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "3.22", label: "GPA" },
              { value: "30+", label: "Projects" },
              { value: "VKU", label: "University" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#D4A373",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#9A9088",
                    letterSpacing: "0.1em",
                    marginTop: "0.1rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: 3D Orb ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center items-center"
        >
          <FloatingOrb />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, rgba(212,163,115,0.6), transparent)",
            animation: "float 2.5s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
