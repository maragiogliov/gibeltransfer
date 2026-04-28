import { motion } from "motion/react";
import { Clock, MapPin, Users, Star, ArrowLeft, Sunset } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Booking } from '../Booking';
import { useInView } from '../hooks/useInView';

export function SaltPansSunset() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635860939201-076792531a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNpbHklMjBzYWx0JTIwcGFucyUyMG1hcnNhbGF8ZW58MXx8fHwxNzc2OTc5MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Salt Pans at Sunset"
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
              Salt Pans <span className="text-[#D4AF37]">Sunset</span> Tour
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where pink waters meet golden skies and ancient windmills tell stories of the sea
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
              <p className="text-lg">4 Hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Location</p>
              <p className="text-lg">Trapani</p>
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
            A Sunset That Defies <span className="text-[#D4AF37]">Belief</span>
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Between Trapani and Marsala lies one of Sicily's most magical landscapes: the Saline di Trapani, ancient salt pans that have harvested sea salt for over 700 years. As the sun descends toward the Mediterranean, something extraordinary happens—the shallow basins turn pink and gold, windmills cast long shadows, and the world seems to hold its breath.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              This is not just a sunset. This is poetry written in light and salt, a masterpiece painted anew each evening, a moment that will etch itself into your memory forever.
            </p>
          </div>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">The Magic Unfolds</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <Sunset className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Pink Waters:</strong> Watch as microorganisms in the salt basins create surreal pink and rose-colored pools
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Sunset className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Historic Windmills:</strong> See centuries-old windmills silhouetted against the sunset, once used to pump water and grind salt
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Sunset className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Salt Mountains:</strong> Walk among white pyramids of harvested salt, covered with terracotta tiles
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Sunset className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Egadi Islands:</strong> Witness the sun setting over the Egadi archipelago in a blaze of orange and gold
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Sunset className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Salt Museum:</strong> Learn the ancient craft of salt harvesting and its importance to Sicilian history
              </p>
            </li>
          </ul>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Your Journey Includes</h3>
          <div className="bg-[#F5F1E8] p-8 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Perfectly timed departure to arrive before golden hour
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Visit to the Salt Museum and working windmill
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Guided walk through active salt pans
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Premium sunset viewing location, away from crowds
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Prosecco and local snacks as the sun sets
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Artisan sea salt samples to take home
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-4">Photography Paradise</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Bring your camera—this is one of Sicily's most photogenic spots</li>
              <li>• Best light occurs 30 minutes before sunset</li>
              <li>• Reflections in the salt pans create mirror-like effects</li>
              <li>• Wear comfortable shoes for walking on salt paths</li>
              <li>• Sunglasses recommended during golden hour</li>
              <li>• Weather-dependent—we monitor conditions for optimal experience</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Booking />
    </div>
  );
}
