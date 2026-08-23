import { motion } from "framer-motion";

const FloatingShapes = () => {
  const particles = [
    {
      position: "top-[18%] left-[12%]",
      size: "w-3 h-3",
      delay: 0,
      duration: 5,
      driftX: 16,
      driftY: -24,
    },
    {
      position: "top-[28%] right-[16%]",
      size: "w-2 h-2",
      delay: 0.8,
      duration: 6,
      driftX: -12,
      driftY: 20,
    },
    {
      position: "bottom-[24%] left-[28%]",
      size: "w-4 h-4",
      delay: 1.5,
      duration: 7,
      driftX: 18,
      driftY: -16,
    },
    {
      position: "bottom-[20%] right-[30%]",
      size: "w-2.5 h-2.5",
      delay: 2.2,
      duration: 5.5,
      driftX: -14,
      driftY: -14,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary glow object */}
      <motion.div
        className="absolute top-[8%] -left-24 lg:left-[4%] w-[30rem] h-[30rem] rounded-full opacity-30 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(187 100% 72% / 0.52) 0%, hsl(190 95% 52% / 0.28) 42%, transparent 72%)",
        }}
        animate={{
          x: [0, 26, -8, 0],
          y: [0, -18, 10, 0],
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner lens for depth */}
      <motion.div
        className="absolute top-[14%] left-[2%] lg:left-[11%] w-56 h-56 rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, hsl(0 0% 100% / 0.7) 0%, hsl(187 100% 72% / 0.34) 26%, transparent 70%)",
        }}
        animate={{
          x: [0, 14, -4, 0],
          y: [0, -12, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting rings */}
      <motion.div
        className="absolute top-[13%] left-[1%] lg:left-[9%] w-64 h-64 rounded-full border border-primary/25"
        animate={{
          rotate: [0, 360],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-[11%] -left-2 lg:left-[7%] w-72 h-72 rounded-full border border-cyan-300/15"
        animate={{ rotate: [360, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating geometric accents */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 48, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 border border-primary/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-primary/15"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -25, 0],
          rotate: [45, 90, 45],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-8 h-8 bg-primary/10 rounded-full"
        animate={{
          scale: [1, 1.55, 1],
          opacity: [0.1, 0.38, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle sparkle layer */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute ${particle.position} ${particle.size} rounded-full bg-cyan-200/35 shadow-[0_0_18px_hsl(187_100%_70%_/_0.45)]`}
          animate={{
            y: [0, particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [0.9, 1.25, 0.9],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Soft mesh texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, hsl(187 100% 62%) 0.8px, transparent 0.9px), radial-gradient(circle at 85% 35%, hsl(187 100% 62%) 0.8px, transparent 0.9px)",
          backgroundSize: "56px 56px, 74px 74px",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(187 100% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(187 100% 50%) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-[600px] gradient-radial" />
    </div>
  );
};

export default FloatingShapes;
