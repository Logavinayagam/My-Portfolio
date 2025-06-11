import React, { useState } from 'react';
import { Linkedin, Github, Instagram, Contact, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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

    try {
      // Prepare email data
      const emailData = {
        to: 'logavinayagam74@gmail.com',
        subject: `Portfolio Contact: ${formData.name}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
        `,
        timestamp: new Date().toISOString()
      };

      console.log('Contact form submission:', emailData);

      // For now, just show success message
      // TODO: Integrate with Supabase Edge Function for actual email sending
      toast({
        title: "Message Received!",
        description: "Thank you for your message. I'll get back to you soon via email!",
      });

      setFormData({ name: '', email: '', message: '' });
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
      url: '#',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Instagram',
      url: '#',
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
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-blue-400">
                    LM
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
                    <span className="mr-3">📱</span>
                    +91 95148 31525
                  </a>
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
