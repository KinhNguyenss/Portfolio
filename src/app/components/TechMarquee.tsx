const ROW_ONE = [
  "Java",
  "Spring Boot",
  "React Native",
  "Next.js",
  "Solidity",
  "Firebase",
  "TypeScript",
  "Python",
];
const ROW_TWO = [
  "Docker",
  "PostgreSQL",
  "Hardhat",
  "FastAPI",
  "Web3.js",
  "Redis",
  "GraphQL",
  "Prisma",
];

interface PillProps {
  label: string;
  variant?: "gold" | "sage" | "neutral";
}

function Pill({ label, variant = "neutral" }: PillProps) {
  const styles: Record<string, React.CSSProperties> = {
    gold: {
      background: "rgba(212, 163, 115, 0.08)",
      border: "1px solid rgba(212, 163, 115, 0.22)",
      color: "#D4A373",
    },
    sage: {
      background: "rgba(91, 123, 83, 0.08)",
      border: "1px solid rgba(91, 123, 83, 0.22)",
      color: "#8FAF86",
    },
    neutral: {
      background: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      color: "#9A9088",
    },
  };

  return (
    <span
      className="flex-shrink-0 flex items-center gap-2 whitespace-nowrap select-none"
      style={{
        ...styles[variant],
        borderRadius: "9999px",
        padding: "0.45rem 1.1rem",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.8rem",
        fontWeight: 400,
        letterSpacing: "0.02em",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.15)",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: styles[variant].color as string,
          opacity: 0.7,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

export function TechMarquee() {
  const VARIANTS_ONE: PillProps["variant"][] = [
    "gold", "neutral", "sage", "neutral", "gold", "neutral", "sage", "neutral",
  ];
  const VARIANTS_TWO: PillProps["variant"][] = [
    "sage", "neutral", "gold", "neutral", "sage", "neutral", "gold", "neutral",
  ];

  return (
    <section
      style={{
        background: "#141210",
        padding: "5rem 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Label */}
      <p
        className="text-center mb-8"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          color: "#9A9088",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Technologies I work with
      </p>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #141210 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #141210 0%, transparent 100%)",
          }}
        />
        <div
          className="flex gap-3 animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {[...ROW_ONE, ...ROW_ONE].map((tech, i) => (
            <Pill
              key={`r1-${i}`}
              label={tech}
              variant={VARIANTS_ONE[i % VARIANTS_ONE.length]}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #141210 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #141210 0%, transparent 100%)",
          }}
        />
        <div
          className="flex gap-3 animate-marquee-right"
          style={{ width: "max-content" }}
        >
          {[...ROW_TWO, ...ROW_TWO].map((tech, i) => (
            <Pill
              key={`r2-${i}`}
              label={tech}
              variant={VARIANTS_TWO[i % VARIANTS_TWO.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
