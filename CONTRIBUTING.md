# Hướng dẫn đóng góp (Contributing Guidelines)

Cảm ơn bạn đã quan tâm đóng góp cho **Coffee Tình Bạn**! Dưới đây là các tiêu chuẩn để đảm bảo mã nguồn và quy trình làm việc luôn nhất quán, chuyên nghiệp.

---

## 📌 Quy trình làm việc (Git Workflow)

1. **Fork repository** về tài khoản cá nhân của bạn.
2. **Clone** repo về máy:
   ```bash
   git clone https://github.com/<your-username>/CoffeeTinhBan.git
   cd CoffeeTinhBan
   ```
3. **Tạo branch** mới theo quy ước đặt tên:
   - Tính năng mới: `feature/ten-tinh-nang`
   - Sửa lỗi: `fix/ten-loi`
   - Tối ưu tài liệu: `docs/noi-dung`
   - Cải thiện giao diện/refactor: `refactor/ten-thay-doi`

---

## 📝 Quy chuẩn Commit (Conventional Commits)

Để lịch sử Git sạch đẹp và tự động sinh changelog, vui lòng viết commit theo chuẩn [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <mô tả ngắn bằng tiếng Việt hoặc tiếng Anh>
```

**Các type phổ biến:**
- `feat`: Tính năng mới (ví dụ: `feat(beans): thêm hiệu ứng rơi hạt cà phê mới`)
- `fix`: Sửa lỗi (ví dụ: `fix(navbar): sửa lỗi tràn màn hình trên mobile`)
- `docs`: Cập nhật tài liệu, README
- `style`: Định dạng code (khoảng trắng, dấu chấm phẩy, không ảnh hưởng logic)
- `refactor`: Tái cấu trúc mã nguồn mà không đổi chức năng
- `perf`: Tối ưu hiệu suất trang web
- `chore`: Cập nhật cấu hình build, dependencies

---

## 🧪 Kiểm tra trước khi tạo Pull Request

Trước khi push và mở PR, hãy đảm bảo các lệnh sau chạy thành công mà không phát sinh cảnh báo hay lỗi:

```bash
# Kiểm tra định dạng và lỗi cú pháp
npm run lint

# Kiểm tra bản build Next.js thành công
npm run build
```

---

## 🚀 Tạo Pull Request (PR)

- Đặt tiêu đề rõ ràng, súc tích theo chuẩn Conventional Commits.
- Mô tả chi tiết: lý do thay đổi, cách kiểm thử, ảnh chụp màn hình/video trước và sau (nếu thay đổi giao diện UI/UX).
- Liên kết với Issue tương ứng (nếu có): `Closes #12`.
