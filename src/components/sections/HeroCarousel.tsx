"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/images/hero-1.webp";
import hero2 from "@/images/hero-2.webp";
import hero3 from "@/images/hero-3.webp";
import { cx } from "@/lib/cx";

const IMAGES = [
  { src: hero1, alt: "Cleaning team working" },
  { src: hero2, alt: "Professional cleaning" },
  { src: hero3, alt: "Job site ready" },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-panel bg-illus-sky aspect-560/520">
      {IMAGES.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          fill
          priority={index === 0}
          placeholder="blur"
          quality={85}
          sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
          className={cx(
            "object-cover transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
}

