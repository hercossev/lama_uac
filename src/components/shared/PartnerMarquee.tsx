import { partenaires, type Partenaire } from "@/data/partenaires";

function Logo({ p, copie = false }: { p: Partenaire; copie?: boolean }) {
  return (
    <li aria-hidden={copie || undefined} className={`flex h-24 w-48 shrink-0 items-center justify-center rounded-lg border bg-white px-4 ${copie ? "motion-reduce:hidden" : ""}`} title={p.nom}>
      {p.logo ? (
        <img src={p.logo} alt={p.nom} loading="lazy" className="max-h-16 max-w-full object-contain" />
      ) : (
        <span className="text-center">
          <span className="block font-serif text-lg font-semibold leading-tight text-primary">{p.sigle ?? p.nom}</span>
          <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground">{p.pays}</span>
        </span>
      )}
    </li>
  );
}

/** Bande de logos défilant en continu ; pause au survol ou au toucher, statique si l'utilisateur limite les animations. */
export function PartnerMarquee() {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <ul className="flex w-max gap-5 animate-[defilement_70s_linear_infinite] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
        {partenaires.map((p) => <Logo key={p.nom} p={p} />)}
        {partenaires.map((p) => <Logo key={`copie-${p.nom}`} p={p} copie />)}
      </ul>
    </div>
  );
}
