import React from 'react';
import DoctorCard from './DoctorCard';
import { doctors } from '../../data/doctors';

export default function DoctorsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consult with our experienced doctors who are here to provide you with the best medical care and advice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}