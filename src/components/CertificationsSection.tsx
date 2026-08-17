import { AnimatePresence, motion, useInView } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

// Add each certificate here after placing its image in public/certificates.
// Example image path: "/certificates/aws-cloud-practitioner.png"
const certifications: Array<{
  title: string;
  image: string;
}> = [
  {
    title: "Google TMT",
    image: "/certificates/Google_TMT_2026.jpg",
  },
  {
    title: "KU Hackfest",
    image: "/certificates/KU_Hackfest_2025.png",
  },
  {
    title: "Prakriti Ecothon",
    image: "/certificates/Prakriti_Ecothon_2026.png",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certifications)[number] | null>(null);
  const selectedIndex = selectedCertificate
    ? certifications.findIndex((certificate) => certificate.image === selectedCertificate.image)
    : -1;

  const showCertificate = (index: number) => {
    setSelectedCertificate(certifications[(index + certifications.length) % certifications.length]);
  };

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            My <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {certifications.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certificate, index) => (
              <motion.button
                key={certificate.title}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`Open ${certificate.title} certificate`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="project-card group cursor-zoom-in text-left"
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-dashed border-primary/30 bg-card/50 px-6 py-12 text-center"
          >
            <div className="mb-5 rounded-xl bg-primary/10 p-4 text-primary glow-effect-sm">
              <Award size={30} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Certificates coming soon</h3>
            <p className="mt-3 max-w-md text-muted-foreground">
              Add your certificate images to <code className="text-primary">public/certificates</code>,
              then add their details to this section.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
              <ImagePlus size={17} />
              Ready for your credentials
            </div>
          </motion.div>
        )}
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate preview`}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="max-h-[90vh] max-w-full rounded-xl border border-primary/30 object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute -right-2 -top-2 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-transform hover:scale-110"
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
              {certifications.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => showCertificate(selectedIndex - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-background/80 p-3 text-primary shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Show previous certificate"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={() => showCertificate(selectedIndex + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-background/80 p-3 text-primary shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Show next certificate"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
};

export default CertificationsSection;
