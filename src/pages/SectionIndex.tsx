import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { navigation } from "@/data/site";

/** Page d'accueil d'une rubrique (À propos, Recherche, Formation) : liste ses sous-pages. */
export default function SectionIndex({ section, intro, image }: { section: string; intro: string; image?: string }) {
  const parent = navigation.find((n) => n.href === section)!;
  return (
    <>
      <PageHeader title={parent.label} intro={intro} crumbs={[{ label: parent.label }]} image={image} />
      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parent.children!.map((c) => (
            <Link key={c.href} to={c.href} className="group flex flex-col justify-between rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
              <div>
                <h2 className="text-xl font-semibold group-hover:text-primary">{c.label}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Découvrir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
