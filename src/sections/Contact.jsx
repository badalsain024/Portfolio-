import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiSend, FiMail, FiLinkedin, FiGithub, FiMapPin, FiUser, FiMessageSquare } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data";

// Contact info card
const ContactCard = ({ icon: Icon, label, value, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.03, y: -3 }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center gap-4 p-4 rounded-2xl glass transition-all duration-300 group"
    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
  >
    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
      <Icon size={18} style={{ color }} />
    </div>
    <div>
      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
      <p className="text-white font-medium text-sm">{value}</p>
    </div>
  </motion.a>
);

// Input field component
const FormField = ({ label, icon: Icon, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        <Icon size={16} />
      </div>
      {props.as === "textarea" ? (
        <textarea
          {...props}
          className={`w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300 resize-none ${
            error ? "border-red-500/50" : "border-white/8 focus:border-purple-500/50"
          }`}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`,
          }}
          onFocus={(e) => { if (!error) e.target.style.borderColor = "rgba(124,58,237,0.5)"; e.target.style.boxShadow = "0 0 20px rgba(124,58,237,0.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
        />
      ) : (
        <input
          {...props}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`,
          }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.5)"; e.target.style.boxShadow = "0 0 20px rgba(124,58,237,0.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
        />
      )}
    </div>
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const Contact = () => {
  const titleRef = useScrollReveal();
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      toast.success("Message sent! I'll get back to you soon 🚀", {
        style: { background: "#12121a", color: "#fff", border: "1px solid rgba(124,58,237,0.3)" },
        iconTheme: { primary: "#7c3aed", secondary: "#fff" },
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send. Please try again.", {
        style: { background: "#12121a", color: "#fff", border: "1px solid rgba(239,68,68,0.3)" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef}>
          <p className="text-center text-cyan-400 font-mono text-sm mb-3 tracking-widest uppercase">Let's connect</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 mb-6"
              style={{ border: "1px solid rgba(124,58,237,0.15)" }}>
              <h3 className="text-xl font-bold text-white mb-2">Let's work together</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm currently available for freelance projects, full-time positions, and exciting collaborations.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>

              <div className="flex flex-col gap-3">
                <ContactCard icon={FiMail} label="Email" value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`} color="#7c3aed" />
                <ContactCard icon={FiLinkedin} label="LinkedIn" value="linkedin.com/in/alexmorgan"
                  href="https://linkedin.com" color="#06b6d4" />
                <ContactCard icon={FiGithub} label="GitHub" value="github.com/alexmorgan"
                  href="https://github.com" color="#a855f7" />
                <ContactCard icon={FiMapPin} label="Location" value={personalInfo.location}
                  href="#" color="#10b981" />
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(16,185,129,0.1)", "0 0 40px rgba(16,185,129,0.2)", "0 0 20px rgba(16,185,129,0.1)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass rounded-2xl p-5 flex items-center gap-4"
              style={{ border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Currently Available</p>
                <p className="text-gray-500 text-xs">Open to new opportunities & projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="flex flex-col gap-5">
                <FormField
                  label="Your Name"
                  icon={FiUser}
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  error={errors.name}
                />
                <FormField
                  label="Email Address"
                  icon={FiMail}
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  error={errors.email}
                />
                <FormField
                  label="Message"
                  icon={FiMessageSquare}
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  error={errors.message}
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -2 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    boxShadow: loading ? "none" : "0 0 30px rgba(124,58,237,0.4)",
                  }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
