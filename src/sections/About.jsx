import { motion } from "framer-motion";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";
import { skills, techStack, personalInfo } from "../data";
import { FiBriefcase, FiCode, FiAward, FiBook } from "react-icons/fi";
import myPhoto from "../assets/me2.jpeg";

// Animated skill bar
const SkillBar = ({ name, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.6 }}
    className="mb-5"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-mono" style={{ color }}>{level}%</span>
    </div>
    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 10px ${color}66` }}
      />
    </div>
  </motion.div>
);

// Info card
const InfoCard = ({ icon: Icon, title, value, color }) => {
  const tiltRef = useTilt(8);
  return (
    <div
      ref={tiltRef}
      className="glass rounded-2xl p-5 transition-all duration-300 shine"
      style={{ border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <p className="text-gray-500 text-xs mb-1">{title}</p>
      <p className="text-white font-bold text-lg">{value}</p>
    </div>
  );
};

const About = () => {
  const titleRef = useScrollReveal();
  const staggerRef = useStaggerReveal(0.1);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef}>
          <p className="text-center text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences that blend art and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Profile + info cards */}
          <div>
            {/* Profile card with tilt */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8 mb-8 relative overflow-hidden"
              style={{ border: "1px solid rgba(124,58,237,0.2)" }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />

              <div className="flex items-start gap-6">
                {/* Avatar */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex-shrink-0"
                >
                  <img
                    src={myPhoto}
                    alt="Badal Sain"
                    className="w-24 h-24 rounded-2xl object-cover object-top"
                    style={{ boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-primary" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{personalInfo.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{personalInfo.bio}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-3 text-sm">
                {[
                  ["📍 Location", personalInfo.location],
                  ["📧 Email", personalInfo.email],
                  ["💼 Status", "Available for hire"],
                  ["🎓 Education", "GLA University"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="text-gray-500 text-xs">{label}</span>
                    <p className="text-gray-300 font-medium truncate">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info cards */}
            <div ref={staggerRef} className="grid grid-cols-2 gap-4">
              <InfoCard icon={FiBriefcase} title="Experience" value={personalInfo.experience }  color="#7c3aed"  />
              <InfoCard icon={FiCode} title="Projects Done" value={personalInfo.projects} color="#06b6d4" />
              <InfoCard icon={FiAward} title="Certificates" value="6+" color="#a855f7" />
              <InfoCard icon={FiBook} title="Happy Clients" value={personalInfo.clients} color="#10b981" />
            </div>
          </div>

          {/* Right: Skills + tech stack */}
          <div>
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-3xl p-8 mb-8"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                  style={{ background: "rgba(124,58,237,0.3)" }}>⚡</span>
                Technical Skills
              </h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-3xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                  style={{ background: "rgba(6,182,212,0.3)" }}>🛠</span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-300 transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
