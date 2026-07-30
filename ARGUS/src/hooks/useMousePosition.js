import { useEffect, useState } from "react";

export default function useMousePosition() {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    let animationFrame;

    const move = (e) => {

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setMouse({ x, y });
      });

    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return mouse;
}