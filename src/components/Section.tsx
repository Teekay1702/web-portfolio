import React from "react";

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  label,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-label">
        {label}
      </div>

      <div id={`${id}-heading`}>
        {children}
      </div>
    </section>
  );
}