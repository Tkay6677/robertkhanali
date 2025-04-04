import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470", // Placeholder: young woman studying
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
  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show 3 slides at a time on large screens
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval (3 seconds)
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens (lg)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (md)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-24 relative" id="testimonials">
      {/* Section-Specific Overlay to Darken Background */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight drop-shadow-lg">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white font-medium drop-shadow-lg">
            Hear from those who’ve transformed their lives with Mr. Khan’s guidance.
          </p>
        </div>
        <div className="mt-20">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div
                  className="bg-white/90 rounded-2xl shadow-lg p-6 transform transition-all duration-300 border-t-4 border-indigo-400"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 drop-shadow-md">
                        {testimonial.name}
                      </h3>
                      <p className="text-indigo-600 text-sm font-medium drop-shadow-md">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed font-medium drop-shadow-md">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;