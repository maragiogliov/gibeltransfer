import { motion } from "motion/react";
import { Clock, MapPin, Users, Star, ArrowLeft, Castle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Booking } from '../Booking';
import { useInView } from '../hooks/useInView';

export function SalemiHidden() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1460841054914-ac9be41c237a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxzaWNpbHklMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjB2aW5leWFyZHN8ZW58MXx8fHwxNzc2OTc5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Salemi Historic Center"
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
              Salemi <span className="text-[#D4AF37]">Hidden Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the authentic soul of Sicily in our beloved hometown
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
              <p className="text-lg">Salemi</p>
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
            Our Home, <span className="text-[#D4AF37]">Your Discovery</span>
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              This is where our story begins. Salemi, our beloved hometown, is not on the typical tourist trail—and that is precisely its magic. Here, in the heart of the Belice Valley, ancient stones remember Norman kings, Saracen warriors, and Garibaldi's revolutionary army. Every narrow street holds a story we grew up with.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Let us show you the Salemi we know: the hidden courtyards where our grandmothers still hang laundry, the bakery that has used the same wood oven for 200 years, the view from the castle tower that takes your breath away every single time. This is Sicily as it truly is—authentic, warm, unforgettable.
            </p>
          </div>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">What You Will Experience</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <Castle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Norman Castle:</strong> Climb to the fortress where Garibaldi proclaimed himself dictator of Sicily in 1860, with panoramic views across the valley
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Castle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Historic Ghetto:</strong> Wander the medieval Jewish quarter with its labyrinthine alleys and centuries-old architecture
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Castle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Baroque Churches:</strong> Marvel at the ornate Chiesa Madre and San Giuseppe, masterpieces of Sicilian baroque art
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Castle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Local Artisans:</strong> Meet traditional craftsmen keeping ancient techniques alive—ceramics, basket weaving, bread making
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Castle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Pane di Salemi:</strong> Taste our town's famous bread, baked in wood-fired ovens using ancient grains and time-honored methods
              </p>
            </li>
          </ul>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Insider Experience Includes</h3>
          <div className="bg-[#F5F1E8] p-8 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Personal tour by a true local—we will share stories only residents know
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Visit to the Norman Castle and Museum of the Risorgimento
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Traditional food tasting: bread, cheese, wine, olive oil
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Meet local artisans and learn traditional crafts
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Coffee or aperitivo in the main square, watching daily life unfold
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Access to places tourists never find
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-4">Local Tips</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Thursday is market day—the town comes alive with vendors and locals</li>
              <li>• The castle climb involves stairs—wear comfortable shoes</li>
              <li>• Best combined with nearby Gibellina for a full-day experience</li>
              <li>• Bring an appetite—our food tastings are generous</li>
              <li>• Less crowded than major tourist sites—authentic experience guaranteed</li>
              <li>• We may introduce you to our friends and family!</li>
            </ul>
          </div>

          <div className="border-l-4 border-[#D4AF37] pl-6 py-4 my-8 bg-[#F5F1E8] rounded-r-lg pr-6">
            <p className="text-[#4A4A4A] italic text-lg mb-2">
              "Salemi is our home. When you visit with us, you are not just a tourist—you are our guest. We will show you the Sicily we love, the places that shaped us, the flavors that define us."
            </p>
            <p className="text-[#D4AF37]">— Your Gibel Transfer Family</p>
          </div>
        </motion.div>
      </div>

      <Booking />
    </div>
  );
}
