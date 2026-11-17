import { Building2, FlaskConical, HandCoins } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { ToComplete } from "@/components/layout/ToComplete";
import { partenaires } from "@/data/partenaires";

const icones = { Académique: Building2, Recherche: FlaskConical, Financement: HandCoins } as const;

export default function Partenaires() {
  return (
    <>
      <PageHeader title="Nos partenaires" crumbs={[{ label: "À propos", href: "/a-propos" }, { label: "Nos partenaires" }]} intro="Universités, instituts de recherche et bailleurs qui accompagnent les travaux du LAMA au Bénin et à l'international." />
      <SectionLayout section="/a-propos">
        <div className="grid gap-4 sm:grid-cols-2">
          {partenaires.map((p) => {
            const Icon = icones[p.type];
            return (
              <div key={p.nom} className="flex gap-4 rounded-lg border bg-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                <div>
                  <h2 className="font-sans text-base font-semibold">{p.nom}</h2>
                  <p className="text-xs text-muted-foreground">{p.pays} · {p.type}</p>
                  <p className="mt-2 text-sm text-foreground/80">{p.lien}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <ToComplete>
            Ajouter les logos officiels des partenaires en haute définition (ceux du dossier sont trop petits pour le web) et confirmer
            les partenariats en cours. Le Pr Houngnihin siège au comité d'éthique de l'Institut Pasteur (Paris) : préciser si les photos prises à
            l'Institut Pasteur relèvent de ce rôle ou d'un partenariat du laboratoire.
          </ToComplete>
        </div>
      </SectionLayout>
    </>
  );
}
