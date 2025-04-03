const AboutUs = () => {
  return (
    <div className="py-24 relative" id="about">
      {/* Section-Specific Overlay to Darken Background */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg">
            About Us
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-lg text-white font-medium drop-shadow-lg">
            Meet Mr. Khan, a seasoned expert in the realm of personal growth and transformation. As a highly respected Law of Attraction teacher and counselor, Mr. Khan has dedicated his career to empowering individuals to unlock their full potential and manifest their deepest desires.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target h-8 w-8 text-[#4B0082]"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white drop-shadow-lg">
              Our Mission
            </h3>
            <p className="mt-2 text-white font-medium drop-shadow-lg">
              We strive to guide our clients and students through the transformative power of mindset, energy, and intention, blending time-honored spiritual wisdom with practical tools for personal growth.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award h-8 w-8 text-[#4B0082]"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white drop-shadow-lg">
              Our Vision
            </h3>
            <p className="mt-2 text-white font-medium drop-shadow-lg">
              We envision a world where every individual awakens to their boundless potential, living in harmony with their truest self and the universe around them.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
            Founder & Leadership
          </h3>
          <div className="mt-6 flex flex-col items-center">
            <img src="/profile1.jpg" alt="Mr. Khan" className="w-32 h-32 rounded-full shadow-md border-4 border-[#FFD700]" />
            <p className="mt-4 text-lg font-medium text-[#FFD700] drop-shadow-lg">
              Mr. Khan – Expert in Personal Growth and Transformation
            </p>
            <p className="mt-2 text-white max-w-3xl font-medium drop-shadow-lg">
              As a highly respected Law of Attraction teacher and counselor, Mr. Khan has dedicated his career to empowering individuals to unlock their full potential and manifest their deepest desires. With a profound understanding of the intricate dynamics between mindset, energy, and reality, Mr. Khan guides his clients and students in harnessing the power of their thoughts, emotions, and intentions to create a life of purpose, abundance, and fulfillment.
            </p>
            <p className="mt-2 text-white max-w-3xl font-medium drop-shadow-lg">
              Through his compassionate and insightful approach, Mr. Khan has helped countless individuals break free from limitations, overcome obstacles, and achieve their goals. His expertise spans the realms of mindfulness, self-awareness, and energy alignment, allowing him to offer a holistic and supportive environment for personal growth and transformation.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-white drop-shadow-lg">
            Services
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["One-on-One Coaching", "Mindfulness and Meditation Training", "Energy Healing and Alignment", "Relationship Coaching"].map((service, index) => (
              <div key={index} className="bg-white/90 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-lg font-semibold text-[#4B0082] drop-shadow-md">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
            Our Achievements
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Transformed Over 10,000 Lives", "Pioneered Interfaith Energy Healing", "Led 100+ Law of Attraction Workshops", "Featured in Media Outlets"].map((achievement, index) => (
              <div key={index} className="bg-white/90 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 drop-shadow-md">
                  ✅ {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;