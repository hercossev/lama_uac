import { Eye, Target } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { siteInfo } from "@/data/site";

const objectifs = [
  "Promouvoir la recherche en sciences sociales, notamment en anthropologie de la maladie et de la santé.",
  "Offrir aux étudiants et stagiaires en sociologie-anthropologie, en médecine et en santé publique un cadre de formation et de renforcement des capacités sur la recherche qualitative.",
  "Appuyer l'organisation des services de santé.",
  "Promouvoir la recherche sur la médecine traditionnelle et les maladies prioritaires de santé publique.",
  "Promouvoir l'utilisation des résultats de recherches en sciences sociales, notamment les connaissances socio-anthropologiques, pour améliorer la qualité de la prise en charge des maladies.",
  "Promouvoir les méthodes d'évaluation qualitative des actions de santé publique.",
  "Renforcer les activités d'éducation et de promotion sanitaire.",
  "Mettre à disposition des décideurs, des professionnels de la santé et des usagers des services de santé des expertises en sciences sociales pour améliorer les performances des systèmes de santé.",
  "Accompagner les politiques d'accès aux soins.",
];

export default function Mission() {
  return (
    <>
      <PageHeader title="Notre mission" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Notre mission" }]} intro="Produire, transmettre et valoriser des connaissances en anthropologie médicale au service des systèmes de santé." />
      <SectionLayout section="/a-propos">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <Eye className="h-7 w-7 text-accent" />
            <h2 className="mt-3 text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-foreground/85">{siteInfo.vision}</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Target className="h-7 w-7 text-accent" />
            <h2 className="mt-3 text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-foreground/85">
              Contribuer à l'amélioration et au développement du système de santé, à l'analyse de ses performances, à l'évaluation de
              l'efficacité des politiques et stratégies, des effets, des impacts, des risques et des opportunités des interventions des
              programmes et projets sur les systèmes publics de soins.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Nos objectifs de recherche et de développement</h2>
        <ol className="mt-6 space-y-3">
          {objectifs.map((o, i) => (
            <li key={o} className="flex gap-4 rounded-lg border bg-card p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
              <span className="pt-1 text-foreground/85">{o}</span>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-semibold">Notre ambition</h2>
        <div className="prose-lama mt-4">
          <p>
            Le LAMA a pour ambition de constituer un espace de production, de transmission et de valorisation des connaissances en
            anthropologie médicale, tout en renforçant le dialogue entre recherche scientifique, pratiques professionnelles et savoirs
            des communautés. Il contribue ainsi à une meilleure compréhension des déterminants sociaux et culturels de la santé et à la
            conception de réponses sanitaires plus équitables, culturellement pertinentes et socialement acceptables.
          </p>
        </div>
      </SectionLayout>
    </>
  );
}
