import React from 'react';

export default function Hero(props) {
  return (
    <section className="bg-teal-600 text-white py-16">
      <div className="container mx-auto px-4 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        <div className="lg:max-w-lg">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Compassionate Care for Your Beloved Pets
          </h2>
          <p className="text-lg sm:text-xl font-light mb-6">
            We are dedicated to providing top-quality veterinary services for your furry family members.
          </p>
          <button
            name="Contatti"
            onClick={props.handleClick}
            className="bg-white text-teal-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            Book an Appointment
          </button>
        </div>
        <img
          src="https://slidemodel.com/wp-content/uploads/70029-01-veterinary-template-4.jpg"
          alt="Veterinary Care"
          className="hidden lg:block rounded shadow-lg"
          width="600px"
        />
      </div>
    </section>
  );
};

