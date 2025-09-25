export interface Villa {
  id: number;
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  amenities: string[];
}

export const villas: Villa[] = [
  {
    id: 1,
    name: "Villa Serena",
    description: "Oceanfront luxury with panoramic views and private beach access. This stunning villa features contemporary design and world-class amenities.",
    image: "https://images.unsplash.com/photo-1708261582096-db8a685f31bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGF8ZW58MXx8fHwxNzU2MjcxOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ["Private Beach", "Infinity Pool", "WiFi", "Parking"]
  },
  {
    id: 2,
    name: "Villa Azure",
    description: "Sophisticated retreat with pool terrace and garden views. Experience ultimate relaxation in this elegantly appointed sanctuary.",
    image: "https://images.unsplash.com/photo-1567491634123-460945ea86dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sJTIwdmlsbGF8ZW58MXx8fHwxNzU2MjcxOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ["Pool Terrace", "Garden View", "WiFi", "Parking"]
  }
];