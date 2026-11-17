import { User } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { ToComplete } from "@/components/layout/ToComplete";
import { direction } from "@/data/equipe";

const instances = [
  { nom: "Direction exécutive", texte: "Directeur, Directeur adjoint, Chargé de la formation, Chargé de la recherche et Chargé des finances, élus pour un mandat de trois ans renouvelable. Elle se réunit une fois tous les trois mois." },
  { nom: "Assemblée générale", texte: "Elle réunit toutes les catégories de membres une fois par an, définit l'orientation du LAMA, élit la Direction exécutive et les chefs d'équipe, et délibère sur les rapports d'activités." },
  { nom: "Conseil du laboratoire", texte: "Composé de la Direction exécutive et des chefs d'équipe, il prépare les programmes, évalue les activités de recherche et approuve les prévisions budgétaires." },
  { nom: "Équipes de recherche", texte: "Trois équipes, chacune supervisée par le chercheur le plus gradé, mettent en œuvre les projets de recherche du laboratoire." },
];

export default function Direction() {
  return (
    <>
      <PageHeader title="Notre direction" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Notre direction" }]} intro="Le LAMA est dirigé par une Direction exécutive élue par l'Assemblée générale." />
      <SectionLayout section="/a-propos">
        <div className="grid gap-6 rounded-xl bg-lama-vert p-8 text-white md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/30">
            <User className="h-10 w-10 text-white/70" />
          </div>
          <div>
            <p className="eyebrow text-[#E9A877]">Directeur scientifique</p>
            <h2 className="mt-1 text-2xl font-semibold">Professeur Roch Appolinaire HOUNGNIHIN</h2>
            <p className="mt-2 text-white/80">Professeur titulaire d'anthropologie, Anthropologie et sociologie de la santé (FASHS/UAC).</p>
            <p className="mt-2 text-sm text-white/70">
              Membre du comité d'éthique de l'Institut Pasteur (Paris) et du comité d'experts COVID-19 du Bénin (source :{" "}
              <a href="https://www.gavi.org/fr/vaccineswork/parle-vaccins-pr-roch-houngnihin-professeur-anthropologie-sante-benin" target="_blank" rel="noopener" className="underline hover:text-white">Gavi, 2023</a>).
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Direction exécutive</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {direction.map((m) => (
            <div key={m.nom} className="rounded-lg border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{m.role}</p>
              <h3 className="mt-1 font-sans text-base font-semibold">{m.nom}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.grade} · {m.specialite}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <ToComplete>
            Composition reprise de la fiche statistique 2021-2023 : merci de confirmer qu'elle est à jour et de fournir une photo
            officielle de chaque membre (format portrait).
          </ToComplete>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Instances du laboratoire</h2>
        <div className="mt-6 space-y-4">
          {instances.map((i) => (
            <div key={i.nom} className="rounded-lg border bg-card p-5">
              <h3 className="font-sans text-base font-semibold text-primary">{i.nom}</h3>
              <p className="mt-1 text-sm text-foreground/80">{i.texte}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
