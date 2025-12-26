'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Tooltip } from '@base-ui/react/tooltip';
import placeholderImg from "@/public/placeholder.svg"

const allPolaroids: {
  src: StaticImageData;
  alt: string;
  rotation: number;
  offsetY: number;
}[] = Array.from({ length: 11 }).map((_, i) => ({
  src: placeholderImg,
  alt: `polaroid-${i}`,
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
  const [hoveredPolaroid, setHoveredPolaroid] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [polaroids, setPolaroids] = useState<typeof allPolaroids | null>(null);
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(allPolaroids);
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setPolaroids(mobile ? shuffled.slice(0, 4) : shuffled.slice(0, 11));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimatedIn(true);
      });
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const spacing = isMobile ? 60 : 40;

  if (!polaroids) {
    return <div className="relative h-40 sm:h-[180px]" />;
  }

  return (
    <Tooltip.Provider delay={0}>
      <div className="relative h-40 sm:h-[180px]">
        {polaroids.map((polaroid, index) => (
          <Tooltip.Root key={polaroid.alt}>
            <Tooltip.Trigger
              className="absolute cursor-pointer transition-all duration-300 ease-out origin-center"
              style={{
                left: index * spacing,
                top: 0,
                transform: `translateY(${
                  hoveredPolaroid === index ? -16 : polaroid.offsetY
                }px) rotate(${
                  hoveredPolaroid === index ? 0 : polaroid.rotation
                }deg) scale(${!animatedIn ? 0.5 : hoveredPolaroid === index ? 1.15 : 1})`,
                zIndex: hoveredPolaroid === index ? 10 : index,
              }}
              onMouseEnter={() => setHoveredPolaroid(index)}
              onMouseLeave={() => setHoveredPolaroid(null)}
            >
              <div className="bg-white p-1.5 pb-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <Image
                  src={polaroid.src}
                  alt={polaroid.alt}
                  width={100}
                  height={120}
                  className="object-cover w-[100px] h-[120px]"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner sideOffset={8}>
                <Tooltip.Popup className="bg-stone-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                  {polaroid.alt}
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  );
}





