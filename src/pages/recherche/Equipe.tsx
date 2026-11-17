import { User } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { assistants, membres } from "@/data/equipe";

export default function Equipe() {
  const docteurs = assistants.filter((a) => a.cycle === "Docteur");
  const doctorants = assistants.filter((a) => a.cycle === "Doctorant");
  return (
    <>
      <PageHeader title="Équipe" crumbs={[{ label: "Recherche", href: "/recherche" }, { label: "Équipe" }]} intro={`${membres.length} enseignants-chercheurs et ${assistants.length} assistants de recherche font vivre le laboratoire.`} />
      <SectionLayout section="/recherche">
        <h2 className="text-2xl font-semibold">Enseignants-chercheurs</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {membres.map((m) => (
            <div key={m.nom} className="flex gap-4 rounded-lg border bg-card p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground"><User className="h-5 w-5" /></span>
              <div>
                <h3 className="font-sans text-base font-semibold">{m.nom}</h3>
                <p className="text-sm text-accent">{m.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.grade}</p>
                <p className="text-xs text-muted-foreground">{m.specialite}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Assistants de recherche</h2>
        <p className="mt-2 text-sm text-muted-foreground">Docteurs et doctorants associés aux travaux du laboratoire.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[{ titre: `Docteurs (${docteurs.length})`, liste: docteurs }, { titre: `Doctorants (${doctorants.length})`, liste: doctorants }].map((g) => (
            <div key={g.titre} className="rounded-lg border bg-card p-5">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">{g.titre}</h3>
              <ul className="mt-3 divide-y text-sm">
                {g.liste.map((a) => <li key={a.nom} className="py-2">{a.nom}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
