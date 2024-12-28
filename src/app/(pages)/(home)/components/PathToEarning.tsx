"use client";
import { useState, useEffect, useRef } from "react";

const PathToEarning = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container) {
        const containerBounds = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (
          containerBounds.top <= windowHeight &&
          containerBounds.bottom >= 0
        ) {
          const containerHeight = containerBounds.height;

          const progress = Math.min(
            ((windowHeight - containerBounds.top) / containerHeight) * 100,
            100
          );

          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleRadius = 60; // Radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // Circumference

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-gray-100">
      <div className="sticky top-[50vh] left-1/2 transform -translate-x-1/2 w-40 h-40 flex items-center justify-center">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Define Arrow Marker */}
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill="green" />
            </marker>
          </defs>

          {/* Dashed Circle Path */}
          <path
            d={`M 80,80
                m ${circleRadius},0
                a ${circleRadius},${circleRadius} 0 1,1 -${2 * circleRadius},0
                a ${circleRadius},${circleRadius} 0 1,1 ${2 * circleRadius},0`}
            stroke="lightgray"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
          />

          {/* Progress Path with Arrow */}
          <path
            d={`M 80,80
                m ${circleRadius},0
                a ${circleRadius},${circleRadius} 0 1,1 -${2 * circleRadius},0
                a ${circleRadius},${circleRadius} 0 1,1 ${2 * circleRadius},0`}
            stroke="green"
            strokeWidth="2"
            fill="none"
            strokeDasharray={circleCircumference}
            strokeDashoffset={(scrollProgress / 100) * circleCircumference}
            markerEnd="url(#arrow)"
            style={{
              transition: "stroke-dashoffset 0.3s, stroke 0.3s",
            }}
          />
        </svg>

        <div className="absolute text-center">
          <p className="text-xl font-bold">{Math.round(scrollProgress)}%</p>
          <p className="text-sm">Scroll Progress</p>
        </div>
      </div>
    </div>
  );
};

export default PathToEarning;
