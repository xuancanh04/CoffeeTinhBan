"use client";

import Link from "next/link";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  const links = [
    { href: "/gioi-thieu", label: t.footer.menuAbout },
    { href: "/menu", label: t.footer.menuProducts },
    { href: "/rang-xay", label: t.footer.menuServices },
    { href: "/lien-he", label: t.footer.menuContact },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-accent/30 bg-gradient-to-b from-[#18100B] to-[#0E0805] text-[#F3E9DF] shadow-[0_-4px_24px_-4px_rgba(200,134,71,0.15)] transition-colors duration-300 dark:border-accent/40 dark:from-[#090503] dark:to-[#020101] dark:shadow-[0_-8px_32px_-6px_rgba(200,134,71,0.22)]">
      {/* Top glowing ambient highlight line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        aria-hidden="true"
      />
      {/* Ambient warm radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(200,134,71,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 py-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <p className="font-primary text-2xl font-bold md:text-3xl">
              <span className="text-[#F5EDE3]">{site.name.split(" ")[0]}</span>{" "}
              <span className="text-gold-gradient font-bold">
                {site.name.split(" ").slice(1).join(" ")}
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#D4C3B3]">
              {site.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.navigation}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-secondary text-sm font-medium text-[#E2D2C2] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B3A193]">
              {t.footer.quickContact}
            </p>
            <p className="mt-4 text-sm text-[#E2D2C2]">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent/80">{t.footer.phone}:</span>{" "}
              <a
                href={`tel:${site.phone}`}
                className="font-medium text-accent hover:underline hover:text-accent-light"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-[#D4C3B3]">
              {site.addressLine}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-[#9E8B7A]">
          © {new Date().getFullYear()} {site.name}. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
