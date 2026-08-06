import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiAward, FiCalendar, FiHash } from "react-icons/fi";
import { certificates } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Certificate card
const CertCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={() => onClick(cert)}
    className="group relative rounded-2xl overflow-hidden cursor-pointer shine"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${cert.color}22`,
      boxShadow: `0 0 0 rgba(0,0,0,0)`,
      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 0 40px ${cert.color}22, 0 20px 60px rgba(0,0,0,0.3)`;
      e.currentTarget.style.borderColor = `${cert.color}55`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
      e.currentTarget.style.borderColor = `${cert.color}22`;
    }}
  >
    {/* Image */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${cert.color}11 0%, rgba(10,10,15,0.9) 100%)` }} />

      {/* Icon badge */}
      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
        style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}44`, backdropFilter: "blur(10px)" }}>
        {cert.icon}
      </div>

      {/* Year badge */}
      <div className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-mono"
        style={{ background: "rgba(0,0,0,0.6)", color: cert.color, border: `1px solid ${cert.color}33`, backdropFilter: "blur(10px)" }}>
        {cert.date}
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
        {cert.title}
      </h3>
      <p className="text-sm font-medium mb-3" style={{ color: cert.color }}>{cert.issuer}</p>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <FiHash size={12} />
        <span className="font-mono truncate">{cert.credentialId}</span>
      </div>
    </div>

    {/* Bottom glow */}
    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

    {/* Click hint */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white"
        style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
        Click to view
      </span>
    </div>
  </motion.div>
);

// Certificate modal
const CertModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(15px)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, y: 50, rotateX: 15 }}
      animate={{ scale: 1, y: 0, rotateX: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className="relative max-w-lg w-full rounded-3xl overflow-hidden"
      style={{
        background: "#12121a",
        border: `1px solid ${cert.color}44`,
        boxShadow: `0 0 80px ${cert.color}22`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header image */}
      <div className="relative h-52">
        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${cert.color}22, rgba(18,18,26,0.95))` }} />

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:text-red-400 transition-colors">
          <FiX size={18} />
        </button>

        {/* Icon */}
        <div className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}55`, backdropFilter: "blur(10px)" }}>
          {cert.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
        <p className="font-semibold mb-4" style={{ color: cert.color }}>{cert.issuer}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
              <FiCalendar size={12} /> Issued
            </div>
            <p className="text-white font-semibold">{cert.date}</p>
          </div>
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
              <FiHash size={12} /> Credential ID
            </div>
            <p className="text-white font-mono text-xs">{cert.credentialId}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${cert.color}cc, ${cert.color})`,
            boxShadow: `0 0 30px ${cert.color}44`,
          }}
        >
          <FiAward /> Verify Certificate
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const titleRef = useScrollReveal();

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Floating orbs */}
      {[
        { top: "10%", left: "5%", color: "#7c3aed", size: 200 },
        { top: "60%", right: "5%", color: "#06b6d4", size: 150 },
        { bottom: "10%", left: "30%", color: "#a855f7", size: 100 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            ...orb,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}15 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef}>
          <p className="text-center text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">My achievements</p>
          <h2 className="section-title">
            Certificates &amp; <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications validating my expertise across the full stack
          </p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { label: "Certificates", value: "6+", color: "#7c3aed" },
            { label: "Platforms", value: "5+", color: "#06b6d4" },
            { label: "Years Active", value: "3+", color: "#a855f7" },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black mb-1" style={{ color }}>{value}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
