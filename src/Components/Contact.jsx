import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faQuora, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form submission status
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    // Send email using EmailJS
    emailjs
      .send(
        "service_op7z8fa", // Replace with your EmailJS Service ID (e.g., service_abc123)
        "template_qdaxqpp", // Replace with your EmailJS Template ID (e.g., template_def456)
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "a4poa-nWkAlpR-sn_" // Replace with your EmailJS User ID (e.g., user_ghi789)
      )
      .then(
        (result) => {
          setStatus("Message sent successfully! We’ll get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setIsSubmitting(false);
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="py-24 bg-gradient-to-b from-purple-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-purple-900 sm:text-4xl tracking-tight">
            Connect with Mr. Khan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-medium">
            Reach out to begin your journey of transformation and abundance.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="space-y-10">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-7 w-7 text-purple-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="mt-1 text-gray-600">
                    {/* Since you don’t have access to healerkhanali@gmail.com, direct users to the form */}
                    healerkhanali@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-7 w-7 text-indigo-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="mt-1 text-gray-600">+16692503102</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-7 w-7 text-yellow-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Office</h3>
                  <p className="mt-1 text-gray-600">
                    1743 Bayou Bleu Drive Lafayette, LA 70508
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe h-7 w-7 text-blue-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
                  <div className="mt-2 flex space-x-4">
                    {/* <a
                      href="https://www.facebook.com/share/1A5RyUJP87/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                    </a> */}
                    <a
                      href="https://www.tiktok.com/@khan_ali094?_t=ZT-8vAKCt72GlC&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.quora.com/profile/Robert-Khan-Ali?ch=10&oid=1334926317&share=d31bb5d6&srid=uaqyez&target_type=user"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faQuora} className="h-6 w-6" />
                    </a>
                    <a
                      href="https://wa.me/+16692503102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock h-7 w-7 text-green-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM <br />
                    Saturday: 10:00 AM - 2:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 py-3 px-5 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="mt-1 block w-full rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 py-3 px-5 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Send a message"
                  rows="4"
                  className="mt-1 block w-full rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 px-5 py-5 transition-all duration-300"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                    className="lucide lucide-send ml-2 h-5 w-5"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </button>
              </div>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;