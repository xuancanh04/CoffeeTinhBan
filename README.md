# ☕ Coffee Tình Bạn (Friendship Coffee)

<p align="center">
  <img src="public/logo.png" alt="Coffee Tình Bạn Logo" width="120" height="120" style="border-radius: 50%; object-fit: cover;" onerror="this.style.display='none'"/>
</p>

<p align="center">
  <strong>Trải nghiệm cà phê nguyên chất Tây Nguyên kết hợp cùng công nghệ web 3D hiện đại.</strong>
</p>

<p align="center">
  <a href="#-tính-năng-nổi-bật">Tính năng</a> •
  <a href="#-công-nghệ-sử-dụng">Công nghệ</a> •
  <a href="#-cài-đặt--chạy-thử">Cài đặt</a> •
  <a href="#-cấu-trúc-thư-mục">Cấu trúc</a> •
  <a href="#-đóng-góp">Đóng góp</a> •
  <a href="#-giấy-phép">Giấy phép</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Three.js-0.170-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 📖 Giới thiệu

**Coffee Tình Bạn** là nền tảng website giới thiệu và trải nghiệm thương hiệu cà phê rang xay thủ công. Dự án kết hợp nghệ thuật pha chế truyền thống với trải nghiệm thị giác hiện đại (3D Interactive Beans Canvas, mượt mà với GSAP, Framer Motion và Locomotive Scroll).

Website mang đến cảm giác mộc mạc, sang trọng, mang đậm hương vị đại ngàn nhưng vẫn bắt kịp xu hướng công nghệ tương tác trực quan.

---

## ✨ Tính năng nổi bật

- ☕ **Tương tác 3D chân thực**: Hiệu ứng hạt cà phê rơi và chuyển động 3D tương tác theo con trỏ chuột sử dụng Three.js & React Three Fiber.
- 🎨 **Thiết kế UI/UX ấn tượng**: Phối màu ấm áp, phong cách Rustic & Specialty Coffee, tối ưu trải nghiệm trên mọi kích thước màn hình (Responsive).
- 📜 **Smooth Scrolling & Animations**: Tích hợp Locomotive Scroll, GSAP, và Framer Motion tạo chuyển động cuộn trang mượt mà chuẩn cinematic.
- 📱 **Menu & Dịch vụ Rang Xay**: Trình bày danh mục đồ uống, gói cà phê và mô phỏng các cấp độ rang xay (Light, Medium, Dark Roast).
- ⚡ **Hiệu năng & Tối ưu SEO**: Xây dựng trên Next.js App Router, tải trang nhanh chóng, cấu trúc chuẩn ngữ nghĩa SEO.

---

## 🛠 Công nghệ sử dụng

| Lớp công nghệ | Thư viện / Công cụ |
|---|---|
| **Core Framework** | [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/) |
| **Ngôn ngữ** | [TypeScript](https://www.typescriptlang.org/) |
| **Giao diện & CSS** | [Tailwind CSS](https://tailwindcss.com/), Radix UI, Lucide Icons |
| **Đồ họa 3D** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Hiệu ứng & Chuyển động** | [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/), Locomotive Scroll |
| **Build & Deploy** | Netlify / Vercel |

---

## 🚀 Cài đặt & Chạy thử

### Yêu cầu hệ thống
- Node.js 18.17 trở lên
- Trình quản lý gói: `npm`, `yarn` hoặc `pnpm`

### Các bước cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/<your-username>/CoffeeTinhBan.git
   cd CoffeeTinhBan
   ```

2. **Cài đặt các dependencies:**
   ```bash
   npm install
   ```

3. **Khởi chạy môi trường phát triển (Dev server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để xem kết quả.

4. **Kiểm tra code & Build:**
   ```bash
   # Kiểm tra lint
   npm run lint

   # Build bản thương mại
   npm run build
   ```

---

## 📂 Cấu trúc thư mục

```text
CoffeeTinhBan/
├── .github/              # GitHub Actions workflows, issue & PR templates
│   ├── workflows/        # CI/CD pipelines
│   └── ISSUE_TEMPLATE/   # Mẫu đóng góp lỗi và tính năng
├── app/                  # Next.js App Router (pages & layouts)
│   ├── gioi-thieu/       # Trang giới thiệu câu chuyện thương hiệu
│   ├── rang-xay/         # Trang chi tiết quy trình rang xay cà phê
│   └── layout.tsx        # Root layout & Metadata
├── components/           # Components tái sử dụng
│   ├── effects/          # Hiệu ứng Canvas 3D (CoffeeBeansScene, ...)
│   ├── site/             # Header, Footer, Hero, ProductCard,...
│   └── ui/               # Base UI components
├── data/                 # Dữ liệu tĩnh (sản phẩm, tin tức, v.v.)
├── public/               # Ảnh tĩnh, favicon, assets 3D
├── styles/               # File cấu hình CSS toàn cục
├── tailwind.config.ts    # Cấu hình TailwindCSS
└── tsconfig.json         # Cấu hình TypeScript
```

---

## 🤝 Đóng góp (Contributing)

Mọi đóng góp nhằm cải thiện giao diện và tính năng của website đều được hoan nghênh! Vui lòng đọc qua [CONTRIBUTING.md](CONTRIBUTING.md) và [Quy tắc ứng xử (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md) trước khi tạo Pull Request.

1. Fork dự án
2. Tạo branch tính năng (`git checkout -b feature/TinhNangMoi`)
3. Commit thay đổi (`git commit -m 'feat: thêm hiệu ứng rang xay mới'`)
4. Push lên branch (`git push origin feature/TinhNangMoi`)
5. Tạo Pull Request

---

## 📄 Giấy phép (License)

Dự án được phân phối dưới giấy phép **MIT License**. Xem file [LICENSE](LICENSE) để biết thêm thông tin.

---

<p align="center">
  Phát triển với tất cả đam mê ☕ và sự tận tâm bởi <strong>Team Coffee Tình Bạn</strong>.
</p>
