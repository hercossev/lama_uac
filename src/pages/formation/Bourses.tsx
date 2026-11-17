import { Plane, Award, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";

const programmes = [
  {
    icon: Globe2,
    titre: "Bourse de thèse en co-diplomation UAC – ULiège (programme RESFORD)",
    partenaire: "Université de Liège · ARES (Belgique)",
    texte: "Dans le cadre du programme RESFORD, une assistante de recherche du LAMA bénéficie d'une bourse de thèse en co-diplomation entre l'Université d'Abomey-Calavi et l'Université de Liège.",
    lien: "/actualites/uac-uliege-programme-resford",
  },
  {
    icon: Plane,
    titre: "Mobilité AFYA MOJA vers l'Université de Naples Federico II",
    partenaire: "Programme TNE 23-00079",
    texte: "Séjours académiques pour les étudiants de master et de doctorat : séminaires, conférences, cours, ateliers théoriques et pratiques, projets de réseautage. Cinq étudiants du LAMA en ont bénéficié en 2026.",
    lien: "/actualites/afya-moja-etudiants-naples",
  },
  {
    icon: Award,
    titre: "Bourse complète de recherche en anthropologie de la santé",
    partenaire: "The Couffo Collaborative",
    texte: "Bourse de recherche pour une analyse anthropologique des envenimations dans le département du Couffo.",
  },
  {
    icon: Award,
    titre: "Bourse de master 2 et appui à la recherche sur la COVID-19",
    partenaire: "Université de Dallas · The Couffo Collaborative",
    texte: "Bourse de master 2 et appui à la recherche sur les logiques et pratiques sociales de prise en charge de la COVID-19 dans le Couffo.",
  },
];

export default function Bourses() {
  return (
    <>
      <PageHeader title="Programmes de bourse" crumbs={[{ label: "Formation", href: "/formation" }, { label: "Programmes de bourse" }]} intro="Bourses de recherche et programmes de mobilité dont ont bénéficié les étudiants et jeunes chercheurs du LAMA." image="/images/afya-moja-delegation.jpg" />
      <SectionLayout section="/formation">
        <div className="space-y-5">
          {programmes.map((p) => (
            <article key={p.titre} className="rounded-lg border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><p.icon className="h-5 w-5" /></span>
                <div>
                  <Badge variant="secondary">{p.partenaire}</Badge>
                  <h2 className="mt-2 text-lg font-semibold">{p.titre}</h2>
                  <p className="mt-2 text-sm text-foreground/80">{p.texte}</p>
                  {p.lien && <Link to={p.lien} className="mt-3 inline-block text-sm font-medium text-primary hover:underline">Lire l'actualité</Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
