import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-8 py-20 bg-[#0f0f0f] text-white"
    >
      
      <div data-aos="fade-right" className="flex flex-col items-center lg:items-start">
        <img
          src="contact.jpg" 
          
          className="w-60 h-60 object-cover rounded-full border-4 border-purple-500 shadow-lg"
        />
        <h2 className="text-2xl sm:text-3xl font-bold mt-6 text-purple-300">
          Let's Connect!
        </h2>
        <p className="text-gray-400 mt-2 text-center lg:text-left max-w-xs">
          Whether you want to collaborate or just say hi, my inbox is always open!
        </p>
      </div>

      
      <form
        data-aos="fade-left"
        className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent! (You can integrate with Formspree or EmailJS)');
        }}
      >
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Contact Me</h3>

        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
