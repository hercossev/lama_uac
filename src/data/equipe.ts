// Source : « LAMA_Statistiques_de_recherche_2021_2023_vf.xlsx » (feuille composition)
// et « Assistants_LAMA (Prof Roch Houngnihin) ». Les numéros de téléphone personnels ne sont volontairement pas publiés.

export type Membre = { nom: string; grade: string; specialite: string; role: string; sexe: "F" | "M" };

export const membres: Membre[] = [
  { nom: "Roch Appolinaire HOUNGNIHIN", sexe: "M", grade: "Professeur titulaire", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Directeur scientifique" },
  { nom: "Codjo Adolphe KPATCHAVI", sexe: "M", grade: "Professeur titulaire", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Directeur scientifique honoraire" },
  { nom: "Marius KÊDOTÉ", sexe: "M", grade: "Maître de conférences agrégé", specialite: "Santé publique (IRSP / Ouidah)", role: "Directeur scientifique adjoint" },
  { nom: "Codjo Pierre MELIHO", sexe: "M", grade: "Maître de conférences", specialite: "Anthropologie et sociologie de la santé (UA / Kétou)", role: "Chargé de la formation" },
  { nom: "Vignon BÉDIÉ", sexe: "M", grade: "Maître-assistant", specialite: "Anthropologie et sociologie de la santé (IRSP / Ouidah)", role: "Chargé de la recherche" },
  { nom: "Flora Sylvie HOUNDJREBO", sexe: "F", grade: "Assistante", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Chargée des finances" },
  { nom: "Nassirou BAKO ARIFARI", sexe: "M", grade: "Professeur titulaire", specialite: "Anthropologie et sociologie politique (FASHS/UAC)", role: "Membre" },
  { nom: "Jacques AGUIA-DAHO", sexe: "M", grade: "Maître de conférences", specialite: "Anthropologie et sociologie de la santé (UA / Kétou)", role: "Membre" },
  { nom: "Séna Antoinette GBOKLI", sexe: "F", grade: "Assistante", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Membre" },
  { nom: "Gothier DAHÈOU", sexe: "M", grade: "Assistant", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Membre" },
  { nom: "Kouassiba Odette ALIHONOU", sexe: "F", grade: "Assistante", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Membre" },
  { nom: "Sèdami Lydie Edith DEFODJI", sexe: "F", grade: "Assistante", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Membre" },
  { nom: "Marcien Koffi Sègbèwan CADASSOU", sexe: "M", grade: "Assistant", specialite: "Anthropologie et sociologie de la santé (FASHS/UAC)", role: "Membre" },
];

export const direction = membres.slice(0, 6);

export type Assistant = { nom: string; cycle: "Docteur" | "Doctorant" };

export const assistants: Assistant[] = [
  { nom: "ADJOVI Pascaline", cycle: "Doctorant" },
  { nom: "AFANGNIZOUN Atsou", cycle: "Docteur" },
  { nom: "AGOSSOU Anani", cycle: "Doctorant" },
  { nom: "AIKPE Mariette", cycle: "Doctorant" },
  { nom: "AKAKPO Emmanuel", cycle: "Doctorant" },
  { nom: "ALAGBA Josiane", cycle: "Doctorant" },
  { nom: "ALIHONOU Odette", cycle: "Docteur" },
  { nom: "AMOUSSOU Eunice", cycle: "Docteur" },
  { nom: "ANAGO Emilienne", cycle: "Doctorant" },
  { nom: "ASSOGBA Marius", cycle: "Doctorant" },
  { nom: "AYALLE Achille", cycle: "Docteur" },
  { nom: "BADA Luc", cycle: "Docteur" },
  { nom: "BOKO Inès", cycle: "Doctorant" },
  { nom: "CADJA DODO Esther", cycle: "Doctorant" },
  { nom: "DAHEOU Gothier", cycle: "Docteur" },
  { nom: "DEFFODJI Edith", cycle: "Docteur" },
  { nom: "GBANOU Symphorien", cycle: "Doctorant" },
  { nom: "GBEBIOHO Bernice", cycle: "Docteur" },
  { nom: "GBEGAN Pascal", cycle: "Doctorant" },
  { nom: "GNAHOUI Élisabeth", cycle: "Doctorant" },
  { nom: "HOUNDJREBO Sylvie Flora", cycle: "Docteur" },
  { nom: "KPATINVOH Aubierge", cycle: "Doctorant" },
  { nom: "SIMBIA M'po Isidore", cycle: "Docteur" },
  { nom: "SOSSOU Judith", cycle: "Docteur" },
  { nom: "TOTTIN Ingrid", cycle: "Docteur" },
];

export const equipesRecherche = [
  {
    nom: "Anthropologie de la santé et de la maladie",
    description:
      "Représentations sociales de la santé et de la maladie, itinéraires thérapeutiques, relations entre professionnels de santé, patients et communautés.",
    exemples: ["Trisomie 21 à Cotonou", "Diabète et maladies chroniques", "Hésitation vaccinale"],
  },
  {
    nom: "Médecine traditionnelle et maladies prioritaires de santé publique",
    description:
      "Savoirs endogènes, pharmacopées africaines, recours aux médecines traditionnelles et complémentaires, et maladies prioritaires de santé publique.",
    exemples: ["Fièvre de Lassa et savoirs endogènes", "Uvaria chamae contre le diabète", "Envenimations dans le Couffo"],
  },
  {
    nom: "Déterminants sociaux et Promotion de la santé",
    description:
      "Facteurs sociaux, culturels et environnementaux qui influencent les comportements de santé, et stratégies de promotion et d'éducation sanitaire.",
    exemples: ["Hygiène menstruelle des adolescentes", "Politiques publiques des pesticides", "Maladies non transmissibles (EMPOWER)"],
  },
];
