import { motion } from "motion/react";
import { Clock, MapPin, Users, Star, ArrowLeft, Palette } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Booking } from '../Booking';
import { useInView } from '../hooks/useInView';

export function GibellinaArt() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1668212145926-8725e292145d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzaWNpbHklMjBhbmNpZW50JTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3Njk3OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gibellina Contemporary Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <a
          href="/#tours"
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Tours</span>
        </a>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="font-serif text-5xl md:text-7xl text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gibellina <span className="text-[#D4AF37]">Art Route</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where tragedy became art and ruins transformed into the world's largest outdoor museum
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Duration</p>
              <p className="text-lg">3 Hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Location</p>
              <p className="text-lg">Gibellina</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Group Size</p>
              <p className="text-lg">Private</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Rating</p>
              <p className="text-lg">5.0/5.0</p>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-serif text-4xl text-[#1A1A1A] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Ruins to <span className="text-[#D4AF37]">Renaissance</span>
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              On January 14, 1968, an earthquake measuring 6.4 destroyed the ancient town of Gibellina, erasing centuries of history in seconds. But from devastation came vision—and Gibellina became one of the most ambitious art experiments in modern history.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Artist Alberto Burri transformed the ruins of old Gibellina into the "Cretto"—a vast white concrete memorial that traces the ghost of the destroyed town. Meanwhile, the new Gibellina rose as a living museum, where world-renowned artists created monumental works that blend seamlessly with daily life.
            </p>
          </div>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Art That Moves the Soul</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Il Cretto di Burri:</strong> Walk through Alberto Burri's monumental land art piece—a white concrete labyrinth covering 85,000 square meters of the old town
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Stella di Pietro Consagra:</strong> Marvel at the enormous white star sculpture that marks the town entrance
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Sistema delle Piazze:</strong> Explore five interconnected squares, each designed by different artists creating a unique urban experience
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Church of San Lorenzo:</strong> Visit Ludovico Quaroni's modernist church with its distinctive geodesic dome
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Open-Air Museum:</strong> Discover sculptures and installations by Mario Schifano, Arnaldo Pomodoro, and other masters
              </p>
            </li>
          </ul>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Tour Experience</h3>
          <div className="bg-[#F5F1E8] p-8 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Guided walk through Il Cretto with historical context
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Tour of contemporary art installations in new Gibellina
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Visit to the Museum of Mediterranean Memory
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Stories of resilience and rebirth from local guides
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Coffee break in the modernist town center
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-4">Essential Information</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Wear comfortable walking shoes for Il Cretto (uneven concrete surfaces)</li>
              <li>• Bring sun protection—minimal shade at the memorial site</li>
              <li>• Best visited in morning or late afternoon light</li>
              <li>• Profoundly moving experience—allow time for reflection</li>
              <li>• Photography enthusiasts will find unique perspectives</li>
              <li>• Combination with nearby Salemi highly recommended</li>
            </ul>
          </div>

          <div className="border-l-4 border-[#D4AF37] pl-6 py-4 my-8">
            <p className="text-[#4A4A4A] italic text-lg">
              "Gibellina is not just a town rebuilt after tragedy. It is a testament to the human spirit—our capacity to transform grief into beauty, destruction into creation, and loss into enduring memory."
            </p>
          </div>
        </motion.div>
      </div>

      <Booking />
    </div>
  );
}
