# Enactus BITS Pilani - Full-Stack Website

A modern, responsive website for Enactus BITS Pilani built with React, Node.js, and MongoDB. Features a sophisticated dark theme with metallic gold accents, smooth animations, and comprehensive functionality.

## 🚀 Features

### Frontend
- **Modern Design**: Dark charcoal theme with metallic gold accents
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Interactive Elements**: Blob-style buttons with hover effects and glow animations
- **Component Structure**: Modular React components with clean architecture

### Backend
- **Express.js API**: RESTful API with JWT authentication
- **MongoDB Integration**: Mongoose ODM for data management
- **Email System**: Nodemailer integration for contact forms and notifications
- **Security**: Rate limiting, CORS protection, and secure authentication

### Key Sections
- **Hero Section**: Animated landing with call-to-action buttons
- **About Us**: Mission, values, and story with interactive elements
- **Projects**: Showcase of social impact initiatives
- **Team**: Member profiles with social links
- **Sponsors**: Partnership opportunities and current sponsors
- **Contact**: Interactive form with email notifications
- **Dashboard**: Protected admin area with analytics

## 🛠 Tech Stack

### Frontend
- React 18 with TypeScript
- Framer Motion for animations
- Tailwind CSS for styling
- React Router for navigation
- Axios for API communication
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email services
- bcryptjs for password hashing
- express-rate-limit for API protection

## 🏗 Project Structure

```
/
├── src/                          # Frontend source code
│   ├── components/              # Reusable components
│   │   ├── sections/           # Page sections
│   │   ├── BlobButton.tsx      # Custom button component
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── ProtectedRoute.tsx  # Route protection
│   ├── pages/                  # Main pages
│   │   ├── Dashboard.tsx       # Admin dashboard
│   │   ├── Home.tsx           # Landing page
│   │   └── Login.tsx          # Authentication page
│   └── main.tsx               # App entry point
├── backend/                    # Backend source code
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   └── server.js             # Server entry point
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Gmail account for email services

### Frontend Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to Backend Directory**
```bash
cd backend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Configuration**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/enactus
JWT_SECRET=your-super-secret-jwt-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=http://localhost:5173
PORT=5000
```

4. **Start Backend Server**
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## 🔑 Demo Credentials

For testing the admin dashboard:
- **Email**: admin@enactusbitspilani.com
- **Password**: enactus2024

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

### Email Features
- Contact form submissions send notifications to admin
- Automatic confirmation emails to users
- Chatwoot integration for live chat
- Email conversation transcripts

## 🎨 Customization

### Colors
The theme uses a sophisticated color palette defined in `tailwind.config.js`:
- **Charcoal**: Primary background colors (#1A1A1A, #2A2A2A)
- **Gold**: Accent colors (#F9C416, #D4AF37)
- **Gradients**: Metallic effects and smooth transitions

### Fonts
- **Primary**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
Framer Motion configurations for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

## 🔐 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting for API endpoints
- CORS protection
- Input validation and sanitization
- SQL injection prevention with Mongoose

## 📱 Chatwoot Integration

The website includes Chatwoot live chat widget:

1. Replace placeholder in `index.html`:
```javascript
websiteToken: 'YOUR_WEBSITE_TOKEN_HERE'
```

2. Configure in your Chatwoot dashboard:
   - Website channel setup
   - Email forwarding to enactusbitspilani@gmail.com
   - Custom styling to match site theme

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
npm start
```

### Environment Variables
Ensure all production environment variables are set:
- `MONGODB_URI` (MongoDB Atlas connection string)
- `JWT_SECRET` (Strong secret key)
- `EMAIL_USER` & `EMAIL_PASS` (Gmail credentials)
- `CLIENT_URL` (Frontend domain)

## 🧪 API Endpoints

### Authentication
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify token
- `POST /api/auth/register` - Register new user (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id/status` - Update contact status

### Dashboard
- `GET /api/dashboard` - Get dashboard data (protected)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: enactusbitspilani@gmail.com
- Phone: +91 12345 67890

## 🙏 Acknowledgments

- Enactus Global for inspiration and mission
- BITS Pilani for providing the platform
- All team members and contributors
- Open source community for tools and libraries

---

**Built with ❤️ by Enactus BITS Pilani Team**

*Empowering Through Entrepreneurial Action*