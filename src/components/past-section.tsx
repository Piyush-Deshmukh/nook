"use client";

import { useState } from "react";

export default function PastSection() {
  const [isPastOpen, setIsPastOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPastOpen(!isPastOpen)}
        className="font-semibold text-left cursor-pointer transition-opacity bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded-sm"
      >
        past {isPastOpen ? "▾" : "▸"}
      </button>
      {isPastOpen && (
        <div className="border-l border-stone-200 pl-3 flex flex-col gap-2">
          <p>
            Brief background: education, early projects, and formative
            experiences that shaped the way I approach engineering and product.
          </p>

          <p>
            I’ve worked on small and large systems — building, shipping, and
            sometimes winding down projects. These experiences inform the
            practical approach I take to new work.
          </p>

          <p>
            For details and links to past projects, add entries to the
            `past-section` component or link repositories from the homepage.
          </p>
        </div>
      )}
    </>
  );
}
