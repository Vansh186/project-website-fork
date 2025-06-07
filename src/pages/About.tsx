import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
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
              About Enactus
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a community of student, academic and business leaders committed to using the power of entrepreneurial action to create a better world.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl p-8 hover:scale-105 transition-transform glow-gold"
          >
            <Target className="w-12 h-12 text-primary-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To enable progress through entrepreneurial action by student leaders who create sustainable solutions for their communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl p-8 hover:scale-105 transition-transform glow-gold"
          >
            <Eye className="w-12 h-12 text-primary-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A world where everyone has the opportunity to improve their quality of life and standard of living through their own efforts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl p-8 hover:scale-105 transition-transform glow-gold"
          >
            <Heart className="w-12 h-12 text-primary-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-300 leading-relaxed">
              Integrity, passion, innovation, and social responsibility guide everything we do as we work to create positive change.
            </p>
          </motion.div>
        </div>

        {/* What is Enactus */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-gold mb-6">What is Enactus?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Enactus is an international non-profit organization that brings together student, academic and business leaders who are committed to using the power of entrepreneurial action to improve the quality of life and standard of living for people in need.
                </p>
                <p>
                  Through community outreach projects, we identify social issues and develop sustainable solutions that create positive change. Our projects focus on empowerment, economic opportunity, education, environment, and health.
                </p>
                <p>
                  At BITS Pilani, our Enactus team has been at the forefront of social innovation since 2018, working tirelessly to address pressing societal challenges through entrepreneurial solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-gold mb-4">Our Achievements</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition and awards that showcase our commitment to excellence in social innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'National Champions', desc: '2023 Enactus India' },
              { icon: Globe, title: 'Global Recognition', desc: 'World Cup Participation' },
              { icon: Users, title: 'Community Impact', desc: '15,000+ Lives Touched' },
              { icon: Target, title: 'Project Excellence', desc: 'Best Innovation Award' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-dark-gray rounded-xl p-6 text-center hover:bg-primary-light-gray transition-colors group"
              >
                <achievement.icon className="w-12 h-12 text-primary-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-primary-dark-gray to-primary-light-gray rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create sustainable solutions for a better tomorrow. 
            Together, we can make a lasting impact on communities across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-metallic px-8 py-3 rounded-full font-semibold text-primary-black hover:scale-105 transition-transform">
              Join Enactus BITS
            </button>
            <button className="px-8 py-3 rounded-full font-semibold text-primary-gold border-2 border-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
              Learn More
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;