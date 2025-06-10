import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    }
  ];

  const developers = [
    {
      name: 'Vikash Kumar',
      role: 'Lead Developer',
      department: 'Computer Science',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'vikash@enactusbitspilani.com'
    },
    {
      name: 'Ananya Desai',
      role: 'Frontend Developer',
      department: 'Information Technology',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'ananya@enactusbitspilani.com'
    },
    {
      name: 'Rohan Singh',
      role: 'Backend Developer',
      department: 'Computer Science',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'rohan@enactusbitspilani.com'
    }
  ];

  const renderMemberCard = (member: any, index: number) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-charcoal-600 rounded-2xl p-6 border border-charcoal-500 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl">
        {/* Member Image */}
        <div className="relative mb-6">
          <motion.div
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-blue-500 group-hover:scale-105 transition-all duration-300"
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
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent font-medium mb-2">{member.role}</p>
          <p className="text-gray-400 text-sm mb-1">{member.department}</p>
          <p className="text-gray-400 text-sm mb-4">{member.year}</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <motion.a
              href={member.linkedin}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="py-20 bg-charcoal-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind every successful project is a dedicated team of passionate individuals 
            working tirelessly to create positive change in our communities.
          </p>
        </motion.div>

        {/* Team Grid - Only 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* View Entire Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <Link to="/team">
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-blue-500 text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Entire Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Meet the Developers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">Developers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The talented developers who brought this website to life and continue to enhance our digital presence.
          </p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((developer, index) => renderMemberCard(developer, index))}
        </div>
      </div>
    </section>
  );
};

export default Team;