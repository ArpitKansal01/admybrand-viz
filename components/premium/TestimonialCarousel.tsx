"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel = ({ 
  testimonials, 
  autoPlay = true,
  interval = 5000 
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-12 h-12 ring-2 ring-white/50">
                  <AvatarImage src={currentTestimonial.image} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Testimonial Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export { TestimonialCarousel };