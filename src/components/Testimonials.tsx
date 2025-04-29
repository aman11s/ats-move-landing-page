
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type TestimonialProps = {
  name: string;
  position: string;
  testimonial: string;
  image: string;
};

const TestimonialCard = ({ name, position, testimonial, image }: TestimonialProps) => {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-ats-blue/20 flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-ats-blue">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-ats-navy">{name}</h4>
          <p className="text-sm text-ats-gray">{position}</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="italic text-ats-gray">&ldquo;{testimonial}&rdquo;</p>
      </div>
      <div className="flex mt-auto">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Homeowner",
      testimonial: "ATS Packers & Movers made my home shifting experience incredibly smooth. Their team was professional, punctual, and took great care with all my belongings. Highly recommended!",
      image: "/profile1.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Business Owner",
      testimonial: "We hired ATS for our office relocation, and they exceeded our expectations. The move was completed over the weekend with minimal disruption to our business operations.",
      image: "/profile2.jpg"
    },
    {
      name: "Arun Singh",
      position: "Apartment Resident",
      testimonial: "Moving from a 3rd floor apartment without an elevator was a challenge, but ATS team handled it brilliantly. Everything arrived intact and on time. Great service!",
      image: "/profile3.jpg"
    },
    {
      name: "Meera Patel",
      position: "Homeowner",
      testimonial: "The packing quality was exceptional. Even my most fragile items were delivered without a scratch. The unpacking service saved me so much time and stress.",
      image: "/profile4.jpg"
    },
    {
      name: "Vikram Mehta",
      position: "IT Professional",
      testimonial: "I had to relocate for work on short notice, and ATS accommodated my tight schedule. Their rates were reasonable, and the service was excellent. Would use them again.",
      image: "/profile5.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<TestimonialProps[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const testimonialsToShow = isMobile ? 1 : 3;
    setVisibleTestimonials(
      testimonials.slice(
        currentIndex,
        currentIndex + testimonialsToShow
      )
    );
  }, [currentIndex, isMobile, testimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const testimonialsToShow = isMobile ? 1 : 3;
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsToShow < testimonials.length
        ? prevIndex + 1
        : prevIndex
    );
  };

  return (
    <section id="testimonials" className="section-container bg-ats-aqua">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Happy <span className="text-ats-blue">Clients</span></h2>
        <p className="section-subtitle text-center">
          Don't just take our word for it. Here's what our customers have to say about our services.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className="mr-4 border-ats-blue text-ats-blue hover:bg-ats-blue hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={isMobile ? currentIndex >= testimonials.length - 1 : currentIndex >= testimonials.length - 3}
              className="border-ats-blue text-ats-blue hover:bg-ats-blue hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
