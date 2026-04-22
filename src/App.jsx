import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronRight, Flame, Crosshair, Zap
} from 'lucide-react';

// --- CUSTOM CSS FOR ANIMATIONS ---
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 15px rgba(255, 42, 67, 0.4); }
    50% { box-shadow: 0 0 30px rgba(255, 42, 67, 0.8), 0 0 10px rgba(255, 42, 67, 0.5) inset; }
  }
  @keyframes cosmic-spin {
    from { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    to { transform: rotate(360deg) scale(1); }
  }
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
  .cosmic-bg {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,42,67,0.15) 0%, rgba(147,51,234,0.1) 40%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
    filter: blur(40px);
    animation: cosmic-spin 20s linear infinite;
    z-index: 0;
    pointer-events: none;
  }
  
  /* Custom scrollbar for a sleek look */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #09090b; 
  }
  ::-webkit-scrollbar-thumb {
    background: #27272a; 
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff2a43; 
  }

  .glass-panel {
    background: rgba(24, 24, 27, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

// --- DATA ---
const ECOSYSTEM = [
  {
    id: 1,
    name: "Neon Viper Controller",
    description: "Haptic feedback and adaptive triggers.",
    category: "Peripheral",
    tag: "NEXT-GEN",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Voltaic Sound Headset",
    description: "3D Spatial audio for immersive gameplay.",
    category: "Audio",
    tag: "IMMERSIVE",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Galactic Voyager Skin",
    description: "Custom aesthetic plates for your console.",
    category: "Customization",
    tag: "STYLE",
    image: "https://images.unsplash.com/photo-1614315584507-6bb30dd1a260?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Chrono Charging Dock",
    description: "Dual fast-charging for uninterrupted sessions.",
    category: "Accessory",
    tag: "POWER",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Elite Pro Controller",
    description: "Customizable paddles and interchangeable sticks.",
    category: "Peripheral",
    tag: "PRO",
    image: "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Crystal Blue Edition",
    description: "Limited edition transparent casing.",
    category: "Console",
    tag: "LIMITED",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=600",
  }
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 1
  });

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans overflow-x-hidden flex flex-col">
      <style>{customStyles}</style>

      {/* TOP NAVBAR */}
      <header className="h-20 border-b border-zinc-800/50 glass-panel fixed top-0 w-full z-50 flex items-center justify-between px-8 lg:px-16 transition-all duration-300">
        <div className="flex items-center gap-3 cursor-pointer group">
          <Zap className="w-8 h-8 text-[#ff2a43] group-hover:scale-110 transition-transform" />
          <span className="text-xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Danish Console
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-sm font-bold text-white hover:text-[#ff2a43] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#ff2a43]">The Console</a>
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Ecosystem</a>
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Games</a>
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Tech Specs</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-zinc-900/50 rounded-full px-4 py-2 border border-zinc-800 w-48 focus-within:border-zinc-600 transition-colors">
            <Search className="w-4 h-4 text-zinc-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm text-zinc-200 w-full placeholder-zinc-500"
            />
          </div>
          <button className="bg-[#ff2a43] hover:bg-[#ff1530] text-white font-bold py-2 px-6 rounded-full transition-all text-sm">
            Join Waitlist
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col relative pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[600px] flex items-center justify-center px-8 lg:px-16 overflow-hidden pt-12 pb-24">
          {/* Animated Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl flex justify-center items-center">
            <div className="cosmic-bg"></div>
            {/* Grid overlay for tech feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30"></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text & CTA */}
            <div className="flex flex-col gap-6" style={{ animation: 'slideUpFade 0.8s ease-out' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-[#ff2a43]/30 w-fit">
                <Flame className="w-4 h-4 text-[#ff2a43]" />
                <span className="text-xs font-bold tracking-widest text-[#ff2a43] uppercase">New Arrival</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
                CHRONOSTATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">6:</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a43] to-orange-500">INFINITY RED</span>
              </h1>
              
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                Unlock the ultimate gaming power with ultra-fast SSD, immersive haptics, and adaptive triggers. The future is in your hands.
              </p>

              {/* Countdown Timer */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Pre-orders beginning in:</p>
                <div className="flex gap-4">
                  <TimeUnit value={formatTime(timeLeft.days)} label="Days" />
                  <span className="text-2xl font-bold text-zinc-600 mt-2">:</span>
                  <TimeUnit value={formatTime(timeLeft.hours)} label="Hours" />
                  <span className="text-2xl font-bold text-zinc-600 mt-2">:</span>
                  <TimeUnit value={formatTime(timeLeft.minutes)} label="Mins" />
                  <span className="text-2xl font-bold text-zinc-600 mt-2">:</span>
                  <TimeUnit value={formatTime(timeLeft.seconds)} label="Secs" color="text-[#ff2a43]" />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="animate-pulse-glow bg-[#ff2a43] hover:bg-[#ff1530] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2">
                  PRE-ORDER NOW
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border border-zinc-700 hover:border-zinc-400 text-white font-bold py-4 px-8 rounded-full transition-all">
                  EXPLORE MORE
                </button>
              </div>
            </div>

            {/* Hero Image (Floating Console Placeholder) */}
            <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
              <div className="absolute w-64 h-64 bg-[#ff2a43]/20 rounded-full blur-[100px]"></div>
              
              {/* Main floating image */}
              <img 
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800" 
                alt="Console" 
                className="w-full max-w-md object-cover rounded-2xl animate-float shadow-2xl relative z-10 border border-zinc-800/50"
                style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
              />
              
              {/* Floating UI Elements around the console */}
              <div className="absolute top-20 right-10 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <Crosshair className="w-4 h-4 text-[#00ffcc]" />
                <span className="text-xs font-bold text-white">4K 120FPS</span>
              </div>
              <div className="absolute bottom-32 left-0 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-white">Hyper-SSD</span>
              </div>
            </div>

          </div>
        </section>

        {/* ECOSYSTEM GRID */}
        <section className="px-8 lg:px-16 py-12 relative z-10 bg-[#0c0c0e]/80 border-t border-zinc-800/50">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-2">The Ecosystem</h2>
              <p className="text-sm text-zinc-500">Dive deeper into the Chronostation universe.</p>
            </div>
            <button className="text-sm font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
              Explore All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ECOSYSTEM.map((item, idx) => (
              <EcosystemCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-auto border-t border-zinc-800/50 py-8 px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 Danish Console. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function TimeUnit({ value, label, color = "text-white" }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-panel w-14 h-16 flex items-center justify-center rounded-lg border-b-2 border-b-[#ff2a43]/50">
        <span className={`text-2xl font-black ${color}`}>{value}</span>
      </div>
      <span className="text-[10px] text-zinc-500 uppercase mt-2 font-bold tracking-wider">{label}</span>
    </div>
  );
}

function EcosystemCard({ item, index }) {
  const getTagColor = (tag) => {
    if(tag === 'NEXT-GEN') return 'text-[#ff2a43] bg-[#ff2a43]/10 border-[#ff2a43]/20';
    if(tag === 'PRO') return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
    return 'text-[#00ffcc] bg-[#00ffcc]/10 border-[#00ffcc]/20';
  };

  return (
    <div 
      className="group glass-panel rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-zinc-800 hover:border-zinc-600 flex flex-col"
      style={{ animation: `slideUpFade 0.5s ease-out ${index * 0.1}s both` }}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute top-4 left-4 z-20 px-2 py-1 rounded text-[10px] font-bold uppercase border ${getTagColor(item.tag)}`}>
          {item.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-1 font-semibold uppercase tracking-wider">{item.category}</p>
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-2 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-2 mb-6">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-zinc-800/50 pt-4">
          <span className="text-xs font-bold text-zinc-300 group-hover:text-[#ff2a43] transition-colors">
            Discover
          </span>
          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ff2a43] transition-colors" />
        </div>
      </div>
    </div>
  );
}