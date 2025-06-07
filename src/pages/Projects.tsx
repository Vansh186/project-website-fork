import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X, Calendar, Users, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  impact: string;
  duration: string;
  team: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Planned';
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'EcoTech Solutions',
      category: 'Environment',
      description: 'Sustainable technology solutions for rural communities',
      fullDescription: 'EcoTech Solutions is our flagship environmental project that focuses on providing sustainable technology solutions to rural communities. We have developed solar-powered water purification systems, bio-gas plants, and organic farming techniques that have transformed the lives of over 2,000 families across 15 villages.',
      image: 'https://images.pexels.com/photos/9324304/pexels-photo-9324304.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '2,000+ families benefited',
      duration: '18 months',
      team: '25 members',
      location: 'Rural Rajasthan',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'SkillBridge',
      category: 'Education',
      description: 'Bridging the skill gap through digital literacy programs',
      fullDescription: 'SkillBridge is our comprehensive digital literacy and skill development program targeting unemployed youth and women in semi-urban areas. Through our mobile training units and online platforms, we have provided vocational training in digital marketing, basic computer skills, and entrepreneurship.',
      image: 'https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '1,500+ people trained',
      duration: '24 months',
      team: '18 members',
      location: 'Multiple cities',
      status: 'Ongoing'
    },
    {
      id: 3,
      title: 'HealthFirst Initiative',
      category: 'Healthcare',
      description: 'Community health awareness and preventive care programs',
      fullDescription: 'HealthFirst Initiative focuses on preventive healthcare and health awareness in underserved communities. Our mobile health camps, vaccination drives, and health education workshops have reached thousands of people, improving health literacy and access to basic healthcare services.',
      image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '5,000+ people reached',
      duration: '12 months',
      team: '22 members',
      location: 'Urban slums',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'WomenEmpower',
      category: 'Empowerment',
      description: 'Women empowerment through microfinance and skill development',
      fullDescription: 'WomenEmpower is our flagship women empowerment project that combines microfinance with skill development. We have established self-help groups, provided microloans, and conducted training programs in tailoring, handicrafts, and small business management.',
      image: 'https://images.pexels.com/photos/8488884/pexels-photo-8488884.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '800+ women empowered',
      duration: '20 months',
      team: '16 members',
      location: 'Rural Gujarat',
      status: 'Ongoing'
    },
    {
      id: 5,
      title: 'FoodSecurity Network',
      category: 'Nutrition',
      description: 'Addressing malnutrition through sustainable food systems',
      fullDescription: 'FoodSecurity Network tackles malnutrition by establishing community kitchens, nutrition gardens, and food distribution networks. Our approach combines immediate relief with long-term sustainable solutions for food security.',
      image: 'https://images.pexels.com/photos/6994994/pexels-photo-6994994.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '3,000+ people fed daily',
      duration: '15 months',
      team: '30 members',
      location: 'Urban periphery',
      status: 'Ongoing'
    },
    {
      id: 6,
      title: 'TechForAll',
      category: 'Technology',
      description: 'Democratizing technology access in underserved areas',
      fullDescription: 'TechForAll aims to bridge the digital divide by setting up community technology centers, providing refurbished computers, and teaching basic digital skills. Our initiative has made technology accessible to thousands of people who previously had no exposure to digital tools.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '2,500+ people connected',
      duration: '14 months',
      team: '20 members',
      location: 'Remote villages',
      status: 'Planned'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'Ongoing': return 'bg-primary-gold';
      case 'Planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
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
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the impactful initiatives that are creating positive change in communities across India
          </p>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-gold text-primary-black p-3 rounded-full hover:scale-110 transition-transform glow-gold"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-gold text-primary-black p-3 rounded-full hover:scale-110 transition-transform glow-gold"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Container */}
          <div 
            ref={scrollContainerRef}
            className="horizontal-scroll flex gap-6 overflow-x-auto pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-primary-dark-gray rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300 glow-gold group-hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary-gold text-primary-black rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-gold text-sm font-semibold">
                        {project.impact}
                      </span>
                      <div className="flex items-center text-primary-gold group-hover:translate-x-2 transition-transform">
                        <span className="text-sm mr-2">Open</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Want to Contribute?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in creating positive change. Whether you're a student, professional, or organization, 
            there are many ways to get involved with our projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-metallic px-8 py-3 rounded-full font-semibold text-primary-black hover:scale-105 transition-transform">
              Join Our Team
            </button>
            <button className="px-8 py-3 rounded-full font-semibold text-primary-gold border-2 border-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 toast-modal"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="toast-content rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <span className="px-3 py-1 bg-primary-gold text-primary-black rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-primary-gold transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 text-primary-gold mr-2" />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-5 h-5 text-primary-gold mr-2" />
                      <span>{selectedProject.team}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 text-primary-gold mr-2" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-gold mb-4">Project Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-gold/20 to-primary-gold-alt/20 rounded-xl p-4 mb-6">
                    <h4 className="text-lg font-semibold text-primary-gold mb-2">Impact Achieved</h4>
                    <p className="text-white text-lg font-semibold">{selectedProject.impact}</p>
                  </div>

                  <div className="flex gap-4">
                    <button className="btn-metallic px-6 py-3 rounded-full font-semibold text-primary-black hover:scale-105 transition-transform flex-1">
                      Get Involved
                    </button>
                    <button className="px-6 py-3 rounded-full font-semibold text-primary-gold border-2 border-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all flex-1">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;