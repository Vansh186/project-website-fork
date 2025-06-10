import React from 'react';

const FallingLeaves: React.FC = () => {
  return (
    <div id="leaves" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* Generate multiple leaf elements */}
      {Array.from({ length: 15 }, (_, index) => (
        <i key={index} className="leaf" />
      ))}
      
      <style jsx>{`
        #leaves {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: right;
          pointer-events: none;
          z-index: 0;
        }

        #leaves i {
          display: inline-block;
          width: 200px;
          height: 150px;
          background: linear-gradient(to bottom right, #309900, #005600);
          transform: skew(20deg);
          border-radius: 5% 40% 70%;
          box-shadow: inset 0 0 1px #222;
          border: 1px solid #333;
          position: absolute;
          animation: falling 5s infinite ease-in-out;
          opacity: 0.7;
        }

        /* Variant Animations */
        #leaves i:nth-of-type(2n) { animation: falling2 5s infinite ease-in-out; }
        #leaves i:nth-of-type(3n) { animation: falling3 5s infinite ease-in-out; }
        #leaves i:nth-of-type(4n) { animation: falling 6s infinite ease-in-out; }
        #leaves i:nth-of-type(5n) { animation: falling2 7s infinite ease-in-out; }
        
        /* Animation delays for randomness */
        #leaves i:nth-of-type(n) { animation-delay: 1.9s; }
        #leaves i:nth-of-type(2n) { animation-delay: 3.9s; }
        #leaves i:nth-of-type(3n) { animation-delay: 2.3s; }
        #leaves i:nth-of-type(4n) { animation-delay: 4.2s; }
        #leaves i:nth-of-type(5n) { animation-delay: 0.5s; }
        #leaves i:nth-of-type(6n) { animation-delay: 3.1s; }
        #leaves i:nth-of-type(7n) { animation-delay: 1.7s; }
        #leaves i:nth-of-type(8n) { animation-delay: 4.8s; }
        #leaves i:nth-of-type(9n) { animation-delay: 2.9s; }
        #leaves i:nth-of-type(10n) { animation-delay: 0.8s; }

        /* Different starting positions */
        #leaves i:nth-of-type(odd) { left: 10%; }
        #leaves i:nth-of-type(even) { left: 80%; }
        #leaves i:nth-of-type(3n) { left: 50%; }
        #leaves i:nth-of-type(4n) { left: 20%; }
        #leaves i:nth-of-type(5n) { left: 70%; }

        @keyframes falling {
          0% { transform: translate3d(300px, 0, 0) rotate(0deg); }
          100% { transform: translate3d(-350px, 700px, 0) rotate(90deg); opacity: 0; }
        }

        @keyframes falling2 {
          0% { transform: translate3d(0, 0, 0) rotate(90deg); }
          100% { transform: translate3d(-400px, 680px, 0) rotate(0deg); opacity: 0; }
        }

        @keyframes falling3 {
          0% { transform: translate3d(0, 0, 0) rotate(-20deg); }
          100% { transform: translate3d(-230px, 640px, 0) rotate(-70deg); opacity: 0; }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          #leaves i {
            width: 150px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          #leaves i {
            width: 100px;
            height: 75px;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          #leaves i {
            animation: none;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingLeaves;