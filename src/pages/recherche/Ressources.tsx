import { BookMarked, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { chiffres, masters, theses } from "@/data/travaux";

export default function Ressources() {
  const stats = [
    { label: "Licences formées (2022-2023)", valeur: chiffres.diplomes20222023.licence },
    { label: "Masters formés (2022-2023)", valeur: chiffres.diplomes20222023.master },
    { label: "Docteurs formés (2022-2023)", valeur: chiffres.diplomes20222023.docteurs },
    { label: "Post-doctorants (2022-2023)", valeur: chiffres.diplomes20222023.postdocs },
  ];
  const encadres = chiffres.etudiants2022;
  return (
    <>
      <PageHeader title="Ressources et données" crumbs={[{ label: "Recherche", href: "/recherche" }, { label: "Ressources et données" }]} intro="Chiffres clés, thèses et mémoires produits au sein du laboratoire." />
      <SectionLayout section="/recherche">
        <h2 className="text-2xl font-semibold">Chiffres clés</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border bg-card p-5">
              <p className="font-serif text-4xl font-semibold text-primary">{s.valeur}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          En 2022, le laboratoire encadrait {encadres.licence + encadres.master + encadres.doctorat} étudiants : {encadres.licence} en licence,
          {" "}{encadres.master} en master et {encadres.doctorat} en doctorat, avec {chiffres.personnelScientifique2022} enseignants-chercheurs.
        </p>

        <h2 className="mt-12 flex items-center gap-2 text-2xl font-semibold"><GraduationCap className="h-6 w-6 text-accent" /> Thèses de doctorat</h2>
        <ul className="mt-6 space-y-3">
          {theses.map((t) => (
            <li key={t.auteur} className="rounded-lg border bg-card p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold">{t.auteur}</p>
                <Badge variant={t.soutenue ? "default" : "secondary"}>{t.soutenue ? `Soutenue (${t.soutenue})` : "En cours en 2022"}</Badge>
              </div>
              <p className="mt-1 text-sm text-foreground/80">{t.sujet}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 flex items-center gap-2 text-2xl font-semibold"><BookMarked className="h-6 w-6 text-accent" /> Mémoires de master recherche soutenus</h2>
        <p className="mt-2 text-sm text-muted-foreground">Option Sociologie et anthropologie de la santé, 2022-2023.</p>
        <ul className="mt-6 space-y-3">
          {masters.map((m) => (
            <li key={m.auteur} className="rounded-lg border bg-card p-4">
              <p className="font-semibold">{m.auteur}</p>
              <p className="mt-1 text-sm text-foreground/80">{m.sujet}</p>
            </li>
          ))}
        </ul>
      </SectionLayout>
    </>
  );
}
