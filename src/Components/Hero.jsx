const Hero = () => {
  return (
    <div className="relative pt-24 w-full h-full bg-[#4B0082]" id="home"> {/* Deep Indigo background */}
      {/* Background Image Layer */}
      <img
        src="/hero.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.3 }} // Reduced to 30% opacity for a darker effect
      />
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-[#FFD700] sm:text-5xl md:text-6xl">
            <span className="block">Ready to Start Your Journey into Self-Discovery?</span>
            {/* Uncomment and update if needed */}
            {/* <span className="block text-[#87CEEB]">
              Our support team is ready to guide you through this process. Our aim is to watch you grow into the person you are meant to be
            </span> */}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-[#F5F5F5] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our support team is ready to guide you through this process. Our aim is to watch you grow into the person you are meant to be.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-[#4B0082] text-[#FFD700] font-semibold rounded-md hover:bg-[#8A9A5B]"
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;