import { Doctor } from '../types/doctor';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    education: 'MD, Harvard Medical School',
    experience: '12 years',
    availability: 'Mon-Fri, 9AM-5PM',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    education: 'MD, Stanford University',
    experience: '15 years',
    availability: 'Mon-Thu, 10AM-6PM',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    education: 'MD, Johns Hopkins University',
    experience: '8 years',
    availability: 'Tue-Sat, 9AM-5PM',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    education: 'MD, Yale School of Medicine',
    experience: '10 years',
    availability: 'Mon-Fri, 8AM-4PM',
    rating: 4.6
  }
];