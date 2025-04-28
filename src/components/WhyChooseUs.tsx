
import { Clock, DollarSign, Package, User } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="card flex flex-col items-center text-center h-full">
      <div className="mb-4 p-4 bg-ats-orange bg-opacity-10 rounded-full">
        <div className="text-ats-orange">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-ats-black">{title}</h3>
      <p className="text-ats-gray">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Staff",
      description: "Our highly trained team handles your belongings with expert care and attention to detail.",
      icon: <User size={28} />
    },
    {
      title: "Affordable Pricing",
      description: "Transparent, competitive pricing with no hidden costs or unexpected charges.",
      icon: <DollarSign size={28} />
    },
    {
      title: "Timely Delivery",
      description: "We value your time and ensure your possessions arrive right when you need them.",
      icon: <Clock size={28} />
    },
    {
      title: "Safe Packaging",
      description: "Premium materials and industry-best practices to keep your items secure during transit.",
      icon: <Package size={28} />
    }
  ];

  return (
    <section id="whyus" className="section-container bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Why Choose <span className="text-ats-orange">ATS</span> Packers & Movers</h2>
        <p className="section-subtitle text-center">
          With years of experience and thousands of successful relocations, we're committed to making your move stress-free.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
