"use client";

import { site } from "@/content";

export default function Profiles({ onPick }) {
  const initial = site.profileName?.[0]?.toUpperCase() || "N";

  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-10 bg-ink px-8">
      <h2 className="font-display text-3xl text-cream animate-floatUp">Who&apos;s watching?</h2>

      <div className="flex items-start gap-10">
        {/* Nandini — the only real profile */}
        <button
          onClick={onPick}
          className="group flex flex-col items-center gap-3 animate-floatUp"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="h-24 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-rose to-red ring-0 ring-cream transition group-hover:ring-4 sm:h-28 sm:w-28 flex items-center justify-center">
            <span className="font-display text-4xl text-white">{initial}</span>
          </div>
          <span className="text-smoke transition group-hover:text-cream">{site.profileName}</span>
        </button>

        {/* Cheeky locked profile */}
        <div className="flex flex-col items-center gap-3 opacity-60 animate-floatUp" style={{ animationDelay: "0.2s" }}>
          <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white/10 sm:h-28 sm:w-28 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-10 w-10 fill-smoke">
              <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm3 8H9V6a3 3 0 016 0v3z" />
            </svg>
          </div>
          <span className="text-smoke">You (soon 😌)</span>
        </div>
      </div>
    </div>
  );
}
