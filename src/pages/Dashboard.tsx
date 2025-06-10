import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Mail, Calendar, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '45', change: '+5 this month' },
    { icon: Target, label: 'Active Projects', value: '8', change: '+2 this quarter' },
    { icon: Award, label: 'Awards Won', value: '12', change: '+3 this year' },
    { icon: TrendingUp, label: 'Lives Impacted', value: '2,150', change: '+150 this month' },
  ];

  const recentActivities = [
    { type: 'project', message: 'New project "Rural Education Initiative" launched', time: '2 hours ago' },
    { type: 'member', message: 'Sarah Johnson joined the team', time: '1 day ago' },
    { type: 'achievement', message: 'Won Best Social Impact Award', time: '3 days ago' },
    { type: 'event', message: 'Monthly team meeting scheduled', time: '5 days ago' },
  ];

  const upcomingEvents = [
    { title: 'Board Meeting', date: '2024-01-15', time: '10:00 AM' },
    { title: 'Project Presentation', date: '2024-01-18', time: '2:00 PM' },
    { title: 'Community Outreach', date: '2024-01-22', time: '9:00 AM' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with Enactus BITS Pilani.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-charcoal-700/90 backdrop-blur-sm rounded-xl p-6 border border-charcoal-600 hover:border-gold-500/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gold-500/20 rounded-lg">
                  <stat.icon className="h-6 w-6 text-gold-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-green-400 text-xs">{stat.change}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-charcoal-700/90 backdrop-blur-sm rounded-xl p-6 border border-charcoal-600"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activities</h2>
              <Bell className="h-5 w-5 text-gold-500" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-charcoal-600/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.message}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-charcoal-700/90 backdrop-blur-sm rounded-xl p-6 border border-charcoal-600"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
              <Calendar className="h-5 w-5 text-gold-500" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 bg-charcoal-600/50 backdrop-blur-sm rounded-lg border-l-4 border-gold-500">
                  <h3 className="text-white font-medium">{event.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-400 text-sm">{event.date}</p>
                    <p className="text-gold-500 text-sm">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 bg-charcoal-700/90 backdrop-blur-sm rounded-xl p-6 border border-charcoal-600"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-charcoal-600/50 backdrop-blur-sm rounded-lg hover:bg-charcoal-500/50 transition-colors duration-300 text-left">
              <Mail className="h-5 w-5 text-gold-500" />
              <span className="text-white">Send Newsletter</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-charcoal-600/50 backdrop-blur-sm rounded-lg hover:bg-charcoal-500/50 transition-colors duration-300 text-left">
              <Users className="h-5 w-5 text-gold-500" />
              <span className="text-white">Manage Members</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-charcoal-600/50 backdrop-blur-sm rounded-lg hover:bg-charcoal-500/50 transition-colors duration-300 text-left">
              <Target className="h-5 w-5 text-gold-500" />
              <span className="text-white">Create Project</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;