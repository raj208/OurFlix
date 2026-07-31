"use client";

import Image from "next/image";
import { useState } from "react";

// Renders an <img>. If the file isn't there yet (or fails to load),
// it degrades to a soft gradient block instead of a broken-image icon —
// so the site looks intentional even before you've dropped media in.
export default function Poster({
  src,
  alt = "",
  className = "",
  label,
  priority = false,
  sizes = "160px",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#2a1220] via-[#1a0d14] to-[#0b0b0f] ${className}`}
      >
        <span className="font-script text-rose/70 text-lg px-3 text-center leading-tight">
          {label || "add a photo"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={priority ? 85 : 60}
      draggable={false}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
