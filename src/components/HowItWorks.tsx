
import { Calendar, Package, Truck, Home } from 'lucide-react';

type ProcessStepProps = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ProcessStep = ({ step, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-12 relative">
      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-ats-blue rounded-full flex items-center justify-center shadow-lg z-10 relative">
        <div className="text-white flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-ats-blue text-white text-sm font-bold px-3 py-1 rounded-full">
          Step {step}
        </div>
      </div>
      
      <div className="flex-1">
        <div className="bg-ats-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-ats-navy">{title}</h3>
          <p className="text-ats-gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Book a Service",
      description: "Fill out our simple form or call us to schedule your move. We'll discuss your requirements and provide a free quote.",
      icon: <Calendar size={24} />
    },
    {
      title: "Pack with Care",
      description: "Our team arrives with quality packing materials to carefully pack and label all your belongings for the move.",
      icon: <Package size={24} />
    },
    {
      title: "Safe Transport",
      description: "We load your items into our modern, well-maintained vehicles and transport them safely to the destination.",
      icon: <Truck size={24} />
    },
    {
      title: "Deliver & Setup",
      description: "We unload, unpack and set up your belongings at your new location according to your preferences.",
      icon: <Home size={24} />
    }
  ];

  return (
    <section id="process" className="section-container bg-ats-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">How It <span className="text-ats-blue">Works</span></h2>
        <p className="section-subtitle text-center">
          Our simple 4-step process makes your relocation smooth and stress-free.
        </p>
        
        <div className="max-w-3xl mx-auto mt-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
