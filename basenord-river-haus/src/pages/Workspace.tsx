import Carousel from "../components/Carousel";

export default function Workspace() {
  const workspaceImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1600"
  ];

  return (
    <div className="py-20 px-10 max-w-7xl mx-auto min-h-screen">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3B18A] font-bold mb-4 block">Workspace ecosystem</span>
      <h1 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter mb-8 italic font-serif">Space to Scale.</h1>
      
      {/* Write up */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
            At BaseNord, we cater for Entrepreneurs, Start-ups, and Enterprise businesses looking for an inspiring and highly functional environment in East Legon. Our commitment is entirely centered on providing top-tier spaces tailored to diverse operational needs.
          </p>
        </div>
        <div>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
            We offer meticulously designed private office spaces for focused productivity, state-of-the-art conference rooms for executive meetings, and a large open plan space engineered perfectly for corporate networking events and dynamic co-working.
          </p>
        </div>
      </div>

      {/* Slide Deck */}
      <div className="mb-20">
        <Carousel images={workspaceImages} />
      </div>

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-[#1A1A1A]/10 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Book an Office Space</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Space Type</label>
              <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
                <option>Virtual Office</option>
                <option>Co-working Office</option>
                <option>Private Office</option>
                <option>Conference Room</option>
                <option>Large Open Space (Events)</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Duration</label>
              <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
                <option>1 Day</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>1 Year</option>
                <option>Permanent/Long-term Lease</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Company Size</label>
              <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
                <option>1 - 5 Employees</option>
                <option>6 - 20 Employees</option>
                <option>21 - 50 Employees</option>
                <option>50+ Employees</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Year of Establishment</label>
              <input type="number" min="1900" max="2026" placeholder="e.g. 2020" className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Annual Revenue</label>
            <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
              <option>Pre-revenue</option>
              <option>Under $100k</option>
              <option>$100k - $500k</option>
              <option>$500k - $1M</option>
              <option>Over $1M</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Start Date</label>
              <input type="date" className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]" />
            </div>
          </div>
          
          <button type="button" className="mt-8 w-full px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#A3B18A] transition-colors">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );
}
