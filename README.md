# Enactus BITS Pilani - Full-Stack Website

A stunning, production-ready full-stack website for Enactus BITS Pilani featuring a metallic dark theme, interactive animations, and comprehensive functionality.

## 🌟 Features

### Frontend
- **Gucci-inspired Homepage**: 3D rotating blocks with scroll-triggered animations
- **Damso-style Projects Page**: Horizontal scrolling with modal overlays
- **Interactive Metaball Background**: Cursor-following animations across all pages
- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Metallic gold accents on charcoal black theme
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### Backend
- **Express.js Server**: RESTful API with proper error handling
- **MongoDB Integration**: User management and data persistence
- **JWT Authentication**: Secure login system with protected routes
- **Email Functionality**: Contact form with Nodemailer integration
- **Security Features**: Helmet, CORS, rate limiting, and input validation

### Key Pages
- **Homepage**: Interactive 3D blocks linking to main sections
- **Projects**: Horizontal scrolling gallery with detailed modals
- **About**: Mission, vision, and achievements showcase
- **Team**: Member profiles with social links
- **Sponsors**: Partnership tiers and collaboration opportunities
- **Contact**: Functional form with email integration
- **Login/Dashboard**: Protected member area with project management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (optional - runs in demo mode without it)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enactus-bits-pilani
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173

   # Database (optional)
   MONGODB_URI=mongodb://localhost:27017/enactus-bits

   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key-here

   # Email Configuration (optional)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=enactus@pilani.bits-pilani.ac.in
   ```

4. **Start Development Servers**
   
   **Frontend** (Terminal 1):
   ```bash
   npm run dev
   ```
   
   **Backend** (Terminal 2):
   ```bash
   npm run server:dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🔐 Demo Login

For testing the dashboard functionality:
- **Email**: admin@enactus.org
- **Password**: password

## 📁 Project Structure

```
enactus-bits-pilani/
├── src/                          # Frontend source code
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx           # Navigation component
│   │   ├── MetaballBackground.tsx # Animated background
│   │   └── ProtectedRoute.tsx   # Route protection
│   ├── contexts/                # React contexts
│   │   └── AuthContext.tsx      # Authentication state management
│   ├── pages/                   # Page components
│   │   ├── Home.tsx             # Gucci-inspired homepage
│   │   ├── Projects.tsx         # Damso-style projects page
│   │   ├── About.tsx            # About us page
│   │   ├── Team.tsx             # Team members page
│   │   ├── Sponsors.tsx         # Sponsors and partners
│   │   ├── Contact.tsx          # Contact form page
│   │   ├── Login.tsx            # Authentication page
│   │   └── Dashboard.tsx        # Protected dashboard
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles and animations
├── server/                      # Backend source code
│   └── server.js                # Express.js server with all APIs
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.ts              # Vite build configuration
├── .env.example                # Environment variables template
└── README.md                   # This file
```

## 🎨 Design System

### Colors
- **Primary Black**: #1A1A1A (main background)
- **Metallic Gold**: #F9C416 (primary accent)
- **Gold Alternative**: #D4AF37 (secondary accent)
- **Dark Gray**: #2A2A2A (secondary background)
- **Light Gray**: #3A3A3A (tertiary background)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- **Metaballs**: Floating background elements with cursor interaction
- **3D Transforms**: Homepage blocks with rotation and scaling
- **Smooth Transitions**: 300-600ms duration for all interactions
- **Hover Effects**: Scale, glow, and color transitions

## 🛠 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Protected Routes
- `GET /api/dashboard` - Dashboard data (requires JWT)

### Public Routes
- `GET /api/health` - Server health check
- `POST /api/contact` - Contact form submission
- `GET /api/projects` - Fetch projects
- `POST /api/projects` - Create project (requires JWT)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend with nodemon
- `npm run lint` - Run ESLint

### Code Organization
- **Components**: Modular, reusable React components
- **Pages**: Full page components with routing
- **Contexts**: Global state management
- **Server**: Clean separation of routes, middleware, and models

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in deployment platform

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy with: `npm run server`
3. Ensure MongoDB connection string is configured

### Environment Variables for Production
```env
NODE_ENV=production
CLIENT_URL=https://your-frontend-domain.com
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/enactus
JWT_SECRET=your-production-jwt-secret
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-production-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with 12 salt rounds
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Protection**: Configured for specific origins
- **Helmet**: Security headers for Express.js
- **Input Validation**: Server-side validation for all inputs

## 🎯 Performance Optimizations

- **Code Splitting**: React lazy loading for routes
- **Image Optimization**: Responsive images with proper sizing
- **CSS Optimization**: Tailwind CSS with purging
- **Bundle Optimization**: Vite for fast builds and HMR
- **Caching**: Proper HTTP caching headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Gucci Foulards 3D website for homepage interactions
- **Project Layout**: Damso website for horizontal scrolling design
- **Animations**: ReactBits.dev for metaball background inspiration
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts for Poppins typography

## 📞 Support

For support, email enactus@pilani.bits-pilani.ac.in or create an issue in the repository.

---

**Built with ❤️ by Enactus BITS Pilani**