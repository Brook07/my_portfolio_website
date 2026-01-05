import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, GitBranch, Code, Star, ExternalLink } from "lucide-react";

const stats = [
  { icon: Code, label: "Top Language", value: "JavaScript" },
  { icon: GitBranch, label: "Repositories", value: "15+" },
  { icon: Star, label: "Focus", value: "Backend" },
];

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building in public, one commit at a time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="project-card p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center border border-border glow-effect">
                  <Github className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    @utsavadhikari
                  </h3>
                  <p className="text-muted-foreground">Open Source Explorer</p>
                </div>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github size={18} />
                View Profile
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="skill-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="text-primary" size={18} />
                <span className="text-sm font-medium text-foreground">
                  Contribution Activity
                </span>
              </div>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm transition-colors duration-200"
                    style={{
                      backgroundColor: `hsl(var(--primary) / ${
                        Math.random() * 0.5 + 0.1
                      })`,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Consistent contributions throughout the week
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
