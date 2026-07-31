"use client";

import { useEffect, useState } from "react";

export default function Lightbox({ items, start, onClose }) {
  const [i, setI] = useState(start);
  const item = items[i];

  const prev = () => setI((n) => Math.max(0, n - 1));
  const next = () => setI((n) => Math.min(items.length - 1, n + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] h-screen h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center p-2">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="block max-h-screen max-h-[100svh] max-w-[100vw] object-contain"
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.caption || ""}
            loading="eager"
            draggable={false}
            className="block max-h-screen max-h-[100svh] max-w-[100vw] object-contain"
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-4 pb-8 pt-[calc(0.75rem+env(safe-area-inset-top))]">
        <span className="text-xs text-smoke">
          {i + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-cream"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
          </svg>
        </button>
      </div>

      {i > 0 && (
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream sm:flex"
        >
          {"<"}
        </button>
      )}

      {i < items.length - 1 && (
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream sm:flex"
        >
          {">"}
        </button>
      )}

      {item.caption ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-10 text-center">
          <p className="font-script text-xl text-cream">{item.caption}</p>
        </div>
      ) : null}
    </div>
  );
}
