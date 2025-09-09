import { ImageWithFallback } from './ui/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729720281814-5ddf34c69f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHZpbGxhJTIwb2NlYW58ZW58MXx8fHwxNzU2MjcxOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury beach villa with ocean view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Oceanside Villas
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Two exclusive luxury villas where the ocean meets paradise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#villas"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Explore Villas
          </a>
          <a
            href="#map"
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
          >
            Resort Map
          </a>
        </div>
      </div>
    </section>
  );
}