import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server, Users, Layers, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "RideShareX",
    description:
      "RideShareX is a peer-to-peer vehicle renting platform that enables users to rent and lend vehicles within their community. Instead of depending on rental agencies, people can list their own cars, bikes, or scooters for others to rent. This promotes the shared economy, helps owners earn passive income, and provides renters with flexible and budget-friendly options.",
    tags: ["Node.js", "React", "MongoDB", "Socket.io", "REST API"],
    icon: Server,
    featured: false,
    links: {
      github: "https://github.com/Brook07/RideShareX",
      demo: null,
    },
  },
  {
    title: "SonicChat-Web-Application",
    description:
      "A full-stack real-time chat application with authentication, instant messaging, file uploads, notifications, and more. Built with Node.js, Express, MongoDB, Socket.io, React, and Tailwind CSS.",
    tags: ["Node.js", "React", "MongoDB", "Socket.io", "Express"],
    icon: Server,
    featured: false,
    links: {
      github: "https://github.com/Brook07/SonicChat-Web-Application",
      demo: null,
    },
  },
  {
    title: "Typescape",
    description:
      "A 2D dungeon-themed typing challenge game with 4 progressive difficulty levels. Combines skill development and entertainment to improve typing speed and accuracy through interactive gameplay built with Godot Engine.",
    tags: ["Godot", "Game Development", "2D", "GDScript"],
    icon: Gamepad2,
    featured: false,
    links: {
      github: "https://github.com/Brook07/Typescape",
      demo: null,
    },
  },
  {
    title: "CONNECTIFY",
    description:
      "Social Networking Mobile App based on common interests. Connect with people who share your passions, hobbies, and interests through an intuitive mobile platform.",
    tags: ["React Native", "Node.js", "MongoDB", "Mobile Development"],
    icon: Users,
    featured: false,
    links: {
      github: "https://github.com/Brook07/CONNECTIFY",
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card"
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
            href="https://github.com/Brook07"
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
