import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';

function TiltCard({ children, className, tiltMax = 10, tiltSpeed = 400, tiltGlare = false, tiltMaxGlare = 0.2, tiltScale = 1 }: { children: React.ReactNode, className?: string, tiltMax?: number, tiltSpeed?: number, tiltGlare?: boolean, tiltMaxGlare?: number, tiltScale?: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: tiltMax,
        speed: tiltSpeed,
        glare: tiltGlare,
        "max-glare": tiltMaxGlare,
        scale: tiltScale,
      });
    }
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [tiltMax, tiltSpeed, tiltGlare, tiltMaxGlare, tiltScale]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md text-body-md antialiased relative">
      <nav className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 shadow-sm flex justify-between items-center px-6 md:px-12 py-4 max-w-full">
        <div className="text-2xl font-black text-orange-600 dark:text-orange-500 italic">Mohit Gas Service</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Residential</a>
          <a className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Commercial</a>
          <a className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Industrial</a>
          <a className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Accessories</a>
        </div>
        <div className="flex gap-4">
          <button className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-orange-600 dark:text-orange-500 active:scale-95 transition-transform duration-150 py-2">
            GET A QUOTE
          </button>
          <button className="bg-orange-600 text-white font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm px-6 py-2 rounded-full hover:bg-orange-700 active:scale-95 transition-all duration-150 shadow-md">
            Contact Us
          </button>
        </div>
      </nav>

      <main>
        <section className="w-full bg-primary-container text-on-primary-container relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Industrial gas infrastructure with warm dramatic lighting and glowing orange sparks" className="w-full h-full object-cover opacity-20 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpMHRW32cWC1bSJaK1WNgkM4xaY5O_F7GCN3jahzfi_NuOdesd0RrjWZFJVS80Jel7HPPl-zws_lh6gqYzoge0ADTwvo_WE0o2nSX9CYTGhD-9j2KQj9ZJ6EKyfbJcU0FR5_2YMzyz-83sIMHwTBaeAYVIcd8EdivxENe5-_zTBkCbLDKgduJCrZ46UU3VRccZYLHF6SWlLZvn-Gjs-XgJWDpT0tRCXgYRq2r4yr7M6ekVTzbHgsvt-IsZ7U61toErdnDCGX9ia62" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-12 py-xl md:py-24 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center min-h-[716px]">
            <div className="flex flex-col gap-md" data-aos="fade-right" data-aos-duration="1000">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">ISO 9001 Certified</span>
              </div>
              <h1 className="font-h1 text-h1 text-white drop-shadow-md">Expert Gas Solutions for Home & Business</h1>
              <p className="font-body-lg text-body-lg text-white/90 max-w-lg">
                Delivering unmatched precision, safety, and energy across residential, commercial, and industrial sectors. Your trusted partner for modern gas infrastructure.
              </p>
              <div className="flex flex-wrap gap-4 pt-sm">
                <button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:bg-secondary-fixed transition-colors shadow-lg">
                  Our Services
                </button>
                <button className="bg-transparent border-2 border-white text-white font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="bg-white py-16 border-b border-zinc-100">
          <div className="max-w-container-max mx-auto px-4 md:px-12">
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-zinc-400 mb-10" data-aos="fade-up">Trusted by Industry Leaders</h3>
            <div className="marquee-container" data-aos="fade-up" data-aos-delay="100">
              <div className="marquee-content items-center">
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">PREMIER HOTEL CHAINS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">GLOBAL INDUSTRIAL PLANTS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">TOP RESTAURANT GROUPS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">NATIONAL BUILDERS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">CITY MUNICIPALITIES</div>
              </div>
              <div aria-hidden="true" className="marquee-content items-center">
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">PREMIER HOTEL CHAINS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">GLOBAL INDUSTRIAL PLANTS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">TOP RESTAURANT GROUPS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">NATIONAL BUILDERS</div>
                <div className="text-xl font-bold text-zinc-300 px-8 whitespace-nowrap">CITY MUNICIPALITIES</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-4 md:px-12 py-xl">
          <div className="text-center mb-xl" data-aos="fade-up">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Core Competencies</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision engineering meets rigorous safety standards in every service we provide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div data-aos="zoom-in" data-aos-delay="100">
              <TiltCard className="bg-surface-container-lowest rounded-xl p-md border border-outline/10 shadow-sm tilt-card flex flex-col gap-sm h-full" tiltMax={10} tiltGlare={true} tiltMaxGlare={0.2} tiltSpeed={400}>
                <div className="tilt-card-content flex flex-col h-full gap-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>plumbing</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">Gas Pipe Line Internal Pipelining Fitting</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    End-to-end internal piping solutions ensuring seamless gas flow, tailored for complex structural requirements with maximum safety.
                  </p>
                  <button className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group">
                    Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </TiltCard>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <TiltCard className="bg-surface-container-lowest rounded-xl p-md border border-outline/10 shadow-sm tilt-card flex flex-col gap-sm h-full" tiltMax={10} tiltGlare={true} tiltMaxGlare={0.2} tiltSpeed={400}>
                <div className="tilt-card-content flex flex-col h-full gap-sm">
                  <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary mb-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>outdoor_grill</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">Bhatti Services</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    Specialized installation, maintenance, and optimization of commercial bhattis for high-volume culinary environments.
                  </p>
                  <button className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group">
                    Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </TiltCard>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300">
              <TiltCard className="bg-surface-container-lowest rounded-xl p-md border border-outline/10 shadow-sm tilt-card flex flex-col gap-sm h-full" tiltMax={10} tiltGlare={true} tiltMaxGlare={0.2} tiltSpeed={400}>
                <div className="tilt-card-content flex flex-col h-full gap-sm">
                  <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>handyman</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">LPG Accessories</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    High-quality LPG accessories including regulators, high-pressure pipes, and safety valves designed for maximum durability and safety.
                  </p>
                  <button className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group">
                    Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        <section className="bg-surface-container py-xl overflow-hidden">
          <div className="max-w-container-max mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-6" data-aos="fade-up">
              <div>
                <h2 className="font-h2 text-h2 text-on-surface mb-sm">Operational Sectors</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Delivering tailored gas infrastructure to power diverse environments safely and efficiently.</p>
              </div>
              <button className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shrink-0">
                View All Sectors
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div data-aos="fade-up" data-aos-delay="100">
                <TiltCard className="group cursor-pointer rounded-xl overflow-hidden relative aspect-[4/5] bg-surface-container-highest tilt-card h-full" tiltMax={8} tiltScale={1.05} tiltSpeed={400}>
                  <img alt="Modern elegant suburban house exterior with warm lighting at dusk" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAbIa4wrk-q__wOAUog2hC48T3P0q9THPpGN2zocbtdfPfYVltabfDjeai6vLX-IWtd0y4P6Iza-Yh3oAvnldZyFyvMH2v2wjhDHptBU2Q5pQUuCQd09AREttEqOMktLNhO-4r-BV41DpRWqgYbJlXQ811xU-yLmB_H-nBfHgiQRZEBPnUl9w0oG_kzBqBGvA0vCV3eEPChdfZ-Ok2LSZwobqWupMTqsYV_kaiA38hcmQNOOKaMShUBVKtFv_8tCYxCBnCA_3LSpla" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 tilt-card-content">
                    <h4 className="font-h4 text-h4 text-white mb-1">Houses</h4>
                    <p className="font-body-sm text-white/80">house gas stove service</p>
                  </div>
                </TiltCard>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <TiltCard className="group cursor-pointer rounded-xl overflow-hidden relative aspect-[4/5] bg-surface-container-highest tilt-card h-full" tiltMax={8} tiltScale={1.05} tiltSpeed={400}>
                  <img alt="Luxury hotel lobby with warm ambient lighting and contemporary design" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOYdDevUtp0-GEZWGJHiOH14NDFB_uHcPuwNVqlN4mQLtxqHK2D9IGSVcUnY2w-dXCXf7rpIdV8AgYh_lxHwjJ81BvufWIn3ZSdiTHMljYArn8L0EQPE3kAjfFmBt666uyAkf5ymCEHUJa0AnoajLDrsJbO72WR63IoAZm6XadLnDRQVdZLAKvzmxMJ8u5q-GENf2bg5rkHambXm53TgXF-_51IFgiZtWqmUPUbq-ADM2iDVMycfJNDHRnqQvs5oNDiNlY1w-sIPAN" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 tilt-card-content">
                    <h4 className="font-h4 text-h4 text-white mb-1">Hotels</h4>
                    <p className="font-body-sm text-white/80">Scalable commercial solutions</p>
                  </div>
                </TiltCard>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <TiltCard className="group cursor-pointer rounded-xl overflow-hidden relative aspect-[4/5] bg-surface-container-highest tilt-card h-full" tiltMax={8} tiltScale={1.05} tiltSpeed={400}>
                  <img alt="Bustling professional restaurant kitchen with chefs cooking over high flames" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9mTpTjrZJFIjcp2uOdAjE3SI8dhZZvU1moBj44GrkYwC1wjuUNq8RjG9d_vzh8a1YQQic8o6s_AJeaw33uE-nKBtmmUStpOucu1Hyk6PC8k2bmhj2efmbo6-0pNr7m0TTZuSu9LX_QsJKWNhaSjMAeQqvpqkGNu8u-kajLB-3fblie4soicByKd1sap14TaZFlC6G7_RAkrhiMMOeYzPRF1ggIoRVIpyb8IruB8O572o4Uq7arCwQQeqRmkn03xDKshAYQp5IH9bH" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 tilt-card-content">
                    <h4 className="font-h4 text-h4 text-white mb-1">Restaurants</h4>
                    <p className="font-body-sm text-white/80">High-performance bhatti setups</p>
                  </div>
                </TiltCard>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <TiltCard className="group cursor-pointer rounded-xl overflow-hidden relative aspect-[4/5] bg-surface-container-highest tilt-card h-full" tiltMax={8} tiltScale={1.05} tiltSpeed={400}>
                  <img alt="Vibrant traditional Indian dhaba exterior at night with colorful warm lighting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdpBYdiJ0SwqDZFEmfZ8OUShxTq0Tg2ziOUoZqi3xHqu5ZZLiJbQwew-l3qUZ7PcP6OhuMURTr0Rub8N32mFURCdkF_tQTEZi1bS2D2g2eP1xSLOg1R0I3FKlx590u42hSvI8Wh11tMBegCN5bAKnCC-9owwsPYMsAitFNArA1u7o6XMqQvxv4F3DYA07aJR2gDypKEblC42mVhFRDUj24QCu0NzZPBG9cKuwYhsHB9_APCkGHT2eC4tVwrfula_tHlveUmYcUJ_rV" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 tilt-card-content">
                    <h4 className="font-h4 text-h4 text-white mb-1">Dhabas</h4>
                    <p className="font-body-sm text-white/80">Robust high-volume systems</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-container-max mx-auto px-4 md:px-12 py-xl">
          <div className="text-center mb-xl" data-aos="fade-up">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">What Our Clients Say</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Feedback from businesses and homeowners who trust our gas infrastructure solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10 shadow-md relative" data-aos="fade-up" data-aos-delay="100">
              <span className="material-symbols-outlined absolute top-6 right-6 text-orange-200" style={{ fontSize: '48px' }}>format_quote</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">R</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Rajesh Kumar</h4>
                  <p className="text-sm text-zinc-500">Restaurant Owner</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-zinc-700 italic">"Mohit Gas Service completely revamped our kitchen's commercial bhatti setup. The efficiency has improved immensely, and their commitment to safety standards is top-notch."</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10 shadow-md relative" data-aos="fade-up" data-aos-delay="200">
              <span className="material-symbols-outlined absolute top-6 right-6 text-orange-200" style={{ fontSize: '48px' }}>format_quote</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Sunita Sharma</h4>
                  <p className="text-sm text-zinc-500">Homeowner</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-zinc-700 italic">"We had internal gas pipelining done for our new house. The team was highly professional, worked cleanly, and explained all safety protocols to us clearly. Highly recommended."</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10 shadow-md relative" data-aos="fade-up" data-aos-delay="300">
              <span className="material-symbols-outlined absolute top-6 right-6 text-orange-200" style={{ fontSize: '48px' }}>format_quote</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">A</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Amit Verma</h4>
                  <p className="text-sm text-zinc-500">Hotel Manager</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <p className="text-zinc-700 italic">"Reliable cylinder supply is crucial for our hotel operations. Mohit Gas Service has never missed a delivery, and their emergency response team is incredibly fast."</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t-8 border-orange-600 bg-zinc-50 dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-start px-8 py-16 gap-10">
        <div className="flex flex-col items-start gap-6 max-w-sm">
          <div className="text-2xl font-black text-orange-600 dark:text-orange-500 italic">Mohit Gas Service</div>
          <div className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="material-symbols-outlined mt-1">location_on</span>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium leading-relaxed">
              Main road Rai, Near Bank of India.<br />Rai, sonipat.H.R. 131029.
            </p>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="material-symbols-outlined">phone</span>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium">+91 XXXXX XXXXX</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a aria-label="Facebook" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wider text-sm">Quick Links</h4>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Residential Services</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Commercial Solutions</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Industrial Infrastructure</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Parts & Accessories</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wider text-sm">Support</h4>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Safety Standards</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Emergency Services</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Terms of Service</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">Need a Consultation?</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">Our experts are ready to design the perfect gas infrastructure for your specific needs.</p>
          <button className="bg-orange-600 text-white font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm px-8 py-3 rounded-md hover:bg-orange-700 active:scale-95 transition-all duration-150 shadow-md w-fit">
            Contact Us Now
          </button>
        </div>
      </footer>
      <div className="w-full bg-zinc-200 dark:bg-zinc-950 px-8 py-4 text-center">
        <p className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-zinc-500 dark:text-zinc-500">© 2024 Mohit Gas Service. All Rights Reserved. ISO 9001 Certified Safety Standards.</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 bg-primary text-on-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:bg-primary/90 focus:outline-none ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        onClick={scrollToTop}
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  );
}

export default App;
