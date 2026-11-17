// Sources : feuille « Projets » (2021-2023), rapport 2022, articles RESFORD / AFYA MOJA et appel EMPOWER (dossier du LAMA).
export type Projet = {
  slug: string;
  titre: string;
  objectif: string;
  periode: string;
  statut: "En cours" | "Achevé" | "À confirmer";
  envergure?: string;
  partenaires: string;
  domaine: string;
  image?: string;
};

export const projets: Projet[] = [
  {
    slug: "empower",
    titre: "EMPOWER – Maladies non transmissibles, agents de santé de première ligne et santé numérique",
    objectif:
      "Projet Horizon Europe de réponse communautaire et numérique aux maladies non transmissibles (MNT) au Bénin et au Togo : formation des agents de santé de première ligne et application mobile de dépistage et de suivi. Au Bénin, le LAMA exécute le Work Package 3 « Implication des Patients et du Public (IPP) et Communication pour le Changement Social et Comportemental (CCSC) ».",
    periode: "Septembre 2025 – août 2029",
    statut: "En cours",
    envergure: "Internationale (Bénin, Togo)",
    partenaires: "Consortium Horizon Europe coordonné par l'Université de Limoges, avec l'Université d'Abomey-Calavi, l'Université de Lomé, le Luxembourg Institute of Health, l'Université de Catane, l'Université Numérique Francophone Mondiale et le Swiss TPH",
    domaine: "Maladies chroniques, communication en santé",
  },
  {
    slug: "resford",
    titre: "RESFORD – Restauration des paysages urbains à base des essences forestières anciennement domestiquées",
    objectif:
      "Réintroduire dans les villes des espèces d'arbres locales, valoriser les savoirs traditionnels liés aux arbres et développer des techniques adaptées de plantation et de gestion. Le LAMA pilote, côté Sud, la composante sciences sociales.",
    periode: "Depuis 2025",
    statut: "En cours",
    envergure: "Internationale",
    partenaires: "Université de Liège (Gembloux Agro-Bio Tech, Laboratoire d'Anthropologie Sociale et Culturelle), Laboratoire d'Écologie Appliquée (FSA/UAC) ; financement ARES (Belgique)",
    domaine: "Anthropologie de la nature, foresterie urbaine",
    image: "/images/resford-mission-baobab.jpg",
  },
  {
    slug: "afya-moja",
    titre: "AFYA MOJA Mobility Program – « Health Technology: From Capacity Building to Capacity Strengthening »",
    objectif:
      "Programme de mobilité TNE 23-00079, coordonné par l'Università Campus Bio-Medico di Roma, soutenant l'étude, la recherche et la formation. Le LAMA pilote, côté Sud, la composante sciences sociales avec l'Université de Naples Federico II.",
    periode: "2026",
    statut: "En cours",
    envergure: "Internationale",
    partenaires: "Université de Naples Federico II (Département des Sciences Sociales)",
    domaine: "Sciences sociales et technologies de la santé",
    image: "/images/afya-moja-groupe-naples.jpg",
  },
  {
    slug: "systeme-alerte-climat",
    titre: "Système d'alerte précoce et de riposte aux épidémies hydriques sensibles au climat au Bénin",
    objectif:
      "Permettre aux communautés de contribuer, par leurs savoirs, à la co-construction d'un système d'alerte précoce et de riposte inclusif, efficace et ascendant, adapté aux contextes et aux besoins.",
    periode: "2023 – 2026",
    statut: "En cours",
    envergure: "Internationale",
    partenaires: "BENIN-HEALTH PROJECT CONSORTIUM (Grant No. 110150-001)",
    domaine: "Sciences environnementales, santé",
  },
  {
    slug: "uvaria-chamae",
    titre: "Utilisation efficiente et rationnelle des plantes de la médecine traditionnelle : le cas d'Uvaria chamae",
    objectif:
      "Proposer des pistes durables, objectives et efficientes de valorisation de plantes de la médecine traditionnelle contre le diabète et les infections bactériennes, à partir du cas d'Uvaria chamae.",
    periode: "2022 – 2025",
    statut: "À confirmer",
    envergure: "Internationale",
    partenaires: "Louvain Drug Research Institute (LDRI), Pharmacognosy Research Group (GNOS)",
    domaine: "Sciences biomédicales et pharmaceutiques",
  },
  {
    slug: "corafben",
    titre: "CORAFBEN – Médias, interprétations, effets sociaux face à la pandémie de COVID-19 (Bénin)",
    objectif: "Analyser la COVID-19 et les médias à travers les logiques et pratiques sociales de prise en charge au Bénin.",
    periode: "2021 – 2025",
    statut: "À confirmer",
    envergure: "Régionale",
    partenaires: "Institut de recherche pour le développement (IRD)",
    domaine: "Sciences de l'homme et de la société",
  },
  {
    slug: "ariacov",
    titre: "Programme ARIACOV",
    objectif: "Écrire l'histoire des épidémies en Afrique.",
    periode: "2021 – 2024",
    statut: "Achevé",
    envergure: "Régionale",
    partenaires: "Institut de recherche pour le développement (IRD)",
    domaine: "Sciences de l'homme et de la société",
  },
  {
    slug: "pesticides",
    titre: "Les politiques publiques relatives aux pesticides : acteurs et logiques d'action en agriculture urbaine au Bénin",
    objectif: "Analyser les politiques publiques relatives aux pesticides, à travers les acteurs et les logiques d'action en agriculture urbaine au Bénin.",
    periode: "2020 – 2024",
    statut: "Achevé",
    envergure: "Régionale",
    partenaires: "IRD / Centre de Recherche pour le Développement de l'Université Alassane Ouattara",
    domaine: "Sciences de l'homme et de la société",
  },
  {
    slug: "couffo-envenimations",
    titre: "Analyse anthropologique des envenimations dans le Couffo",
    objectif: "Bourse complète de recherche en anthropologie de la santé pour une analyse anthropologique des envenimations dans le département du Couffo.",
    periode: "2020 – 2025",
    statut: "À confirmer",
    envergure: "Nationale",
    partenaires: "The Couffo Collaborative",
    domaine: "Sciences de l'homme et de la société",
  },
  {
    slug: "covid-couffo",
    titre: "Appui à la recherche sur la COVID-19 dans le département du Couffo (Bénin)",
    objectif: "Analyser la COVID-19 à travers les logiques et pratiques sociales de prise en charge dans le département du Couffo.",
    periode: "2021 – 2023",
    statut: "Achevé",
    envergure: "Nationale",
    partenaires: "Université de Dallas, The Couffo Collaborative",
    domaine: "Sciences de l'homme et de la société",
  },
  {
    slug: "trisomie-21",
    titre: "La trisomie 21 : logiques et pratiques sociales de prise en charge d'une maladie à stigmate à Cotonou (Bénin)",
    objectif: "Analyser la trisomie 21 à travers les logiques et pratiques sociales de prise en charge à Cotonou.",
    periode: "2019 – 2023",
    statut: "Achevé",
    partenaires: "University of Utah",
    domaine: "Sciences de l'homme et de la société",
  },
];
