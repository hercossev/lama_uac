export type NavItem = { label: string; href: string; children?: { label: string; href: string; description?: string }[] };

// Arborescence validée par le LAMA (menus et sous-menus).
export const navigation: NavItem[] = [
  {
    label: "À propos",
    href: "/a-propos",
    children: [
      { label: "Notre mission", href: "/a-propos/mission", description: "Vision, mission et objectifs" },
      { label: "Nos valeurs", href: "/a-propos/valeurs", description: "Ce qui guide notre action" },
      { label: "Notre histoire", href: "/a-propos/histoire", description: "Les étapes depuis 2014" },
      { label: "Notre direction", href: "/a-propos/direction", description: "Direction exécutive et instances" },
      { label: "Nos départements", href: "/a-propos/departements", description: "Nos trois équipes de recherche" },
      { label: "Nos partenaires", href: "/a-propos/partenaires", description: "Universités, instituts et bailleurs" },
    ],
  },
  {
    label: "Recherche",
    href: "/recherche",
    children: [
      { label: "Publications", href: "/recherche/publications", description: "Articles et travaux publiés" },
      { label: "Projets", href: "/recherche/projets", description: "Projets en cours et achevés" },
      { label: "Équipe", href: "/recherche/equipe", description: "Chercheurs et assistants" },
      { label: "Ressources et données", href: "/recherche/ressources-donnees", description: "Chiffres, thèses et mémoires" },
      { label: "Thématiques stratégiques", href: "/recherche/thematiques", description: "Nos axes prioritaires" },
    ],
  },
  {
    label: "Formation",
    href: "/formation",
    children: [
      { label: "Catalogue des formations", href: "/formation/catalogue", description: "Licence, master, doctorat" },
      { label: "Programmes de bourse", href: "/formation/bourses", description: "Bourses et mobilités" },
    ],
  },
  { label: "Laboratoire", href: "/laboratoire" },
  { label: "Actualités", href: "/actualites" },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
  { label: "Contact", href: "/contact" },
];

export const siteInfo = {
  nom: "Laboratoire d'Anthropologie Médicale Appliquée",
  sigle: "LAMA",
  universite: "Université d'Abomey-Calavi (UAC)",
  faculte: "Faculté des Sciences Humaines et Sociales (FASHS)",
  departement: "Département de Sociologie-Anthropologie",
  ecoleDoctorale: "École Doctorale Pluridisciplinaire « Espaces, Cultures et Développement »",
  arrete: "Arrêté n° 1236-14/UAC/FLASH/D/VD/SGE du 21 novembre 2014",
  adresse: ["Université d'Abomey-Calavi", "Quartier Zogbadjè", "Abomey-Calavi, Bénin"],
  telephone: "+229 01 95 06 13 35",
  telephoneHref: "tel:+2290195061335",
  // Adresse du directeur scientifique publiée dans les appels du LAMA. Remplacer par l'adresse officielle du laboratoire si elle existe.
  email: "roch.houngnihin@uac.bj",
  vision:
    "Une Unité de Recherche et de Formation sur les aspects socioculturels, comportementaux et environnementaux de la maladie et de la santé au service des systèmes de santé.",
};
