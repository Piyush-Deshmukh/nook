"use client";

import { useState } from "react";
import Link from "next/link";
import IconArrowTopRight from "@/components/icon-arrow-top-right";
import { EXPERIENCE, PROJECTS } from "@/data/work";

type View = "experience" | "projects";

export default function WorkPage() {
  const [view, setView] = useState<View>("experience");

  return (
    <main className="flex flex-col gap-2 max-w-[600px] p-5 pt-7 lg:p-10 leading-relaxed text-base">
      <p>
        <Link
          href="/"
          className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
        >
          ← Back to home
        </Link>
      </p>
      <nav
        className="flex gap-4 mt-4 text-lg font-semibold"
        aria-label="Work sections"
      >
        <button
          onClick={() => setView("experience")}
          aria-pressed={view === "experience"}
          className={
            "py-0.5 rounded-sm cursor-pointer " +
            (view === "experience"
              ? "underline decoration-stone-500 underline-offset-[2.5px] font-semibold"
              : "text-stone-700 hover:underline")
          }
        >
          Experience
        </button>

        <button
          onClick={() => setView("projects")}
          aria-pressed={view === "projects"}
          className={
            "py-0.5 rounded-sm cursor-pointer " +
            (view === "projects"
              ? "underline decoration-stone-500 underline-offset-[2.5px] font-semibold"
              : "text-stone-700 hover:underline")
          }
        >
          Projects
        </button>
      </nav>

      <section className="mt-4 space-y-6">
        {view === "experience" &&
          EXPERIENCE.map((item) => (
            <article key={item.id} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <h3 className=" font-medium">
                  {item.role}{" "}
                  <span className="text-stone-500">— {item.company}</span>
                </h3>
                <span className="text-sm text-stone-500">{item.date}</span>
              </div>
              <div className="text-stone-600 text-sm leading-relaxed">
                {item.description}
              </div>
            </article>
          ))}

        {view === "projects" &&
          PROJECTS.map((p) => (
            <article key={p.id} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className=" font-medium">{p.title}</h3>
                <div className="flex gap-2.5">
                  {p.code && (
                    <Link
                      href={p.code}
                      target="_blank"
                      className="flex items-center gap-1 underline decoration-stone-500 underline-offset-[2.5px]"
                    >
                      code <IconArrowTopRight className="w-3 h-3" />
                    </Link>
                  )}
                  {p.demo && (
                    <Link
                      href={p.demo}
                      target="_blank"
                      className="flex items-center gap-1 underline decoration-stone-500 underline-offset-[2.5px]"
                    >
                      visit <IconArrowTopRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
              <p className=" text-stone-700">{p.description}</p>
              {p.stack && (
                <p className="text-sm text-stone-500">Stack: {p.stack}</p>
              )}
            </article>
          ))}
      </section>
    </main>
  );
}
