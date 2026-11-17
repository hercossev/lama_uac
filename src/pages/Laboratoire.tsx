import { Building, CalendarCheck, Landmark, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Gallery } from "@/components/layout/Gallery";
import { siteInfo } from "@/data/site";

const fiche = [
  { icon: Landmark, label: "Tutelle", valeur: `${siteInfo.universite}` },
  { icon: Building, label: "Rattachement", valeur: `${siteInfo.faculte}, ${siteInfo.departement} ; ${siteInfo.ecoleDoctorale}` },
  { icon: CalendarCheck, label: "Création", valeur: siteInfo.arrete },
  { icon: MapPin, label: "Implantation", valeur: siteInfo.adresse.join(", ") },
];

const membres = [
  { titre: "Membres statutaires", texte: "Enseignants-chercheurs (Professeurs, Maîtres de conférences, Maîtres-assistants, Assistants) et assistants de recherche rattachés au LAMA." },
  { titre: "Personnel de soutien", texte: "Personnels administratifs et techniques dont l'employeur principal est l'Université d'Abomey-Calavi, dont un secrétariat administratif et une comptabilité." },
  { titre: "Chercheurs rattachés", texte: "Membres sans obligation statutaire dont les activités de recherche s'effectuent dans le cadre du laboratoire, dont les enseignants-chercheurs émérites." },
  { titre: "Chercheurs associés", texte: "Chercheurs et enseignants-chercheurs affectés ailleurs mais dont une partie des recherches se déroule au LAMA." },
  { titre: "Doctorants et jeunes docteurs", texte: "Le LAMA a vocation à accueillir des étudiants en thèse et de jeunes docteurs qui peuvent demander leur rattachement." },
];

const photos = [
  "/images/ceremonie-1.jpg",
  "/images/ceremonie-2.jpg",
  "/images/ceremonie-3.jpg",
  "/images/ceremonie-4.jpg",
  "/images/reunion-1.jpg",
  "/images/reunion-2.jpg",
  "/images/institut-pasteur-1.jpg",
  "/images/institut-pasteur-2.jpg",
  "/images/uac-entree.jpg",
];

export default function Laboratoire() {
  return (
    <>
      <PageHeader title="Le laboratoire" crumbs={[{ label: "Laboratoire" }]} intro="Une unité de recherche et de formation de l'Université d'Abomey-Calavi dédiée à l'étude des phénomènes de santé, de maladie et de soins." image="/images/resford-equipe-mairie.jpg" />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-lama">
            <p className="eyebrow mb-2">Présentation</p>
            <h2 className="mb-6 text-3xl font-semibold">Le LAMA en quelques mots</h2>
            <p>
              Le Laboratoire d'Anthropologie Médicale Appliquée (LAMA) est une unité de recherche dédiée à l'étude des dimensions
              sociales, culturelles, économiques, politiques et symboliques des phénomènes de santé, de maladie et de soins. Il mobilise
              les connaissances et méthodes des sciences sociales pour contribuer à la compréhension des problématiques sanitaires et à
              l'amélioration des interventions en santé.
            </p>
            <p>
              Le LAMA analyse les représentations de la santé et de la maladie, les itinéraires thérapeutiques, les pratiques de soins
              biomédicales et traditionnelles, les relations entre professionnels de santé, patients et communautés, ainsi que les
              facteurs sociaux et culturels qui influencent les comportements de santé. Une attention particulière est accordée aux
              savoirs endogènes, aux pharmacopées africaines et aux formes de recours aux médecines traditionnelles et complémentaires.
            </p>
            <p>
              Ses travaux s'appuient sur les paradigmes de la socio-anthropologie de la santé : mettre en lumière les déterminants
              sociaux, culturels, économiques et comportementaux associés aux maladies, dans un contexte de pluralité thérapeutique qui
              associe médicaments modernes et thérapies à base de plantes. Ils ont notamment porté sur le paludisme, l'ulcère de Buruli,
              le diabète, les itinéraires thérapeutiques des populations et l'acceptabilité des politiques et stratégies sanitaires.
            </p>
            <p>
              Le laboratoire conduit également un programme de recherche de longue haleine sur les motifs de vaccination. Ses premières
              études ont porté sur les facteurs associés à la résistance à la vaccination contre la poliomyélite dans la région
              d'Ifangni, puis sur l'hésitation vaccinale face à la COVID-19 (source :{" "}
              <a href="https://www.gavi.org/fr/vaccineswork/parle-vaccins-pr-roch-houngnihin-professeur-anthropologie-sante-benin" target="_blank" rel="noopener" className="text-primary underline">Gavi, 2023</a>).
            </p>
          </div>
          <aside className="h-fit space-y-4 rounded-lg border bg-card p-6">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Fiche d'identité</h2>
            {fiche.map((f) => (
              <div key={f.label} className="flex gap-3">
                <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                  <p className="text-sm">{f.valeur}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container">
          <SectionTitle eyebrow="Organisation" title="Qui compose le laboratoire ?">
            Le LAMA est soumis aux règles de gestion de l'administration de l'Université d'Abomey-Calavi et bénéficie de l'autonomie de
            gestion administrative.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {membres.map((m) => (
              <div key={m.titre} className="rounded-lg border bg-card p-5">
                <h3 className="font-sans text-base font-semibold text-primary">{m.titre}</h3>
                <p className="mt-2 text-sm text-foreground/80">{m.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="En images" title="La vie du laboratoire" />
          <Gallery images={photos} alt="Activités du LAMA" />
        </div>
      </section>
    </>
  );
}
