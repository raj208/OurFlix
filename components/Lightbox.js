"use client";

import { useEffect, useRef, useState } from "react";
import Poster from "./Poster";

export default function Lightbox({ items, start, onClose }) {
  const [i, setI] = useState(start);
  const touchX = useRef(null);

  const item = items[i];
  const prev = () => setI((n) => (n > 0 ? n - 1 : n));
  const next = () => setI((n) => (n < items.length - 1 ? n + 1 : n));

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

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-sm"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-xs text-smoke">
          {i + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
          </svg>
        </button>
      </div>

      {/* media */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-3">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full rounded-lg"
          />
        ) : (
          <Poster
            src={item.src}
            alt={item.caption || ""}
            label="add a photo"
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        )}

        {/* desktop tap zones / arrows */}
        {i > 0 && (
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream sm:flex"
          >
            ‹
          </button>
        )}
        {i < items.length - 1 && (
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream sm:flex"
          >
            ›
          </button>
        )}
      </div>

      {/* caption */}
      <div className="min-h-[4.5rem] px-6 py-4 text-center">
        {item.caption ? (
          <p className="font-script text-xl text-cream">{item.caption}</p>
        ) : (
          <p className="text-sm text-smoke">swipe → for more</p>
        )}
      </div>
    </div>
  );
}
