import React, { useEffect, useState } from "react";

const Circle = React.forwardRef((props, ref) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({
        x: x + window.scrollX, // Adjust for horizontal scroll
        y: y + window.scrollY, // Adjust for vertical scroll
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="circle"
      style={{
        position: "absolute",
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Prevent interference with other elements
      }}
    ></div>
  );
});

export default Circle;
