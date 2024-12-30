"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ITEM_WIDTH,
  MENU_WIDTH,
  useCarouselScroll,
} from "@/hooks/useCarouselScroll";

interface CarouselMenuProps {
  items: string[];
  setActiveFilter: (filter: string) => void;
  activeFilter: string;
}

export function CarouselMenu({
  items,
  setActiveFilter,
  activeFilter,
}: CarouselMenuProps) {
  const {
    containerRef,
    onMouseDown,
    isDragging,
    currentIndex,
    scrollTo,
    maxIndex,
  } = useCarouselScroll(items.length);

  const [width, setWidth] = useState(MENU_WIDTH);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) setWidth(800);
    if (window.innerWidth > 768 && items.length < 6) setVisible(false);
  }, [items.length, containerRef, currentIndex]);

  return (
    <div className="sticky top-0 w-full bg-background z-10 overflow-hidden mb-12">
      <div className="relative mx-auto " style={{ maxWidth: width }}>
        {/* Mobile */}
        {width < 768 && (
          <div ref={containerRef} className="overflow-x-hidden md:hidden flex">
            <div
              className={`flex transition-transform duration-300 ease-out gap-4  `}
              style={{
                width: `${items.length * ITEM_WIDTH}px`,
              }}
            >
              {items.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  style={{ width: `${ITEM_WIDTH}px` }}
                  className={`
                  ${
                    activeFilter === filter
                      ? "bg-primary text-white"
                      : "bg-white  hover:border-primary "
                  }
                `}
                >
                  <p>{filter}</p>
                </Button>
              ))}
            </div>
          </div>
        )}
        {/* Desktop */}
        {width > 768 && (
          <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            className="overflow-x-hidden hidden md:flex"
          >
            <div
              className={`flex transition-transform duration-300 ease-out gap-4  ${
                isDragging ? "cursor-grabbing" : ""
              }`}
              style={{
                width: `${items.length * ITEM_WIDTH}px`,
              }}
            >
              {items.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  style={{ width: `${ITEM_WIDTH}px` }}
                  className={`
                  ${
                    activeFilter === filter
                      ? "bg-primary text-white"
                      : "bg-white  hover:border-primary "
                  }
                `}
                >
                  <p>{filter}</p>
                </Button>
              ))}
            </div>
          </div>
        )}
        {currentIndex > 0 && visible && (
          <Button
            variant="outline"
            size="icon"
            className="absolute border border-fonts left-0 top-1/2 -translate-y-1/2"
            onClick={() => scrollTo(currentIndex - 1)}
            aria-label="Previous items"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {currentIndex < maxIndex && visible && (
          <Button
            variant="outline"
            size="icon"
            className="absolute border border-fonts right-0 top-1/2 -translate-y-1/2"
            onClick={() => scrollTo(currentIndex + 1)}
            aria-label="Next items"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
