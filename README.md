<div align="center">

# Nguyễn Quang Kính — Portfolio

*Engineering seamless web experiences & intelligent systems.*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4-F4A261?style=flat-square)](https://emailjs.com/)

Trang portfolio cá nhân của **Nguyễn Quang Kính** — sinh viên Kỹ thuật Phần mềm năm 3 tại **VKU**, được xây dựng tại giao điểm của full-stack architecture, thiết kế UI/UX hiện đại và AI-powered systems.

</div>

---

## ✨ Tính năng

- 🎨 **Dark Warm Theme** — Bảng màu ấm (`#1A1817`) với accent vàng gold (`#D4A373`) và xanh sage (`#5B7B53`)
- 🌀 **Animated 3D Orb** — Floating orb với các vòng quỹ đạo và hiệu ứng ánh sáng động
- 🚀 **Smooth Animations** — Powered by [Motion](https://motion.dev/) với spring transitions mượt mà
- 📱 **Fully Responsive** — Tối ưu cho mọi thiết bị từ mobile đến desktop
- 🏷️ **Tech Marquee** — Dải cuộn tự động các công nghệ thành thạo
- 🏆 **Awards Section** — Trình bày thành tích & giải thưởng
- 📬 **Contact Form** — Gửi email trực tiếp qua Gmail (không vào spam) nhờ EmailJS

---

## 🛠️ Tech Stack

| Lớp | Công nghệ |
|-----|-----------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Motion (Framer Motion) 12 |
| **UI Components** | Radix UI, shadcn/ui, MUI |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Routing** | React Router 7 |
| **Email** | EmailJS (gửi qua Gmail, không spam) |
| **Package Manager** | pnpm |

---

## 📁 Cấu trúc dự án

```
User greeting/
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Root component
│   │   └── components/
│   │       ├── WarmNav.tsx              # Navigation bar
│   │       ├── WarmHero.tsx             # Hero section với 3D orb
│   │       ├── TechMarquee.tsx          # Tech stack scrolling banner
│   │       ├── WarmAboutSection.tsx     # About / giới thiệu bản thân
│   │       ├── WarmProjectsSection.tsx  # Showcase dự án nổi bật
│   │       ├── WarmAwardsSection.tsx    # Giải thưởng & thành tích
│   │       └── WarmContactFooter.tsx   # Footer liên hệ + contact form
│   ├── styles/                          # Global CSS
│   └── main.tsx                         # Entry point
├── public/                              # Static assets
├── .env                                 # Biến môi trường (không commit)
├── .env.example                         # Template env cho contributors
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Bắt đầu

### Yêu cầu

- **Node.js** >= 18
- **pnpm** (khuyến nghị) hoặc npm

### Cài đặt & chạy

```bash
# 1. Clone repository
git clone https://github.com/KinhNguyenss/<repo-name>.git
cd "User greeting"

# 2. Cài đặt dependencies
pnpm install

# 3. Cấu hình biến môi trường
cp .env.example .env
# → Mở .env và điền EmailJS credentials (xem hướng dẫn bên dưới)

# 4. Chạy development server
pnpm dev
```

Mở trình duyệt tại [http://localhost:5173](http://localhost:5173)

### Build production

```bash
pnpm build
```

---

## 🔧 Cấu hình Email (EmailJS)

Contact form sử dụng **EmailJS** để gửi email trực tiếp qua Gmail, đảm bảo email **không vào spam**.

### Setup

1. Đăng ký tại [emailjs.com](https://emailjs.com) (miễn phí, 200 email/tháng)
2. **Add Email Service** → chọn Gmail → connect tài khoản của bạn
3. **Create Email Template** với các biến: `{{name}}`, `{{email}}`, `{{message}}`, `{{title}}`
4. Lấy credentials từ Dashboard và điền vào `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

> ⚠️ File `.env` đã được thêm vào `.gitignore` — credentials sẽ **không bao giờ** bị commit lên GitHub.

---

## 🎨 Design System

```
Colors:
  Background:   #141210  (deep warm dark)
  Surface:      #1A1817  (warm dark)
  Gold Accent:  #D4A373  (primary CTA & highlights)
  Sage Green:   #5B7B53  (secondary accent)
  Text:         #F4F0E6  (cream white)
  Muted:        #9A9088  (soft gray)

Typography:
  Headings:     Playfair Display  (serif, italic accents)
  Body:         DM Sans           (clean, modern sans-serif)
  Mono/Labels:  DM Mono           (badges, labels, metadata)
```

---

## 📋 Các sections

| Section | Mô tả |
|---------|-------|
| **Hero** | Giới thiệu chính với animated 3D orb, headline, GPA & stats |
| **Tech Marquee** | Cuộn tự động các công nghệ thành thạo |
| **About** | Câu chuyện cá nhân, kỹ năng, hành trình học tập |
| **Projects** | Showcase các dự án nổi bật với mô tả & links |
| **Awards** | Thành tích, giải thưởng, chứng chỉ |
| **Contact** | Form liên hệ gửi email trực tiếp & thông tin mạng xã hội |

---

## 🔗 Liên hệ

- **Email**: [kinhnguyen.dev@gmail.com](mailto:kinhnguyen.dev@gmail.com)
- **GitHub**: [@KinhNguyenss](https://github.com/KinhNguyenss)
- **University**: Vietnam-Korea University of Information and Communication Technology (VKU) — Da Nang, Vietnam

---

## 📄 License & Attributions

Dự án sử dụng các thư viện mã nguồn mở. Xem chi tiết tại [ATTRIBUTIONS.md](./ATTRIBUTIONS.md).

---

<div align="center">
  <sub>Crafted with ❤️ by Nguyễn Quang Kính · VKU Software Engineering · 2026</sub>
</div>
