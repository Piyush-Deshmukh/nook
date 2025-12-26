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
        <div className="border-l border-stone-300 pl-3 flex flex-col gap-2">
          <p>
            most of what i know comes from building things outside of
            coursework.
          </p>

          <p>
            during college, i spent a lot of time interning across different
            teams, writing code, and pushing projects to production.
          </p>

          <p>
            some worked well. some didn’t. both taught me more than tutorials
            ever did.
          </p>
        </div>
      )}
    </>
  );
}
