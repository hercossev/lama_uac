import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Slide = {
  image: string;
  alt: string;
  surtitre: string;
  titre: string;
  texte: string;
  actions: { label: string; href: string; variant?: "accent" | "light" }[];
};

const DUREE = 7000;

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const aller = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const reduit = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (pause || reduit) return;
    const t = window.setTimeout(() => aller(index + 1), DUREE);
    return () => window.clearTimeout(t);
  }, [index, pause, aller]);

  return (
    <section
      className="relative isolate h-[560px] overflow-hidden bg-lama-vert-fonce text-white md:h-[640px]"
      aria-roledescription="carrousel"
      aria-label="À la une"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      onFocus={() => setPause(true)}
      onBlur={() => setPause(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.titre}
          role="group"
          aria-roledescription="diapositive"
          aria-label={`${i + 1} sur ${slides.length}`}
          aria-hidden={i !== index}
          className={cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "pointer-events-none opacity-0")}
        >
          <img
            src={s.image}
            alt={s.alt}
            className={cn("absolute inset-0 -z-10 h-full w-full object-cover opacity-45 transition-transform duration-[8000ms] ease-out", i === index ? "scale-105" : "scale-100")}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-lama-vert-fonce via-lama-vert-fonce/85 to-lama-vert-fonce/10" />
          <div className="container flex h-full flex-col justify-center pb-10">
            <p className="eyebrow text-[#E9A877]">{s.surtitre}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{s.titre}</h2>
            <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">{s.texte}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {s.actions.map((a) => (
                <Button key={a.href} asChild size="lg" variant={a.variant ?? "light"} tabIndex={i === index ? 0 : -1}>
                  <Link to={a.href} tabIndex={i === index ? 0 : -1}>
                    {a.label} {a.variant === "accent" && <ArrowRight />}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="container absolute inset-x-0 bottom-6 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.titre}
              type="button"
              onClick={() => aller(i)}
              aria-label={`Afficher la diapositive ${i + 1}`}
              aria-current={i === index}
              className="group h-3 py-1"
            >
              <span className={cn("block h-1 rounded-full transition-all", i === index ? "w-10 bg-[#E9A877]" : "w-5 bg-white/40 group-hover:bg-white/70")} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => aller(index - 1)} aria-label="Diapositive précédente" className="rounded-full border border-white/30 bg-white/10 p-2 hover:bg-white/20">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => aller(index + 1)} aria-label="Diapositive suivante" className="rounded-full border border-white/30 bg-white/10 p-2 hover:bg-white/20">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
