import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
  github?: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Arjun Sharma',
      position: 'President',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the team with vision and passion for social change.',
      linkedin: '#',
      email: 'arjun@enactus.org',
      github: '#'
    },
    {
      name: 'Priya Patel',
      position: 'Vice President',
      department: 'Economics',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Strategic planning and project management expert.',
      linkedin: '#',
      email: 'priya@enactus.org'
    },
    {
      name: 'Rahul Gupta',
      position: 'Project Director',
      department: 'Mechanical Engineering',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Overseeing all project implementations and community outreach.',
      linkedin: '#',
      email: 'rahul@enactus.org'
    },
    {
      name: 'Sneha Reddy',
      position: 'Finance Head',
      department: 'Management',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing finances and ensuring sustainable project funding.',
      linkedin: '#',
      email: 'sneha@enactus.org'
    },
    {
      name: 'Vikram Singh',
      position: 'Technology Lead',
      department: 'Information Systems',
      image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Developing tech solutions for social impact projects.',
      linkedin: '#',
      email: 'vikram@enactus.org',
      github: '#'
    },
    {
      name: 'Anita Kumar',
      position: 'Marketing Head',
      department: 'Communication',
      image: 'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Building brand awareness and community engagement.',
      linkedin: '#',
      email: 'anita@enactus.org'
    },
    {
      name: 'Sanjay Mehta',
      position: 'Operations Manager',
      department: 'Industrial Engineering',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Streamlining operations and ensuring project efficiency.',
      linkedin: '#',
      email: 'sanjay@enactus.org'
    },
    {
      name: 'Kavya Nair',
      position: 'Research Head',
      department: 'Social Sciences',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading research initiatives and impact assessment.',
      linkedin: '#',
      email: 'kavya@enactus.org'
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
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate leaders driving positive change through entrepreneurial action
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 glow-gold">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-primary-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="p-3 bg-primary-gold text-primary-black rounded-full hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-3 bg-primary-gold text-primary-black rounded-full hover:scale-110 transition-transform"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="p-3 bg-primary-gold text-primary-black rounded-full hover:scale-110 transition-transform"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-gold font-semibold text-sm mb-1">
                      {member.position}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {member.department}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-primary-dark-gray to-primary-light-gray rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you passionate about creating positive social impact? Do you want to develop your leadership skills while making a difference? 
            Join Enactus BITS Pilani and be part of our mission to empower communities through entrepreneurial action.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Leadership Development</h3>
              <p className="text-gray-300 text-sm">Build essential leadership skills through hands-on project management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Global Network</h3>
              <p className="text-gray-300 text-sm">Connect with Enactus members from around the world</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="text-lg font-semibold text-primary-gold mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">Develop innovative solutions to real-world problems</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-metallic px-8 py-3 rounded-full font-semibold text-primary-black hover:scale-105 transition-transform">
              Apply Now
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

export default Team;