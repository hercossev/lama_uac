// Source : description du LAMA (kakémono) et objectifs du rapport 2022.
import type { LucideIcon } from "lucide-react";
import { Baby, Brain, Droplets, Leaf, Scale, ShieldPlus, Syringe, Users, Utensils, Activity, ClipboardCheck, Trees } from "lucide-react";

export type Thematique = { titre: string; description: string; icon: LucideIcon };

export const thematiques: Thematique[] = [
  { icon: Syringe, titre: "Vaccination et abandons vaccinaux", description: "Comprendre l'hésitation et les abandons vaccinaux, y compris en contexte pandémique." },
  { icon: Baby, titre: "Santé maternelle et reproductive", description: "Décès maternels, accès aux soins, grossesses non désirées et santé reproductive." },
  { icon: Users, titre: "Santé des adolescents et des jeunes", description: "Comportements de santé, hygiène menstruelle et vécus des jeunes." },
  { icon: Activity, titre: "Maladies infectieuses et chroniques", description: "Paludisme, COVID-19, fièvre de Lassa, ulcère de Buruli, diabète, drépanocytose, maladies non transmissibles." },
  { icon: Leaf, titre: "Savoirs endogènes et médecines traditionnelles", description: "Pharmacopées africaines, recours aux médecines traditionnelles et complémentaires, rôle des tradipraticiens." },
  { icon: Droplets, titre: "Santé environnementale, eau, hygiène et assainissement", description: "Pesticides, déchets biomédicaux, épidémies hydriques sensibles au climat, approche « Une seule santé »." },
  { icon: Utensils, titre: "Nutrition", description: "Dimensions sociales et culturelles de l'alimentation et de la nutrition." },
  { icon: Brain, titre: "Santé mentale", description: "Représentations, recours aux soins et prise en charge des troubles de santé mentale." },
  { icon: Scale, titre: "Inégalités sociales de santé", description: "Déterminants sociaux et culturels de la santé et équité des réponses sanitaires." },
  { icon: ClipboardCheck, titre: "Évaluation des programmes et politiques de santé", description: "Méthodes qualitatives d'évaluation, acceptabilité et enjeux éthiques des politiques de santé." },
  { icon: ShieldPlus, titre: "Appui aux systèmes et services de santé", description: "Expertise en sciences sociales pour les décideurs, les professionnels et les usagers des services de santé." },
  { icon: Trees, titre: "Patrimoine bioculturel et environnement", description: "Essences forestières, savoirs locaux et restauration des paysages urbains (programme RESFORD)." },
];
