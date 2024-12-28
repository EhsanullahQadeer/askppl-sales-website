import { useCallback, useEffect, useState } from "react";

const useCalculateHeight = (sliderValue: number) => {
  const [height, setHeight] = useState(
    `calc(${(sliderValue / 100) * 100}% + 107px)`
  );

  const calculateHeight = useCallback(() => {
    // Ensure calculation is safe for both SSR and client-side rendering
    if (typeof window !== "undefined") {
      const isSmallScreen = window.innerWidth < 640;
      return isSmallScreen
        ? `calc(${(sliderValue / 100) * 100}% + 87px)`
        : `calc(${(sliderValue / 100) * 100}% + 107px)`;
    }
    // Fallback for environments without `window`
    return `calc(${(sliderValue / 100) * 100}% + 107px)`;
  }, [sliderValue]);

  useEffect(() => {
    // Set initial height after mounting
    setHeight(calculateHeight());

    const handleResize = () => {
      setHeight(calculateHeight());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateHeight]);

  return height;
};

export default useCalculateHeight;
