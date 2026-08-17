import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import Webring from "./Webring";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8">
          <Webring />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
         

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 rounded-full border border-primary/30 bg-card/80 px-4 py-2 text-sm font-medium text-primary shadow-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_-6px_hsl(var(--primary))]"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-primary/10 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUp size={14} />
            </span>
          </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
