
import { useState, FormEvent } from 'react';
import { Calendar, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  moveFrom: string;
  moveTo: string;
  moveDate: string;
  message: string;
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // This function will be overridden by the form's action attribute
    // But we'll use it to show our success message and reset the form
    setIsSubmitted(true);
    reset();
    
    // Hide the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-container bg-ats-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Contact <span className="text-ats-blue">Us</span></h2>
        <p className="section-subtitle text-center">
          Ready to make your move stress-free? Get in touch with us today for a free quote!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-ats-blue rounded-xl p-8 text-white">
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
            {isSubmitted && (
              <Alert className="mb-6 bg-yellow-400 border-yellow-500 text-ats-navy">
                <AlertTitle className="font-semibold">✅ Thank you! Your request has been received.</AlertTitle>
                <AlertDescription>
                  We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            )}
            
            <form 
              action="https://formsubmit.co/ambition.trans@gmail.com" 
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Hidden input for formsubmit.co to prevent redirects */}
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-ats-navy">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-ats-navy">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-ats-navy">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: true })}
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="moveFrom" className="block mb-2 text-sm font-medium text-ats-navy">
                    Moving From *
                  </label>
                  <Input
                    id="moveFrom"
                    type="text"
                    {...register("moveFrom", { required: true })}
                    name="moveFrom"
                    placeholder="Origin Address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="moveTo" className="block mb-2 text-sm font-medium text-ats-navy">
                    Moving To *
                  </label>
                  <Input
                    id="moveTo"
                    type="text"
                    {...register("moveTo", { required: true })}
                    name="moveTo"
                    placeholder="Destination Address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="moveDate" className="block mb-2 text-sm font-medium text-ats-navy">
                  Preferred Moving Date
                </label>
                <div className="relative">
                  <Input
                    id="moveDate"
                    type="date"
                    {...register("moveDate")}
                    name="moveDate"
                    className="w-full"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-ats-gray pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-ats-navy">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  name="message"
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
