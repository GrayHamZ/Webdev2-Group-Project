export interface BookingDate {
  date: string; // YYYY-MM-DD format
  available: boolean;
  price: number;
  isBlocked: boolean;
  reason?: string; // For blocked dates
}

export interface Booking {
  id: number;
  villaId: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  createdAt: string;
  notes?: string;
}

export interface VillaAvailability {
  villaId: number;
  dates: BookingDate[];
}

// Initial availability data for demo purposes
export const initialAvailability: VillaAvailability[] = [
  {
    villaId: 1,
    dates: generateDateRange('2025-01-27', '2025-12-31', 850, [
      // February special pricing
      { date: '2025-02-14', price: 1200, isBlocked: false }, // Valentine's Day premium
      { date: '2025-02-15', price: 1200, isBlocked: false },
      // March maintenance
      { date: '2025-03-15', price: 0, isBlocked: true, reason: 'Maintenance' },
      { date: '2025-03-16', price: 0, isBlocked: true, reason: 'Maintenance' },
      // Summer season pricing
      { date: '2025-06-15', price: 1000, isBlocked: false },
      { date: '2025-06-16', price: 1000, isBlocked: false },
      { date: '2025-07-04', price: 1300, isBlocked: false }, // July 4th premium
      { date: '2025-07-05', price: 1300, isBlocked: false },
      // August blocked dates
      { date: '2025-08-10', price: 0, isBlocked: true, reason: 'Private Event' },
      { date: '2025-08-11', price: 0, isBlocked: true, reason: 'Private Event' },
      { date: '2025-08-12', price: 0, isBlocked: true, reason: 'Private Event' },
    ])
  },
  {
    villaId: 2,
    dates: generateDateRange('2025-01-27', '2025-12-31', 650, [
      // February special pricing
      { date: '2025-02-14', price: 950, isBlocked: false }, // Valentine's Day premium
      { date: '2025-02-15', price: 950, isBlocked: false },
      // Spring blocked date
      { date: '2025-04-01', price: 0, isBlocked: true, reason: 'Private Event' },
      // Summer season pricing
      { date: '2025-06-15', price: 800, isBlocked: false },
      { date: '2025-06-16', price: 800, isBlocked: false },
      // August maintenance
      { date: '2025-08-25', price: 0, isBlocked: true, reason: 'Annual Maintenance' },
      { date: '2025-08-26', price: 0, isBlocked: true, reason: 'Annual Maintenance' },
      { date: '2025-08-27', price: 0, isBlocked: true, reason: 'Annual Maintenance' },
    ])
  }
];

export const initialBookings: Booking[] = [
  {
    id: 1,
    villaId: 1,
    guestName: "John Smith",
    guestEmail: "john@example.com",
    guestPhone: "+1-555-0123",
    checkIn: "2025-02-01",
    checkOut: "2025-02-05",
    guests: 4,
    totalPrice: 3400,
    status: "CONFIRMED",
    createdAt: "2025-01-20",
    notes: "Anniversary celebration"
  },
  {
    id: 2,
    villaId: 2,
    guestName: "Sarah Johnson",
    guestEmail: "sarah@example.com",
    guestPhone: "+1-555-0456",
    checkIn: "2025-02-10",
    checkOut: "2025-02-14",
    guests: 2,
    totalPrice: 2600,
    status: "PENDING",
    createdAt: "2025-01-22"
  },
  {
    id: 3,
    villaId: 1,
    guestName: "Michael Chen",
    guestEmail: "michael@example.com",
    guestPhone: "+1-555-0789",
    checkIn: "2025-08-05",
    checkOut: "2025-08-09",
    guests: 6,
    totalPrice: 3400,
    status: "CONFIRMED",
    createdAt: "2025-01-25",
    notes: "Family vacation - requesting early check-in"
  },
  {
    id: 4,
    villaId: 2,
    guestName: "Emma Rodriguez",
    guestEmail: "emma@example.com",
    guestPhone: "+1-555-0321",
    checkIn: "2025-08-15",
    checkOut: "2025-08-20",
    guests: 4,
    totalPrice: 3250,
    status: "CONFIRMED",
    createdAt: "2025-01-23",
    notes: "Honeymoon - requesting champagne and flowers"
  },
  {
    id: 5,
    villaId: 1,
    guestName: "David Park",
    guestEmail: "david@example.com",
    guestPhone: "+1-555-0654",
    checkIn: "2025-08-28",
    checkOut: "2025-09-02",
    guests: 8,
    totalPrice: 4250,
    status: "PENDING",
    createdAt: "2025-01-26",
    notes: "Corporate retreat"
  }
];

function generateDateRange(
  startDate: string, 
  endDate: string, 
  basePrice: number, 
  overrides: Partial<BookingDate>[] = []
): BookingDate[] {
  const dates: BookingDate[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const override = overrides.find(o => o.date === dateStr);
    
    dates.push({
      date: dateStr,
      available: true,
      price: basePrice,
      isBlocked: false,
      ...override
    });
  }
  
  return dates;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price);
}

export function calculateTotalPrice(dates: BookingDate[], checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  let total = 0;
  
  for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const dateInfo = dates.find(date => date.date === dateStr);
    if (dateInfo && dateInfo.available && !dateInfo.isBlocked) {
      total += dateInfo.price;
    }
  }
  
  return total;
}

export function isDateRangeAvailable(dates: BookingDate[], checkIn: string, checkOut: string): boolean {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  
  for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const dateInfo = dates.find(date => date.date === dateStr);
    if (!dateInfo || !dateInfo.available || dateInfo.isBlocked) {
      return false;
    }
  }
  
  return true;
}