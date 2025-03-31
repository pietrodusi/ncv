import React from 'react';
import team from '../data/team.json';

export default function ChiSiamo () {

  return (
    <section id="about" className="py-12 bg-white space-y-[100px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        <img
          src="https://slidemodel.com/wp-content/uploads/70029-01-veterinary-template-4.jpg"
          alt="Veterinarian with a pet"
          className="rounded shadow-lg w-full lg:w-1/2"
        />
        <div className="lg:max-w-lg">
          <h2 className="text-3xl font-serif font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Paws & Care, we pride ourselves on providing exceptional veterinary services. Our experienced team
            is dedicated to ensuring the health and happiness of your pets.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-[80px]">Il nostro Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={member.id} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} sm:items-center gap-6 mx-5`}
            >
              <div className="sm:w-1/2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded shadow-lg object-cover w-full h-[500px]"
                />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-center m-3">
                <h1 className={`text-2xl font-bold ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} sm:items-center gap-6 text-center mb-3`}>{member.name}</h1>
                <h2 className={`text-xl ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} sm:items-center gap-6 text-center mb-2`}>{member.position}</h2>
                <p className="text-gray-700 text-justify">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

