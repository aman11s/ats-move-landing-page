
import { useState } from 'react';
import { Calendar, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveFrom: '',
    moveTo: '',
    moveDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.moveFrom || !formData.moveTo) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you'd send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Quote Request Sent",
      description: "We'll get back to you with a free quote shortly!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveFrom: '',
      moveTo: '',
      moveDate: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-container bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Contact <span className="text-ats-orange">Us</span></h2>
        <p className="section-subtitle text-center">
          Ready to make your move stress-free? Get in touch with us today for a free quote!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-ats-orange rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Get A Free Quote</h3>
            <p className="mb-8">
              Fill out the form, and our team will get back to you with a detailed quote tailored to your specific requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>info@atspackersmovers.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p>123 Relocation Street, Transport Nagar</p>
                  <p>Mumbai, Maharashtra - 400001</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-ats-black">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-ats-black">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    type="email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-ats-black">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="moveFrom" className="block mb-2 text-sm font-medium text-ats-black">
                    Moving From *
                  </label>
                  <Input
                    id="moveFrom"
                    name="moveFrom"
                    value={formData.moveFrom}
                    onChange={handleChange}
                    placeholder="Origin Address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="moveTo" className="block mb-2 text-sm font-medium text-ats-black">
                    Moving To *
                  </label>
                  <Input
                    id="moveTo"
                    name="moveTo"
                    value={formData.moveTo}
                    onChange={handleChange}
                    placeholder="Destination Address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="moveDate" className="block mb-2 text-sm font-medium text-ats-black">
                  Preferred Moving Date
                </label>
                <div className="relative">
                  <Input
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    type="date"
                    className="w-full"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-ats-gray pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-ats-black">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions?"
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                <FileText className="mr-2 h-5 w-5" /> Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
