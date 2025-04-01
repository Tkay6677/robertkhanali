import "./App.css";
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import Courses from "./Components/Course";
import Gallery from "./Components/Gallery";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div
      className="min-h-screen bg-[url('/offering1.jpg')] bg-cover bg-center bg-fixed bg-no-repeat relative"
    >
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Service />
        <Courses />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}

export default App;