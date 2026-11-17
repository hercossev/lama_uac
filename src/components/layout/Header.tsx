import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="hidden bg-lama-vert text-white/90 md:block">
        <div className="container flex h-8 items-center justify-between text-xs">
          <span>Université d'Abomey-Calavi · Faculté des Sciences Humaines et Sociales</span>
          <Link to="/contact" className="hover:text-white">Nous contacter</Link>
        </div>
      </div>
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Accueil LAMA">
          <img src="/images/logo-lama-horizontal.png" alt="Laboratoire d'Anthropologie Médicale Appliquée" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href} className="group relative">
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                    isActive(item.href) ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                </NavLink>
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-72 rounded-lg border bg-popover p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink
                            to={child.href}
                            className={({ isActive: active }) =>
                              cn("block rounded-md px-3 py-2 hover:bg-secondary", active && "bg-secondary")
                            }
                          >
                            <span className="block text-sm font-medium text-foreground">{child.label}</span>
                            {child.description && <span className="block text-xs text-muted-foreground">{child.description}</span>}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-background lg:hidden" aria-label="Navigation mobile">
          <ul className="container space-y-1 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <NavLink to={item.href} className={cn("flex-1 rounded-md px-3 py-3 font-medium", isActive(item.href) && "text-primary")}>
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button
                      type="button"
                      className="rounded-md p-3"
                      aria-label={`Afficher les sous-menus de ${item.label}`}
                      onClick={() => setExpanded((v) => (v === item.href ? null : item.href))}
                    >
                      <ChevronDown className={cn("h-4 w-4 transition-transform", expanded === item.href && "rotate-180")} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.href && (
                  <ul className="mb-2 ml-3 border-l pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink to={child.href} className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary">
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
