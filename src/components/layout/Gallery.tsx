import { useState } from "react";
import { X } from "lucide-react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((src, i) => (
          <button key={src} type="button" onClick={() => setCurrent(src)} className="group overflow-hidden rounded-lg">
            <img src={src} alt={`${alt} – photo ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {current && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4" onClick={() => setCurrent(null)}>
          <button type="button" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white" aria-label="Fermer">
            <X className="h-6 w-6" />
          </button>
          <img src={current} alt={alt} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </>
  );
}
