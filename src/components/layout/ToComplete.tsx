import type { ReactNode } from "react";
import { PencilLine } from "lucide-react";

/** Encadré signalant un contenu que le LAMA doit fournir avant la mise en ligne. */
export function ToComplete({ children, title = "Contenu à compléter" }: { children: ReactNode; title?: string }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-accent/60 bg-accent/5 p-5 text-sm">
      <p className="flex items-center gap-2 font-semibold text-[#8a4f22]">
        <PencilLine className="h-4 w-4" />
        {title}
      </p>
      <div className="mt-2 text-foreground/80">{children}</div>
    </div>
  );
}
