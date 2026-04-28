import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3
              className="font-serif text-3xl text-[#D4AF37] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gibel Transfer
            </h3>
            <p className="text-white/70 leading-relaxed">
              Your gateway to the soul of Sicily. Premium transfers and unforgettable tours in Belice
              Valley and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#tours" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a
                  href="tel:+393331234567"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  +39 333 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@gibeltransfer.com"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  info@gibeltransfer.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-white/70">Belice Valley, Salemi - Gibellina, Sicily</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} Gibel Transfer. All rights reserved. | Crafted with{' '}
            <span className="text-[#D4AF37]">❤</span> in Sicily
          </p>
        </div>
      </div>
    </footer>
  );
}
