import { useState, useRef, useCallback, useEffect } from "react";

export const MENU_WIDTH = 600;
export const ITEM_WIDTH = 150;

export function useCarouselScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    setShowLeftButton(container.scrollLeft > 10);
    setShowRightButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scrollTo = useCallback((direction: string) => {
    const container = containerRef.current;
    const scrollAmount = 150;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return {
    containerRef,
    checkScroll,
    scrollTo,
    showLeftButton,
    showRightButton,
  };
}
