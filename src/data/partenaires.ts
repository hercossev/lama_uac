// Partenaires cités dans les documents du LAMA et sources publiques.
// Logos dans public/images/partenaires/ ; sans logo, un badge avec le sigle est affiché.
export type Partenaire = { nom: string; sigle?: string; pays: string; type: "Académique" | "Recherche" | "Financement"; lien: string; logo?: string };

export const partenaires: Partenaire[] = [
  { logo: "/images/partenaires/uac.png", sigle: "UAC", nom: "Université d'Abomey-Calavi (UAC)", pays: "Bénin", type: "Académique", lien: "Université de tutelle du LAMA" },
  { logo: "/images/partenaires/fsa-uac.png", sigle: "FSA-UAC", nom: "Faculté des Sciences Agronomiques (FSA/UAC)", pays: "Bénin", type: "Académique", lien: "Programme RESFORD" },
  { logo: "/images/partenaires/lea.png", sigle: "LEA", nom: "Laboratoire d'Écologie Appliquée (FSA/UAC)", pays: "Bénin", type: "Recherche", lien: "Co-pilotage du programme RESFORD" },
  { sigle: "UNA", nom: "Université Nationale d'Agriculture", pays: "Bénin", type: "Académique", lien: "Coopération AFYA MOJA" },
  { logo: "/images/partenaires/uliege-gembloux.png", sigle: "ULiège", nom: "Université de Liège (ULiège) – Gembloux Agro-Bio Tech", pays: "Belgique", type: "Académique", lien: "Programme RESFORD, thèse en co-diplomation" },
  { logo: "/images/partenaires/ares.png", sigle: "ARES", nom: "Académie de Recherche et d'Enseignement Supérieur (ARES)", pays: "Belgique", type: "Financement", lien: "Financement du PRD RESFORD" },
  { logo: "/images/partenaires/belgique-cooperation.png", sigle: "Coopération belge", nom: "Belgique – partenaire du développement", pays: "Belgique", type: "Financement", lien: "Coopération belge au développement, programme RESFORD (via l'ARES)" },
  { logo: "/images/partenaires/federico-ii.png", sigle: "Federico II", nom: "Université de Naples Federico II", pays: "Italie", type: "Académique", lien: "Programme de mobilité AFYA MOJA" },
  { sigle: "IRD", nom: "Institut de recherche pour le développement (IRD)", pays: "France", type: "Recherche", lien: "CORAFBEN, ARIACOV, politiques des pesticides" },
  { sigle: "UAO", nom: "Université Alassane Ouattara – Centre de Recherche pour le Développement", pays: "Côte d'Ivoire", type: "Recherche", lien: "Politiques publiques des pesticides" },
  { sigle: "LDRI", nom: "Louvain Drug Research Institute (LDRI)", pays: "Belgique", type: "Recherche", lien: "Projet Uvaria chamae" },
  { sigle: "Couffo Collaborative", nom: "The Couffo Collaborative", pays: "États-Unis", type: "Financement", lien: "Bourses de recherche dans le Couffo" },
  { sigle: "Univ. Dallas", nom: "Université de Dallas", pays: "États-Unis", type: "Académique", lien: "Recherche COVID-19 dans le Couffo" },
  { sigle: "Univ. Utah", nom: "University of Utah", pays: "États-Unis", type: "Académique", lien: "Recherche sur la trisomie 21" },
  { sigle: "Benin-Health", nom: "BENIN-HEALTH PROJECT CONSORTIUM", pays: "International", type: "Financement", lien: "Système d'alerte climat-santé" },
  { sigle: "Univ. Limoges", nom: "Université de Limoges", pays: "France", type: "Académique", lien: "Coordination du projet EMPOWER (Horizon Europe)" },
  { sigle: "Univ. Lomé", nom: "Université de Lomé", pays: "Togo", type: "Académique", lien: "Projet EMPOWER" },
  { sigle: "LIH", nom: "Luxembourg Institute of Health", pays: "Luxembourg", type: "Recherche", lien: "Projet EMPOWER" },
  { sigle: "Swiss TPH", nom: "Swiss Tropical and Public Health Institute (Swiss TPH)", pays: "Suisse", type: "Recherche", lien: "Projet EMPOWER" },
  { sigle: "Horizon Europe", nom: "Union européenne – Horizon Europe", pays: "Union européenne", type: "Financement", lien: "Financement du projet EMPOWER" },
  { sigle: "RAEE", nom: "Réseau Anthropologie des Épidémies Émergentes (RAEE)", pays: "International", type: "Recherche", lien: "Le LAMA est le partenaire béninois du réseau" },
];
