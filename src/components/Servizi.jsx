import React from 'react';
import servizi from '../data/servizi.json';

export default function Servizi() {
  return (
    <section id="Servizi" className="py-12 bg-ncvColor-blue/40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 mt-8">I nostri servizi</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {servizi.map((servizio) => (
            <div key={servizio.id} className="p-6 md:p-8 bg-white rounded-lg shadow hover:shadow-lg transition hover:shadow-ncvColor-blue/40 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{servizio.name}</h3>
              <p className="text-gray-600 text-base">{servizio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

