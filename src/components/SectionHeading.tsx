interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  level?: "h1" | "h2";
}

const SectionHeading = ({
  label,
  title,
  description,
  centered = true,
  level = "h2",
}: SectionHeadingProps) => {
  const Heading = level;

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <Heading className="mb-4">{title}</Heading>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  );
};

export default SectionHeading;
