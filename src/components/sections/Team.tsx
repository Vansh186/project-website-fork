import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      department: 'Computer Science',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'arjun@enactusbitspilani.com'
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      department: 'Mechanical Engineering',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'priya@enactusbitspilani.com'
    },
    {
      name: 'Rahul Verma',
      role: 'Project Director',
      department: 'Economics',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'rahul@enactusbitspilani.com'
    },
    {
      name: 'Sneha Gupta',
      role: 'Finance Head',
      department: 'Management',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'sneha@enactusbitspilani.com'
    },
    {
      name: 'Vikram Singh',
      role: 'Marketing Head',
      department: 'Electrical Engineering',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'vikram@enactusbitspilani.com'
    },
    {
      name: 'Ananya Desai',
      role: 'Operations Head',
      department: 'Chemical Engineering',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'ananya@enactusbitspilani.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-charcoal-700/50">
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
            Meet Our <span className="text-gold-500">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind every successful project is a dedicated team of passionate individuals 
            working tirelessly to create positive change in our communities.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-charcoal-600 rounded-2xl p-6 border border-charcoal-500 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl">
                {/* Member Image */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gold-500/20 group-hover:border-gold-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-1">{member.department}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.year}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-charcoal-600 rounded-2xl p-8 border border-charcoal-500 max-w-4xl mx-auto">
            <Users className="h-12 w-12 text-gold-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Are you passionate about creating social impact? We're always looking for 
              dedicated individuals to join our mission. Become part of our family and 
              help us make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gold-gradient text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:shadow-gold-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-full font-semibold hover:bg-gold-500 hover:text-charcoal-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;