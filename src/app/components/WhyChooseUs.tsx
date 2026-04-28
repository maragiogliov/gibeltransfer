import { motion } from "motion/react";
import { Shield, Clock, Globe, Star, Route, Heart } from 'lucide-react';
import { useInView } from './hooks/useInView';

const features = [
  {
    icon: Shield,
    title: 'Luxury Fleet',
    description: 'Premium Mercedes vehicles with climate control, WiFi, and ultimate comfort.',
  },
  {
    icon: Star,
    title: 'Local Expertise',
    description: 'Born and raised in Sicily. We know the stories behind every stone.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: "Your time is precious. We're always on time, every time.",
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'English, Italian, German—communicate in your comfort language.',
  },
  {
    icon: Route,
    title: 'Tailor-Made',
    description: 'Your journey, your way. Custom itineraries crafted just for you.',
  },
  {
    icon: Heart,
    title: '5-Star Hospitality',
    description: 'Sicilian warmth meets world-class service. Feel like family.',
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-white">
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
            Why Choose <span className="text-[#D4AF37]">Gibel Transfer</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Not just transport. An experience you will never forget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/10 rounded-full mb-6">
                <feature.icon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#1A1A1A]">{feature.title}</h3>
              <p className="text-[#4A4A4A] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
