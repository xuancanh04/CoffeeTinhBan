"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LangToggleProps {
  className?: string;
}

export function LangToggle({ className }: LangToggleProps) {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.lang.switchTo}
      title={t.lang.switchTo}
      className={cn(
        "relative flex h-9 w-[4.25rem] items-center rounded-full border border-cream-deep/60 bg-surface-card shadow-card transition-all duration-200 hover:border-accent/60 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
    >
      {/* Track labels */}
      <span
        className={cn(
          "absolute left-0 flex h-full w-1/2 items-center justify-center text-[0.65rem] font-bold uppercase tracking-wider transition-colors duration-200",
          locale === "vi" ? "text-white" : "text-secondary"
        )}
      >
        VI
      </span>
      <span
        className={cn(
          "absolute right-0 flex h-full w-1/2 items-center justify-center text-[0.65rem] font-bold uppercase tracking-wider transition-colors duration-200",
          locale === "en" ? "text-white" : "text-secondary"
        )}
      >
        EN
      </span>

      {/* Sliding pill */}
      <span
        className={cn(
          "absolute h-7 w-[calc(50%-4px)] rounded-full bg-accent shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          locale === "vi" ? "left-[3px]" : "left-[calc(50%+1px)]"
        )}
        aria-hidden
      />
    </button>
  );
}
