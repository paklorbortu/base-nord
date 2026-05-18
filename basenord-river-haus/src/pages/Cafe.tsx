import Carousel from "../components/Carousel";
import cafeImg1 from "../assets/images/cafe_spacious_1_1779117895885.png";
import cafeImg2 from "../assets/images/cafe_spacious_2_1779117912168.png";
import cafeImg3 from "../assets/images/cafe_spacious_3_1779118065847.png";

export default function Cafe() {
  const cafeImages = [
    cafeImg1,
    cafeImg2,
    cafeImg3
  ];

  return (
    <div className="py-20 px-10 max-w-7xl mx-auto min-h-screen">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C29472] font-bold mb-4 block">River Haus Artisan Bakery</span>
      <h1 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter mb-8 lowercase"><span className="italic font-serif">Wild yeast & </span><br/>fika.</h1>
      
      {/* Write up */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
            River Haus brings the soulful essence of Nordic culinary traditions directly to Accra. Inspired by the concept of "Fika"—making time for friends and colleagues to share a cup of coffee and a little something to eat—we have curated a modern, premium cafe experience within the BaseNord ecosystem.
          </p>
        </div>
        <div>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
            From our authentic kanelbullar (cinnamon buns) perfected with organic cardamom, to our light-roasted specialty coffees, everything is crafted to encourage pause, reflection, and community. Discover a cafe designed not just for taste, but for well-being.
          </p>
        </div>
      </div>

      {/* Menu List */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold tracking-tighter uppercase mb-8">Selected Menu</h3>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-sm max-w-4xl">
          <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-3">
            <span className="font-bold text-[#1A1A1A]">Classic Cardamom Buns</span>
            <span className="text-[#4A4A4A] italic">Daily at 07:00</span>
          </div>
          <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-3">
            <span className="font-bold text-[#1A1A1A]">Sourdough Rye Toast (Smørrebrød)</span>
            <span className="text-[#4A4A4A] italic">From 11:30</span>
          </div>
          <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-3">
            <span className="font-bold text-[#1A1A1A]">Nordic Light Roast Filter</span>
            <span className="text-[#4A4A4A] italic">All day</span>
          </div>
          <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-3">
            <span className="font-bold text-[#1A1A1A]">Lingonberry Iced Tea</span>
            <span className="text-[#4A4A4A] italic">Chilled & Refreshing</span>
          </div>
        </div>
      </div>

      {/* Slide Deck */}
      <div className="mb-20">
        <Carousel images={cafeImages} />
      </div>

      {/* Reservation Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-[#1A1A1A]/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 font-serif text-8xl pointer-events-none">Fika</div>
        <h2 className="text-3xl font-bold tracking-tighter mb-8 relative z-10">Reserve a Table</h2>
        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Guests</label>
              <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#C29472]">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 - 4 People</option>
                <option>5+ People</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Date</label>
              <input type="date" className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#C29472]" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Time</label>
            <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#C29472]">
              <option>08:00 AM</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>14:00 PM</option>
              <option>16:00 PM</option>
            </select>
          </div>
          <button type="button" className="mt-8 w-full px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#C29472] transition-colors">
            Confirm Reservation
          </button>
        </form>
      </div>

    </div>
  );
}
