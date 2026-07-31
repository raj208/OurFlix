"use client";

import Card from "./Card";

export default function Row({ row }) {
  return (
    <section className="content-row mt-6">
      <h3 className="mb-2 px-4 font-body text-base font-semibold text-cream sm:text-lg">
        {row.title}
      </h3>
      <div className="no-scrollbar snap-x-row flex gap-2.5 overflow-x-auto px-4 pb-1">
        {row.items.map((item, i) => (
          <Card key={i} item={item} big={row.big} />
        ))}
      </div>
    </section>
  );
}
