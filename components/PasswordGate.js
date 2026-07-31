"use client";

import { useRef, useState } from "react";
import { site } from "@/content";

// NOTE: This is a friendly lock, not real security — the PIN lives in the
// client bundle. It's meant to keep a stray link-opener out, nothing more.
export default function PasswordGate({ onUnlock }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const inputs = useRef([]);

  const setAt = (i, val) => {
    const v = val.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = v;
    setDigits(next);
    setError(false);
    if (v && i < 3) inputs.current[i + 1]?.focus();
    if (next.every((d) => d !== "")) check(next.join(""));
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const check = (code) => {
    if (code === String(site.pin)) {
      onUnlock();
    } else {
      setError(true);
      setDigits(["", "", "", ""]);
      setTimeout(() => inputs.current[0]?.focus(), 0);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink px-8">
      <div className="text-center animate-floatUp">
        <span className="text-red font-display text-xl tracking-wide">{site.title}</span>
        <h2 className="mt-4 font-display text-2xl text-cream">Enter the code</h2>
        <p className="mt-2 text-sm text-smoke">The one only you and I know 💛</p>
      </div>

      <div className={`flex gap-3 ${error ? "animate-shake" : ""}`}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            value={d}
            onChange={(e) => setAt(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            inputMode="numeric"
            type="password"
            autoFocus={i === 0}
            aria-label={`PIN digit ${i + 1}`}
            className={`h-16 w-14 rounded-md border-2 bg-white/5 text-center font-display text-2xl text-cream outline-none transition
              ${error ? "border-red" : "border-white/20 focus:border-rose"}`}
          />
        ))}
      </div>

      {error && (
        <p className="text-sm text-red">Not quite. Try again 🙈</p>
      )}
    </div>
  );
}
