import React from 'react';
import { motion } from 'framer-motion';
import { Building, Handshake } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Tech Corp',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Gold',
      description: 'Technology solutions and digital infrastructure support'
    },
    {
      name: 'Green Energy Ltd',
      logo: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Gold',
      description: 'Sustainable energy solutions for community projects'
    },
    {
      name: 'Education Foundation',
      logo: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Silver',
      description: 'Educational resources and scholarship programs'
    },
    {
      name: 'Healthcare Plus',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Silver',
      description: 'Healthcare initiatives and medical support'
    },
    {
      name: 'Community Bank',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Bronze',
      description: 'Financial services and microfinance support'
    },
    {
      name: 'Local Foods Co',
      logo: 'https://images.pexels.com/photos/6646966/pexels-photo-6646966.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'Bronze',
      description: 'Sustainable agriculture and food security programs'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Gold': return 'from-yellow-400 to-yellow-600';
      case 'Silver': return 'from-gray-300 to-gray-500';
      case 'Bronze': return 'from-orange-400 to-orange-600';
      default: return 'from-yellow-400 to-blue-500';
    }
  };

  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our partners and sponsors who share our vision of creating 
            positive social impact through entrepreneurial action.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-charcoal-700 rounded-2xl p-6 border border-charcoal-600 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl text-center">
                {/* Tier Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)} text-charcoal-800`}>
                    {partner.tier} Partner
                  </span>
                </div>

                {/* Partner Logo */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <Building className="h-12 w-12 text-yellow-400" />
                </div>

                {/* Partner Info */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-charcoal-700 rounded-2xl p-8 border border-charcoal-600 max-w-4xl mx-auto">
            <Handshake className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Partner With Us
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hands with us to create meaningful social impact. We offer various 
              partnership opportunities that align with your corporate social responsibility goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {['Gold Partnership', 'Silver Partnership', 'Bronze Partnership'].map((tier, index) => (
                <div key={tier} className="bg-charcoal-600 rounded-lg p-4 border border-charcoal-500">
                  <h4 className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent font-semibold mb-2">{tier}</h4>
                  <p className="text-gray-400 text-sm">
                    Comprehensive support with maximum visibility and impact recognition.
                  </p>
                </div>
              ))}
            </div>
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-blue-500 text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;