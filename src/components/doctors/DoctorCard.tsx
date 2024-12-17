import React, { useState } from 'react';
import { Star, Clock, GraduationCap, Briefcase, Video } from 'lucide-react';
import { Doctor } from '../../types/doctor';
import ConsultationModal from './ConsultationModal';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-teal-600 font-medium">{doctor.specialty}</p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <GraduationCap size={16} className="mr-2" />
              <span>{doctor.education}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Briefcase size={16} className="mr-2" />
              <span>{doctor.experience}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-2" />
              <span>{doctor.availability}</span>
            </div>
            <div className="flex items-center text-sm text-yellow-500">
              <Star size={16} className="mr-2" />
              <span>{doctor.rating}</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Video size={18} className="mr-2" />
              Online Consult
            </button>
            <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              Book Visit
            </button>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={doctor}
      />
    </>
  );
}