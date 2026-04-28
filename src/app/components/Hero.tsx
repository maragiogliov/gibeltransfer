import { motion } from "motion/react";
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759062453094-814f40c03e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzaWNpbHklMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjB2aW5leWFyZHN8ZW58MXx8fHwxNzc2OTc5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sicilian landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover Sicily <span className="text-[#D4AF37]">in Motion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Private transfers, airport pickups, unforgettable tours through the heart of Belice Valley
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="/#booking"
              className="group relative px-10 py-4 bg-[#D4AF37] text-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 tracking-wide">Book Your Ride</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="/#tours"
              className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            >
              Explore Tours
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10"
        >
          <a href="/#about" className="text-white/70 hover:text-white transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
