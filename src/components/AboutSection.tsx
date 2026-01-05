import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

const interests = [
  { emoji: "🏀", title: "Basketball & Fitness", subtitle: "Discipline" },
  { emoji: "♟️", title: "Chess", subtitle: "Strategy & Patience" },
  { emoji: "⛰️", title: "Hiking", subtitle: "Resilience" },
  { emoji: "✈️", title: "Traveling", subtitle: "Perspective" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            CS student passionate about building systems that scale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="skill-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Education
                  </h3>
                  <p className="text-muted-foreground">
                    Computer Science undergraduate at{" "}
                    <span className="text-primary">Kathmandu University</span>.
                    Focused on building a strong foundation in software
                    engineering principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Focus Areas
                  </h3>
                  <p className="text-muted-foreground">
                    Deep interest in{" "}
                    <span className="text-primary">system design</span> and{" "}
                    <span className="text-primary">backend architecture</span>.
                    I love understanding how complex systems work under the hood
                    and designing scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Philosophy
                  </h3>
                  <p className="text-muted-foreground">
                    I believe in learning by building and experimentation. Every
                    project is an opportunity to understand something deeply and
                    push my boundaries.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Beyond Coding
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="skill-card text-center group cursor-default"
                >
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {interest.emoji}
                  </span>
                  <h4 className="font-medium text-foreground mb-1">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-primary">{interest.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
            >
              <p className="text-lg italic text-muted-foreground">
                "The best way to learn is to build. The best way to grow is to
                fail. The best way to succeed is to persist."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
