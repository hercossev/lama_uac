import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHeader({ title, intro, crumbs = [], image }: { title: string; intro?: ReactNode; crumbs?: Crumb[]; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-lama-vert text-white">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-lama-vert-fonce via-lama-vert/90 to-lama-vert/40" />
        </>
      )}
      <div className="container relative py-14 md:py-20">
        <nav aria-label="Fil d'Ariane" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-white/70">
          <Link to="/" className="hover:text-white">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {c.href ? <Link to={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-3xl font-semibold md:text-5xl">{title}</h1>
        {intro && <div className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{intro}</div>}
      </div>
    </section>
  );
}
