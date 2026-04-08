type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto max-w-2xl"
      : "text-left max-w-2xl";

  return (
    <div className={`mb-10 md:mb-14 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-primary text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-primary leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base md:text-lg text-secondary leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
