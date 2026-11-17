import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Microscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { NewsCard } from "@/components/shared/NewsCard";
import { actualites } from "@/data/actualites";
import { projets } from "@/data/projets";
import { thematiques } from "@/data/thematiques";
import { partenaires } from "@/data/partenaires";
import { chiffres } from "@/data/travaux";
import { siteInfo } from "@/data/site";

const chiffresCles = [
  { valeur: "2014", label: "Année de création du laboratoire" },
  { valeur: String(chiffres.membresStatutaires), label: "Enseignants-chercheurs membres" },
  { valeur: String(chiffres.assistants), label: "Assistants de recherche (docteurs et doctorants)" },
  { valeur: `${projets.length}`, label: "Projets de recherche documentés" },
];

const piliers = [
  { icon: Microscope, titre: "Recherche", texte: "Produire des connaissances contextualisées sur les dimensions sociales et culturelles de la santé.", href: "/recherche" },
  { icon: GraduationCap, titre: "Formation", texte: "Former à la recherche qualitative en anthropologie et sociologie de la santé, de la licence au doctorat.", href: "/formation" },
  { icon: Users, titre: "Expertise", texte: "Mettre les sciences sociales au service des décideurs, des professionnels et des communautés.", href: "/laboratoire" },
];

export default function Accueil() {
  const projetsPhares = projets.filter((p) => ["empower", "resford", "afya-moja"].includes(p.slug));
  return (
    <>
      {/* Bandeau principal */}
      <section className="relative isolate overflow-hidden bg-lama-vert-fonce text-white">
        <img src="/images/resford-mission-terrain-ketou.jpg" alt="Équipe du LAMA en mission de terrain" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-lama-vert-fonce via-lama-vert-fonce/85 to-transparent" />
        <div className="container py-20 md:py-32">
          <p className="eyebrow text-[#E9A877]">Université d'Abomey-Calavi · Bénin</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Comprendre les sociétés pour mieux soigner
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Le {siteInfo.nom} (LAMA) étudie les dimensions sociales, culturelles, économiques, politiques et symboliques de la
            santé, de la maladie et des soins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent"><Link to="/recherche">Découvrir nos recherches <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="light"><Link to="/a-propos">Qui sommes-nous ?</Link></Button>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-b bg-card">
        <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {chiffresCles.map((c) => (
            <div key={c.label}>
              <p className="font-serif text-4xl font-semibold text-primary">{c.valeur}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Présentation */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Le laboratoire</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Les sciences sociales au service de la santé</h2>
            <div className="prose-lama mt-6">
              <p>
                Le LAMA mobilise les connaissances et méthodes des sciences sociales pour contribuer à la compréhension des
                problématiques sanitaires et à l'amélioration des interventions en santé.
              </p>
              <p>
                Il analyse les représentations de la santé et de la maladie, les itinéraires thérapeutiques, les pratiques de soins
                biomédicales et traditionnelles, et les relations entre professionnels de santé, patients et communautés. Une attention
                particulière est accordée aux savoirs endogènes et aux pharmacopées africaines.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-2"><Link to="/a-propos/mission">Notre mission <ArrowRight /></Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/resford-entretien-groupe.jpg" alt="Entretien collectif lors d'une mission de terrain" className="aspect-[3/4] w-full rounded-lg object-cover" />
            <img src="/images/afya-moja-groupe-naples.jpg" alt="Étudiants du LAMA à l'Université de Naples Federico II" className="mt-10 aspect-[3/4] w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="section bg-secondary/60">
        <div className="container">
          <SectionTitle eyebrow="Nos activités" title="Recherche, formation et expertise" />
          <div className="grid gap-6 md:grid-cols-3">
            {piliers.map((p) => (
              <Link key={p.titre} to={p.href} className="group rounded-lg border bg-card p-7 transition-shadow hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><p.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-semibold group-hover:text-primary">{p.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.texte}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thématiques */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle eyebrow="Thématiques stratégiques" title="Les grands enjeux de santé que nous étudions" />
            <Button asChild variant="link" className="mb-8 px-0"><Link to="/recherche/thematiques">Toutes les thématiques <ArrowRight /></Link></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {thematiques.slice(0, 8).map((t) => (
              <div key={t.titre} className="rounded-lg border bg-card p-5">
                <t.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-sans text-base font-semibold">{t.titre}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets phares */}
      <section className="section bg-lama-vert text-white">
        <div className="container">
          <p className="eyebrow text-[#E9A877]">Projets phares</p>
          <h2 className="mt-2 text-3xl font-semibold">Des recherches ancrées dans les terrains</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projetsPhares.map((p) => (
              <div key={p.slug} className="flex flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/15">
                <p className="text-xs uppercase tracking-wider text-white/60">{p.periode} · {p.statut}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{p.titre}</h3>
                <p className="mt-3 line-clamp-4 text-sm text-white/75">{p.objectif}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="light" className="mt-8"><Link to="/recherche/projets">Tous les projets <ArrowRight /></Link></Button>
        </div>
      </section>

      {/* Actualités */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle eyebrow="Actualités" title="La vie du laboratoire" />
            <Button asChild variant="link" className="mb-8 px-0"><Link to="/actualites">Toutes les actualités <ArrowRight /></Link></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {actualites.slice(0, 3).map((a) => <NewsCard key={a.slug} item={a} />)}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="border-y bg-card py-12">
        <div className="container">
          <p className="eyebrow mb-6 text-center">Ils travaillent avec nous</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-center text-sm font-medium text-foreground/70">
            {partenaires.map((p) => <li key={p.nom}>{p.nom}</li>)}
          </ul>
        </div>
      </section>

      {/* Appel */}
      <section className="section">
        <div className="container">
          <div className="grid items-center gap-8 rounded-2xl bg-secondary p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <BookOpen className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Rejoindre le LAMA</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Doctorants, jeunes docteurs, chercheurs associés ou partenaires : découvrez comment contribuer aux travaux du laboratoire.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/nous-rejoindre">Nous rejoindre</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
