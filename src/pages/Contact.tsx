import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'enactus@pilani.bits-pilani.ac.in',
      action: 'mailto:enactus@pilani.bits-pilani.ac.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      action: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'BITS Pilani, Pilani Campus, Rajasthan 333031',
      action: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-gold to-primary-gold-alt bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make a difference? Have questions about our projects? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black text-white rounded-lg border border-primary-light-gray focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black text-white rounded-lg border border-primary-light-gray focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary-black text-white rounded-lg border border-primary-light-gray focus:border-primary-gold focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteering">Volunteering Opportunity</option>
                  <option value="project">Project Collaboration</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="general">General Inquiry</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-black text-white rounded-lg border border-primary-light-gray focus:border-primary-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-metallic px-6 py-4 rounded-lg font-semibold text-primary-black hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="loading-spinner mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400 text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-center">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We're always excited to connect with like-minded individuals and organizations. 
                Whether you're interested in volunteering, partnering with us, or learning more about our initiatives, 
                don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={item.action}
                    className="flex items-center p-6 bg-gradient-to-r from-primary-dark-gray to-primary-light-gray rounded-xl hover:scale-105 transition-all duration-300 glow-gold"
                  >
                    <div className="p-3 bg-primary-gold text-primary-black rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary-gold mr-3" />
                <h3 className="text-lg font-semibold text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>5:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-primary-gold/20 to-primary-gold-alt/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary-gold mr-3" />
                <h3 className="text-lg font-semibold text-white">Join the Movement</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-gold">50+</div>
                  <div className="text-sm text-gray-300">Active Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-gold">15K+</div>
                  <div className="text-sm text-gray-300">Lives Impacted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How can I join Enactus BITS Pilani?",
                a: "We conduct recruitment drives at the beginning of each semester. Follow our social media for updates on applications and interviews."
              },
              {
                q: "Can organizations partner with us?",
                a: "Absolutely! We welcome partnerships with organizations that share our vision of creating positive social impact."
              },
              {
                q: "Do you accept project proposals from students?",
                a: "Yes, we encourage innovative project ideas from students. Submit your proposal through our contact form."
              },
              {
                q: "How can I volunteer for your projects?",
                a: "We always need volunteers! Contact us with your interests and availability, and we'll match you with suitable opportunities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-dark-gray rounded-xl p-6 hover:bg-primary-light-gray transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary-gold mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;