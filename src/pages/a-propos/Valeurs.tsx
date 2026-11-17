import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";

// Les principes ci-dessous sont repris des textes du LAMA (description et rapport d'activités).
// Ils ne constituent pas une charte de valeurs officielle : à valider ou remplacer par le LAMA.
const principes = [
  { titre: "Interdisciplinarité", texte: "Une approche qui croise anthropologie, sociologie, santé publique, sciences biomédicales et environnementales." },
  { titre: "Ancrage dans les réalités socioculturelles", texte: "Des connaissances contextualisées et des stratégies d'intervention adaptées aux réalités des populations." },
  { titre: "Dialogue des savoirs", texte: "La valorisation des savoirs locaux et endogènes, en dialogue avec la recherche scientifique et les pratiques professionnelles." },
  { titre: "Équité", texte: "La conception de réponses sanitaires plus équitables, culturellement pertinentes et socialement acceptables." },
  { titre: "Éthique", texte: "Une attention aux enjeux éthiques des politiques de santé : pertinence, efficacité, équité, transparence et justice sociale." },
  { titre: "Utilité sociale de la recherche", texte: "Des résultats directement mobilisables par les acteurs de santé, les décideurs publics, les collectivités et les communautés." },
];

export default function Valeurs() {
  return (
    <>
      <PageHeader title="Nos valeurs" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Nos valeurs" }]} intro="Les principes qui orientent les recherches et les formations du LAMA." />
      <SectionLayout section="/a-propos">
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {principes.map((p) => (
            <div key={p.titre} className="rounded-lg border-l-4 border-l-accent bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{p.titre}</h2>
              <p className="mt-2 text-sm text-foreground/80">{p.texte}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
