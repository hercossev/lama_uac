import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";

const jalons = [
  { date: "21 novembre 2014", titre: "Création du LAMA", texte: "Le laboratoire est créé par l'arrêté décanal n° 1236-14/UAC/FLASH/D/VD/SGE, au sein du Département de Sociologie-Anthropologie de l'Université d'Abomey-Calavi." },
  { date: "Avril 2019", titre: "Atelier « Métabolisme urbain »", texte: "Le LAMA organise à l'UAC un atelier sur le « Métabolisme urbain », du 5 au 19 avril 2019." },
  { date: "2020 – 2022", titre: "La recherche face à la COVID-19", texte: "Le laboratoire conduit plusieurs recherches sur la pandémie : médias et effets sociaux (CORAFBEN), histoire des épidémies (ARIACOV), recherche dans le Couffo, hésitation vaccinale." },
  { date: "2022", titre: "Un laboratoire en pleine croissance", texte: "Le rapport d'activités 2022 recense 11 enseignants-chercheurs, 40 étudiants encadrés, 5 masters recherche soutenus et 8 thèses de doctorat en cours." },
  { date: "30 avril 2024", titre: "Immatriculation du laboratoire", texte: "Le LAMA obtient son numéro d'identification fiscale unique (IFU) pour ses activités de recherche-développement." },
  { date: "Janvier 2025", titre: "Règlement intérieur", texte: "Adoption d'un projet de règlement intérieur précisant l'organisation du laboratoire : trois équipes de recherche, Direction exécutive, Assemblée générale et Conseil du laboratoire." },
  { date: "2025", titre: "Lancement du programme RESFORD", texte: "Avec l'Université de Liège et le financement de l'ARES, le LAMA pilote la composante sciences sociales d'un programme sur la restauration des paysages urbains." },
  { date: "Septembre 2025", titre: "Démarrage du projet EMPOWER", texte: "Lancement du projet européen Horizon Europe sur les maladies non transmissibles au Bénin et au Togo, dont le LAMA conduit au Bénin le volet « Implication des patients et du public et communication pour le changement social et comportemental »." },
  { date: "Avril 2026", titre: "Conférence inaugurale à Parakou", texte: "Le directeur du LAMA prononce la conférence inaugurale des journées d'études du LASDEL sur les savoirs médicaux et religieux endogènes." },
  { date: "2026", titre: "Mobilité internationale et nouveaux projets", texte: "Cinq étudiants partent à Naples (programme AFYA MOJA), une mission RESFORD parcourt Kétou, Abomey et Lokossa, et le LAMA conduit le volet communication du projet EMPOWER." },
];

export default function Histoire() {
  return (
    <>
      <PageHeader title="Notre histoire" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Notre histoire" }]} intro="Les grandes étapes du laboratoire depuis sa création en 2014." />
      <SectionLayout section="/a-propos">
        <ol className="relative border-l-2 border-primary/20 pl-8">
          {jalons.map((j) => (
            <li key={j.titre} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent" />
              <p className="text-sm font-semibold text-accent">{j.date}</p>
              <h2 className="mt-1 text-xl font-semibold">{j.titre}</h2>
              <p className="mt-2 text-foreground/80">{j.texte}</p>
            </li>
          ))}
        </ol>
      </SectionLayout>
    </>
  );
}
