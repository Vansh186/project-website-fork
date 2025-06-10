import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Globe, Target, Lightbulb, Trophy } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Enactus BITS Pilani was established with a vision to create social impact',
      icon: Users,
      side: 'left'
    },
    {
      year: '2019',
      title: 'First Project Launch',
      description: 'Launched our first community development project in rural Rajasthan',
      icon: Target,
      side: 'right'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Adapted to digital platforms and launched online skill development programs',
      icon: Lightbulb,
      side: 'left'
    },
    {
      year: '2021',
      title: 'National Recognition',
      description: 'Won Best Innovation Award at Enactus India National Competition',
      icon: Award,
      side: 'right'
    },
    {
      year: '2022',
      title: 'Global Participation',
      description: 'Represented India at Enactus World Cup in Puerto Rico',
      icon: Globe,
      side: 'left'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded operations to 5 states with 15+ active projects',
      icon: Trophy,
      side: 'right'
    },
    {
      year: '2024',
      title: 'Sustainability Focus',
      description: 'Launched comprehensive sustainability and environmental initiatives',
      icon: Calendar,
      side: 'left'
    }
  ];

  return (
    <section id="timeline" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global recognition - discover the milestones that shaped our impact
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-500 to-yellow-400 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${milestone.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${milestone.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gradient-to-br from-charcoal-700 to-charcoal-600 rounded-2xl p-6 border border-charcoal-500 hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full mr-4">
                        <milestone.icon className="h-6 w-6 text-charcoal-800" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Central Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full border-4 border-charcoal-800 shadow-lg"
                  />
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;