"use client";

import { useState } from "react";
import { site } from "@/content";

// Synthesizes a short two-note "tudum" with the Web Audio API.
// (We generate it live rather than shipping Netflix's copyrighted sound.)
function playTudum() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;

    const note = (freq, start, dur, gainPeak) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      // sub-octave for the deep "dum" thump
      const sub = ctx.createOscillator();
      sub.type = "sine";
      sub.frequency.value = freq / 2;
      const subGain = ctx.createGain();
      subGain.gain.value = gainPeak * 0.6;

      gain.gain.setValueAtTime(0.0001, now + start);
      gain.gain.exponentialRampToValueAtTime(gainPeak, now + start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);

      osc.connect(gain).connect(ctx.destination);
      sub.connect(subGain).connect(gain);
      osc.start(now + start);
      sub.start(now + start);
      osc.stop(now + start + dur + 0.05);
      sub.stop(now + start + dur + 0.05);
    };

    // "ta-DUM": a quick low note then a slightly higher, louder one.
    note(196, 0.0, 0.18, 0.35); // G3
    note(261.63, 0.16, 0.5, 0.5); // C4
  } catch (e) {
    /* audio is a nice-to-have; never block the flow */
  }
}

export default function Tudum({ onDone }) {
  const [phase, setPhase] = useState("start"); // start → playing

  const begin = () => {
    if (phase !== "start") return;
    playTudum(); // must run inside the tap handler to satisfy mobile autoplay rules
    setPhase("playing");
    setTimeout(onDone, 2100);
  };

  return (
    <div
      onClick={begin}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink cursor-pointer overflow-hidden"
    >
      {phase === "start" ? (
        <div className="flex flex-col items-center gap-6 animate-floatUp text-center px-8">
          <div className="relative flex h-24 w-24 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red/30 animate-ping" />
            <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-red shadow-[0_0_40px_rgba(229,9,20,0.6)]">
              <svg viewBox="0 0 24 24" className="h-10 w-10 translate-x-0.5 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          <div>
            <p className="font-script text-2xl text-rose">Nandini,</p>
            <p className="mt-1 font-display text-2xl tracking-wide text-cream">
              PRESS PLAY ON US
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-smoke">
              tap anywhere · sound on 🔊
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* building red bars */}
          <div className="flex h-40 items-end gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="tudum-bar block w-3 rounded-sm bg-red"
                style={{ height: `${60 + i * 18}px`, animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
          <div className="tudum-flash pointer-events-none absolute inset-0 bg-white" />
          <h1 className="tudum-title absolute font-display text-4xl text-red drop-shadow-[0_2px_18px_rgba(229,9,20,0.5)] sm:text-6xl">
            {site.title.toUpperCase()}
          </h1>
        </>
      )}
    </div>
  );
}
