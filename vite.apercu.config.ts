// Version « aperçu hors ligne » : un seul index.html à ouvrir par double-clic (pas utilisée par Lovable).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    viteSingleFile(),
    {
      name: "images-relatives",
      // Les chemins « /images/... » deviennent « images/... » pour fonctionner hors serveur.
      generateBundle(_, bundle) {
        for (const f of Object.values(bundle)) {
          if (f.type === "asset" && typeof f.source === "string") f.source = f.source.replace(/(["'(])\/images\//g, "$1images/");
          if (f.type === "chunk") f.code = f.code.replace(/(["'(])\/images\//g, "$1images/");
        }
      },
    },
  ],
  define: { "import.meta.env.VITE_HASH_ROUTER": JSON.stringify("true") },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "apercu-hors-ligne" },
});
