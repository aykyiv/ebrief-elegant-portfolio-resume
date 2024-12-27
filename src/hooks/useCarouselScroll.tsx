import { useState, useRef, useCallback, useEffect } from "react";

export const MENU_WIDTH = 355;
export const ITEM_WIDTH = 150;

export function useCarouselScroll(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Calculate the maximum scrollable index
  const maxIndex = Math.max(0, itemCount - Math.floor(MENU_WIDTH / ITEM_WIDTH));

  // Scroll to a specific index
  const scrollTo = useCallback(
    (index: number) => {
      if (containerRef.current) {
        const newIndex = Math.max(0, Math.min(index, maxIndex));
        containerRef.current.scrollLeft = newIndex * ITEM_WIDTH;
        setCurrentIndex(newIndex);
      }
    },
    [maxIndex]
  );

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const nearestIndex = Math.round(currentScroll / ITEM_WIDTH);
      scrollTo(nearestIndex);
    }
  }, [scrollTo]);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    },
    [isDragging]
  );

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseUp, onMouseMove]);

  return {
    containerRef,
    onMouseDown,
    isDragging,
    currentIndex,
    scrollTo,
    maxIndex,
  };
}
