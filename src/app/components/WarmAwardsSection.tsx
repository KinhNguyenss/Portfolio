import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ExternalLink, Newspaper } from "lucide-react";

import BWD1 from "./../../assets/images/BWD.jpg";
import BWD2 from "./../../assets/images/BWD5.jpg";
import BWD3 from "./../../assets/images/BWD2.jpg";
import BWD4 from "./../../assets/images/BWD3.jpg";
import BWD5 from "./../../assets/images/BWD4.jpg";
const BWD_IMAGES = [BWD1, BWD2, BWD3, BWD4, BWD5];

// Press article screenshot (Unsplash placeholder — replace with real screenshot)
const PRESS_SCREENSHOT =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=480&fit=crop&auto=format&q=80";

const PRESS_LINKS = [
  {
    label: "Giáo Dục & Thời Đại",
    url: "https://giaoducthoidai.vn/hon-900-sinh-vien-nganh-cntt-o-da-nang-tranh-tai-o-cuoc-thi-thiet-ke-web-post699697.html",
  },
  {
    label: "Báo Quảng Nam",
    url: "https://baoquangnam.vn/13-doi-tranh-tai-vong-chung-ket-cuoc-thi-thiet-ke-web-3140636.html",
  },
  {
    label: "Tạp chí Đông Nam Á",
    url: "https://tapchidongnama.vn/vong-chung-ket-bwd-2024-vku-thu-thach-lam-san-pham-cong-nghe-ngay-tu-khi-la-sinh-vien-nam-thu-nhat/",
  },
];

const AWARDS = [
  {
    icon: "🏆",
    title: "3rd Prize — Best Web Design",
    event: "BWD 2024 Season 6 @ VKU",
    year: "Sept 2024",
    accentColor: "#D4A373",
    description:
      "Secured 3rd place among 900+ IT students. Recognized for outstanding UI/UX craft, real-world tech application, and English product presentation. Featured in GD&TĐ and Quang Nam Press.",
    hasPressModal: true,
  },
  {
    icon: "💻",
    title: "VIC Programming Club",
    event: "VKU Information Club — Core Member",
    year: "2023 – Present",
    accentColor: "#8FAF86",
    description:
      "I am a member of the VIC club at Vietnam-Korea University.",
    hasPressModal: true,
  },
];

/* ─────────────────────────────────────────────
   BWD Slideshow Component
───────────────────────────────────────────── */
function BWDSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BWD_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5), 0 24px 72px rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.07)",
        height: "460px",
        cursor: "pointer",
      }}
      onClick={() => setCurrent((prev) => (prev + 1) % BWD_IMAGES.length)}
    >
      {/* Crossfade images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={BWD_IMAGES[current]}
          alt={`BWD 2024 — ảnh ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            background: "#1A1817",
          }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(20,18,16,0.15) 0%, rgba(20,18,16,0.05) 50%, rgba(20,18,16,0.78) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          gap: "0.4rem",
          zIndex: 2,
        }}
      >
        {BWD_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              background: i === current ? "#D4A373" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Frosted caption bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(20, 18, 16, 0.78)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "1.2rem 1.5rem",
          zIndex: 2,
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#F4F0E6",
                marginBottom: "0.15rem",
              }}
            >
              BWD 2024 — Season 6
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                color: "#9A9088",
                letterSpacing: "0.06em",
              }}
            >
              VKU · Da Nang, Vietnam
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(212,163,115,0.12)",
              border: "1px solid rgba(212,163,115,0.22)",
              borderRadius: "9999px",
              padding: "0.35rem 0.85rem",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                color: "#D4A373",
                letterSpacing: "0.04em",
              }}
            >
              {current + 1} / {BWD_IMAGES.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Press Modal Component
───────────────────────────────────────────── */
function PressModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10, 9, 8, 0.82)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        {/* Modal Panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background:
              "linear-gradient(145deg, rgba(40, 36, 32, 0.98) 0%, rgba(28, 25, 22, 0.99) 100%)",
            border: "1px solid rgba(212, 163, 115, 0.18)",
            borderRadius: "1.25rem",
            width: "100%",
            maxWidth: "560px",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.6), 0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(212,163,115,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Newspaper size={16} color="#D4A373" />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#D4A373",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Báo chí đưa tin
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#9A9088",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "#F4F0E6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "#9A9088";
              }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Screenshot */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={PRESS_SCREENSHOT}
              alt="Báo đưa tin về cuộc thi BWD 2024 @ VKU"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(28,25,22,0.9) 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Floating stats on image */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem",
                display: "flex",
                gap: "0.6rem",
              }}
            >
              {[
                { value: "900+", label: "Participants" },
                { value: "13", label: "Finalists" },
                { value: "3rd", label: "Our Rank" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "rgba(26, 24, 23, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(212,163,115,0.2)",
                    borderRadius: "0.6rem",
                    padding: "0.5rem 0.25rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#D4A373",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#9A9088",
                      letterSpacing: "0.08em",
                      marginTop: "0.1rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context blurb */}
          <div style={{ padding: "1.2rem 1.5rem 0.5rem" }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "#9A9088",
                lineHeight: 1.7,
              }}
            >
              Cuộc thi <strong style={{ color: "#D4A373" }}>BWD 2024 Season 6</strong> tại
              VKU thu hút hơn <strong style={{ color: "#F4F0E6" }}>900 sinh viên</strong>{" "}
              CNTT tranh tài. Chỉ{" "}
              <strong style={{ color: "#F4F0E6" }}>13 đội xuất sắc nhất</strong> lọt vào
              chung kết
            </p>
          </div>

          {/* Press links */}
          <div style={{ padding: "0.75rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                color: "#5B7B53",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              Nguồn báo gốc
            </p>
            {PRESS_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.7rem 1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.625rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,163,115,0.06)";
                  el.style.borderColor = "rgba(212,163,115,0.22)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#F4F0E6",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </span>
                <ExternalLink size={13} color="#D4A373" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export function WarmAwardsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Press Modal */}
      {modalOpen && <PressModal onClose={() => setModalOpen(false)} />}

      <section
        id="awards"
        style={{ background: "#1A1817", padding: "9rem 2.5rem" }}
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
              Recognition &amp; community
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
              Awards &amp;{" "}
              <span style={{ fontStyle: "italic", color: "#5B7B53" }}>
                Activities
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* ── Left: Award cards ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {AWARDS.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  <div
                    onClick={() => award.hasPressModal && setModalOpen(true)}
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(40, 36, 32, 0.9) 0%, rgba(30, 27, 24, 0.95) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      borderRadius: "1.1rem",
                      padding: "1.8rem",
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.04) inset, 0 2px 8px rgba(0,0,0,0.35), 0 16px 48px rgba(0,0,0,0.28)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: award.hasPressModal ? "pointer" : "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-3px)";
                      el.style.boxShadow = `0 1px 0 rgba(255,255,255,0.05) inset, 0 4px 12px rgba(0,0,0,0.45), 0 24px 64px rgba(0,0,0,0.35), 0 0 40px ${award.accentColor}0a`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow =
                        "0 1px 0 rgba(255,255,255,0.04) inset, 0 2px 8px rgba(0,0,0,0.35), 0 16px 48px rgba(0,0,0,0.28)";
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "0.875rem",
                          background: `${award.accentColor}12`,
                          border: `1px solid ${award.accentColor}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                          flexShrink: 0,
                          boxShadow: `0 4px 16px ${award.accentColor}10`,
                        }}
                      >
                        {award.icon}
                      </div>

                      <div className="flex-1">
                        {/* Title row */}
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.05rem",
                              fontWeight: 600,
                              color: "#F4F0E6",
                              lineHeight: 1.3,
                            }}
                          >
                            {award.title}
                          </h3>

                          {/* Year badge — with ↗ button for BWD card */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              flexShrink: 0,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "0.68rem",
                                color: award.accentColor,
                                background: `${award.accentColor}12`,
                                border: `1px solid ${award.accentColor}22`,
                                borderRadius: "9999px",
                                padding: "0.18rem 0.65rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {award.year}
                            </span>

                            {/* ↗ Press modal trigger — only for BWD */}
                            {award.hasPressModal && (
                              <button
                                onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                                title="Xem bài báo"
                                style={{
                                  width: "26px",
                                  height: "26px",
                                  borderRadius: "50%",
                                  background: "rgba(212,163,115,0.1)",
                                  border: "1px solid rgba(212,163,115,0.25)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  cursor: "pointer",
                                  color: "#D4A373",
                                  transition: "all 0.2s",
                                  flexShrink: 0,
                                }}
                                onMouseEnter={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.background = "rgba(212,163,115,0.2)";
                                  el.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.background = "rgba(212,163,115,0.1)";
                                  el.style.transform = "scale(1)";
                                }}
                              >
                                <ArrowUpRight size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        <p
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.7rem",
                            color: award.accentColor,
                            opacity: 0.8,
                            letterSpacing: "0.04em",
                            marginBottom: "0.75rem",
                          }}
                        >
                          {award.event}
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.875rem",
                            color: "#9A9088",
                            lineHeight: 1.65,
                          }}
                        >
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Stats row — numbers from press coverage */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3"
              >
                {[
                  { value: "3rd", label: "Overall Prize" },
                  { value: "13", label: "Finalist Teams" },
                  { value: "900+", label: "Participants" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-4"
                    style={{
                      background: "rgba(38, 34, 30, 0.5)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "0.875rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#D4A373",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#9A9088",
                        letterSpacing: "0.1em",
                        marginTop: "0.2rem",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: BWD Photo Slideshow ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <BWDSlideshow />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
