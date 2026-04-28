import { useState } from 'react';
import { motion } from "motion/react";
import { Send } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Booking() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    pickup: '',
    destination: '',
    date: '',
    passengers: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'd like to book a transfer:\nName: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nPickup: ${formData.pickup}\nDestination: ${formData.destination}\nDate: ${formData.date}\nPassengers: ${formData.passengers}`;
    window.open(`https://wa.me/393331234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" ref={ref} className="py-24 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Start Your <span className="text-[#D4AF37]">Sicilian Journey</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Book your transfer or tour. We'll respond within minutes.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">WhatsApp Number</label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="+39 333 123 4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 mb-2">Pickup Location</label>
              <input
                type="text"
                required
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="Palermo Airport"
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">Destination</label>
              <input
                type="text"
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="Salemi"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/90 mb-2">Date & Time</label>
              <input
                type="datetime-local"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">Passengers</label>
              <select
                required
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="">Select passengers</option>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5+">5+ Passengers</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-4 rounded-lg hover:bg-[#C5A028] transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-2xl"
          >
            <Send className="w-5 h-5" />
            <span className="tracking-wide">Book via WhatsApp</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
