// Articles rédigés par le LAMA (dossier source). Les dates « mois » des articles 2 et 3 sont déduites
// de la date des photos et fichiers : à confirmer.
export type Actualite = {
  slug: string;
  titre: string;
  date: string; // ISO, pour le tri
  dateAffichee: string;
  categorie: "Appel" | "Recherche" | "Mobilité" | "Événement";
  resume: string;
  image: string;
  corps: string[];
  galerie?: string[];
  signature?: string;
  echeance?: string;
};

export const actualites: Actualite[] = [
  {
    slug: "appel-candidatures-empower-supports-communication",
    titre: "Appel à candidatures : recrutement d'un prestataire pour la conception des supports de communication EMPOWER",
    date: "2026-11-12",
    dateAffichee: "12 novembre 2026",
    categorie: "Appel",
    echeance: "Date limite de dépôt : mercredi 18 novembre 2026 à 23h59",
    resume:
      "Dans le cadre du projet EMPOWER, le LAMA recrute un graphiste, infographe ou illustrateur pour concevoir des supports de communication sur les maladies non transmissibles.",
    image: "/images/empower-appel-p1.jpg",
    corps: [
      "Le projet EMPOWER (« EMpowering People living with NCDs & frOntline health Workers and levERaging digital health technology, to tackle the burden of chronic diseases in sub-Saharan Africa ») est une réponse communautaire et numérique aux maladies non transmissibles (MNT) au Bénin et au Togo. Au Bénin, le Work Package 3 de ce projet est exécuté par le Laboratoire d'Anthropologie Médicale Appliquée (LAMA) de l'Université d'Abomey-Calavi. Cette composante est intitulée « Implication des Patients et du Public (IPP) et Communication pour le Changement Social et Comportemental (CCSC) ».",
      "Des messages portant sur la prévention et la prise en charge des MNT (notamment l'hypertension artérielle, le diabète, l'obésité, les pathologies de santé mentale, ainsi que les troubles liés à l'usage de l'alcool et du tabac) ont été élaborés au cours d'ateliers techniques. Pour les rendre opérationnels, le LAMA lance un appel à candidatures pour le recrutement d'un prestataire chargé de concevoir les maquettes des supports visuels de communication, adaptés aux réalités socioculturelles et linguistiques des communautés d'intervention.",
      "Mission (15 jours) : une maquette de boîtes à images, deux dépliants thématiques (maladies cardio-métaboliques et troubles neurologiques), une maquette de bâches et quinze affiches réparties selon les trois niveaux de prévention des MNT. Honoraires forfaitaires : 900 000 F CFA pour toute la durée de la mission.",
      "Profil recherché : graphiste, infographe ou illustrateur de formation, avec une expérience dans la conception de supports de communication, idéalement dans la santé, le développement ou la communication sociale, et une bonne connaissance du contexte béninois.",
      "Dossier (un seul fichier PDF) : lettre de motivation adressée au coordinateur du WP3 Bénin, CV détaillé et justificatifs d'expériences antérieures. À envoyer à roch.houngnihin@uac.bj, avec copie à audreyhemadou18@gmail.com et richabiaou@gmail.com. Objet : Candidature_Prestataire_Traduction_LAMA_WP3.",
      "Seuls les candidats présélectionnés sur dossier seront contactés pour la suite du processus.",
    ],
    galerie: ["/images/empower-appel-p1.jpg", "/images/empower-appel-p2.jpg"],
    signature: "Professeur Roch A. HOUNGNIHIN, Directeur scientifique",
  },
  {
    slug: "mission-scientifique-resford-novembre-2026",
    titre: "L'UAC déploie une mission scientifique pour la restauration des essences forestières anciennement domestiquées au Bénin",
    date: "2026-11-07",
    dateAffichee: "2 au 7 novembre 2026",
    categorie: "Recherche",
    resume:
      "Anthropologues, agronomes et écologues ont exploré Kétou, Abomey et Lokossa pour documenter le patrimoine forestier et bioculturel de ces villes.",
    image: "/images/resford-mission-terrain-ketou.jpg",
    corps: [
      "Dans le cadre du projet RESFORD (Restauration des paysages urbains à base des essences forestières anciennement domestiquées), l'Université d'Abomey-Calavi a conduit, du 2 au 7 novembre 2026, une mission scientifique interdisciplinaire consacrée à l'exploration et à la documentation du patrimoine forestier et bioculturel de plusieurs villes du Bénin.",
      "Réunissant des anthropologues, des agronomes et des écologues, cette mission a été conjointement pilotée par deux laboratoires de recherche : le Laboratoire d'Écologie Appliquée de la Faculté des Sciences Agronomiques (Professeur Brice Sinsin) et le Laboratoire d'Anthropologie Médicale Appliquée de la Faculté des Sciences Humaines et Sociales (Professeur Roch Houngnihin).",
      "L'équipe scientifique a successivement exploré les sites de Kétou (l'ancienne cité royale yoruba du Plateau), d'Abomey (la capitale historique du royaume du Danxomè) et de Lokossa (la ville emblématique du patrimoine lié à l'iroko).",
      "La mission a effectué des visites in situ et rencontré les acteurs de terrain : services techniques des mairies, forestiers, gestionnaires de cours royales, détenteurs de savoirs endogènes, etc. Au-delà de leur dimension écologique, ces espèces constituent des marqueurs identitaires et culturels, étroitement liés aux pratiques sociales, rituelles, médicinales et alimentaires des populations locales.",
      "À travers cette initiative, le projet RESFORD ambitionne de contribuer à la réintroduction, la préservation et la valorisation de ces essences dans les paysages urbains, en s'appuyant sur les connaissances scientifiques et les savoirs endogènes.",
    ],
    galerie: [
      "/images/resford-mission-terrain-ketou.jpg",
      "/images/resford-mission-baobab.jpg",
      "/images/resford-entretien-communaute.jpg",
      "/images/resford-echanges-terrain.jpg",
      "/images/resford-visite-cour.jpg",
      "/images/resford-entretien-groupe.jpg",
      "/images/resford-equipe-mairie.jpg",
      "/images/resford-rencontre-acteurs.jpg",
      "/images/resford-espace-vert.jpg",
      "/images/resford-statue.jpg",
      "/images/resford-seance-banc.jpg",
      "/images/resford-arbre.jpg",
    ],
    signature: "Roch Houngnihin, Professeur titulaire d'anthropologie, Directeur du LAMA",
  },
  {
    slug: "uac-uliege-programme-resford",
    titre: "UAC–ULiège : l'anthropologie au cœur du programme RESFORD pour la restauration des paysages urbains au Sud-Bénin",
    date: "2026-10-01",
    dateAffichee: "Octobre 2026",
    categorie: "Recherche",
    resume:
      "Financé par l'ARES (Belgique), le programme RESFORD associe l'UAC et l'Université de Liège. Le LAMA y pilote la composante sciences sociales.",
    image: "/images/resford-uliege-etudiants.jpg",
    corps: [
      "En partenariat avec l'Université de Liège (ULiège), l'Université d'Abomey-Calavi (UAC) développe depuis 2025 un programme de recherche intitulé RESFORD (Restauration des paysages urbains à base des essences forestières anciennement domestiquées). Ce programme est financé par l'Académie de Recherche et d'Enseignement Supérieur (ARES) de Belgique, dans le cadre d'un Projet de Recherche pour le Développement (PRD). Consacré à la foresterie urbaine au Bénin, il vise notamment à réintroduire dans les villes des espèces d'arbres locales, à valoriser les savoirs traditionnels liés aux arbres et à développer des techniques adaptées de plantation et de gestion.",
      "Le programme RESFORD est coordonné par le Professeur Brice Sinsin (directeur du Laboratoire d'Écologie Appliquée de la Faculté des Sciences Agronomiques, promoteur Sud) et le Professeur Grégory Mahy (directeur de l'Unité Biodiversité et Paysage de la Faculté de Gembloux Agro-Bio Tech, promoteur Nord).",
      "La composante sciences sociales est pilotée, côté Sud, par le Professeur Roch Houngnihin (directeur du LAMA, FASHS-UAC) et, côté Nord, par la Professeure Véronique Servais (directrice du Laboratoire d'Anthropologie Sociale et Culturelle de la Faculté des Sciences Sociales, ULiège).",
      "Assistante de recherche au sein du LAMA, Syntyche Kounkoné bénéficie d'une bourse de thèse en co-diplomation UAC-ULiège. Son travail porte sur la « Trajectoire historique et dynamiques socioculturelles autour des essences forestières autochtones anciennement domestiquées dans les villes du Sud-Bénin ». Ces essences constituent un patrimoine bioculturel majeur, porteur d'identités et de pratiques rituelles, médicinales et alimentaires, aujourd'hui fragilisé par la pression foncière et l'urbanisation accélérée.",
      "Le travail est porté par quatre terrains contrastés du Sud-Bénin : Cotonou (la métropole littorale), Kétou (l'ancienne cité royale yoruba du Plateau), Abomey (la capitale historique du Danxomè) et Lokossa (la ville née sous l'iroko).",
      "Cette recherche articule sociologie urbaine et anthropologie de la nature pour reconstruire l'histoire sociale et culturelle des essences forestières autochtones, analyser les savoirs, croyances et valeurs symboliques qui leur sont attribués, examiner les pratiques de domestication et les modes de transmission intergénérationnelle des savoirs, et appréhender les facteurs urbains, sociaux, fonciers et institutionnels qui transforment leur répartition et leurs usages.",
      "À travers cette recherche, le LAMA ambitionne de faire de l'anthropologie un espace de dialogue entre mémoire, savoirs locaux et enjeux environnementaux, et de contribuer à une restauration des paysages urbains qui prenne pleinement en compte les sociétés qui les habitent.",
    ],
    galerie: ["/images/resford-uliege-etudiants.jpg", "/images/resford-uliege-campus.jpg"],
    signature: "Pr Roch Houngnihin, Directeur du LAMA",
  },
  {
    slug: "afya-moja-etudiants-naples",
    titre: "Cinq étudiants béninois en sociologie accueillis en séjour académique à l'Université de Naples Federico II",
    date: "2026-09-25",
    dateAffichee: "Septembre 2026",
    categorie: "Mobilité",
    resume:
      "Dans le cadre du programme AFYA MOJA, cinq étudiants du LAMA ont effectué un séjour au Département des Sciences Sociales de l'Université de Naples Federico II.",
    image: "/images/afya-moja-groupe-naples.jpg",
    corps: [
      "Dans le cadre du programme TNE 23-00079 – AFYA MOJA Mobility Program, intitulé « Health Technology: From Capacity Building to Capacity Strengthening », cinq étudiants en sociologie du Laboratoire d'Anthropologie Médicale Appliquée (LAMA) de l'Université d'Abomey-Calavi (UAC) ont effectué un séjour académique au Département des Sciences Sociales de l'Université de Naples Federico II, en Italie.",
      "Cette mobilité universitaire s'inscrit dans le cadre d'un partenariat scientifique visant à renforcer les échanges académiques, la formation et la collaboration internationale dans le domaine des sciences sociales et de la santé. Le séjour à Naples a été enrichi par des séminaires, des conférences, des cours, des ateliers théoriques et pratiques et des projets de réseautage.",
      "La composante « sciences sociales » du programme est pilotée, du côté sud, par Roch Houngnihin, professeur d'anthropologie et directeur du LAMA, et, du côté nord, par Alessia Maccaro, docteure en sciences philosophiques, spécialisée en bioéthique à l'Université de Naples Federico II.",
      "Au Bénin, ce partenariat s'inscrit plus largement dans une dynamique de coopération impliquant l'Université d'Abomey-Calavi (Faculté des Sciences Humaines et Sociales, Faculté des Sciences de la Santé, Faculté des Sciences Agronomiques, École Polytechnique d'Abomey-Calavi) et l'Université Nationale d'Agriculture.",
      "Les bénéficiaires de cette mobilité, inscrits aux niveaux master et doctorat de sociologie, sont : Gothier Dahèou, Clarisse Eni, Gaëlle Odou, Atsou Afanyizou et Esther Cadja-Dodo.",
      "À travers cette initiative, le programme entend soutenir les activités d'étude, de recherche et de formation, tout en favorisant le développement des compétences, le partage d'expériences et la mise en réseau des chercheurs et étudiants.",
    ],
    galerie: ["/images/afya-moja-groupe-naples.jpg", "/images/afya-moja-delegation.jpg", "/images/afya-moja-seminaire.jpg", "/images/afya-moja-campus.jpg"],
    signature: "Pr Roch Houngnihin, Directeur du LAMA",
  },
  {
    slug: "conference-inaugurale-parakou-medecine-traditionnelle-2026",
    titre: "Le Pr Roch Houngnihin donne la conférence inaugurale des journées d'études sur les savoirs médicaux endogènes à Parakou",
    date: "2026-04-21",
    dateAffichee: "21-22 avril 2026",
    categorie: "Événement",
    resume:
      "Le directeur du LAMA a ouvert les journées d'études « Savoirs médicaux et savoirs religieux endogènes » organisées au LASDEL de Parakou.",
    image: "/images/logo-lama-cercle.png",
    corps: [
      "Les 21 et 22 avril 2026, le LASDEL a accueilli à Parakou les journées d'études « Savoirs médicaux et savoirs religieux endogènes : trajectoires historiques et enjeux contemporains en Afrique. Pour une couverture de santé universelle ».",
      "Le Professeur Roch A. Houngnihin (LAMA, Université d'Abomey-Calavi), membre des comités scientifique et d'organisation, a prononcé la conférence inaugurale le 21 avril : « Pratiques thérapeutiques, savoirs locaux et mondes sociaux : une approche anthropologique de la médecine traditionnelle en Afrique ».",
    ],
    signature: "Source : programme officiel des journées (LASDEL, 2026)",
  },
  {
    slug: "atelier-metabolisme-urbain-2019",
    titre: "Le LAMA organise un atelier sur le « Métabolisme urbain » à l'UAC",
    date: "2019-04-05",
    dateAffichee: "5 au 19 avril 2019",
    categorie: "Événement",
    resume: "Atelier organisé par le LAMA à l'Université d'Abomey-Calavi du 5 au 19 avril 2019.",
    image: "/images/atelier-metabolisme-urbain-2019.jpg",
    corps: ["Le LAMA a organisé un atelier sur le « Métabolisme urbain » à l'Université d'Abomey-Calavi, du 5 au 19 avril 2019."],
  },
];

// Le LAMA et son directeur dans les médias (sources en ligne).
export const medias = [
  {
    date: "20 mars 2023",
    media: "Gavi – VaccinesWork",
    titre: "On a parlé vaccins avec... Professeur Roch A. Houngnihin, professeur d'anthropologie de la santé au Bénin",
    lien: "https://www.gavi.org/fr/vaccineswork/parle-vaccins-pr-roch-houngnihin-professeur-anthropologie-sante-benin",
  },
  {
    date: "18 mai 2022",
    media: "Fraternité (repris par Santé tropicale)",
    titre: "Professeur Roch Houngnihin, anthropologue médical, à propos de la covid-19",
    lien: "https://santetropicale.com/actus.asp?action=lire&id=32020",
  },
];
