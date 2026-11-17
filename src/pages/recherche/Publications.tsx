import { useMemo, useState } from "react";
import { ExternalLink, Mic, Search } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { communications, publications } from "@/data/publications";

export default function Publications() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return publications;
    return publications.filter((p) => `${p.titre} ${p.auteurs} ${p.revue} ${p.annee}`.toLowerCase().includes(s));
  }, [q]);

  return (
    <>
      <PageHeader title="Publications" crumbs={[{ label: "Recherche", href: "/recherche" }, { label: "Publications" }]} intro="Articles scientifiques publiés par les membres du LAMA." />
      <SectionLayout section="/recherche">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher par titre, auteur, revue ou année" className="pl-9" aria-label="Rechercher une publication" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{filtered.length} publication(s)</p>
        <ul className="mt-4 space-y-4">
          {filtered.map((p) => (
            <li key={p.titre} className="rounded-lg border bg-card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{p.annee}</Badge>
                <Badge variant="secondary">Article · portée {p.portee.toLowerCase()}</Badge>
              </div>
              <h2 className="mt-3 font-sans text-base font-semibold leading-snug">{p.titre}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.auteurs}</p>
              <p className="mt-1 text-sm italic text-foreground/80">{p.revue}</p>
              {p.lien && (
                <a href={p.lien} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Consulter <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">Communications scientifiques</h2>
        <ul className="mt-6 space-y-3">
          {communications.map((c) => (
            <li key={c.titre} className="flex gap-3 rounded-lg border bg-card p-4 text-sm">
              <Mic className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span><strong>{c.annee}</strong> · {c.titre} <span className="text-muted-foreground">({c.lieu})</span></span>
            </li>
          ))}
        </ul>
      </SectionLayout>
    </>
  );
}
