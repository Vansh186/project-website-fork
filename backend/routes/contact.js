const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }

    // Create contact entry
    const contact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await contact.save();

    // Send notification email to admin
    try {
      const transporter = createTransporter();
      
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: 'enactusbitspilani@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F9C416; border-bottom: 2px solid #F9C416; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #1A1A1A;">Message:</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #F9C416; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>IP Address:</strong> ${req.ip}</p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Enactus BITS Pilani',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #F9C416;">Enactus BITS Pilani</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for reaching out!</p>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <p>Dear <strong>${name}</strong>,</p>
              <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1A1A1A; margin-top: 0;">Your Message Summary:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="background-color: white; padding: 15px; border-left: 4px solid #F9C416; border-radius: 4px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <p>If you have any urgent concerns, please don't hesitate to call us at +91 12345 67890.</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="margin: 0;"><strong>Best regards,</strong></p>
                <p style="margin: 5px 0; color: #F9C416; font-weight: bold;">Enactus BITS Pilani Team</p>
                <p style="margin: 0; font-size: 14px; color: #666;">Empowering Through Entrepreneurial Action</p>
              </div>
            </div>
          </div>
        `
      };

      await transporter.sendMail(confirmationMailOptions);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      contactId: contact._id
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.',
      error: error.message 
    });
  }
});

// Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    
    const query = status ? { status } : {};
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('response.respondedBy', 'email profile.firstName profile.lastName');

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      contacts,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch contacts',
      error: error.message 
    });
  }
});

// Update contact status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'read', 'replied', 'closed'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status value' 
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        message: 'Contact not found' 
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated',
      contact
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ 
      message: 'Failed to update contact status',
      error: error.message 
    });
  }
});

module.exports = router;