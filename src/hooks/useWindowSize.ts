import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height:0,
  });

  const [breakpoint, setBreakpoint] = useState<string>("");
  
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({ width, height: window.innerHeight });

      if (width < breakpoints.sm) setBreakpoint("sm");
      else if (width < breakpoints.md) setBreakpoint("md");
      else if (width < breakpoints.lg) setBreakpoint("lg");
      else if (width < breakpoints.xl) setBreakpoint("xl");
      else setBreakpoint("2xl");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints.lg, breakpoints.md, breakpoints.sm, breakpoints.xl]);

  return {
    windowSize,
    breakpoint,
    isSm: breakpoint === "sm",
    isMd: breakpoint === "md",
    isLg: breakpoint === "lg",
    isXl: breakpoint === "xl",
    is2Xl: breakpoint === "2xl",
  };
}
