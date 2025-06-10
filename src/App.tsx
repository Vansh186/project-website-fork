import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
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
        {/* Animated Cursor */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="249, 196, 22"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.cursor-pointer'
          ]}
          outerStyle={{
            border: '2px solid #F9C416',
            backgroundColor: 'rgba(249, 196, 22, 0.1)',
            mixBlendMode: 'difference'
          }}
          innerStyle={{
            backgroundColor: '#F9C416',
            mixBlendMode: 'difference'
          }}
        />
        
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