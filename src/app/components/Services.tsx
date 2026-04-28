import { motion } from "motion/react";
import {
  Plane,
  Car,
  MapPin,
  Wine,
  Landmark,
  Waves,
  Sparkles,
  Heart,
} from 'lucide-react';
import { useInView } from './hooks/useInView';

const services = [
  {
    icon: Plane,
    title: 'Airport Pickups',
    description: 'Palermo, Trapani & Catania airports. Punctual, professional, stress-free.',
  },
  {
    icon: Car,
    title: 'Private Transfers',
    description: 'Door-to-door luxury transport across Sicily with premium comfort.',
  },
  {
    icon: MapPin,
    title: 'Day Trips',
    description: 'Curated journeys to Sicily\'s most breathtaking destinations.',
  },
  {
    icon: Wine,
    title: 'Wine Tours',
    description: 'Explore historic wineries and taste the finest Sicilian wines.',
  },
  {
    icon: Landmark,
    title: 'Historical Tours',
    description: 'Ancient temples, medieval villages, and UNESCO heritage sites.',
  },
  {
    icon: Waves,
    title: 'Beach Escapes',
    description: 'Secret coves, crystal waters, and Mediterranean paradise.',
  },
  {
    icon: Sparkles,
    title: 'Custom Experiences',
    description: 'Tailor-made itineraries designed around your dreams.',
  },
  {
    icon: Heart,
    title: 'Events & Weddings',
    description: 'Elegant transportation for your most special moments.',
  },
];

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium <span className="text-[#D4AF37]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Every journey crafted with care, every detail perfected
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#F5F1E8] p-8 rounded-lg hover:bg-[#D4AF37] transition-all duration-500 cursor-pointer hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] group-hover:bg-white transition-colors" />
              <service.icon className="w-12 h-12 text-[#D4AF37] group-hover:text-white mb-6 transition-colors" />
              <h3 className="text-xl mb-3 text-[#1A1A1A] group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-[#4A4A4A] group-hover:text-white/90 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
