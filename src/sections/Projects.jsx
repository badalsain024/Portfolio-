import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";

// Individual project card
const ProjectCard = ({ project, index, onClick }) => {
  const tiltRef = useTilt(6);

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      onClick={() => onClick(project)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shine"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.4s ease",
      }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-300"
          style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95))` }} />

        {/* Color accent */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-full text-xs font-medium"
            style={{ background: `${project.color}22`, border: `1px solid ${project.color}44`, color: project.color }}>
            Featured
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(10,10,15,0.7)" }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-purple-400 transition-colors"
          >
            <FiGithub size={18} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
          >
            <FiExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-lg font-mono"
              style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-lg text-gray-500">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
    </motion.div>
  );
};

// Project detail modal
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.85, y: 40 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
      style={{ background: "#12121a", border: "1px solid rgba(124,58,237,0.3)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:text-red-400 transition-colors"
      >
        <FiX size={18} />
      </button>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-sm px-3 py-1 rounded-full font-mono"
              style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.25)" }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="btn-outline flex items-center gap-2 text-sm">
            <FiGithub /> View Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="btn-primary flex items-center gap-2 text-sm">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef}>
          <p className="text-center text-cyan-400 font-mono text-sm mb-3 tracking-widest uppercase">What I've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best work — from full-stack apps to immersive 3D experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={setSelected} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
