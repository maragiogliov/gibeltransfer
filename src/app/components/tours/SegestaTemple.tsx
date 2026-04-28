import { motion } from "motion/react";
import { Clock, MapPin, Users, Star, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Booking } from '../Booking';
import { useInView } from '../hooks/useInView';

export function SegestaTemple() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1664478526776-45a5d3479ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNpbHklMjBhbmNpZW50JTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3Njk3OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Segesta Temple"
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
              Segesta Temple <span className="text-[#D4AF37]">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Journey through 2,400 years of history at one of the world's most perfectly preserved Greek temples
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
              <p className="text-lg">Segesta</p>
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
            The <span className="text-[#D4AF37]">Experience</span>
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Stand in awe before the Doric temple of Segesta, a masterpiece of ancient Greek architecture that has stood untouched for over two millennia. Rising majestically on a hilltop overlooking the Sicilian countryside, this perfectly preserved monument speaks of a civilization that valued beauty, harmony, and divine proportion.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Unlike many ancient ruins, Segesta's temple remains remarkably intact—its 36 columns still supporting the triangular pediments, its golden limestone glowing in the Mediterranean sun exactly as it did when first erected in 420 BC.
            </p>
          </div>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">What You'll Discover</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
              <p className="text-[#4A4A4A]">
                <strong>The Unfinished Temple:</strong> Explore the mystery of why this magnificent structure was never completed, its columns still unfluted after 2,400 years
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
              <p className="text-[#4A4A4A]">
                <strong>The Ancient Theatre:</strong> Climb to the Greek theatre carved into the hillside, where 4,000 spectators once gathered with sweeping views of the valley below
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
              <p className="text-[#4A4A4A]">
                <strong>Elymian History:</strong> Learn about the mysterious Elymians, the indigenous people who built this temple to an unknown deity
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
              <p className="text-[#4A4A4A]">
                <strong>Photography Paradise:</strong> Capture stunning photographs at golden hour, when the limestone columns glow against the Sicilian sunset
              </p>
            </li>
          </ul>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Tour Highlights</h3>
          <div className="bg-[#F5F1E8] p-8 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Comfortable private transfer from your location
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Skip-the-line entrance to the archaeological park
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Expert local guide sharing hidden stories and legends
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Time to explore at your own pace
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Bottled water and refreshments included
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-4">Know Before You Go</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Wear comfortable walking shoes</li>
              <li>• Bring sun protection (hat, sunscreen)</li>
              <li>• The site involves uphill walking</li>
              <li>• Best visited in early morning or late afternoon</li>
              <li>• Photography is allowed and encouraged</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Booking />
    </div>
  );
}
