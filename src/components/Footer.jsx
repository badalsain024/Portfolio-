import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiHeart, FiArrowUp } from "react-icons/fi";
import { navLinks } from "../data";
import myPhoto from "../assets/me2.jpeg";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.05) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden"
              style={{ boxShadow: "0 0 15px rgba(124,58,237,0.4)" }}>
              <img src={myPhoto} alt="Badal Sain" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Badal Sain</p>
              <p className="text-gray-500 text-xs">Full Stack Developer</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub, url: "https://github.com" },
              { icon: FiLinkedin, url: "https://linkedin.com" },
              { icon: FiTwitter, url: "https://twitter.com" },
              { icon: FiInstagram, url: "https://instagram.com" },
            ].map(({ icon: Icon, url }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Badal Sain. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" size={13} />
            </motion.span>
            and lots of ☕
          </p>
          <p className="text-gray-700 text-xs font-mono">React + Three.js + Framer Motion</p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center text-white z-40 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          boxShadow: "0 0 20px rgba(124,58,237,0.4)",
        }}
      >
        <FiArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;
