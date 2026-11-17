import { Link, useParams } from "react-router-dom";
import { AlarmClock, ArrowLeft, CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Gallery } from "@/components/layout/Gallery";
import { NewsCard } from "@/components/shared/NewsCard";
import { Badge } from "@/components/ui/badge";
import { actualites } from "@/data/actualites";
import NotFound from "./NotFound";

export default function ActualiteDetail() {
  const { slug } = useParams();
  const item = actualites.find((a) => a.slug === slug);
  if (!item) return <NotFound />;
  const autres = actualites.filter((a) => a.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHeader title={item.titre} crumbs={[{ label: "Actualités", href: "/actualites" }, { label: item.categorie }]} image={item.image} />
      <article className="container max-w-3xl py-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="accent">{item.categorie}</Badge>
          <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />{item.dateAffichee}</span>
        </div>
        {item.echeance && (
          <p className="mb-8 flex items-center gap-2 rounded-lg bg-accent/10 p-4 font-medium text-[#8a4f22]">
            <AlarmClock className="h-5 w-5" /> {item.echeance}
          </p>
        )}
        <div className="prose-lama text-lg">
          {item.corps.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {item.signature && <p className="mt-8 border-l-4 border-primary pl-4 text-sm italic text-muted-foreground">{item.signature}</p>}
        {item.galerie && item.galerie.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-semibold">Galerie</h2>
            <Gallery images={item.galerie} alt={item.titre} />
          </div>
        )}
        <Link to="/actualites" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Toutes les actualités
        </Link>
      </article>
      <section className="border-t bg-secondary/50 py-14">
        <div className="container">
          <h2 className="mb-6 text-2xl font-semibold">À lire aussi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {autres.map((a) => <NewsCard key={a.slug} item={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
