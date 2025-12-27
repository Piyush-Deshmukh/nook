"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Polaroids } from "@/data/polaroid";

const allPolaroids = Polaroids.map((polaroid, i) => ({
  src: polaroid.src,
  alt: polaroid.alt,
  rotation: (i % 5) * (i % 2 === 0 ? -1 : 1) * 3,
  offsetY: (i % 3) * 4,
}));

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function PolaroidStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [polaroids, setPolaroids] = useState<typeof allPolaroids | null>(null);
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(allPolaroids);
    const mobile = window.innerWidth < 768;

    setIsMobile(mobile);
    setPolaroids(mobile ? shuffled.slice(0, 4) : shuffled.slice(0, 11));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimatedIn(true));
    });

    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const spacing = isMobile ? 60 : 40;

  if (!polaroids) {
    return <div className="relative h-40 sm:h-[180px]" />;
  }

  return (
    <div className="relative h-40 sm:h-[180px]">
      {polaroids.map((polaroid, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={polaroid.alt}
            className="absolute cursor-pointer origin-center transition-all duration-300 ease-out"
            style={{
              left: index * spacing,
              top: 0,
              transform: `
                translateY(${isHovered ? -16 : polaroid.offsetY}px)
                rotate(${isHovered ? 0 : polaroid.rotation}deg)
                scale(${!animatedIn ? 0.5 : isHovered ? 1.15 : 1})
              `,
              zIndex: isHovered ? 10 : index,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative bg-white p-1.5 pb-4 border border-stone-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={polaroid.src}
                alt={polaroid.alt}
                width={100}
                height={120}
                quality={100}
                className="object-cover w-[100px] h-[120px]"
              />

              {isHovered && (
                <span
                  className="absolute left-1/2 -top-8 -translate-x-1/2 rounded bg-stone-800 px-1
                  py-0.5 text-[11px] text-white shadow-lg"
                >
                  {polaroid.alt}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
