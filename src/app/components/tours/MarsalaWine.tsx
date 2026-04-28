import { motion } from "motion/react";
import { Clock, MapPin, Users, Star, ArrowLeft, Wine } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Booking } from '../Booking';
import { useInView } from '../hooks/useInView';

export function MarsalaWine() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8c2ljaWx5JTIwbGFuZHNjYXBlJTIwc3Vuc2V0JTIwdmluZXlhcmRzfGVufDF8fHx8MTc3Njk3OTE3OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Marsala Vineyards"
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
              Marsala Wine <span className="text-[#D4AF37]">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the golden nectar that has captivated wine lovers for centuries
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
              <p className="text-lg">6 Hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <p className="text-sm text-[#4A4A4A]">Location</p>
              <p className="text-lg">Marsala</p>
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
            The Liquid <span className="text-[#D4AF37]">Gold</span> of Sicily
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              In 1773, an English merchant named John Woodhouse discovered Marsala wine and changed Sicilian history forever. Today, this fortified wine—with its complex amber hues and notes of dried fruit, caramel, and toasted almonds—rivals the finest ports and sherries of the world.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Journey through sun-drenched vineyards to historic cellars where oak barrels hold wines aging for decades. Learn the ancient art of fortification, taste vintages spanning generations, and discover why Marsala captured the hearts of nobility across Europe.
            </p>
          </div>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">Your Wine Experience</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Historic Wineries:</strong> Visit prestigious estates like Florio, Donnafugata, or Pellegrino, where tradition meets innovation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Barrel Cellars:</strong> Walk through cathedral-like aging rooms filled with thousands of oak barrels, some over 100 years old
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Wine Tasting:</strong> Sample 5-7 premium Marsala wines, from dry Vergine to sweet Superiore, paired with local delicacies
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Vineyard Tour:</strong> Explore the grillo and catarratto vineyards that produce the base wines for this golden nectar
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A]">
                <strong>Historic Center:</strong> Stroll through Marsala's baroque center and visit its impressive cathedral
              </p>
            </li>
          </ul>

          <h3 className="text-3xl mb-6 text-[#1A1A1A]">What's Included</h3>
          <div className="bg-[#F5F1E8] p-8 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Private luxury transfer to Marsala wine country
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Guided tours of 2-3 premium wineries
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Professional wine tasting with sommelier
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Traditional Sicilian lunch with wine pairings
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Opportunity to purchase wines at cellar prices
              </li>
              <li className="flex items-center gap-3 text-[#4A4A4A]">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                Expert guide sharing wine history and techniques
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-4">Good to Know</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Minimum age: 18 years for wine tasting</li>
              <li>• Vegetarian lunch options available upon request</li>
              <li>• Cool cellars—bring a light jacket</li>
              <li>• Photography welcome in vineyards and cellars</li>
              <li>• Wine purchases can be shipped internationally</li>
              <li>• Designated driver included in all tours</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Booking />
    </div>
  );
}
