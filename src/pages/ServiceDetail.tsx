import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useEffect } from 'react';

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="min-h-screen pt-12 pb-16 bg-surface-container-lowest">
      <section className="max-w-container-max mx-auto px-4 md:px-12">
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors gap-2">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${service.color}`}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-6">{service.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918570972010" target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-on-primary font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-150 shadow-md">
                  Request Service
                </button>
              </a>
              <a href="tel:+918570972010">
                <button className="bg-surface-container-highest text-on-surface font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:bg-surface-container-highest/80 active:scale-95 transition-all duration-150 border border-outline/10">
                  Call Now
                </button>
              </a>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover relative z-0"
            />
          </div>
        </div>

        <div className="bg-primary-container rounded-3xl p-8 md:p-16 text-center mt-20" data-aos="fade-up">
          <h2 className="font-h2 text-h2 text-on-primary-container mb-4">Why Choose Mohit Gas Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>verified</span>
              </div>
              <h3 className="font-h4 text-h4 text-on-primary-container">ISO Certified</h3>
              <p className="text-on-primary-container/80 text-sm">Meeting strict international standards for safety and quality.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>support_agent</span>
              </div>
              <h3 className="font-h4 text-h4 text-on-primary-container">24/7 Support</h3>
              <p className="text-on-primary-container/80 text-sm">Round-the-clock emergency support for absolute peace of mind.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>engineering</span>
              </div>
              <h3 className="font-h4 text-h4 text-on-primary-container">Expert Engineers</h3>
              <p className="text-on-primary-container/80 text-sm">Highly trained professionals ensuring flawless execution.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
