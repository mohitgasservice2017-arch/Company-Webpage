
import { TiltCard } from '../components/TiltCard';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-surface-container-lowest">
      <section className="max-w-container-max mx-auto px-4 md:px-12">
        <div className="text-center mb-xl" data-aos="fade-up">
          <h1 className="font-h1 text-h1 text-on-surface mb-sm">Our Services</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive gas infrastructure solutions engineered for safety, efficiency, and reliability across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {servicesData.map((service, index) => (
            <div data-aos="zoom-in" data-aos-delay={(index % 3 + 1) * 100} key={service.id}>
              <TiltCard className="bg-surface-container-lowest rounded-xl p-md border border-outline/10 shadow-sm tilt-card flex flex-col gap-sm h-full" tiltMax={10} tiltGlare={true} tiltMaxGlare={0.2} tiltSpeed={400}>
                <div className="tilt-card-content flex flex-col h-full gap-sm">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${service.color}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    {service.description}
                  </p>
                  <Link to={`/services/${service.id}`} className="text-primary font-label-md text-label-md uppercase flex items-center gap-1 mt-4 group w-fit">
                    Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </section>
      
      <section className="max-w-container-max mx-auto px-4 md:px-12 mt-24">
        <div className="bg-primary-container rounded-2xl p-8 md:p-12 text-center" data-aos="fade-up">
          <h2 className="font-h2 text-h2 text-on-primary-container mb-4">Need a Custom Solution?</h2>
          <p className="font-body-lg text-on-primary-container/80 max-w-2xl mx-auto mb-8">
            Our experts can design and implement specialized gas infrastructure tailored to your unique requirements.
          </p>
          <a href="https://wa.me/918570972010" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-primary text-on-primary font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-150 shadow-md">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
