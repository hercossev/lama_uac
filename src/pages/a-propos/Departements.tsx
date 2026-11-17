import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { ToComplete } from "@/components/layout/ToComplete";
import { equipesRecherche } from "@/data/equipe";

export default function Departements() {
  return (
    <>
      <PageHeader title="Nos départements" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Nos départements" }]} intro="Le LAMA est organisé en trois équipes de recherche internes." />
      <SectionLayout section="/a-propos">
        <p className="text-foreground/85">
          Conformément à son règlement intérieur, le LAMA est constitué de trois équipes de recherche. Chacune conduit des travaux sur
          un ou plusieurs thèmes relevant de son domaine de spécialité. Le laboratoire est lui-même rattaché au Département de
          Sociologie-Anthropologie de la Faculté des Sciences Humaines et Sociales (FASHS).
        </p>
        <div className="mt-8 space-y-6">
          {equipesRecherche.map((e, i) => (
            <article key={e.nom} className="grid gap-4 rounded-lg border bg-card p-6 md:grid-cols-[80px_1fr]">
              <span className="font-serif text-5xl font-semibold text-accent/80">0{i + 1}</span>
              <div>
                <h2 className="text-xl font-semibold">{e.nom}</h2>
                <p className="mt-2 text-foreground/80">{e.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exemples de travaux</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {e.exemples.map((x) => (
                    <li key={x} className="rounded-full bg-secondary px-3 py-1 text-xs">{x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ToComplete>
            Les noms des chefs d'équipe et les membres de chaque équipe ne figurent pas dans les documents. Les descriptions et exemples
            ont été rédigés à partir des thèmes de recherche du laboratoire : merci de les valider.
          </ToComplete>
        </div>
      </SectionLayout>
    </>
  );
}
