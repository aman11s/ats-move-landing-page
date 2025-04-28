
import { Home, Briefcase, Archive, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="card flex flex-col h-full">
      <div className="mb-4 p-4 bg-ats-orange bg-opacity-10 inline-flex rounded-lg">
        <div className="text-ats-orange">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-ats-black">{title}</h3>
      <p className="text-ats-gray mb-6">{description}</p>
      <div className="mt-auto">
        <Button variant="ghost" className="text-ats-orange hover:text-ats-orange hover:bg-ats-orange/10 p-0">
          Learn More →
        </Button>
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      title: "Home Shifting",
      description: "Complete packing, loading, transportation, unloading and unpacking services for your household items.",
      icon: <Home size={28} />
    },
    {
      title: "Office Relocation",
      description: "Specialized services for relocating offices with minimal business disruption and careful handling of equipment.",
      icon: <Briefcase size={28} />
    },
    {
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short and long-term needs during your transition.",
      icon: <Archive size={28} />
    },
    {
      title: "Vehicle Transport",
      description: "Safe transportation of cars, motorcycles and other vehicles to your new location.",
      icon: <Truck size={28} />
    },
  ];

  return (
    <section id="services" className="section-container bg-ats-beige">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Our <span className="text-ats-orange">Services</span></h2>
        <p className="section-subtitle text-center">
          We offer comprehensive relocation services tailored to meet your specific requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
