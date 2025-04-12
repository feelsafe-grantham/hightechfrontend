import { useState, useEffect, useRef } from "react";

function useAutoScroll(scrollSpeed = 2, intervalTime = 30) {
  const imageGridRef = useRef<HTMLDivElement | null>(null);
  const [scrollingForward, setScrollingForward] = useState(true);

  useEffect(() => {
    if (imageGridRef.current) {
      imageGridRef.current.classList.add("scrollbar-hidden");
    }
    const scrollInterval = setInterval(() => {
      if (imageGridRef.current) {
        const scrollWidth = imageGridRef.current.scrollWidth;
        const clientWidth = imageGridRef.current.clientWidth;

        if (scrollingForward) {
          if (imageGridRef.current.scrollLeft + clientWidth >= scrollWidth) {
            setScrollingForward(false);
          } else {
            imageGridRef.current.scrollLeft += scrollSpeed;
          }
        } else {
          if (imageGridRef.current.scrollLeft <= 0) {
            setScrollingForward(true); // Change direction when beginning is reached
          } else {
            imageGridRef.current.scrollLeft -= scrollSpeed; // Scroll backward
          }
        }
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, [scrollingForward, scrollSpeed, intervalTime]);

  return imageGridRef;
}

export default useAutoScroll;
