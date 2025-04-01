import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Angaye Seimokumo J.",
    role: "Director, Programmer",
    image: "/images/Angaye Seimokumo.jpg",
    description: "Leading with innovation, developing cutting-edge software solutions, and driving the team towards technological excellence."
  },

  {
    name: "Dr. Desmond (Rowland) Eteh (Ph.D)",
    role: "Data Scientist/Geospatial Analyst",
    image: "/images/Dr Roland(Desmond) Eteh.png",
    description: "Expert in data science and geographic information systems, transforming data into actionable insights for impactful decision-making."
  },
  
  {
    name: "Morris Gift",
    role: "Instructor",
    image: "/images/Morris Gift.jpg",
    description: "Passionate educator, equipping learners with hands-on programming and technical skills to excel in the ICT industry."
  },

  {
    name: "Dekpen Tari",
    role: "Senior Developer",
    image: "/images/Tari.jpg",
    description: "Experienced software engineer, crafting robust applications and leading development projects with precision and efficiency."
  },

  {
    name: "Oruene Azibato",
    role: "Instructor and Research Fellow",
    image: "https://img.freepik.com/premium-vector/portrait-young-african-man-full-face_276162-169.jpg?w=740",
    description: "Dedicated researcher and instructor, bridging the gap between academia and real-world technology applications."
  },

  {
    name: "Misongo Favour",
    role: "Senior Developer",
    image: "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    description: "Expert in software architecture, designing scalable solutions that power modern applications and digital experiences."
  },
  {
    name: "Ebimie Jonathan",
    role: "Senior Developer",
    image: "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    description: "Passionate technologist, leveraging cutting-edge tools to build secure, scalable, and future-ready applications"
  },
  {
    name: "Orukaria Tokoni",
    role: "Senior Developer",
    image: "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    description: "Innovative problem solver, engineering high-performance software solutions that drive efficiency and enhance user experience."
  }
];


const Team = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Staffs</h2>
        <p className="mt-4 text-lg text-gray-700">A group of passionate individuals dedicated to making a difference.</p>
      </div>
      <div className="relative mt-10 max-w-7xl mx-auto px-6">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
          {teamMembers.map((member, index) => (
            <div key={index} className="min-w-[300px] bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-40 object-fit" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-500 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View More
              </button>
            </div>
            
          ))}
        </div>
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Team;
