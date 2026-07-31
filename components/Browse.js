"use client";

import { useState } from "react";
import { site } from "@/content";
import Poster from "./Poster";
import Row from "./Row";

export default function Browse() {
  const [liked, setLiked] = useState(false);

  const playFirst = () => {
    document.getElementById("memories")?.scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-ink pb-16 animate-floatUp">
      {/* ── Top logo bar ── */}
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-ink/90 to-transparent px-4 py-3">
        <span className="font-display text-xl tracking-wide text-red">{site.title}</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] tracking-[0.2em] text-cream">
          {site.seasonBadge}
        </span>
      </header>

      {/* ── Hero ── */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        <Poster
          src={site.hero.src}
          alt={site.hero.title}
          label="add your standout photo"
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />

        <div className="absolute inset-x-0 bottom-8 px-5">
          <p className="text-xs font-semibold tracking-[0.3em] text-rose">
            {site.hero.kicker}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-none text-cream sm:text-5xl">
            {site.hero.title}
          </h1>
          <p className="mt-3 max-w-md font-script text-2xl leading-tight text-cream/90">
            {site.hero.tagline}
          </p>
          <p className="mt-2 text-xs text-smoke">
            <span className="font-semibold text-green-500">{site.hero.match}</span>
            {"  ·  "}
            {site.tagWord}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={playFirst}
              className="flex items-center gap-2 rounded-md bg-cream px-6 py-2.5 font-semibold text-ink active:scale-95 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
            <button
              onClick={() => setLiked((v) => !v)}
              className="flex items-center gap-2 rounded-md bg-white/20 px-5 py-2.5 font-semibold text-cream backdrop-blur active:scale-95 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 transition ${liked ? "fill-rose" : "fill-cream"}`}
              >
                <path d="M12 21s-7.5-4.9-10-9.2C.4 8.9 1.6 5.5 4.7 5c2-.3 3.5.9 4.3 2 .8-1.1 2.3-2.3 4.3-2 3.1.5 4.3 3.9 2.7 6.8C19.5 16.1 12 21 12 21z" />
              </svg>
              {liked ? "In your list" : "My List"}
            </button>
          </div>
        </div>
      </section>

      {/* ── Rows ── */}
      <main id="memories" className="-mt-4">
        {site.rows.map((row, i) => (
          <Row key={i} row={row} />
        ))}
      </main>

      {/* ── Footer love-note ── */}
      <footer className="mt-14 px-6 text-center">
        <p className="font-script text-2xl text-rose">{site.footerNote}</p>
        <p className="mt-6 text-[10px] tracking-[0.2em] text-smoke/60">
          {site.title.toUpperCase()} · A LIMITED SERIES · NOT AFFILIATED WITH NETFLIX
        </p>
      </footer>
    </div>
  );
}
