"use client";

import React, { useEffect, useRef, useState } from "react";

const EarningPath = () => {
  // const [highlightedPoints, setHighlightedPoints] = useState<boolean[]>([]); // Array of highlighted points
  // const [highlightedStaticDots, setHighlightedStaticDots] = useState({
  //   top: false,
  //   right: false,
  //   bottom: false,
  //   left: false,
  // }); // State to track which static dots are highlighted

  // // Reference to the container div
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;

  //     if (container) {
  //       const containerBounds = container.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       // Check if the section is in view
  //       if (
  //         containerBounds.top <= windowHeight && // Top of the section is visible
  //         containerBounds.bottom >= 0 // Bottom of the section is visible
  //       ) {
  //         const containerHeight = containerBounds.height;

  //         // Calculate scroll progress based on container height and scroll within the section
  //         const scrollProgress = Math.min(
  //           ((windowHeight - containerBounds.top) / containerHeight) * 100,
  //           100
  //         ); // Clamp the progress to a max of 100%

  //         // Generate an array of 100 values (1 to 100) to represent the circle chunks
  //         const newHighlightedPoints = Array.from(
  //           { length: 100 },
  //           (_, index) => index + 1 <= scrollProgress
  //         );
  //         setHighlightedPoints(newHighlightedPoints);

  //         // Highlight static dots based on scroll progress
  //         setHighlightedStaticDots({
  //           top: scrollProgress >= 100,
  //           right: scrollProgress >= 25,
  //           bottom: scrollProgress >= 50,
  //           left: scrollProgress >= 75,
  //         });
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const [scrollProgress, setScrollProgress] = useState(0); // Track scroll progress as a percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll1 = () => {
    const container = containerRef.current;
  
    if (container) {
      const containerBounds = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (
        containerBounds.top <= windowHeight && 
        containerBounds.bottom >= 0
      ) {
        const containerHeight = containerBounds.height;
  
        // Adjusted calculation
        const visibleHeight = Math.max(0, windowHeight - containerBounds.top);
        const scrollProgress = Math.min((visibleHeight / containerHeight) * 100, 100);
  
        console.log("Scroll Progress:", scrollProgress);
      }
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container) {
        const containerBounds = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is in view
        if (
          containerBounds.top <= windowHeight &&
          containerBounds.bottom >= 0
        ) {
          const containerHeight = containerBounds.height;

          // Calculate scroll progress
          const progress = Math.min(
            ((windowHeight - containerBounds.top) / containerHeight) * 100,
            100
          );

          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll1);

    return () => window.removeEventListener("scroll", handleScroll1);
  }, []);

  const circleRadius = 60; // Radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // Circumference

  console.log("scrollProgress ", scrollProgress);
  console.log(" circleCircumference", circleCircumference);
//   py-12
  return (
    <div className="mx-5 sm:mx-6">
      <div className="max-w-screen-3xl mx-auto">
        <div className=" px-32 bg-dim-horizon-gradient rounded-3xl">
          {/* <h2 className="page-heading mb-[50px]">
            Your path to earning <br /> with ASKPPL
          </h2> */}

          <div ref={containerRef} className="h-[500vh] relative bg-red-600">
            {/* <div
              style={{ height: "calc(100svh - 82px)" }}
              className="sticky left-1/2 t -translate-x-1/2 flex items-center justify-center z-20 aspect-square p-10 top-[50vh] pb-[50vh]"
            > */}
            <div
              style={{  }}
              className="sticky top-[50vh] mb-[50vh] left-1/2 transform -translate-y-1/2 z-20 h-40 w-40  flex justify-center items-center"
            >
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
                  strokeDashoffset={
                    circleCircumference -
                    (scrollProgress / 100) * circleCircumference
                  }
                  markerEnd="url(#arrow)"
                  style={{
                    transition: "stroke-dashoffset 0.3s, stroke 0.3s",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningPath;
