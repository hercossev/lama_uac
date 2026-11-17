import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h2>
      {children && <div className="mt-3 text-muted-foreground">{children}</div>}
    </div>
  );
}
