import { BookOpen, GraduationCap, Microscope, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";

const offres = [
  {
    icon: BookOpen,
    niveau: "Licence",
    titre: "Encadrement des travaux de licence en sociologie-anthropologie",
    texte: "Le LAMA accueille des étudiants de licence et les initie à la recherche scientifique. En 2022, 27 étudiants de licence étaient encadrés au sein du laboratoire.",
  },
  {
    icon: GraduationCap,
    niveau: "Master",
    titre: "Master Sociologie et anthropologie de la santé",
    texte: "Les étudiants de master recherche, option Sociologie et anthropologie de la santé, réalisent leurs mémoires sous la direction des enseignants-chercheurs du LAMA (hésitation vaccinale, santé maternelle, COVID-19, accidents de la route…).",
  },
  {
    icon: Microscope,
    niveau: "Doctorat",
    titre: "Thèses en Sciences de l'homme et de la société",
    texte: "Rattaché à l'École Doctorale Pluridisciplinaire « Espaces, Cultures et Développement », le LAMA accueille des doctorants et des jeunes docteurs. Les nouveaux doctorants dont l'encadreur est membre permanent sont intégrés au laboratoire.",
  },
  {
    icon: Users,
    niveau: "Renforcement de capacités",
    titre: "Recherche qualitative en santé",
    texte: "Un cadre de formation et de renforcement des capacités sur la recherche qualitative pour les étudiants et stagiaires en sociologie-anthropologie, en médecine et en santé publique. Le laboratoire organise aussi des séminaires et journées d'étude.",
  },
];

export default function Catalogue() {
  return (
    <>
      <PageHeader title="Catalogue des formations" crumbs={[{ label: "Formation", href: "/formation" }, { label: "Catalogue des formations" }]} intro="De la licence au doctorat, le LAMA forme à l'anthropologie et à la sociologie de la santé." image="/images/master-conference-inaugurale.jpg" />
      <SectionLayout section="/formation">
        <div className="space-y-5">
          {offres.map((o) => (
            <article key={o.titre} className="grid gap-4 rounded-lg border bg-card p-6 sm:grid-cols-[56px_1fr]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><o.icon className="h-6 w-6" /></span>
              <div>
                <p className="eyebrow">{o.niveau}</p>
                <h2 className="mt-1 text-xl font-semibold">{o.titre}</h2>
                <p className="mt-2 text-foreground/80">{o.texte}</p>
              </div>
            </article>
          ))}
        </div>
        <figure className="mt-10 overflow-hidden rounded-lg border">
          <img src="/images/master-conference-inaugurale.jpg" alt="Conférence inaugurale du Master Sociologie et anthropologie de la santé" className="w-full object-cover" />
          <figcaption className="bg-card p-3 text-sm text-muted-foreground">Conférence inaugurale du Master Sociologie et anthropologie de la santé, Université d'Abomey-Calavi.</figcaption>
        </figure>
      </SectionLayout>
    </>
  );
}
