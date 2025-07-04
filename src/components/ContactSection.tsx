import React, { useState } from 'react';
import { Linkedin, Github, Instagram, Contact, Mail, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate EmailJS configuration
    if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      console.error('EmailJS configuration is missing. Please check your environment variables.');
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please contact the administrator.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: 'logavinayagam74@gmail.com',
          your_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          title: 'New Contact Form Submission'
        }
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon via email!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/loga2345',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Logavinayagam',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/logu.2004/',
      icon: Instagram,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                    <img
                      src="/images/profile.jpg"
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's build the future together.</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Get in touch</h4>
                <div className="space-y-2">
                  <a
                    href="mailto:logavinayagam74@gmail.com"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="mr-3" size={18} />
                    logavinayagam74@gmail.com
                  </a>
                  <a
                    href="https://wa.me/919514831525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <svg className="mr-3" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +91 95148 31525
                  </a>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-3" size={18} />
                     No: 349, Salai Vinayagam Street, Otteri, Vellore-632002, Tamil Nadu, India
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Follow me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-900/60 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-900/60 p-8 rounded-xl border border-blue-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
