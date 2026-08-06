import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Lenis from "lenis";

import LoadingScreen from "./components/LoadingScreen";
import Cursor from "./components/Cursor";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [loading]);

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen bg-primary">
          {/* Global effects */}
          <Cursor />
          <ParticleBackground />

          {/* Mouse glow follower */}
          <MouseGlow />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main>
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Contact />
          </main>

          <Footer />

          {/* Toast notifications */}
          <Toaster position="bottom-right" />
        </div>
      )}
    </>
  );
};

// Subtle mouse-follow glow effect
const MouseGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.style.cssText = `
      position: fixed; pointer-events: none; z-index: 1;
      width: 600px; height: 600px; border-radius: 50%;
      background: radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.8s ease, top 0.8s ease;
      left: 50%; top: 50%;
    `;
    document.body.appendChild(glow);

    const onMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
};

export default App;
