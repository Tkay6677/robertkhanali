import React from "react";

const Contact = () => {
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
                    healerkhanali@gmail.com {/* Replace with actual email */}
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
                  <p className="mt-1 text-gray-600">
                    +91 98765 43210 {/* Replace with actual number */}
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
                  className="lucide lucide-map-pin h-7 w-7 text-yellow-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800">Office</h3>
                  <p className="mt-1 text-gray-600">
                    1743 Bayou Bleu Drive Lafayette, LA 70508 {/* Replace with actual address */}
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
                    <a
                      href="https://www.facebook.com/share/1A5RyUJP87/" // Replace with actual link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@khan_ali094?_t=ZT-8vAKCt72GlC&_r=1" // Replace with actual link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.55 2.89 2.89 0 0 1 2.89 2.89V6.69h-3.45V4.25a4.83 4.83 0 0 0 3.77 4.44h3.45v3.45a8.89 8.89 0 0 0-5.2-1.74 8.89 8.89 0 0 0-8.89 8.89 8.89 8.89 0 0 0 8.89 8.89 8.89 8.89 0 0 0 8.89-8.89V6.69z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.quora.com/profile/Robert-Khan-Ali?ch=10&oid=1334926317&share=d31bb5d6&srid=uaqyez&target_type=user" // Replace with actual link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.86 15.93c-1.23.37-2.51.58-3.86.58-3.31 0-6-1.69-6-4.5s2.69-4.5 6-4.5c1.35 0 2.63.21 3.86.58-.24 1.02-.36 2.11-.36 3.24 0 1.13.12 2.22.36 3.24zm4.64-1.93c-.09.45-.23.88-.41 1.28-.62 1.4-1.67 2.38-3.23 2.38-1.56 0-2.61-.98-3.23-2.38-.18-.4-.32-.83-.41-1.28-.09-.45-.14-.92-.14-1.4 0-.48.05-.95.14-1.4.09-.45.23-.88.41-1.28.62-1.4 1.67-2.38 3.23-2.38 1.56 0 2.61.98 3.23 2.38.18.4.32.83.41 1.28.09.45.14.92.14 1.4 0 .48-.05.95-.14 1.4z" />
                      </svg>
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
            <form className="grid grid-cols-1 gap-y-6">
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
                  value=""
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
                  value=""
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
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;