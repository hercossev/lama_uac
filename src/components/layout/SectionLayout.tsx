import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

/** Mise en page d'une sous-page : contenu + menu latéral des pages sœurs. */
export function SectionLayout({ section, children }: { section: string; children: ReactNode }) {
  const parent = navigation.find((n) => n.href === section);
  return (
    <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_260px]">
      <div className="min-w-0">{children}</div>
      {parent?.children && (
        <aside className="order-first min-w-0 lg:order-last">
          <div className="rounded-lg border bg-card p-4 lg:sticky lg:top-32">
            <p className="eyebrow mb-3 px-2">{parent.label}</p>
            <ul className="flex gap-1 overflow-x-auto lg:flex-col">
              {parent.children.map((c) => (
                <li key={c.href} className="shrink-0">
                  <NavLink
                    to={c.href}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary",
                        isActive ? "bg-primary text-primary-foreground hover:bg-primary" : "text-foreground/80",
                      )
                    }
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}
