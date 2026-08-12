import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin,  FiInstagram, FiDownload, FiArrowRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import { Suspense, lazy } from "react";
const HeroScene = lazy(() => import("../components/HeroScene"));
import { personalInfo } from "../data";
import myPhoto from "../assets/me2.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/badalsain024", label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/badal-sain-8b6753344/", label: "LinkedIn" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/_badal_23/", label: "Twitter" },
    { icon: FiInstagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{ background: "linear-gradient(to top, #0a0a0f, transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-40 z-[1]"
        style={{ background: "linear-gradient(to bottom, #0a0a0f, transparent)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass"
                style={{ border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-300">Available for work</span>
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg font-mono mb-2"
            >
              Hello, World! 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
            >
              I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer", 2000,
                  "Frontend Developer", 2000,
                  "React Developer", 2000,
                  "UI/UX Enthusiast", 2000,
                  "3D Web Creator", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mb-10"
            >
              {[
                
                { label: "Projects", value: personalInfo.projects },
                { label: "Clients", value: personalInfo.clients },
                { label: "Code hours", value: personalInfo.codeHours || "10K+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2"
              >
                View Projects <FiArrowRight />
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <FiDownload /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Center card only */}
              <div
                className="w-64 h-64 rounded-2xl glass-strong flex flex-col items-center justify-center p-6"
                style={{ border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 0 60px rgba(124,58,237,0.2)" }}
              >
                <img
                  src={myPhoto}
                  alt="Badal Sain"
                  className="w-16 h-16 rounded-xl object-cover object-top mb-3"
                  style={{ boxShadow: "0 0 20px rgba(124,58,237,0.5)" }}
                />
                <p className="text-white font-bold text-sm">Badal Sain</p>
                <p className="text-gray-400 text-xs mt-1">Full Stack Dev</p>
                <div className="flex gap-2 mt-3">
                  {["React", "Node", "3D"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
