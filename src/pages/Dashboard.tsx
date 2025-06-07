import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Users, Target, TrendingUp, Plus, 
  Calendar, CheckCircle, Clock, AlertCircle,
  User, Settings, LogOut, Bell
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Projects', value: '12', icon: Target, color: 'text-primary-gold' },
    { label: 'Team Members', value: '48', icon: Users, color: 'text-blue-400' },
    { label: 'Lives Impacted', value: '15,247', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Completion Rate', value: '87%', icon: CheckCircle, color: 'text-purple-400' }
  ];

  const recentProjects = [
    { name: 'EcoTech Solutions', status: 'completed', progress: 100, team: 'Tech Team' },
    { name: 'SkillBridge Program', status: 'ongoing', progress: 75, team: 'Education Team' },
    { name: 'HealthFirst Initiative', status: 'ongoing', progress: 60, team: 'Health Team' },
    { name: 'WomenEmpower', status: 'planning', progress: 25, team: 'Empowerment Team' }
  ];

  const upcomingEvents = [
    { title: 'Project Review Meeting', date: '2024-01-15', time: '2:00 PM' },
    { title: 'Community Outreach', date: '2024-01-18', time: '10:00 AM' },
    { title: 'Sponsor Presentation', date: '2024-01-22', time: '3:30 PM' },
    { title: 'Team Training Session', date: '2024-01-25', time: '1:00 PM' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'ongoing': return 'bg-primary-gold';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'ongoing': return Clock;
      case 'planning': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="text-primary-gold">{user?.name}</span>
            </h1>
            <p className="text-gray-300">Here's what's happening with your projects today.</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="p-2 bg-primary-dark-gray text-primary-gold rounded-lg hover:scale-110 transition-transform">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 bg-primary-dark-gray text-primary-gold rounded-lg hover:scale-110 transition-transform">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 bg-primary-gold text-primary-black rounded-lg hover:scale-105 transition-transform font-semibold"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6 hover:scale-105 transition-transform glow-gold"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-primary-dark-gray rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'projects', label: 'Projects' },
            { id: 'events', label: 'Events' },
            { id: 'team', label: 'Team' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-gold text-primary-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Recent Projects */}
                <div className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">Recent Projects</h2>
                    <button className="btn-metallic px-4 py-2 rounded-lg text-sm font-semibold text-primary-black hover:scale-105 transition-transform flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      New Project
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => {
                      const StatusIcon = getStatusIcon(project.status);
                      return (
                        <div key={index} className="bg-primary-black rounded-lg p-4 hover:bg-primary-light-gray transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <StatusIcon className="w-5 h-5 text-primary-gold mr-3" />
                              <h3 className="font-semibold text-white">{project.name}</h3>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">{project.team}</span>
                            <div className="flex items-center">
                              <div className="w-24 bg-primary-dark-gray rounded-full h-2 mr-2">
                                <div 
                                  className="bg-primary-gold h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${project.progress}%` }}
                                />
                              </div>
                              <span className="text-primary-gold text-sm font-semibold">{project.progress}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Plus, label: 'Create Project', color: 'bg-green-500' },
                      { icon: Users, label: 'Manage Team', color: 'bg-blue-500' },
                      { icon: BarChart, label: 'View Reports', color: 'bg-purple-500' },
                      { icon: Calendar, label: 'Schedule Event', color: 'bg-orange-500' }
                    ].map((action, index) => (
                      <button
                        key={index}
                        className="flex items-center p-4 bg-primary-black rounded-lg hover:scale-105 transition-transform group"
                      >
                        <div className={`p-2 ${action.color} rounded-lg mr-3 group-hover:scale-110 transition-transform`}>
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Project Management</h2>
                <p className="text-gray-300">Detailed project management interface would be implemented here with full CRUD operations, team assignments, and progress tracking.</p>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Event Management</h2>
                <p className="text-gray-300">Event scheduling, management, and coordination tools would be available here.</p>
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Team Management</h2>
                <p className="text-gray-300">Team member management, role assignments, and collaboration tools would be implemented here.</p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{user?.name}</h3>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Role:</span>
                  <span className="text-primary-gold">Administrator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects:</span>
                  <span className="text-white">12 Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Team:</span>
                  <span className="text-white">Leadership</span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-primary-gold mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-primary-black rounded-lg p-3">
                    <h4 className="font-semibold text-white text-sm mb-1">{event.title}</h4>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-dark-gray to-primary-light-gray rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Bell className="w-5 h-5 text-primary-gold mr-2" />
                Recent Notifications
              </h3>
              <div className="space-y-3">
                {[
                  'New project proposal submitted',
                  'Team meeting scheduled for tomorrow',
                  'Monthly report is ready for review',
                  'Sponsor meeting confirmed'
                ].map((notification, index) => (
                  <div key={index} className="text-sm text-gray-300 p-2 bg-primary-black rounded">
                    {notification}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;