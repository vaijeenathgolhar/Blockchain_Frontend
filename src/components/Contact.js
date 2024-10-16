import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add a call to a backend service here.
    setFormSubmitted(true);
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-200 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Neumorphic Left Div with 3D hover effect */}
            <div className="p-6 mr-2 bg-gray-300 rounded-xl shadow-inner transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation.
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold">
                  +44 1234567890
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold">
                  info@acme.org
                </div>
              </div>
            </div>

            {/* Neumorphic Form with 3D hover effect */}
            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center bg-gray-300 rounded-xl shadow-inner transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              {formSubmitted ? (
                <div className="text-green-500 font-bold text-lg">
                  Thank you! We'll get back to you soon.
                </div>
              ) : (
                <>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-200 border-none shadow-md text-gray-800 font-semibold transition transform duration-300 ease-in-out focus:shadow-lg focus:outline-none hover:shadow-lg hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col mt-4">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-200 border-none shadow-md text-gray-800 font-semibold transition transform duration-300 ease-in-out focus:shadow-lg focus:outline-none hover:shadow-lg hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col mt-4">
                    <label htmlFor="tel" className="hidden">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      placeholder="Telephone Number"
                      required
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-200 border-none shadow-md text-gray-800 font-semibold transition transform duration-300 ease-in-out focus:shadow-lg focus:outline-none hover:shadow-lg hover:scale-105"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg mt-4 shadow-md hover:shadow-lg hover:scale-105 transition transform ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
