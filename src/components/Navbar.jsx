import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data";
import {
  FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX,
} from "react-icons/fi";
import myPhoto from "../assets/me2.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link.name);
    setMenuOpen(false);
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
            onClick={() => setActive("Home")}
          >
            <div
              className="w-9 h-9 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg"
              style={{ boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
            >
              <img src={myPhoto} alt="Badal Sain" className="w-full h-full object-cover object-top" />
            </div>
            <span className="font-bold text-white hidden sm:block">
              Badal<span className="gradient-text">Sain</span>
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNav(link)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    active === link.name
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active === link.name && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        border: "1px solid rgba(124,58,237,0.4)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {[
              { icon: FiGithub, url: "https://github.com" },
              { icon: FiLinkedin, url: "https://linkedin.com" },
              { icon: FiTwitter, url: "https://twitter.com" },
            ].map(({ icon: Icon, url }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNav({ name: "Contact", href: "#contact" })}
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-full text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg glass"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-4 right-4 z-40 glass-strong rounded-2xl p-6 md:hidden"
            style={{ border: "1px solid rgba(124,58,237,0.2)" }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNav(link)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active === link.name
                        ? "text-white bg-purple-500/20 border border-purple-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
              {[FiGithub, FiLinkedin, FiTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
