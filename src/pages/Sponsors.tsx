import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, Handshake, Star } from 'lucide-react';

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver' | 'partner';
  contribution: string;
}

const Sponsors: React.FC = () => {
  const sponsors: Sponsor[] = [
    {
      name: 'TechCorp Industries',
      logo: 'https://images.pexels.com/photos/5077067/pexels-photo-5077067.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading technology solutions provider supporting our digital literacy initiatives.',
      website: '#',
      tier: 'platinum',
      contribution: 'Technology Infrastructure & Funding'
    },
    {
      name: 'Green Energy Solutions',
      logo: 'https://images.pexels.com/photos/4254552/pexels-photo-4254552.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sustainable energy company powering our environmental projects.',
      website: '#',
      tier: 'platinum',
      contribution: 'Solar Equipment & Technical Expertise'
    },
    {
      name: 'HealthFirst Foundation',
      logo: 'https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Healthcare foundation supporting our community health initiatives.',
      website: '#',
      tier: 'gold',
      contribution: 'Medical Equipment & Training'
    },
    {
      name: 'EduTech Innovation',
      logo: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Educational technology company enhancing our skill development programs.',
      website: '#',
      tier: 'gold',
      contribution: 'Learning Platforms & Content'
    },
    {
      name: 'Microfinance Plus',
      logo: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Financial services company supporting our women empowerment projects.',
      website: '#',
      tier: 'silver',
      contribution: 'Financial Services & Training'
    },
    {
      name: 'AgriTech Solutions',
      logo: 'https://images.pexels.com/photos/4254554/pexels-photo-4254554.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Agricultural technology firm supporting sustainable farming initiatives.',
      website: '#',
      tier: 'silver',
      contribution: 'Agricultural Equipment'
    },
    {
      name: 'Local Community Bank',
      logo: 'https://images.pexels.com/photos/3943733/pexels-photo-3943733.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Community-focused bank providing financial literacy programs.',
      website: '#',
      tier: 'partner',
      contribution: 'Financial Literacy Training'
    },
    {
      name: 'Skill Development Institute',
      logo: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Vocational training institute partnering on skill development.',
      website: '#',
      tier: 'partner',
      contribution: 'Training Programs & Certification'
    }
  ];

  const getTierColor = (tier: Sponsor['tier']) => {
    switch (tier) {
      case 'platinum': return 'from-gray-300 to-gray-100';
      case 'gold': return 'from-primary-gold to-primary-gold-alt';
      case 'silver': return 'from-gray-400 to-gray-200';
      case 'partner': return 'from-primary-light-gray to-primary-dark-gray';
      default: return 'from-primary-gold to-primary-gold-alt';
    }
  };

  const getTierIcon = (tier: Sponsor['tier']) => {
    switch (tier) {
      case 'platinum': return <Star className="w-6 h-6" />;
      case 'gold': return <Heart className="w-6 h-6" />;
      case 'silver': return <Handshake className="w-6 h-6" />;
      case 'partner': return <Handshake className="w-5 h-5" />;
      default: return <Heart className="w-6 h-6" />;
    }
  };

  const groupedSponsors = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    partner: sponsors.filter(s => s.tier === 'partner')
  };

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
              Our Sponsors
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with organizations that share our vision of creating positive social impact through entrepreneurial action
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
              <Star className="w-8 h-8 text-gray-300 mr-3" />
              Platinum Partners
            </h2>
            <p className="text-gray-300">Our premier partners driving major initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedSponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl p-8 hover:scale-105 transition-all duration-300 glow-gold">
                  <div className="flex items-start space-x-6">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors">
                          {sponsor.name}
                        </h3>
                        <a
                          href={sponsor.website}
                          className="ml-2 text-primary-gold hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {sponsor.description}
                      </p>
                      <div className="bg-gradient-to-r from-gray-300/20 to-gray-100/20 rounded-lg p-3">
                        <p className="text-gray-200 text-sm font-semibold">
                          <span className="text-primary-gold">Contribution:</span> {sponsor.contribution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gold Sponsors */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-gold mr-3" />
              Gold Partners
            </h2>
            <p className="text-gray-300">Valued partners supporting key programs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedSponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-3">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-gold transition-colors">
                          {sponsor.name}
                        </h3>
                        <a href={sponsor.website} className="ml-2 text-primary-gold">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-primary-gold text-sm font-semibold capitalize">
                        {sponsor.tier} Partner
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{sponsor.description}</p>
                  <p className="text-gray-400 text-xs">
                    <span className="text-primary-gold">Contribution:</span> {sponsor.contribution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Silver Sponsors & Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Silver Sponsors */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-gray-400 mr-2" />
                Silver Partners
              </h2>
            </div>
            
            <div className="space-y-4">
              {groupedSponsors.silver.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-dark-gray rounded-lg p-4 hover:bg-primary-light-gray transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-semibold text-white group-hover:text-primary-gold transition-colors">
                          {sponsor.name}
                        </h3>
                        <a href={sponsor.website} className="ml-2 text-primary-gold">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-gray-400 text-sm">{sponsor.contribution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Community Partners */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-primary-gold mr-2" />
                Community Partners
              </h2>
            </div>
            
            <div className="space-y-4">
              {groupedSponsors.partner.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-dark-gray rounded-lg p-4 hover:bg-primary-light-gray transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-semibold text-white group-hover:text-primary-gold transition-colors">
                          {sponsor.name}
                        </h3>
                        <a href={sponsor.website} className="ml-2 text-primary-gold">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-gray-400 text-sm">{sponsor.contribution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Partner with Us */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-primary-dark-gray to-primary-light-gray rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Partner With Us</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our mission to create positive social impact. We offer various partnership opportunities 
            that align with your organization's CSR goals while making a meaningful difference in communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Strategic Partnership</h3>
              <p className="text-gray-300 text-sm">Long-term collaboration on major initiatives</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Corporate Sponsorship</h3>
              <p className="text-gray-300 text-sm">Support specific projects aligned with your values</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Project Partnership</h3>
              <p className="text-gray-300 text-sm">Collaborate on targeted social impact initiatives</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-metallic px-8 py-3 rounded-full font-semibold text-primary-black hover:scale-105 transition-transform">
              Become a Partner
            </button>
            <button className="px-8 py-3 rounded-full font-semibold text-primary-gold border-2 border-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
              Partnership Brochure
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sponsors;