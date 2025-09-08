import React from 'react';
import servizi from '../data/servizi.json';

export default function Servizi() {
  return (
    <section id="Servizi" className="py-12 bg-ncvColor-blue/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-[80px] mt-[30px]">I nostri servizi</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servizi.map(servizio => (
            <div key={servizio.id} className="p-12 bg-white rounded-lg shadow hover:shadow-lg transition hover:shadow-ncvColor-blue/40">
              <h3 className="text-xl font-semibold mb-2">{servizio.name}</h3>
              <p className="text-gray-600">{servizio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

