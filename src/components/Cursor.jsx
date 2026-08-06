import { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId;
    let isHovering = false;
    let isClicking = false;

    // Trail dots
    const trails = trailsRef.current;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Snap inner dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0.6)";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";
      }
    };

    const onMouseUp = () => {
      isClicking = false;
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = isHovering
          ? "translate(-50%, -50%) scale(1.8)"
          : "translate(-50%, -50%) scale(1)";
      }
    };

    // Smooth ring follow with lerp
    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      // Animate trail dots with increasing delay
      trails.forEach((trail, i) => {
        if (!trail) return;
        const factor = 0.06 - i * 0.008;
        trail._x = (trail._x || mouseX) + (mouseX - (trail._x || mouseX)) * Math.max(factor, 0.01);
        trail._y = (trail._y || mouseY) + (mouseY - (trail._y || mouseY)) * Math.max(factor, 0.01);
        trail.style.left = `${trail._x}px`;
        trail.style.top = `${trail._y}px`;
        trail.style.opacity = `${0.35 - i * 0.05}`;
        trail.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.12})`;
      });

      animId = requestAnimationFrame(animate);
    };

    const onEnterInteractive = (e) => {
      isHovering = true;
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1.8)";
        ringRef.current.style.borderColor = "transparent";
        ringRef.current.style.background =
          "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(124,58,237,0.08) 100%)";
        ringRef.current.style.boxShadow =
          "0 0 25px rgba(6,182,212,0.5), 0 0 50px rgba(124,58,237,0.3), inset 0 0 15px rgba(6,182,212,0.1)";
      }
      if (dotRef.current) {
        dotRef.current.style.background = "#06b6d4";
        dotRef.current.style.boxShadow = "0 0 12px #06b6d4, 0 0 25px #06b6d4";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1.4)";
      }
    };

    const onLeaveInteractive = () => {
      isHovering = false;
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        ringRef.current.style.background = "transparent";
        ringRef.current.style.borderColor = "rgba(124,58,237,0.6)";
        ringRef.current.style.boxShadow =
          "0 0 15px rgba(124,58,237,0.4), 0 0 30px rgba(124,58,237,0.15)";
      }
      if (dotRef.current) {
        dotRef.current.style.background = "linear-gradient(135deg, #7c3aed, #06b6d4)";
        dotRef.current.style.boxShadow = "0 0 10px #7c3aed, 0 0 20px rgba(124,58,237,0.5)";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    animId = requestAnimationFrame(animate);

    // Attach hover listeners to all interactive elements
    const attachListeners = () => {
      document.querySelectorAll("a, button, input, textarea, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };
    attachListeners();

    // Re-attach on DOM changes (for dynamically rendered elements)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Trailing ghost dots */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className="cursor-trail"
          style={{
            width: `${10 - i * 1.2}px`,
            height: `${10 - i * 1.2}px`,
            background: i % 2 === 0
              ? "rgba(124,58,237,0.5)"
              : "rgba(6,182,212,0.5)",
            borderRadius: "50%",
            position: "fixed",
            pointerEvents: "none",
            zIndex: 99994,
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Outer animated ring */}
      <div
        ref={ringRef}
        style={{
          width: "42px",
          height: "42px",
          border: "1.5px solid rgba(124,58,237,0.6)",
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99997,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          boxShadow: "0 0 15px rgba(124,58,237,0.4), 0 0 30px rgba(124,58,237,0.15)",
          background: "transparent",
        }}
      >
        {/* Spinning gradient arc inside ring */}
        <div
          style={{
            position: "absolute",
            inset: "-1.5px",
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #a855f7, transparent 60%)",
            animation: "spin 2.5s linear infinite",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))",
          }}
        />
      </div>

      {/* Inner glowing dot */}
      <div
        ref={dotRef}
        style={{
          width: "8px",
          height: "8px",
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease, background 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 0 10px #7c3aed, 0 0 20px rgba(124,58,237,0.5)",
        }}
      />
    </>
  );
};

export default Cursor;
