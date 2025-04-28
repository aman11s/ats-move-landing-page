
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
