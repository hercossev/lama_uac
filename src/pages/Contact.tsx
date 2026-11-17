import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteInfo } from "@/data/site";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", objet: "", message: "" });

  // Sans serveur, le formulaire ouvre la messagerie de l'internaute avec le message prérempli.
  // Dans Lovable, il peut être relié à Supabase ou à un service d'envoi de courriels.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.nom}\n${form.email}`;
    window.location.href = `mailto:${siteInfo.email}?subject=${encodeURIComponent(form.objet || "Contact depuis le site du LAMA")}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <PageHeader title="Contact" crumbs={[{ label: "Contact" }]} intro="Une question sur nos recherches, nos formations ou un partenariat ? Écrivez-nous." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">{siteInfo.nom}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{siteInfo.faculte} · {siteInfo.departement}</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" /><span>{siteInfo.adresse.map((l) => <span key={l} className="block">{l}</span>)}</span></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-accent" /><a href={siteInfo.telephoneHref} className="hover:text-primary">{siteInfo.telephone}</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-accent" /><a href={`mailto:${siteInfo.email}`} className="break-all hover:text-primary">{siteInfo.email}</a></li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <iframe
                title="Plan d'accès à l'Université d'Abomey-Calavi"
                src="https://www.google.com/maps?q=Universit%C3%A9%20d%27Abomey-Calavi&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-lg border bg-card p-6 md:p-8">
            <h2 className="text-xl font-semibold">Envoyer un message</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="nom">Nom et prénom</Label><Input id="nom" required value={form.nom} onChange={set("nom")} /></div>
              <div className="space-y-2"><Label htmlFor="email">Adresse électronique</Label><Input id="email" type="email" required value={form.email} onChange={set("email")} /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="objet">Objet</Label><Input id="objet" value={form.objet} onChange={set("objet")} /></div>
            <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" required rows={7} value={form.message} onChange={set("message")} /></div>
            <Button type="submit" size="lg"><Send /> Envoyer</Button>
            <p className="text-xs text-muted-foreground">Le bouton ouvre votre messagerie avec le message prérempli.</p>
          </form>
        </div>
      </section>
    </>
  );
}
