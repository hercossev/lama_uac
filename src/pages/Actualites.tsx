import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { NewsCard } from "@/components/shared/NewsCard";
import { ExternalLink, Newspaper } from "lucide-react";
import { actualites, medias, type Actualite } from "@/data/actualites";
import { cn } from "@/lib/utils";

const categories: ("Toutes" | Actualite["categorie"])[] = ["Toutes", "Appel", "Recherche", "Mobilité", "Événement"];

export default function Actualites() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Toutes");
  const liste = [...actualites]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((a) => cat === "Toutes" || a.categorie === cat);
  return (
    <>
      <PageHeader title="Actualités" crumbs={[{ label: "Actualités" }]} intro="Missions de terrain, mobilités, appels et événements du laboratoire." image="/images/resford-rencontre-acteurs.jpg" />
      <section className="section">
        <div className="container">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((a) => <NewsCard key={a.slug} item={a} />)}
          </div>

          <h2 className="mt-16 flex items-center gap-2 text-2xl font-semibold"><Newspaper className="h-6 w-6 text-accent" /> Le LAMA dans les médias</h2>
          <ul className="mt-6 space-y-3">
            {medias.map((m) => (
              <li key={m.lien}>
                <a href={m.lien} target="_blank" rel="noopener" className="group flex flex-col gap-1 rounded-lg border bg-card p-4 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    <span className="block text-xs text-muted-foreground">{m.date} · {m.media}</span>
                    <span className="font-medium group-hover:text-primary">{m.titre}</span>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
