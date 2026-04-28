import { motion } from "motion/react";
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <ImageWithFallback
                src="/assets/van-in-gibel.webp"
                alt="Luxury Mercedes van"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D4AF37]/20 rounded-lg -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Heart of <span className="text-[#D4AF37]">Belice Valley</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8" />
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              Located between the ancient villages of <strong>Salemi</strong> and{' '}
              <strong>Gibellina</strong>, Gibel Transfer offers more than transportation—we offer an
              entry point into the soul of Sicily.
            </p>
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              Our professional private transport service combines punctuality and comfort with authentic
              Sicilian hospitality. Every journey becomes a story, every transfer an experience.
            </p>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              From the rolling vineyards of Marsala to the ancient temples of Segesta, we know every
              hidden corner, every secret sunset spot, every tale worth telling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
