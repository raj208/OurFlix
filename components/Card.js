"use client";

import Poster from "./Poster";

export default function Card({ item, big, onOpen }) {
  const isVideo = item.type === "video";
  const thumb = isVideo ? item.poster : item.src;

  const size = big
    ? "h-40 w-64 sm:h-44 sm:w-72"
    : "h-40 w-28 sm:h-52 sm:w-36";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative shrink-0 overflow-hidden rounded-md bg-white/5 ${size} focus:outline-none focus:ring-2 focus:ring-rose`}
    >
      <Poster
        src={thumb}
        alt={item.caption || ""}
        label="add media"
        sizes={big ? "(min-width: 640px) 18rem, 16rem" : "(min-width: 640px) 9rem, 7rem"}
        className="h-full w-full object-cover sm:transition sm:duration-300 sm:group-hover:scale-105"
      />

      {/* darken from bottom so captions/badges read */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {isVideo && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm ring-1 ring-white/40">
          <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}

      {item.caption ? (
        <span className="pointer-events-none absolute bottom-1.5 left-2 right-2 truncate text-left text-xs text-cream/90">
          {item.caption}
        </span>
      ) : null}
    </button>
  );
}
