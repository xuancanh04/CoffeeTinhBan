type SectionTitleProps = {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  titleClassName?: string;
  subtitle?: string;
  align?: "left" | "center";
  subtitleClassName?: string;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  subtitle,
  align = "center",
  subtitleClassName,
  className,
}: SectionTitleProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto max-w-2xl"
      : "text-left max-w-2xl";

  return (
    <div className={`mb-10 md:mb-14 ${alignClass} ${className || ""}`}>
      {eyebrow ? (
        <p className={`mb-3 inline-block font-primary text-sm font-bold uppercase tracking-wider ${eyebrowClassName || "text-gold-gradient"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-primary text-3xl font-semibold leading-[1.15] text-primary sm:text-4xl md:text-[2.65rem] ${titleClassName || ""}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-sm leading-relaxed text-secondary md:text-[0.95rem] ${subtitleClassName || ""}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
