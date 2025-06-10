import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MetaBalls from './components/MetaBalls';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal-800 font-poppins relative">
        {/* Enhanced MetaBalls Background Effect */}
        <MetaBalls
          color="#F9C416"
          cursorBallColor="#FFD700"
          cursorBallSize={4}
          ballCount={25}
          animationSize={50}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.15}
          clumpFactor={1.5}
          speed={0.3}
        />
        
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;