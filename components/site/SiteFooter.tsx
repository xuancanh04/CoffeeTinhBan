import Link from "next/link";
import { site } from "@/lib/site-config";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/menu", label: "Menu & sản phẩm" },
  { href: "/rang-xay", label: "Dịch vụ rang xay" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cream-deep/80 bg-surface-dark text-cream">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-primary text-2xl font-semibold text-white">
              {site.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
              {site.shortDescription}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Điều hướng
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Liên hệ nhanh
            </p>
            <p className="mt-4 text-sm text-cream/85">
              Điện thoại:{" "}
              <a
                href={`tel:${site.phone}`}
                className="font-medium text-white underline-offset-4 hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">
              {site.addressLine}
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}. Giữ quyền sử dụng nội dung trên
          website này.
        </div>
      </div>
    </footer>
  );
}
