import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Law of Attraction Mastery",
    instructor: "Mr. Khan",
    duration: "2 Hrs",
    image: "/offering2.jpg", // Placeholder: serene sunset over mountains
    description: "Learn to harness the power of intention to manifest your dreams."
  },
  {
    title: "Mindfulness & Meditation Basics",
    instructor: "Mr. Khan",
    duration: "1.5 Hrs",
    image: "/offering5.jpg", // Placeholder: person meditating by a lake
    description: "Cultivate inner peace and self-awareness through guided practices."
  },
  {
    title: "Energy Healing Foundations",
    instructor: "Mr. Khan",
    duration: "2.5 Hrs",
    image: "/offering6.jpg", // Placeholder: glowing hands with energy aura
    description: "Balance your energy for physical and spiritual well-being."
  },
  {
    title: "Chakra Balancing Techniques",
    instructor: "Mr. Khan",
    duration: "2 Hrs",
    image: "/offering3.jpg", // Placeholder: colorful chakra illustration
    description: "Activate and align your chakras for holistic growth."
  },
  {
    title: "Overcoming Limiting Beliefs",
    instructor: "Mr. Khan",
    duration: "1.5 Hrs",
    image: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?q=80&w=1470", // Placeholder: person breaking free from chains
    description: "Identify and release negative thought patterns holding you back."
  },
  {
    title: "Spiritual Journaling & Reflection",
    instructor: "Mr. Khan",
    duration: "1.5 Hrs",
    image: "/offering4.jpg", // Placeholder: journal with candlelight
    description: "Deepen your spiritual journey through guided writing exercises."
  },
  {
    title: "Interfaith Spiritual Exploration",
    instructor: "Mr. Khan",
    duration: "2 Hrs",
    image: "/offering7.jpg", // Placeholder: diverse religious symbols in harmony
    description: "Explore spiritual paths from various traditions with respect."
  },
  {
    title: "Goal Setting with Intention",
    instructor: "Mr. Khan",
    duration: "1.5 Hrs",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470", // Placeholder: vision board with goals
    description: "Set and achieve meaningful goals using Law of Attraction principles."
  },
];

const Courses = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
          Our Transformative Courses
        </h2>
        <p className="mt-4 text-lg text-gray-600 font-medium">
          Unlock your potential with courses designed for personal and spiritual growth.
        </p>
      </div>
      <div className="relative mt-10 max-w-7xl mx-auto px-6">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-indigo-400"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                {/* <p className="text-indigo-600 font-medium">
                  Instructor: {course.instructor}
                </p> */}
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {course.description}
                </p>
                {/* <p className="text-gray-500 text-sm mt-2">
                  Duration: {course.duration}
                </p> */}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Courses;