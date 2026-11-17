import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-serif text-7xl font-semibold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page introuvable</h1>
      <p className="mt-2 text-muted-foreground">La page demandée n'existe pas ou a été déplacée.</p>
      <Button asChild className="mt-6"><Link to="/">Retour à l'accueil</Link></Button>
    </section>
  );
}
