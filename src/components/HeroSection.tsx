
import { Button } from '@/components/ui/button';
import MovingTruckIllustration from './illustrations/MovingTruckIllustration';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-ats-beige"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-ats-black leading-tight">
              <span className="text-ats-orange">ATS Packers & Movers</span> — Safe, Fast, Reliable Relocation Services
            </h1>
            <p className="text-lg md:text-xl text-ats-gray max-w-xl mx-auto md:mx-0 mb-8">
              Your trusted partner for hassle-free home and office relocations. We handle your belongings with care and deliver them safely to your new location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary text-center">Get a Free Quote</a>
              <Button variant="outline" className="border-ats-orange text-ats-orange hover:bg-ats-orange hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md md:max-w-full">
            <MovingTruckIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
