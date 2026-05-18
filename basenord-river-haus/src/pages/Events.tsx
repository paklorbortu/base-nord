import { MapPin, Calendar, Check } from "lucide-react";
import Carousel from "../components/Carousel";
import eventBreakfastImg from "../assets/images/event_breakfast_1779109024757.png";
import eventMixerImg from "../assets/images/event_mixer_1779115129255.png";
import heroImg from "../assets/images/hero_office_moody_1779117843561.png";
import { useEffect, useState } from "react";
import { initAuth, googleSignIn, logout, auth } from "../lib/auth";
import { addEventToCalendar } from "../lib/calendar";
import { onAuthStateChanged } from "firebase/auth";

export default function Events() {
  const [needsAuth, setNeedsAuth] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [rsvpStatus, setRsvpStatus] = useState<Record<number, 'idle' | 'loading' | 'success' | 'error'>>({});

  useEffect(() => {
    initAuth(
      (user, token) => {
        setNeedsAuth(false);
        setUser(user);
      },
      () => {
        setNeedsAuth(true);
        setUser(null);
      }
    );

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await googleSignIn();
      setNeedsAuth(false);
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setNeedsAuth(true);
  };

  const handleRSVP = async (index: number, eventDetails: any) => {
    if (needsAuth) {
      await handleLogin();
      return; // Stop here, let user click again or proceed automatically
    }

    const confirmed = window.confirm(`Add "${eventDetails.title}" to your Google Calendar?`);
    if (!confirmed) return;

    setRsvpStatus(prev => ({ ...prev, [index]: 'loading' }));
    try {
      await addEventToCalendar({
        title: eventDetails.title,
        description: eventDetails.desc,
        dateStr: eventDetails.date,
        timeStr: eventDetails.time
      });
      setRsvpStatus(prev => ({ ...prev, [index]: 'success' }));
      setTimeout(() => {
        setRsvpStatus(prev => ({ ...prev, [index]: 'idle' }));
      }, 3000);
    } catch (err: any) {
      console.error("Calendar error:", err);
      alert("Failed to add to calendar: " + err.message);
      setRsvpStatus(prev => ({ ...prev, [index]: 'error' }));
    }
  };

  return (
    <div className="py-20 px-10 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3B18A] font-bold block">Community Ecosystem</span>
        {user ? (
          <div className="flex items-center gap-4 text-xs">
            <span>Signed in as <span className="font-semibold">{user.displayName || user.email}</span></span>
            <button onClick={handleLogout} className="text-[#A3B18A] hover:underline">Sign out</button>
          </div>
        ) : (
          <button onClick={handleLogin} disabled={isLoggingIn} className="flex items-center gap-2 border border-[#1A1A1A]/20 px-3 py-1.5 hover:bg-[#1A1A1A] hover:text-white transition-colors text-xs font-semibold">
            <Calendar className="w-3 h-3" />
            {isLoggingIn ? "Signing in..." : "Link Google Calendar"}
          </button>
        )}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter mb-12 italic font-serif">Curated Events.</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            date: "Oct 12",
            title: "Nordic Business Networking Mixer",
            time: "18:00 - 21:00",
            img: eventMixerImg,
            desc: "Join us for an evening of networking with top professionals in East Legon. Drinks and light bites provided by River Haus."
          },
          {
            date: "Oct 15",
            title: "Founder's Breakfast & Strategy Session",
            time: "08:30 - 10:30",
            img: eventBreakfastImg,
            desc: "Start your morning with a powerful strategy session led by industry experts. Nordic breakfast included."
          }
        ].map((event, i) => (
          <div key={i} className="group border border-[#1A1A1A]/10 p-6 flex flex-col gap-6 hover:bg-[#E5E5E0] transition-colors">
            <div className="relative aspect-[16/9] w-full border border-[#1A1A1A]/10 overflow-hidden">
              <img 
                src={event.img} 
                alt={event.title}
                className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="flex-1 flex flex-col justify-start">
              <div className="flex gap-4 items-center mb-4">
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[9px] uppercase tracking-widest text-[#A3B18A] font-bold">Date</span>
                  <span className="text-sm font-semibold tracking-widest uppercase">{event.date}</span>
                </div>
                <div className="h-4 w-[1px] bg-[#1A1A1A]/20"></div>
                <div className="flex flex-col items-start justify-center text-[#4A4A4A]">
                  <span className="text-[9px] uppercase tracking-widest font-bold">Time</span>
                  <span className="text-sm font-medium tracking-tight">{event.time}</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#1A1A1A]/10 mb-4"></div>
              <h3 className="text-2xl font-serif italic mb-3 group-hover:text-[#A3B18A] transition-colors">{event.title}</h3>
              <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed flex-1">{event.desc}</p>
              
              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2 text-[#4A4A4A] text-[10px] uppercase tracking-widest font-bold">
                  <MapPin className="w-3 h-3" />
                  <span>BaseNord, East Legon</span>
                </div>
                <button 
                  onClick={() => handleRSVP(i, event)} 
                  disabled={rsvpStatus[i] === 'loading' || rsvpStatus[i] === 'success'}
                  className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2 border flex items-center gap-2 transition-colors
                    ${rsvpStatus[i] === 'success' 
                      ? 'bg-[#A3B18A] border-[#A3B18A] text-white' 
                      : 'border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                    }`}
                >
                  {rsvpStatus[i] === 'loading' && <span className="animate-pulse">Saving...</span>}
                  {rsvpStatus[i] === 'success' && <><Check className="w-3 h-3" /> Added!</>}
                  {(!rsvpStatus[i] || rsvpStatus[i] === 'idle' || rsvpStatus[i] === 'error') && (<><Calendar className="w-3 h-3" /> RSVP</>)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Host an Event Form */}
      <div className="mt-24 max-w-3xl mx-auto bg-white p-8 md:p-12 border border-[#1A1A1A]/10 shadow-sm relative">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3B18A] font-bold mb-4 block">Host With Us</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 italic font-serif">Curate your own event at BaseNord.</h2>
        <p className="text-sm md:text-base text-[#4A4A4A] mb-8 leading-relaxed">
          From corporate training sessions to product launches and fireside chats, our spaces are adaptable to your vision. Let our team handle the logistics and catering.
        </p>
        
        <form className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Event Name</label>
               <input type="text" placeholder="e.g. Q3 Strategy Summit" className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]" />
             </div>
             <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Expected Attendees</label>
               <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
                 <option>10 - 20</option>
                 <option>21 - 50</option>
                 <option>51 - 100</option>
                 <option>100+</option>
               </select>
             </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Preferred Space</label>
               <select className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]">
                 <option>Large Open Space</option>
                 <option>Executive Conference Room</option>
                 <option>River Haus Cafe (After hours)</option>
               </select>
             </div>
             <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Event Date</label>
               <input type="date" className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A]" />
             </div>
           </div>
           
           <div>
             <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Additional Requirements</label>
             <textarea rows={4} placeholder="Tell us more about your event layout or catering needs..." className="w-full bg-[#F9F9F7] border border-[#1A1A1A]/20 p-4 text-sm focus:outline-none focus:border-[#A3B18A] resize-none"></textarea>
           </div>
           
           <button type="button" className="mt-8 px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#A3B18A] transition-colors">
             Submit Event Proposal
           </button>
        </form>
      </div>
    </div>
  );
}
