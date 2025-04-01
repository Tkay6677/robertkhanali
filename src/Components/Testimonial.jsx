import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1470", // Placeholder: smiling woman
    quote:
      "Mr. Khan’s coaching transformed my mindset. I went from self-doubt to launching my dream business in just six months—his Law of Attraction techniques are pure magic!",
  },
  {
    name: "Amit Patel",
    role: "Corporate Executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1470", // Placeholder: professional man
    quote:
      "The mindfulness practices I learned from Mr. Khan brought balance to my hectic life. His energy healing sessions are a game-changer for stress relief.",
  },
  {
    name: "Lakshmi Nair",
    role: "Student",
    image: "https://images.unsplash.com/photo-1517841902196-4c2c6f7b0b0e?q=80&w=1470", // Placeholder: young woman studying
    quote:
      "His workshops on overcoming limiting beliefs gave me the confidence to pursue my goals. I’ve never felt more aligned with my true purpose—thank you, Mr. Khan!",
  },
  {
    name: "Rahul Verma",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1470", // Placeholder: creative man
    quote:
      "Mr. Khan’s chakra balancing course unlocked my creativity in ways I never imagined. His guidance is both inspiring and deeply transformative.",
  },
];

const Testimonial = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight drop-shadow-md">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white font-medium drop-shadow-md">
            Hear from those who’ve transformed their lives with Mr. Khan’s guidance.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-2xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-indigo-400"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;