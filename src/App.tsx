import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Accueil from "@/pages/Accueil";
import SectionIndex from "@/pages/SectionIndex";
import Mission from "@/pages/a-propos/Mission";
import Valeurs from "@/pages/a-propos/Valeurs";
import Histoire from "@/pages/a-propos/Histoire";
import Direction from "@/pages/a-propos/Direction";
import Departements from "@/pages/a-propos/Departements";
import Partenaires from "@/pages/a-propos/Partenaires";
import Publications from "@/pages/recherche/Publications";
import Projets from "@/pages/recherche/Projets";
import Equipe from "@/pages/recherche/Equipe";
import Ressources from "@/pages/recherche/Ressources";
import Thematiques from "@/pages/recherche/Thematiques";
import Catalogue from "@/pages/formation/Catalogue";
import Bourses from "@/pages/formation/Bourses";
import Laboratoire from "@/pages/Laboratoire";
import Actualites from "@/pages/Actualites";
import ActualiteDetail from "@/pages/ActualiteDetail";
import NousRejoindre from "@/pages/NousRejoindre";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// La version « aperçu hors ligne » (npm run build:apercu) utilise HashRouter pour fonctionner par double-clic.
const Router = import.meta.env.VITE_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />

          <Route path="a-propos" element={<SectionIndex section="/a-propos" intro="Découvrez la mission, l'histoire, l'organisation et les partenaires du Laboratoire d'Anthropologie Médicale Appliquée." image="/images/uac-entree.jpg" />} />
          <Route path="a-propos/mission" element={<Mission />} />
          <Route path="a-propos/valeurs" element={<Valeurs />} />
          <Route path="a-propos/histoire" element={<Histoire />} />
          <Route path="a-propos/direction" element={<Direction />} />
          <Route path="a-propos/departements" element={<Departements />} />
          <Route path="a-propos/partenaires" element={<Partenaires />} />

          <Route path="recherche" element={<SectionIndex section="/recherche" intro="Publications, projets, équipe, données et thématiques : les travaux de recherche du LAMA." image="/images/resford-entretien-communaute.jpg" />} />
          <Route path="recherche/publications" element={<Publications />} />
          <Route path="recherche/projets" element={<Projets />} />
          <Route path="recherche/equipe" element={<Equipe />} />
          <Route path="recherche/ressources-donnees" element={<Ressources />} />
          <Route path="recherche/thematiques" element={<Thematiques />} />

          <Route path="formation" element={<SectionIndex section="/formation" intro="Formations et programmes de bourse en anthropologie et sociologie de la santé." image="/images/master-conference-inaugurale.jpg" />} />
          <Route path="formation/catalogue" element={<Catalogue />} />
          <Route path="formation/bourses" element={<Bourses />} />

          <Route path="laboratoire" element={<Laboratoire />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="actualites/:slug" element={<ActualiteDetail />} />
          <Route path="nous-rejoindre" element={<NousRejoindre />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
