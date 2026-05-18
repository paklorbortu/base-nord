import { motion } from "motion/react";
import { ArrowRight, MapPin, Coffee, Wifi, Users, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import heroImg from "../assets/images/hero_office_moody_1779117843561.png";
import riverhausCafeImg from "../assets/images/riverhaus_cafe_1779107413027.png";
import workspaceConnectivityImg from "../assets/images/workspace_connectivity_1779108958815.png";
import workspaceSharedImg from "../assets/images/open_office_shared_1779116360884.png";
import workspaceLocationImg from "../assets/images/workspace_location_1779109001613.png";
import securityImg from "../assets/images/office_security_1779117861555.png";
import parkingImg from "../assets/images/office_parking_1779117879034.png";
import eventBreakfastImg from "../assets/images/event_breakfast_1779109024757.png";
import eventMixerImg from "../assets/images/event_mixer_1779115129255.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-20 px-10 border-b border-[#1A1A1A]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="BaseNord Workspace" 
            className="w-full h-full object-cover filter contrast-[1.1] saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent"></div>
        </div>

        <div className="w-full relative z-10 flex justify-center text-center md:text-left md:justify-start px-6 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white max-w-2xl flex flex-col items-center md:items-start"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter italic font-serif mb-6 text-white">
              Where Nordic <br className="hidden md:block"/><span className="not-italic text-white">style</span> meets<br className="hidden md:block"/> Accra's vibrant pulse.
            </h1>
            <p className="text-sm md:text-base text-white/80 mb-8 max-w-md leading-relaxed mx-auto md:mx-0">
              A premium co-working ecosystem and authentic Nordic café located in East Legon, designed for focus, connection, and corporate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/workspace" className="px-6 py-3 bg-[#A3B18A] text-white border border-[#A3B18A] text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-colors flex items-center gap-2">
                Explore Workspace <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/cafe" className="px-6 py-3 border border-white text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
                Discover the Café
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BaseNord Workspace Section */}
      <section className="py-24 border-b border-[#1A1A1A]/10 relative group px-10">
        <div className="absolute inset-0 bg-[#E5E5E0] opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3B18A] font-bold mb-4 block">BaseNord</span>
              <h2 className="text-6xl md:text-7xl font-bold leading-[0.85] tracking-tighter mb-6">Elevate your work environment.</h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-md">
                Inspired by Scandinavian minimalism, our workspace is designed to reduce clutter and enhance focus. Experience high-speed connectivity, ergonomic comfort, and a community of innovators.
              </p>
            </div>
            <Link to="/workspace" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#A3B18A] hover:border-[#A3B18A] transition-colors inline-block">
              Learn deeper
            </Link>
          </div>
        </div>

        <div className="overflow-hidden w-full relative left-1/2 -translate-x-1/2 w-screen">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-8 w-max px-10"
          >
              {[
                {
                  icon: <Wifi className="w-6 h-6" />,
                  title: "Fiber Connectivity",
                  desc: "Uninterrupted, business-grade internet ensuring you're always online and productive.",
                  img: workspaceConnectivityImg
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Private & Shared",
                  desc: "From expansive boardrooms to dedicated collaborative zones, spaces crafted for open and dynamic work styles.",
                  img: workspaceSharedImg
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "East Legon Vibes",
                  desc: "Situated in the heart of East Legon, easily accessible with secure parking and amenities.",
                  img: workspaceLocationImg
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: "24/7 Security",
                  desc: "Professional security personnel, biometric access control and continuous surveillance for absolute peace of mind.",
                  img: securityImg
                },
                {
                  icon: <ChevronRight className="w-6 h-6" />,
                  title: "Ample Car Park",
                  desc: "Expansive, well-lit parking space ensuring you and your team always have a stress-free arrival.",
                  img: parkingImg
                }
              ].concat([
                {
                  icon: <Wifi className="w-6 h-6" />,
                  title: "Fiber Connectivity",
                  desc: "Uninterrupted, business-grade internet ensuring you're always online and productive.",
                  img: workspaceConnectivityImg
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Private & Shared",
                  desc: "From expansive boardrooms to dedicated collaborative zones, spaces crafted for open and dynamic work styles.",
                  img: workspaceSharedImg
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "East Legon Vibes",
                  desc: "Situated in the heart of East Legon, easily accessible with secure parking and amenities.",
                  img: workspaceLocationImg
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: "24/7 Security",
                  desc: "Professional security personnel, biometric access control and continuous surveillance for absolute peace of mind.",
                  img: securityImg
                },
                {
                  icon: <ChevronRight className="w-6 h-6" />,
                  title: "Ample Car Park",
                  desc: "Expansive, well-lit parking space ensuring you and your team always have a stress-free arrival.",
                  img: parkingImg
                }
              ]).map((feature, i) => (
                <div key={i} className="group/card relative overflow-hidden bg-[#1A1A1A] text-white transition-colors flex flex-col min-h-[360px] w-[350px] md:w-[400px] shrink-0">
                  <div className="absolute inset-0 z-0">
                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover filter brightness-[0.7] transform scale-100 group-hover/card:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                    <div className="text-white mb-6 bg-white/10 p-3 rounded-full w-min backdrop-blur-sm mt-auto shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold uppercase tracking-widest mb-3">{feature.title}</h3>
                      <p className="text-xs text-white/80 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
      </section>

      {/* River Haus Cafe Section */}
      <section className="py-24 px-10 bg-white/50 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] shadow-sm border border-[#1A1A1A]/10 overflow-hidden group">
            <img 
              src={riverhausCafeImg} 
              alt="River Haus Cafe Interior" 
              className="w-full h-full object-cover filter contrast-110 saturate-75 transform group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col md:items-end md:text-right">
            <div className="max-w-md">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C29472] font-bold mb-4 block">River Haus</span>
              <h2 className="text-6xl md:text-7xl font-bold leading-[0.85] tracking-tighter mb-6 lowercase">
                <span className="italic font-serif">Wild yeast & </span><br/><span className="text-[#C29472]">fika.</span>
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] mb-8 leading-relaxed">
                River Haus merges Nordic culinary traditions with premium local ingredients. Enjoy artisanal sourdough, authentic cinnamon buns (kanelbullar), and expertly roasted coffee in a space that feels like a warm embrace.
              </p>
              
              <ul className="space-y-4 mb-10 text-left md:text-right w-full flex flex-col md:items-end">
                {[
                  "Artisanal Nordic Bakery & Pastries",
                  "Premium Specialty Coffee",
                  "Light, Healthy Scandinavian Lunches",
                  "Relaxed, Hygge-inspired Environment"
                ].map((item, i) => (
                  <li key={i} className="flex md:flex-row-reverse items-center justify-start md:justify-start gap-4 text-[#1A1A1A] w-full max-w-sm border-b border-[#1A1A1A]/10 pb-3">
                    <Coffee className="w-4 h-4 opacity-50 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/cafe" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#C29472] hover:border-[#C29472] transition-colors inline-flex md:flex-row-reverse items-center gap-2">
                Discover the Menu & Book <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-10 bg-[#2D312E] text-white relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute right-[-20px] bottom-[-20px] text-[140px] font-bold opacity-5 pointer-events-none uppercase italic">
          Nordic
        </div>
        
        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 block">Community</span>
              <h2 className="text-6xl md:text-7xl font-bold leading-[0.85] tracking-tighter italic font-serif">Curated Events.</h2>
            </div>
            <Link to="/events" className="px-6 py-2 border border-white text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D312E] transition-colors block">
              View All Events
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: "Oct 12",
                title: "Nordic Business Networking Mixer",
                time: "18:00 - 21:00",
                img: eventMixerImg
              },
              {
                date: "Oct 15",
                title: "Founder's Breakfast & Strategy Session",
                time: "08:30 - 10:30",
                img: eventBreakfastImg
              }
            ].map((event, i) => (
              <div key={i} className="group cursor-pointer border border-white/20 p-6 flex flex-col gap-6 hover:bg-white/5 transition-colors">
                <div className="relative aspect-video w-full shrink-0 border border-white/10 overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-[9px] uppercase tracking-widest text-[#A3B18A] font-bold">Date</span>
                      <span className="text-sm font-semibold tracking-widest uppercase">{event.date}</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/20"></div>
                    <div className="flex flex-col items-start justify-center text-white/60">
                      <span className="text-[9px] uppercase tracking-widest font-bold">Time</span>
                      <span className="text-sm font-medium tracking-tight">{event.time}</span>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-4"></div>
                  <h3 className="text-2xl font-serif italic mb-2 group-hover:text-[#A3B18A] transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest font-bold">
                    <MapPin className="w-3 h-3" />
                    <span>BaseNord Main Hall, East Legon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-24 px-10 bg-[#E5E5E0]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3B18A] font-bold mb-4 block">Join BaseNord</span>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.85] tracking-tighter mb-6">Ready to anchor in East Legon?</h2>
          <p className="text-[#4A4A4A] mb-10 text-sm md:text-base max-w-2xl mx-auto">
            Whether you need a dedicated office space for your growing team, a hot desk for the day, or a quiet table at River Haus to enjoy exceptional coffee, we've got a spot for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/workspace" className="px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#A3B18A] transition-colors">
              Book Office Space
            </Link>
            <Link to="/cafe" className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Reserve Cafe Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
