import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To enable progress through entrepreneurial action by empowering students to create community impact.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, passion, innovation, and social responsibility guide everything we do.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse group of changemakers working together to create lasting social impact.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Transforming communities through sustainable entrepreneurial solutions and initiatives.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-charcoal-700/50">
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
            About <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">Enactus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enactus is a global organization that brings together student, academic, and business 
            leaders who are committed to using the power of entrepreneurial action to improve the 
            quality of life and standard of living for people in need.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <value.icon className="h-8 w-8 text-charcoal-800" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal-600 rounded-2xl p-8 md:p-12 border border-charcoal-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story at BITS Pilani</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in 2018, Enactus BITS Pilani has been at the forefront of social 
                entrepreneurship and community development. Our team consists of passionate 
                students from diverse backgrounds, united by a common goal of creating positive change.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We believe that entrepreneurial action can be a powerful force for good. Through 
                our projects, we address critical social issues while empowering communities to 
                become self-sufficient and sustainable.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">6+</div>
                  <div className="text-gray-400">Years Active</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-400">Awards Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">1000+</div>
                  <div className="text-gray-400">Lives Touched</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="w-full h-80 bg-gradient-to-br from-yellow-400/20 to-blue-500/20 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400/30 to-blue-500/30 bg-clip-text text-transparent">ENACTUS</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;