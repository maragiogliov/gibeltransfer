import { motion } from "motion/react";
import { ArrowRight } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const tours = [
  {
    title: 'Segesta Temple Experience',
    description: 'Stand before one of the world\'s best-preserved Greek temples, untouched for 2,400 years.',
    image: 'https://images.unsplash.com/photo-1664478526776-45a5d3479ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNpbHklMjBhbmNpZW50JTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3Njk3OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 hours',
    link: '/tours/segesta-temple',
  },
  {
    title: 'Erice Medieval Escape',
    description: 'A hilltop medieval town where time stopped. Cobblestones, ancient walls, endless views.',
    image: 'https://images.unsplash.com/photo-1659421223079-2c5bf11ed2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzaWNpbHklMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjB2aW5leWFyZHN8ZW58MXx8fHwxNzc2OTc5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '5 hours',
    link: '/tours/erice-escape',
  },
  {
    title: 'Marsala Wine Journey',
    description: 'Century-old cellars, golden fortified wines, and stories of tradition.',
    image: 'https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8c2ljaWx5JTIwbGFuZHNjYXBlJTIwc3Vuc2V0JTIwdmluZXlhcmRzfGVufDF8fHx8MTc3Njk3OTE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '6 hours',
    link: '/tours/marsala-wine',
  },
  {
    title: 'Salt Pans Sunset Tour',
    description: 'Windmills, pink waters, and a sunset that will make you believe in magic.',
    image: 'https://images.unsplash.com/photo-1635860939201-076792531a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNpbHklMjBzYWx0JTIwcGFucyUyMG1hcnNhbGF8ZW58MXx8fHwxNzc2OTc5MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 hours',
    link: '/tours/salt-pans-sunset',
  },
  {
    title: 'Gibellina Art Route',
    description: 'Contemporary art installations rising from earthquake ruins. Haunting and beautiful.',
    image: 'https://images.unsplash.com/photo-1668212145926-8725e292145d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzaWNpbHklMjBhbmNpZW50JTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3Njk3OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3 hours',
    link: '/tours/gibellina-art',
  },
  {
    title: 'Salemi Hidden Beauty',
    description: 'Norman castle, baroque churches, and streets that whisper history.',
    image: 'https://images.unsplash.com/photo-1460841054914-ac9be41c237a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxzaWNpbHklMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjB2aW5leWFyZHN8ZW58MXx8fHwxNzc2OTc5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 hours',
    link: '/tours/salemi-hidden',
  },
];

export function Tours() {
  const { ref, inView } = useInView();

  return (
    <section id="tours" ref={ref} className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Unforgettable <span className="text-[#D4AF37]">Journeys</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Each tour is a gateway to Sicily's soul—ancient, beautiful, forever captivating
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <a href={tour.link} className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-[#D4AF37] mb-2 tracking-wide uppercase">{tour.duration}</p>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {tour.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">{tour.description}</p>
                <div className="flex items-center text-[#D4AF37] group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
