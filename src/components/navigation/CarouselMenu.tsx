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
    checkScroll,
    scrollTo,
    showLeftButton,
    showRightButton,
  } = useCarouselScroll();

  const [width, setWidth] = useState(MENU_WIDTH);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 768 ? 800 : MENU_WIDTH);
      setVisible(window.innerWidth > 768 && items.length < 6 ? false : true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    checkScroll();
    const containerValue = containerRef.current;
    containerValue?.addEventListener("scroll", checkScroll);
    return () => {
      containerValue?.removeEventListener("scroll", checkScroll);
    };
  });

  const handleClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="w-full bg-background z-10 overflow-hidden mb-12">
      <div className="relative mx-auto " style={{ maxWidth: width }}>
        {/* Mobile */}
        {width < 768 && (
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide md:hidden flex"
          >
            <div
              className={`flex transition-transform duration-300 ease-out gap-4  `}
              style={{
                width: `${items.length * ITEM_WIDTH}px`,
              }}
            >
              {items.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => handleClick(filter)}
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
          <div ref={containerRef} className="overflow-x-hidden hidden md:flex">
            <div
              className={`flex transition-transform duration-300 ease-out gap-4  `}
              style={{
                width: `${items.length * ITEM_WIDTH}px`,
              }}
            >
              {items.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => handleClick(filter)}
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
        {visible && (
          <Button
            variant="outline"
            size="icon"
            className={` ${
              showLeftButton ? "flex" : "hidden"
            } absolute border border-fonts left-0 top-1/2 -translate-y-1/2`}
            onClick={() => scrollTo("left")}
            aria-label="Previous items"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {visible && (
          <Button
            variant="outline"
            size="icon"
            className={` ${
              showRightButton ? "flex" : "hidden"
            } absolute border border-fonts right-0 top-1/2 -translate-y-1/2`}
            onClick={() => scrollTo("right")}
            aria-label="Next items"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
        {visible && (
          <Button
            variant="outline"
            size="icon"
            className={` ${
              showLeftButton ? "flex" : "hidden"
            } absolute border border-fonts left-0 top-1/2 -translate-y-1/2`}
            onClick={() => scrollTo("left")}
            aria-label="Previous items"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
