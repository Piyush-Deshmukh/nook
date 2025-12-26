"use client";

import { useState } from "react";
import clsx from "clsx";

export default function StickmanPullWord({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={clsx(
          "absolute inset-0 origin-top-right",
          "transition-transform duration-500 ease-out",
          hovered && "-rotate-10 -translate-x-2 translate-y-1 animate-pendulum"
        )}
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <span
          className={clsx(
            "block shimmer font-medium",
            hovered && "shimmer-paused"
          )}
        >
          {text}
        </span>
      </span>

      <span
        className="absolute inset-0"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      >
        <span
          className={clsx(
            "block shimmer font-medium",
            hovered && "shimmer-paused"
          )}
        >
          {text}
        </span>
      </span>

      <span className="opacity-0 shimmer">{text}</span>

      <span
        className={clsx(
          "absolute right-[calc(50%-11px)] bottom-[1.6em] h-[1.3px] bg-gray-800",
          "origin-right transition-all duration-500 -rotate-45",
          hovered ? "w-10 opacity-100" : "w-0 opacity-0"
        )}
      />

      {hovered && (
        <span className="absolute left-[calc(50%+10px)] bottom-[0.9em]">
          <Stickman />
        </span>
      )}
    </span>
  );
}

function Stickman() {
  return (
    <svg width="18" height="26" viewBox="0 0 18 26" className="animate-pull">
      <circle cx="9" cy="4" r="3" stroke="currentColor" fill="none" />
      <line x1="9" y1="7" x2="9" y2="16" stroke="currentColor" />
      <line x1="9" y1="16" x2="5" y2="24" stroke="currentColor" />
      <line x1="9" y1="16" x2="13" y2="24" stroke="currentColor" />
      <line x1="9" y1="10" x2="1" y2="12" stroke="currentColor" />
      <line x1="9" y1="10" x2="15" y2="12" stroke="currentColor" />
    </svg>
  );
}
