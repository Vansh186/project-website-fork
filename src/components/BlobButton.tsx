import React from 'react';
import { motion } from 'framer-motion';

interface BlobButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

const BlobButton: React.FC<BlobButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseClasses = "relative px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden";
  const variantClasses = variant === 'primary' 
    ? "bg-gold-gradient text-charcoal-800 hover:shadow-gold-glow" 
    : "bg-charcoal-700 text-white hover:bg-charcoal-600 border border-gold-500";

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' ? '0 0 30px rgba(249, 196, 22, 0.4)' : '0 0 20px rgba(249, 196, 22, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-transparent to-gold-500/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default BlobButton;