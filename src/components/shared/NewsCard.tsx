import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import type { Actualite } from "@/data/actualites";
import { Badge } from "@/components/ui/badge";

export function NewsCard({ item }: { item: Actualite }) {
  return (
    <Link to={`/actualites/${item.slug}`} className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="accent">{item.categorie}</Badge>
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{item.dateAffichee}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">{item.titre}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{item.resume}</p>
      </div>
    </Link>
  );
}
