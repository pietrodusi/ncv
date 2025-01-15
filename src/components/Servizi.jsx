import React from 'react';
import servizi from '../data/servizi.json';

export default function Servizi() {
  const services = [
    { id: 1, name: 'Routine Checkups', description: 'Regular health assessments to keep your pet healthy.' },
    { id: 2, name: 'Vaccinations', description: 'Prevent diseases with timely vaccinations.' },
    { id: 3, name: 'Surgery', description: 'Advanced surgical care when your pet needs it most.' },
    { id: 4, name: 'Dental Care', description: 'Comprehensive dental services for your pet’s oral health.' },
    { id: 5, name: 'Nutrition Advice', description: 'Personalized diet plans for optimal health.' },
    { id: 6, name: 'Emergency Care', description: '24/7 emergency support for critical situations.' },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servizi.map(servizio => (
            <div key={servizio.id} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{servizio.name}</h3>
              <p className="text-gray-600">{servizio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

