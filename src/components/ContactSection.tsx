import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Brook07",
    color: "hover:text-white hover:bg-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/utsav-adhikari-9a56b4243/",
    color: "hover:text-white hover:bg-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/adk_utsav/",
    color: "hover:text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/users/utsav6190",
    color: "hover:text-white hover:bg-[#5865F2]",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subheading mx-auto">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Email CTA */}
          <div className="project-card p-8 mb-10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 glow-effect">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Reach Out Directly
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a project idea or just want to say hi? My inbox is always open.
            </p>
            <button
              type="button"
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                const to = 'utsavadhr@gmail.com';
                const subject = '';
                const body = '';
                const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  to
                )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                const gmailApp = `googlegmail://co?to=${encodeURIComponent(
                  to
                )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                if (isMobile) {
                  // Try to open Gmail app first, then fallback to web compose
                  try {
                    window.location.href = gmailApp;
                  } catch (err) {
                    // ignore
                  }
                  setTimeout(() => {
                    window.open(gmailWeb, '_blank', 'noopener');
                  }, 600);
                } else {
                  // Desktop: open Gmail web compose in a new tab
                  window.open(gmailWeb, '_blank', 'noopener');
                }
              }}
            >
              Send an Email
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`skill-card p-6 text-center group transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-8 h-8 mx-auto mb-3 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
