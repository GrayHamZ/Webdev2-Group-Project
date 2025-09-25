
"use client";


import { villas } from '../../prisma/data/villas';
import { Booking, initialBookings } from '../../prisma/data/bookings';
import { VillaCard } from '../components/VillaCard';
import { useState } from 'react';
import { toast } from 'sonner';

export function VillaShowcase() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  const handleBookingSubmit = (booking: Omit<Booking, 'id' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Math.max(...bookings.map(b => b.id)) + 1,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setBookings(prev => [...prev, newBooking]);
    toast.success("Booking request submitted successfully! We'll contact you within 24 hours.");
  };

  return (
    <section id="villas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Luxury Villas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of exquisitely designed villas, each offering unparalleled comfort and breathtaking ocean views.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {villas.map((villa) => (
            <VillaCard 
              key={villa.id} 
              villa={villa} 
              onBookingSubmit={handleBookingSubmit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}