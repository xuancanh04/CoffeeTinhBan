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
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-primary text-3xl font-semibold leading-[1.15] text-primary sm:text-4xl md:text-[2.65rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
