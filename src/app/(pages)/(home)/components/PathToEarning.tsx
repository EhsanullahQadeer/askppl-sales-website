"use client";
import { useState, useEffect, useRef } from "react";

const PathToEarning = () => {
  const [highlightedPoints, setHighlightedPoints] = useState<boolean[]>([]); // Array of highlighted points
  const [highlightedStaticDots, setHighlightedStaticDots] = useState({
    top: false,
    right: false,
    bottom: false,
    left: false,
  }); // State to track which static dots are highlighted

  // Reference to the container div
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container) {
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.offsetHeight;

        // Calculate scroll progress based on container height and window scroll
        const scrollProgress = Math.min(
          ((window.scrollY - containerTop) / containerHeight) * 100,
          100
        ); // Clamp the progress to a max of 100%

        // Generate an array of 100 values (1 to 100) to represent the circle chunks
        const newHighlightedPoints = Array.from(
          { length: 100 },
          (_, index) => index + 1 <= scrollProgress
        );
        setHighlightedPoints(newHighlightedPoints);

        // Highlight static dots based on scroll progress
        setHighlightedStaticDots({
          top: scrollProgress >= 100,
          right: scrollProgress >= 25,
          bottom: scrollProgress >= 50,
          left: scrollProgress >= 75,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-gray-100">
      <div className="sticky top-[50vh] mb-[50vh] left-1/2 transform -translate-x-1/2 w-40 h-40 flex items-center justify-center z-20">
        <div className="absolute w-full h-full flex items-center justify-center">
          {/* Circle with 100 dots */}
          {highlightedPoints.map((highlighted, index) => (
            <div
              key={index}
              className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                highlighted ? "bg-green-500" : "bg-white"
              }`}
              style={{
                transform: `rotate(${index * 3.6}deg) translateY(-60px)`,
                transformOrigin: "center center",
              }}
            ></div>
          ))}

          {/* Four additional dots (top, right, bottom, left) */}
          <div
            className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
              highlightedStaticDots.top ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full ${
              highlightedStaticDots.right ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div
            className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
              highlightedStaticDots.bottom ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full ${
              highlightedStaticDots.left ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PathToEarning;
