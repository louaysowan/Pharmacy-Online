import React, { useState } from 'react';
import { Calendar, Clock, X } from 'lucide-react';
import { Doctor } from '../../types/doctor';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

export default function ConsultationModal({ isOpen, onClose, doctor }: ConsultationModalProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the consultation booking
    alert('Consultation booked successfully! The doctor will contact you for the online session.');
    onClose();
  };

  // Generate available time slots based on doctor's availability
  const getTimeSlots = () => {
    const slots = [];
    const [start, end] = doctor.availability.split(', ')[1].split('-');
    const startHour = parseInt(start.replace('AM', ''));
    const endHour = parseInt(end.replace('PM', '')) + 12;
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`);
      slots.push(`${hour % 12 || 12}:30 ${hour < 12 ? 'AM' : 'PM'}`);
    }
    
    return slots;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Book Online Consultation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">{doctor.name}</h3>
          <p className="text-teal-600">{doctor.specialty}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                required
              >
                <option value="">Select a time slot</option>
                {getTimeSlots().map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Consultation
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              placeholder="Please describe your symptoms or reason for consultation"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
}