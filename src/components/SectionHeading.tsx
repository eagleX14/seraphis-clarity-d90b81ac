interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: SectionHeadingProps) => (
  <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
    {label && (
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="mb-4">{title}</h2>
    {description && <p className="text-lg text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
