// Source : feuille « Publications » du fichier de statistiques 2021-2023 et rapport d'activités 2022.
export type Publication = { annee: number; auteurs: string; titre: string; revue: string; portee: string; lien?: string };

export const publications: Publication[] = [
  {
    annee: 2026,
    auteurs: "Houngnihin R., Biao M., Gbèbioho B., Togonou F., Azonchiga D.",
    titre: "Shared and targeted barriers to care for skin-related neglected tropical diseases in two endemic communes of Benin: Toward a framework for resource allocation",
    revue: "Dialogues in Health, 2026 (article 100350)",
    portee: "Internationale",
    lien: "https://doi.org/10.1016/j.dialog.2026.100350",
  },
  {
    annee: 2025,
    auteurs: "Touré C., Makinen M., Almiñana A., Chee G., Kanagat N., Fields R., et al. (dont Houngnihin R.)",
    titre: "Integrating COVID-19 vaccination into health systems: qualitative findings from seven countries",
    revue: "BMJ Global Health, 2025, 10(8), e017035",
    portee: "Internationale",
    lien: "https://doi.org/10.1136/bmjgh-2024-017035",
  },
  {
    annee: 2023,
    auteurs: "Nadakou N. T., Paraïso M. N., Yobo J. B., Tapha O., Tossou F., Adehossi É. O., Houngnihin R.",
    titre: "Perception and social acceptability of the extension of chemoprevention of seasonal malaria in the health districts of Damagaram Takaya and Takeita in Niger",
    revue: "World Journal of Advanced Research and Reviews",
    portee: "Internationale",
  },
  {
    annee: 2023,
    auteurs: "Kêdoté N. M., Darboux A. J., Assogba S. C.-G., Houngnihin R., Dossou A., Agossou E., Djogbénou L. S., Sarr F. B., Mavoungou J. F.",
    titre: "Knowledge and Practices toward COVID-19 Preventive Measures and Symptoms: A Case-Control Study in Benin",
    revue: "Health Sciences and Disease, Vol. 24 (1), janvier 2023, p. 61-70",
    portee: "Internationale",
    lien: "https://www.hsd-fmsb.org",
  },
  {
    annee: 2022,
    auteurs: "Houngnihin R., Gbégan P. M., Doudou D. T.",
    titre: "Au-delà de l'État. La vie sociale des pesticides dans le secteur maraîcher au Bénin",
    revue: "VertigO – la revue électronique en sciences de l'environnement, Vol. 21, n° 3, décembre 2022",
    portee: "Internationale",
    lien: "https://doi.org/10.4000/vertigo.34111",
  },
  {
    annee: 2022,
    auteurs: "Maccaro A., Piaggio D., Oronti I. B., Vignigbé M., Gbokli A., Houngnihin R., Pecchia L.",
    titre: "Social Engagement in the Fight Against COVID-19 in the Urban and Peri-Urban Areas of Cotonou (Benin, Sub-saharan Africa): Acceptability of the Vaccination and Tracking Program",
    revue: "Frontiers in Medicine, Vol. 9, Article 857890, juin 2022",
    portee: "Internationale",
    lien: "https://www.frontiersin.org",
  },
  {
    annee: 2022,
    auteurs: "Sodjinou V. D., Ayelo A. P., Houngnihin R. A., Ouendo E.-M. D.",
    titre: "Perception des acteurs de l'approche « Une seule santé » de la sécurité sanitaire mondiale au Bénin",
    revue: "Santé Publique (S.F.S.P.), 2022/3, Vol. 34, p. 439-449",
    portee: "Internationale",
    lien: "https://www.cairn.info/revue-sante-publique-2022-3-page-439.htm",
  },
  {
    annee: 2022,
    auteurs: "Defodji S. L. E., Houngnihin R. A.",
    titre: "Représentations sociales de la trisomie 21 à Cotonou",
    revue: "International Journal of Advanced Research, 9(07), p. 356-366",
    portee: "Internationale",
  },
  {
    annee: 2022,
    auteurs: "Defodji S. L. E., Houngnihin R. A.",
    titre: "Facteurs explicatifs des choix thérapeutiques des parents des enfants trisomiques à Cotonou",
    revue: "DEZAN, Vol. 9, n° 1, juin 2022",
    portee: "Nationale",
  },
];

// Communications scientifiques déclarées pour 2022-2023.
export const communications = [
  { annee: 2026, titre: "Conférence inaugurale « Pratiques thérapeutiques, savoirs locaux et mondes sociaux : une approche anthropologique de la médecine traditionnelle en Afrique », journées d'études du LASDEL (21-22 avril 2026)", lieu: "Parakou (Bénin)" },
  { annee: 2023, titre: "VIIIe Colloque des Sciences, Cultures et Technologies de l'Université d'Abomey-Calavi (25-29 septembre 2023)", lieu: "Abomey-Calavi" },
  { annee: 2022, titre: "International E-Conference on Traditional Medicine and Medicinal Plants (14-15 décembre 2022)", lieu: "En ligne" },
  { annee: 2022, titre: "Seventh Global Symposium on Health Systems Research (31 octobre - 4 novembre 2022)", lieu: "Bogota (Colombie)" },
  { annee: 2022, titre: "18e Congrès international sur la drépanocytose", lieu: "Strasbourg (France)" },
  { annee: 2022, titre: "89e Congrès de l'Acfas, en collaboration avec l'Université Laval (9-13 mai 2022)", lieu: "En ligne" },
  { annee: 2022, titre: "Projet African Life Story of COVID-19 (ALSO COVID-19), Fonds Macky Sall pour la Recherche", lieu: "En ligne" },
];
