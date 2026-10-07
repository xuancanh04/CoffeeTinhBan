"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { LangToggle } from "@/components/site/LangToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const nav = [
    { href: "/gioi-thieu", label: t.nav.about },
    { href: "/menu", label: t.nav.menu },
    { href: "/rang-xay", label: t.nav.services },
    { href: "/lien-he", label: t.nav.contact },
  ];

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
    <header className="sticky top-0 z-[80] border-b border-accent/15 bg-surface/85 backdrop-blur-xl shadow-sm">
      <div className="container flex min-h-[68px] items-center justify-between gap-4 py-3 md:min-h-[76px]">
        <Link
          href="/"
          className="group rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="font-primary text-xl font-bold tracking-tight md:text-[1.65rem]">
            <span className="text-primary transition-colors group-hover:text-accent">{site.name.split(" ")[0]}</span>{" "}
            <span className="text-gold-gradient font-bold">{site.name.split(" ").slice(1).join(" ")}</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={t.nav.ariaMain}
        >
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-primary rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  active
                    ? "bg-[#1F1510] dark:bg-accent text-white shadow-soft"
                    : "text-secondary hover:bg-cream/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${site.phone}`} onClick={() => { window.location.href = `tel:${site.phone}`; }}>{site.phoneDisplay}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-deep/70 bg-surface-card text-primary shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <X className="h-5 w-5" aria-hidden />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-accent/15 bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="container flex flex-col gap-1.5 py-5"
              aria-label={t.nav.ariaMobile}
            >
              {nav.map((item, i) => {
                const active = pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "font-primary block rounded-2xl px-4 py-3.5 text-base font-bold uppercase tracking-wider transition-colors",
                        active
                          ? "bg-[#1F1510] dark:bg-accent text-white"
                          : "text-secondary hover:bg-cream/80 hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ delay: nav.length * 0.05, duration: 0.2 }}
              >
                <a
                  href={`tel:${site.phone}`}
                  onClick={() => { window.location.href = `tel:${site.phone}`; }}
                  className="mt-2 block rounded-2xl bg-gold-gradient px-4 py-3.5 text-center text-base font-bold text-white shadow-gold"
                >
                  {t.home.call} {site.phoneDisplay}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
