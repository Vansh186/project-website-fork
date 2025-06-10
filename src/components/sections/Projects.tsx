import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Rural Education Initiative',
      description: 'Providing quality education resources and digital literacy to underserved rural communities.',
      impact: '200+ students benefited',
      location: 'Rajasthan Villages',
      status: 'Active',
      image: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Women Entrepreneurship Program',
      description: 'Empowering women through skill development and micro-entrepreneurship opportunities.',
      impact: '50+ women trained',
      location: 'Local Communities',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sustainable Agriculture Project',
      description: 'Promoting organic farming techniques and sustainable agricultural practices.',
      impact: '100+ farmers reached',
      location: 'Rural Rajasthan',
      status: 'Active',
      image: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Digital Financial Literacy',
      description: 'Teaching digital payment systems and financial management to rural populations.',
      impact: '300+ people trained',
      location: 'Multiple Villages',
      status: 'Active',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems and educating communities about water hygiene.',
      impact: '500+ people served',
      location: 'Remote Areas',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/6646966/pexels-photo-6646966.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Youth Skill Development',
      description: 'Providing vocational training and employability skills to unemployed youth.',
      impact: '150+ youth trained',
      location: 'Urban & Rural',
      status: 'Active',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20">
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
            Our <span className="text-gold-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the impact we're making through innovative social entrepreneurship projects 
            that address real-world challenges and create lasting change.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-charcoal-700 rounded-2xl overflow-hidden border border-charcoal-600 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="h-4 w-4 mr-2 text-gold-500" />
                      {project.impact}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-gold-500" />
                      {project.location}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    className="flex items-center text-gold-500 hover:text-gold-400 transition-colors duration-300 group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-charcoal-700 rounded-2xl p-8 border border-charcoal-600">
            <h3 className="text-3xl font-bold text-white mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for new opportunities to create positive impact. 
              Share your ideas and let's work together to make a difference.
            </p>
            <motion.button
              className="bg-gold-gradient text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:shadow-gold-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Idea
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;