import { useEffect } from "react";

export const useDragToSlide = (elementRef: any) => {
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  useEffect(() => {
    const handleMouseDown = (e: any) => {
      if (elementRef.current === null) return;

      elementRef.current.style.cursor = "grabbing";
      elementRef.current.style.userSelect = "none";

      pos = {
        left: elementRef.current.scrollLeft,
        top: elementRef.current.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      elementRef.current.addEventListener("mousemove", handleMouseMove);
      elementRef.current.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: any) => {
      if (elementRef.current === null) return;

      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      elementRef.current.scrollTop = pos.top - dy;
      elementRef.current.scrollLeft = pos.left - dx;
    };

    const handleMouseUp = () => {
      if (elementRef.current === null) return;

      elementRef.current.removeEventListener("mousemove", handleMouseMove);
      elementRef.current.removeEventListener("mouseup", handleMouseUp);
      elementRef.current.style.cursor = "default";
      elementRef.current.style.removeProperty("user-select");
    };

    elementRef.current?.addEventListener("mousedown", handleMouseDown);

    return () => {
      elementRef.current?.removeEventListener("mousedown", handleMouseDown);
      elementRef.current?.removeEventListener("mousemove", handleMouseMove);
      elementRef.current?.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
};
