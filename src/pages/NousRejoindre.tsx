import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, UserPlus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { ToComplete } from "@/components/layout/ToComplete";
import { Button } from "@/components/ui/button";
import { actualites } from "@/data/actualites";
import { siteInfo } from "@/data/site";

const profils = [
  { icon: GraduationCap, titre: "Doctorants", texte: "Les nouveaux doctorants sont automatiquement intégrés au laboratoire lorsque leur encadreur est un membre permanent du LAMA. Ils peuvent être accueillis comme membres temporaires des équipes de recherche." },
  { icon: UserPlus, titre: "Jeunes docteurs", texte: "Les jeunes docteurs ayant soutenu leur thèse peuvent demander leur rattachement au laboratoire." },
  { icon: Handshake, titre: "Chercheurs associés", texte: "Toute personnalité qualifiée en raison de son expertise ou de sa compétence scientifique peut demander à être membre associé du LAMA." },
  { icon: BriefcaseBusiness, titre: "Stagiaires", texte: "Étudiants et stagiaires en sociologie-anthropologie, en médecine et en santé publique peuvent se former à la recherche qualitative au sein du laboratoire." },
];

const etapes = [
  "Prendre contact avec la direction du laboratoire en présentant votre parcours et votre projet.",
  "Échanger avec un enseignant-chercheur du LAMA susceptible d'encadrer ou d'accompagner vos travaux.",
  "Validation du projet de cooptation par le Conseil du laboratoire, après approbation de l'organe scientifique de l'établissement d'attachement.",
];

export default function NousRejoindre() {
  const appels = actualites.filter((a) => a.categorie === "Appel");
  return (
    <>
      <PageHeader title="Nous rejoindre" crumbs={[{ label: "Nous rejoindre" }]} intro="Doctorants, jeunes docteurs, chercheurs, stagiaires ou prestataires : plusieurs façons de contribuer aux travaux du LAMA." image="/images/afya-moja-seminaire.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Offres et appels" title="Appels en cours" />
          {appels.length > 0 ? (
            <div className="space-y-4">
              {appels.map((a) => (
                <Link key={a.slug} to={`/actualites/${a.slug}`} className="group flex flex-col gap-4 rounded-lg border bg-card p-6 transition-shadow hover:shadow-md md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Publié le {a.dateAffichee}</p>
                    <h3 className="mt-1 text-lg font-semibold group-hover:text-primary">{a.titre}</h3>
                    {a.echeance && <p className="mt-2 text-sm font-medium text-[#8a4f22]">{a.echeance}</p>}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary">Voir l'appel <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Aucun appel en cours pour le moment.</p>
          )}
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container">
          <SectionTitle eyebrow="Devenir membre" title="Qui peut rejoindre le LAMA ?" />
          <div className="grid gap-5 md:grid-cols-2">
            {profils.map((p) => (
              <div key={p.titre} className="flex gap-4 rounded-lg border bg-card p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><p.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-sans text-base font-semibold">{p.titre}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{p.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Démarche" title="Comment candidater ?" />
            <ol className="space-y-4">
              {etapes.map((e, i) => (
                <li key={e} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">{i + 1}</span>
                  <span className="pt-1 text-foreground/85">{e}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/contact">Nous écrire</Link></Button>
              <Button asChild variant="outline"><a href={`mailto:${siteInfo.email}?subject=Candidature%20LAMA`}>{siteInfo.email}</a></Button>
            </div>
          </div>
          <div className="space-y-6">
            <img src="/images/resford-equipe-mairie.jpg" alt="Équipe du LAMA lors d'une mission de terrain" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <ToComplete>
              Préciser les pièces à fournir pour une demande de rattachement (CV, lettre, projet de recherche…) et l'éventuelle adresse
              dédiée aux candidatures.
            </ToComplete>
          </div>
        </div>
      </section>
    </>
  );
}
