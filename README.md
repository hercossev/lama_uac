# Site web du LAMA – Laboratoire d'Anthropologie Médicale Appliquée (UAC)

Site vitrine du LAMA, construit avec **React + Vite + TypeScript + Tailwind CSS + shadcn/ui**, la même pile que Lovable.

## Lancer le site sur un ordinateur

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # version de production dans dist/
```

## Voir le site sans rien installer (aperçu hors ligne)

Ouvrir par double-clic le fichier `index.html` du dossier **`site-lama-apercu`** (et non celui de `site-lama`, qui est le code source).
Pour régénérer cet aperçu après des modifications : `npm run build:apercu` (résultat dans `apercu-hors-ligne/`).

## Mettre le site dans Lovable

1. Créer un dépôt GitHub vide (par exemple `site-lama`) et y envoyer ce dossier (sans `node_modules` ni `dist`).
2. Dans Lovable, connecter son compte GitHub et ouvrir/importer ce dépôt comme projet.
3. Lovable installe les dépendances et affiche l'aperçu. On peut ensuite modifier le site par conversation, puis cliquer sur **Publish** et relier un nom de domaine (par exemple `lama-uac.bj`).

## Où modifier le contenu

Tout le contenu est regroupé dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `site.ts` | Menus, coordonnées, arrêté de création, vision |
| `equipe.ts` | Enseignants-chercheurs, direction, assistants, 3 équipes de recherche |
| `publications.ts` | Articles et communications |
| `projets.ts` | Projets de recherche |
| `actualites.ts` | Articles d'actualité (texte complet + galerie) |
| `partenaires.ts` | Partenaires |
| `travaux.ts` | Thèses, mémoires, chiffres clés |
| `thematiques.ts` | Thématiques stratégiques |

Les photos et logos sont dans `public/images/`.

## Arborescence

- À propos : Notre mission, Nos valeurs, Notre histoire, Notre direction, Nos départements, Nos partenaires
- Recherche : Publications, Projets, Équipe, Ressources et données, Thématiques stratégiques
- Formation : Catalogue des formations, Programmes de bourse
- Laboratoire, Actualités (+ page par article), Nous rejoindre, Contact

## Contenus à compléter

La liste des informations à fournir par le LAMA est dans le document séparé `LAMA_Site_Informations_a_fournir.pdf`. Le site ne contient plus aucun encadré « à compléter ».

## Choix éditoriaux

- Les numéros de téléphone personnels des assistants ne sont pas publiés.
- Les budgets des projets et le numéro IFU ne sont pas affichés.
- Le règlement intérieur (projet) n'est pas mis en téléchargement.
- Le formulaire de contact ouvre la messagerie de l'internaute ; il peut être relié à Supabase dans Lovable pour un envoi direct.

## Sources en ligne utilisées (recherche du 17 novembre 2026)

- Gavi VaccinesWork, entretien avec le Pr Houngnihin (20 mars 2023) : https://www.gavi.org/fr/vaccineswork/parle-vaccins-pr-roch-houngnihin-professeur-anthropologie-sante-benin
- Fraternité / Santé tropicale, entretien COVID-19 (18 mai 2022) : https://santetropicale.com/actus.asp?action=lire&id=32020
- CORDIS (Commission européenne), projet EMPOWER n° 101226675 : https://cordis.europa.eu/project/id/101226675
- GACD, projet EMPOWER (MC08) : https://www.gacd.org/research/projects/mc08
- Ministère italien de l'Université (MUR), fiche projet Afya Moja TNE23-00079 : https://www.mur.gov.it/sites/default/files/2024-10/Scheda%20progetto%20TNE23-00079.pdf
- Programme des journées d'études du LASDEL, Parakou (avril 2026) : https://lasdel.net/docs/2026/04/Programme_Journees_Med_Trad_Parakou.pdf
- Réseau Anthropologie des Épidémies Émergentes (CRCF) : https://crcf.sn/reseau-anthropologie-des-epidemies-emergentes/
- Dialogues in Health (2026), DOI 10.1016/j.dialog.2026.100350 : https://pmc.ncbi.nlm.nih.gov/articles/PMC13659760
- BMJ Global Health (2025), DOI 10.1136/bmjgh-2024-017035 : https://pmc.ncbi.nlm.nih.gov/articles/PMC12382493/

Points à vérifier : dans l'article BMJ Global Health 2025, le Pr Houngnihin est présenté comme « consultant, Cotonou » et non au titre du LAMA.
Aucune source en ligne trouvée pour : texte des valeurs, histoire 2014-2019, courriel officiel du laboratoire, catalogue des formations.

## Crédits

Site réalisé par ODHE Groupe Sarl (https://odhe.net).
