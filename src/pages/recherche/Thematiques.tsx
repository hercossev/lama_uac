import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { thematiques } from "@/data/thematiques";

export default function Thematiques() {
  return (
    <>
      <PageHeader title="Thématiques stratégiques" crumbs={[{ label: "Recherche", href: "/recherche" }, { label: "Thématiques stratégiques" }]} intro="Les grands enjeux contemporains de santé publique sur lesquels le LAMA concentre ses recherches." />
      <SectionLayout section="/recherche">
        <p className="text-foreground/85">
          À travers une approche interdisciplinaire, le LAMA produit des connaissances scientifiques contextualisées et directement
          mobilisables par les acteurs de santé, les décideurs publics, les collectivités territoriales et les communautés. Il accorde une
          place importante à la recherche-action, à l'évaluation des programmes et politiques de santé, à la valorisation des savoirs
          locaux et au développement de stratégies d'intervention adaptées aux réalités socioculturelles des populations.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {thematiques.map((t) => (
            <div key={t.titre} className="rounded-lg border bg-card p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"><t.icon className="h-5 w-5" /></span>
              <h2 className="mt-3 font-sans text-base font-semibold">{t.titre}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
