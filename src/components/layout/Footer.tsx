import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, siteInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-lama-vert-fonce text-white/80">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src="/images/logo-lama-horizontal-blanc.png" alt="LAMA" className="h-12 w-auto" />
          <p className="mt-4 text-sm leading-relaxed">
            Unité de recherche et de formation de l'Université d'Abomey-Calavi dédiée aux dimensions sociales, culturelles et
            environnementales de la santé et de la maladie.
          </p>
        </div>
        {navigation
          .filter((n) => n.children)
          .slice(0, 2)
          .map((section) => (
            <div key={section.href}>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">{section.label}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.children!.map((c) => (
                  <li key={c.href}>
                    <Link to={c.href} className="hover:text-white">{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{siteInfo.adresse.join(", ")}</span></li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href={siteInfo.telephoneHref} className="hover:text-white">{siteInfo.telephone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><a href={`mailto:${siteInfo.email}`} className="break-all hover:text-white">{siteInfo.email}</a></li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {["/formation", "/laboratoire", "/actualites", "/nous-rejoindre"].map((href) => {
              const item = navigation.find((n) => n.href === href)!;
              return (
                <li key={href}><Link to={href} className="hover:text-white">{item.label}</Link></li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteInfo.sigle} · {siteInfo.nom} · {siteInfo.universite}</p>
          <p>Créé par {siteInfo.arrete.replace("Arrêté", "arrêté")}</p>
          <p>
            Powered by{" "}
            <a href="https://odhe.net" target="_blank" rel="noopener" className="font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
              ODHE Groupe Sarl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
