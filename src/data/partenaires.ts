// Partenaires cités dans les documents du LAMA. Ajouter les logos officiels (haute définition) dans public/images/partenaires/.
export type Partenaire = { nom: string; pays: string; type: "Académique" | "Recherche" | "Financement"; lien: string };

export const partenaires: Partenaire[] = [
  { nom: "Université d'Abomey-Calavi (UAC)", pays: "Bénin", type: "Académique", lien: "Université de tutelle du LAMA" },
  { nom: "Laboratoire d'Écologie Appliquée (FSA/UAC)", pays: "Bénin", type: "Recherche", lien: "Co-pilotage du programme RESFORD" },
  { nom: "Université Nationale d'Agriculture", pays: "Bénin", type: "Académique", lien: "Coopération AFYA MOJA" },
  { nom: "Université de Liège (ULiège) – Gembloux Agro-Bio Tech", pays: "Belgique", type: "Académique", lien: "Programme RESFORD, thèse en co-diplomation" },
  { nom: "Académie de Recherche et d'Enseignement Supérieur (ARES)", pays: "Belgique", type: "Financement", lien: "Financement du PRD RESFORD" },
  { nom: "Université de Naples Federico II", pays: "Italie", type: "Académique", lien: "Programme de mobilité AFYA MOJA" },
  { nom: "Institut de recherche pour le développement (IRD)", pays: "France", type: "Recherche", lien: "CORAFBEN, ARIACOV, politiques des pesticides" },
  { nom: "Université Alassane Ouattara – Centre de Recherche pour le Développement", pays: "Côte d'Ivoire", type: "Recherche", lien: "Politiques publiques des pesticides" },
  { nom: "Louvain Drug Research Institute (LDRI)", pays: "Belgique", type: "Recherche", lien: "Projet Uvaria chamae" },
  { nom: "The Couffo Collaborative", pays: "États-Unis", type: "Financement", lien: "Bourses de recherche dans le Couffo" },
  { nom: "Université de Dallas", pays: "États-Unis", type: "Académique", lien: "Recherche COVID-19 dans le Couffo" },
  { nom: "University of Utah", pays: "États-Unis", type: "Académique", lien: "Recherche sur la trisomie 21" },
  { nom: "BENIN-HEALTH PROJECT CONSORTIUM", pays: "International", type: "Financement", lien: "Système d'alerte climat-santé" },
  { nom: "Université de Limoges", pays: "France", type: "Académique", lien: "Coordination du projet EMPOWER (Horizon Europe)" },
  { nom: "Université de Lomé", pays: "Togo", type: "Académique", lien: "Projet EMPOWER" },
  { nom: "Luxembourg Institute of Health", pays: "Luxembourg", type: "Recherche", lien: "Projet EMPOWER" },
  { nom: "Swiss Tropical and Public Health Institute (Swiss TPH)", pays: "Suisse", type: "Recherche", lien: "Projet EMPOWER" },
  { nom: "Union européenne – Horizon Europe", pays: "Union européenne", type: "Financement", lien: "Financement du projet EMPOWER" },
  { nom: "Réseau Anthropologie des Épidémies Émergentes (RAEE)", pays: "International", type: "Recherche", lien: "Le LAMA est le partenaire béninois du réseau" },
];
