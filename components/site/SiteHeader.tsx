"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/menu", label: "Menu" },
  { href: "/rang-xay", label: "Rang xay" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[80] border-b border-cream-deep/50 bg-surface/80 backdrop-blur-xl">
      <div className="container flex min-h-[68px] items-center justify-between gap-4 py-3 md:min-h-[76px]">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="font-primary text-xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Điều hướng chính"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  active
                    ? "bg-primary/90 text-white"
                    : "text-secondary hover:bg-cream/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-deep/70 bg-surface-card text-primary shadow-card lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cream-deep/50 bg-surface/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            className="container flex flex-col gap-1 py-5"
            aria-label="Điều hướng di động"
          >
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-cream/80 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 rounded-2xl bg-accent px-4 py-3.5 text-center text-base font-semibold text-white"
            >
              Gọi {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
