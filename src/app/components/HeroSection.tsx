import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, ChevronDown } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";

const TYPED_STRINGS = [
  "Engineering Web3 & Intelligent Systems",
  "Full-Stack Software Engineer",
  "Blockchain & Edge AI Architect",
  "Decentralized Protocol Builder",
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const target = TYPED_STRINGS[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === target) {
      timeout = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % TYPED_STRINGS.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 38 : 68
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0B0C10" }}
    >
      <ParticleCanvas />

      {/* Ambient radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "20%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(102,252,241,0.07) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "20%",
            right: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(69,162,158,0.06) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(102,252,241,0.03) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(102,252,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        {/* Init label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center justify-center gap-2"
        >
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#66FCF1",
              boxShadow: "0 0 8px #66FCF1",
            }}
          />
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#66FCF1",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              opacity: 0.9,
            }}
          >
            &gt; init portfolio.js --mode=web3 --ai=true
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.2rem",
          }}
        >
          Nguyễn{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Quang Kính
          </span>
        </motion.h1>

        {/* Typed text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "clamp(1rem, 2.8vw, 1.65rem)",
            color: "#66FCF1",
            minHeight: "2.8rem",
            marginBottom: "2.8rem",
            letterSpacing: "0.01em",
          }}
        >
          <span>{displayText}</span>
          <span
            style={{
              opacity: cursorVisible ? 1 : 0,
              color: "#66FCF1",
              fontWeight: 100,
            }}
          >
            ▋
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://github.com/KinhNguyenss"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(31, 40, 51, 0.65)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(102, 252, 241, 0.35)",
              borderRadius: "0.75rem",
              color: "#66FCF1",
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.875rem",
              padding: "0.9rem 1.8rem",
              textDecoration: "none",
              boxShadow: "0 0 24px rgba(102, 252, 241, 0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 32px rgba(102, 252, 241, 0.22)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(102, 252, 241, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 24px rgba(102, 252, 241, 0.08)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(102, 252, 241, 0.35)";
            }}
          >
            <Github size={17} />
            View Smart Contracts & Code
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(102, 252, 241, 0.07)",
              border: "1px solid rgba(102, 252, 241, 0.18)",
              borderRadius: "0.75rem",
              color: "#C5C6C7",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              padding: "0.9rem 1.8rem",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(102, 252, 241, 0.35)";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(102, 252, 241, 0.18)";
              (e.currentTarget as HTMLElement).style.color = "#C5C6C7";
            }}
          >
            Explore Projects
          </a>
        </motion.div>

        {/* Social strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-6"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.75rem",
            color: "#8a9aaa",
          }}
        >
          <span>VKU</span>
          <span style={{ color: "rgba(102,252,241,0.3)" }}>◆</span>
          <span>Software Engineer</span>
          <span style={{ color: "rgba(102,252,241,0.3)" }}>◆</span>
          <span>Web3 · AI · Full-stack</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ color: "rgba(102, 252, 241, 0.4)" }}
      >
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
