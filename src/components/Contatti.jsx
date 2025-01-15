import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-teal-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow text-gray-700">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
