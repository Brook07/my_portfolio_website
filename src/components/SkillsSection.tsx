import { motion, useInView } from "framer-motion";
import { Braces, Cloud, Code2, Target } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks/Libraries",
    icon: Braces,
    skills: [
      "React",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Django",
      "NumPy",
      "Pandas",
      "FastAPI"
    ],
  },
  {
    title: "Specialties",
    icon: Target,
    skills: ["MERN Stack", "linux", "Backend", "AI/ML", "GIS & Geospatial Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="skill-card p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
                <category.icon size={20} />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    className="flex items-center rounded-lg bg-secondary/50 p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 rounded-2xl border border-primary/20 bg-card/70 p-6 shadow-lg backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
            <Cloud size={20} />
            ☁️ Deployment
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <img
              src="https://img.shields.io/badge/Cloudflare-F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white"
              alt="Cloudflare"
            />
            <img
              src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
              alt="Vercel"
            />
            <img
              src="https://img.shields.io/badge/Railway-0B0D0E.svg?style=for-the-badge&logo=railway&logoColor=white"
              alt="Railway"
            />
            <img
              src="https://img.shields.io/badge/Render-46E3B7.svg?style=for-the-badge&logo=render&logoColor=white"
              alt="Render"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
