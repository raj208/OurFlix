// ────────────────────────────────────────────────────────────────
//  💛  EDIT EVERYTHING HERE. This is the only file you need to touch.
//
//  HOW MEDIA WORKS:
//   1. Put your photos/videos in the  /public/media  folder.
//   2. Reference them below starting with "/media/...".
//      e.g. a file at  public/media/goa-sunset.jpg  →  src: "/media/goa-sunset.jpg"
//   3. Keep total size under ~100MB so Vercel stays happy.
//      Compress videos first (Handbrake / ffmpeg) and always give a `poster`.
//
//  ITEM TYPES:
//   { type: "image", src: "/media/x.jpg", caption: "your words" }
//   { type: "video", src: "/media/x.mp4", poster: "/media/x.jpg", caption: "your words" }
//
//  Captions are yours to fill — I left them blank on purpose.
// ────────────────────────────────────────────────────────────────

export const site = {
  // ── The "streaming service" identity ──
  title: "The Girl I Chose",          // "Our Story" — Season 1, kyunki abhi aur aana baaki hai
  seasonBadge: "SEASON 1",
  tagWord: "Every memory. Every laugh. Every adventure.",

  // ── Access ──
  pin: "1015",                     // ⚠️ CHANGE THIS. 4-digit code you'll tell Nandini.
  profileName: "Nandini",          // shows on the "Who's watching?" screen

  // ── Hero banner (your standout photo) ──
  hero: {
    src: "/media/hero.jpeg",        // put your best photo here
    kicker: "NOW STREAMING",
    title: "The Girl I Chose",         // ← put your name in
    // The tagline I wrote for you (edit freely). It plays on the famous
    // "picture abhi baaki hai mere dost" — "the movie isn't over yet."
    tagline: "The calm in my chaos.",
    match: "100% Match for you",
  },

  // ── Rows. Reorder / rename / add as you like. ──
  // Trip rows: swap {{TRIP NAME}} for the real place.
  rows: [
    {
      title: "Continue Watching — Us",
      big: true, // renders as taller "continue watching" cards
      items: [
        { type: "image", src: "/media/cw-1.jpeg", caption: "Caught between waves" },
        { type: "image", src: "/media/cw-2.jpeg", caption: "Birthday Bliss" },
        { type: "image", src: "/media/cw-3.jpeg", caption: "Forever Favorite" },
      ],
    },
    {
      title: "Top Picks for Nandini",
      items: [
        { type: "image", src: "/media/top-1.jpeg", caption: "Main Character Energy" },
        { type: "image", src: "/media/top-2.jpeg", caption: "Too Pretty to Skip" },
        { type: "image", src: "/media/top-3.jpeg", caption: "Certified Cutie" },
        { type: "image", src: "/media/top-4.jpeg", caption: "Critics' Favorite" },
      ],
    },
    {
      title: "Netarhat Diaries", // ← e.g. "Goa Diaries"
      items: [
        // { type: "video", src: "/media/trip1-clip.mp4", poster: "/media/trip1-poster.jpg", caption: "" },
        { type: "image", src: "/media/trip1-1.jpeg", caption: "Eyes Don't Lie" },
        { type: "image", src: "/media/trip1-2.jpeg", caption: "Favorite Signing." },
        { type: "image", src: "/media/trip1-3.jpeg", caption: "Just Breathtaking" },
        { type: "image", src: "/media/trip1-4.jpeg", caption: "Favorite No. 10" },
        { type: "image", src: "/media/trip1-5.jpeg", caption: "Roads to Remember" },
      ],
    },
    {
      title: "Beaches, but Wetter", // ← e.g. "Manali, but colder"
      items: [
        // { type: "video", src: "/media/trip2-clip.mp4", poster: "/media/trip2-poster.jpg", caption: "" },
        { type: "image", src: "/media/trip2-1.jpeg", caption: "Ocean's Favorite" },
        { type: "image", src: "/media/trip2-2.jpeg", caption: "Therapy" },
        { type: "image", src: "/media/trip2-5.jpeg", caption: "Tiny Treasures" },
        { type: "image", src: "/media/trip2-7.jpeg", caption: "My Favorite View" },

        { type: "image", src: "/media/trip2-4.jpeg", caption: "Shell Stories" },
        { type: "image", src: "/media/trip2-3.jpeg", caption: "Just Beautiful" },
        { type: "image", src: "/media/trip2-6.jpeg", caption: "Happiness, Captured" },
        
      ],
    },
    {
      title: "The Silly Ones 🤪",
      items: [
        { type: "image", src: "/media/silly-1.jpeg", caption: "Salute!" },
        { type: "image", src: "/media/silly-2.jpeg", caption: "Drizzles & Giggles" },
        { type: "image", src: "/media/silly-3.jpeg", caption: "Overacting Unlimited" },
        { type: "image", src: "/media/silly-4.jpeg", caption: "Stealing Hearts" },
        { type: "image", src: "/media/silly-5.jpeg", caption: "Aur kya dekhu ?" },
        { type: "image", src: "/media/silly-6.jpeg", caption: "Unfiltered" },
        { type: "image", src: "/media/silly-7.jpeg", caption: "Strongest Girl" },
      ],
    },
    {
      title: "Firsts",
      items: [
        { type: "image", src: "/media/first-1.jpeg", caption: "First Bloom" },
        { type: "image", src: "/media/first-2.jpeg", caption: "First Frame" },
        { type: "image", src: "/media/first-3.jpeg", caption: "Quiet Beginning" },
      ],
    },
    {
      title: "Just Us Being Us",
      items: [
        { type: "image", src: "/media/us-1.jpeg", caption: "Smile Check" },
        { type: "image", src: "/media/us-2.jpeg", caption: "Meanwhile... 😌" },
        { type: "image", src: "/media/us-3.jpeg", caption: "Someone Was Watching" },
        { type: "image", src: "/media/us-4.jpeg", caption: "Busy Laughing" },
        { type: "image", src: "/media/us-5.jpeg", caption: "Priorities" },
        { type: "image", src: "/media/us-6.jpeg", caption: "10/10 👍" },
      ],
    },
    {
      title: "Long Distance, Full Signal",
      items: [
        { type: "image", src: "/media/vc-1.jpeg", caption: "" },
        { type: "image", src: "/media/vc-2.jpeg", caption: "" },
        { type: "image", src: "/media/vc-3.jpeg", caption: "" },
        { type: "image", src: "/media/vc-4.jpeg", caption: "" },
        { type: "image", src: "/media/vc-5.jpeg", caption: "" },
        { type: "image", src: "/media/vc-6.jpeg", caption: "" },
        { type: "image", src: "/media/vc-7.jpeg", caption: "" },
        { type: "image", src: "/media/vc-8.jpeg", caption: "" },
        { type: "image", src: "/media/vc-9.jpeg", caption: "" },
        { type: "image", src: "/media/vc-10.jpeg", caption: "" },
      ],
    },


  ],

  // ── Footer love-note (handwritten style). Yours to edit. ──
  footerNote: "Created with love, laughter, and countless memories.",
};
