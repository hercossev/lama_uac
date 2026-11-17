import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { ToComplete } from "@/components/layout/ToComplete";
import { Badge } from "@/components/ui/badge";
import { projets, type Projet } from "@/data/projets";
import { cn } from "@/lib/utils";

const filtres: ("Tous" | Projet["statut"])[] = ["Tous", "En cours", "Achevé", "À confirmer"];

export default function Projets() {
  const [filtre, setFiltre] = useState<(typeof filtres)[number]>("Tous");
  const liste = filtre === "Tous" ? projets : projets.filter((p) => p.statut === filtre);
  return (
    <>
      <PageHeader title="Projets" crumbs={[{ label: "Recherche", href: "/recherche" }, { label: "Projets" }]} intro="Projets de recherche conduits ou co-pilotés par le LAMA avec ses partenaires." image="/images/resford-echanges-terrain.jpg" />
      <SectionLayout section="/recherche">
        <div className="flex flex-wrap gap-2" role="tablist">
          {filtres.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filtre === f}
              onClick={() => setFiltre(f)}
              className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors", filtre === f ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-5">
          {liste.map((p) => (
            <article key={p.slug} id={p.slug} className="overflow-hidden rounded-lg border bg-card md:grid md:grid-cols-[220px_1fr]">
              {p.image ? (
                <img src={p.image} alt="" loading="lazy" className="h-48 w-full object-cover md:h-full" />
              ) : (
                <div className="hidden bg-gradient-to-br from-lama-vert to-lama-vert-fonce md:block" />
              )}
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={p.statut === "En cours" ? "default" : "secondary"}>{p.statut}</Badge>
                  <Badge variant="outline">{p.periode}</Badge>
                  {p.envergure && <Badge variant="accent">{p.envergure}</Badge>}
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{p.titre}</h2>
                <p className="mt-2 text-sm text-foreground/80">{p.objectif}</p>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Partenaires</dt><dd>{p.partenaires}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Domaine</dt><dd>{p.domaine}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ToComplete>
            Les statuts « À confirmer » correspondent à des projets dont la date de fin est passée ou dont le suivi n'est pas documenté.
            Merci de préciser leur état et d'ajouter les projets récents.
          </ToComplete>
        </div>
      </SectionLayout>
    </>
  );
}
