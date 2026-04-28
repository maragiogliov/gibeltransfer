import { motion } from "motion/react";
import { Star } from 'lucide-react';
import { useInView } from './hooks/useInView';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    text: 'Absolutely magical. Our driver wasn\'t just a driver—he was a storyteller, a guide, a friend. The sunset at the salt pans will stay with me forever.',
    rating: 5,
  },
  {
    name: 'Hans K.',
    location: 'Berlin, Germany',
    text: 'Professional, punctual, passionate. They turned our airport transfer into a mini tour of Sicily. The Mercedes was spotless and comfortable.',
    rating: 5,
  },
  {
    name: 'Maria R.',
    location: 'Milan, Italy',
    text: 'Ho scoperto la Sicilia in un modo completamente nuovo. Esperienza incredibile, servizio impeccabile. Tornerò sicuramente!',
    rating: 5,
  },
  {
    name: 'John & Emily T.',
    location: 'New York, USA',
    text: 'We used Gibel Transfer for our wedding. They made our special day even more special. Elegant, reliable, and so attentive to detail.',
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, inView } = useInView();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section ref={ref} className="py-24 bg-[#F5F1E8]">
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
            What Our Guests <span className="text-[#D4AF37]">Say</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Stories from travelers who discovered Sicily with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-sm text-[#D4AF37]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
