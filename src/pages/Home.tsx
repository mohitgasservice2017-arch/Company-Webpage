
import { TiltCard } from '../components/TiltCard';
import { Link } from 'react-router-dom';

export function Home() {
  return (
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
              <Link to="/services">
                <button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:bg-secondary-fixed transition-colors shadow-lg">
                  Our Services
                </button>
              </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div data-aos="zoom-in" data-aos-delay="100">
            <TiltCard className="bg-surface-container-lowest rounded-xl p-md border border-outline/10 shadow-sm tilt-card flex flex-col gap-sm h-full" tiltMax={10} tiltGlare={true} tiltMaxGlare={0.2} tiltSpeed={400}>
              <div className="tilt-card-content flex flex-col h-full gap-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>plumbing</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">PNG internal piping fitting</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  End-to-end internal piping solutions ensuring seamless gas flow, tailored for complex structural requirements with maximum safety.
                </p>
                <Link to="/services/png-piping-fitting" className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group">
                  Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
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
                <Link to="/services/bhatti-services" className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group">
                  Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>

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
            <Link to="/services">
              <button className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shrink-0">
                View All Sectors
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

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
            <p className="text-zinc-700 italic">"We had premium copper gas piping installation done for our new house. The team was highly professional, worked cleanly, and explained all safety protocols to us clearly. Highly recommended."</p>
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
            <p className="text-zinc-700 italic">"Our hotel's industrial gas manifold system was designed and installed by Mohit Gas Service with incredible precision. Their 24/7 emergency support and technical expertise have been a game-changer for our operations."</p>
          </div>
        </div>
      </section>
    </main>
  );
}
