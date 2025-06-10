const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    // For demo purposes, use hardcoded admin credentials
    if (email === 'admin@enactusbitspilani.com' && password === 'enactus2024') {
      const token = jwt.sign(
        { 
          id: 'demo-admin-id',
          email, 
          role: 'admin' 
        },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );

      res.json({
        success: true,
        token,
        user: { 
          id: 'demo-admin-id',
          email, 
          role: 'admin',
          profile: {
            firstName: 'Admin',
            lastName: 'User'
          }
        }
      });
    } else {
      // In production, check against database
      const user = await User.findOne({ email });
      
      if (!user || !await user.comparePassword(password)) {
        return res.status(401).json({ 
          message: 'Invalid email or password' 
        });
      }

      if (!user.isActive) {
        return res.status(401).json({ 
          message: 'Account is deactivated' 
        });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      const token = jwt.sign(
        { 
          id: user._id,
          email: user.email, 
          role: user.role 
        },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );

      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          profile: user.profile
        }
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Server error during login', 
      error: error.message 
    });
  }
});

// Register route (for admin use)
router.post('/register', async (req, res) => {
  try {
    const { email, password, role, profile } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        message: 'User already exists with this email' 
      });
    }

    // Create new user
    const user = new User({
      email,
      password,
      role: role || 'member',
      profile
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Server error during registration', 
      error: error.message 
    });
  }
});

// Verify token route
router.get('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // For demo admin
    if (decoded.id === 'demo-admin-id') {
      return res.json({
        success: true,
        user: {
          id: 'demo-admin-id',
          email: 'admin@enactusbitspilani.com',
          role: 'admin'
        }
      });
    }

    const user = await User.findById(decoded.id).select('-password');
    
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'User not found or inactive' });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: user.profile
      }
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;