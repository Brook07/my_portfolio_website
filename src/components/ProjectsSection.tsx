import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server, Users, Layers } from "lucide-react";

const projects = [
  {
    title: "Ride-Sharing Application",
    description:
      "A full-stack ride-sharing platform with real-time tracking, driver matching algorithms, and seamless payment integration. Built with focus on scalable backend architecture.",
    tags: ["Node.js", "React", "MongoDB", "Socket.io", "REST API"],
    icon: Server,
    featured: true,
    links: {
      github: "#",
      demo: null,
    },
  },
  {
    title: "Social Networking Platform",
    description:
      "A feature-rich social media platform with user authentication, real-time messaging, post feeds, and notification systems. Emphasis on database design and API efficiency.",
    tags: ["React", "Express", "MySQL", "JWT", "WebSocket"],
    icon: Users,
    featured: true,
    links: {
      github: "#",
      demo: null,
    },
  },
  {
    title: "Semester Projects",
    description:
      "Collection of academic projects exploring various domains including data structures, algorithms, database management systems, and software engineering principles.",
    tags: ["C++", "Python", "MySQL", "Data Structures"],
    icon: Layers,
    featured: false,
    links: {
      github: "#",
      demo: null,
    },
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world applications focused on system design and backend logic
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`project-card ${
                project.featured ? "lg:first:col-span-2" : ""
              }`}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary glow-effect-sm">
                      <project.icon size={24} />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative gradient line */}
              <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
