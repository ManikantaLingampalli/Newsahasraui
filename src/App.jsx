import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Mail, Megaphone, BarChart, Youtube, Facebook, Instagram, Twitter, MoveRight,
  LayoutTemplate, FileText, Star, Contact, Film, Mic, FileImage, HeartPulse, Activity, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { icon: Mail, title: 'Email Marketing', description: 'Targeted campaigns to engage and convert your audience.' },
  { icon: Megaphone, title: 'Social Media Marketing', description: 'Building a strong, interactive social media presence.' },
  { icon: BarChart, title: 'Google Ads', description: 'Maximizing your ROI with powerful, data-driven Google Ads.' },
  { icon: Youtube, title: 'Youtube Ads', description: 'Captivating video ads that reach millions of potential customers.' },
  { icon: LayoutTemplate, title: 'Website Design & Hosting', description: 'Stunning websites designed, built, and hosted for you.' },
  { icon: FileText, title: 'Pamphlet Design', description: 'Creative pamphlets that effectively communicate your message.' },
  { icon: Star, title: 'Google & Online Reviews', description: 'Enhance your reputation with positive review management.' },
  { icon: Contact, title: 'Visiting Cards', description: 'Professional visiting cards that make a lasting impression.' },
  { icon: Film, title: 'Video Editing', description: 'Polished and engaging video content for your brand.' },
  { icon: Mic, title: 'Voice Over for Promotions', description: 'Compelling voice-overs that capture your audience\'s attention.' },
  { icon: FileImage, title: 'Flyers', description: 'Eye-catching flyers designed to promote your events and offers.' },
  { icon: HeartPulse, title: 'Practo Patient Stories', description: 'Build trust with authentic patient stories on Practo.' },
  { icon: Activity, title: 'Lybrate Marketing', description: 'Targeted marketing on Lybrate to reach new patients.' },
  { icon: Phone, title: 'Just Dial Optimization', description: 'Boost your visibility and leads from Just Dial.' },
];

const testimonials = [
  { name: 'Tech Innovators Inc.', quote: '"Sahasra Digitals transformed our online presence. Their strategies doubled our leads in just three months!"' },
  { name: 'Lifestyle Co.', quote: '"The best digital marketing team we have ever worked with. Highly professional and results-oriented."' },
  { name: 'Foodie Ventures', quote: '"Our social media engagement has skyrocketed thanks to their creative campaigns. Incredible work!"' },
];

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });
  const [selectedService, setSelectedService] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleServiceChange = (value) => {
    setSelectedService(value);
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.service) {
      localStorage.setItem(`contact-${Date.now()}`, JSON.stringify(formData));
      toast({
        title: 'Form Submitted! 🎉',
        description: 'Thank you for reaching out. We will get back to you soon!',
      });
      setFormData({ name: '', phone: '', email: '', service: '' });
      setSelectedService('');
    } else {
      toast({
        title: 'Oops! Something is missing.',
        description: 'Please fill out all the fields.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sahasra Digitals - We Care and Promote Your Business</title>
        <meta name="description" content="Sahasra Digitals offers expert digital marketing services including Email Marketing, Social Media, Google Ads, and Youtube Ads to grow your business." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/50 -z-1`}></div>

        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/50 backdrop-blur-lg">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>

              <div className="flex items-center space-x-2">
                <img src="sahasralogo.png" alt="Sahasra" className="h-8 w-auto" />
                <span className="text-2xl font-bold gradient-text">Sahasra Digitals</span>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-gray-300 hover:text-white transition-colors duration-300">
                  {link.name}
                </motion.a>
              ))}
            </div>
            <a href="#contact">
              <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6">
                Get a Quote
              </Button>
            </a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-6 pt-32 pb-16 text-center flex flex-col items-center justify-center min-h-screen">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                <span className="gradient-text">Sahasra Digitals</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We care and promote your business
              </p>
              <a href="#services">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-10 py-6 text-lg">
                  Explore Our Services <MoveRight className="ml-2" />
                </Button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16">
              <img class="max-w-4xl w-full rounded-2xl shadow-2xl shadow-purple-900/20" alt="Digital marketing team collaborating on a project" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">We provide a wide range of digital marketing services to help your business grow and succeed online.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                    <Card className="glass-card h-full text-center hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader className="items-center">
                        <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Real stories from businesses we have helped thrive in the digital world.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                  <motion.div key={testimonial.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Card className="glass-card h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow">
                        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader>
                        <CardTitle className="text-lg text-purple-400">{testimonial.name}</CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Ready to elevate your business? Fill out the form below and we'll get back to you.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                <Card className="max-w-2xl mx-auto glass-card">
                  <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                        <Input id="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required className="bg-slate-800/50 border-slate-700 focus:ring-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleInputChange} required className="bg-slate-800/50 border-slate-700 focus:ring-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleInputChange} required className="bg-slate-800/50 border-slate-700 focus:ring-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-gray-300">Service Required</Label>
                        <Select onValueChange={handleServiceChange} value={selectedService}>
                          <SelectTrigger className="w-full bg-slate-800/50 border-slate-700 focus:ring-purple-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            {services.map(s => <SelectItem key={s.title} value={s.title} className="focus:bg-purple-600/50">{s.title}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3 text-lg">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xl font-bold gradient-text">Sahasra Digitals</span>
                <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} Sahasra Digitals. All Rights Reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter /></a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </div>
    </>
  );
}

export default App;
