import React from 'react';

interface ProductRotationProps {
  images: string[];
}

export const ProductRotation: React.FC<ProductRotationProps> = ({ images }) => {
  const firstImage = images[0];
  const secondImage = images[1] || images[0];

  return (
    <div className="w-full relative">
      <div className="scene">
        <div className="rotation-container">
          <div className="card card1">
            <div className="face front">
              <img src={firstImage} alt="Product view 1" />
            </div>
            <div className="face back">
              <img src={firstImage} alt="Product view 1" />
            </div>
          </div>
          <div className="card card2">
            <div className="face front">
              <img src={secondImage} alt="Product view 2" />
            </div>
            <div className="face back">
              <img src={secondImage} alt="Product view 2" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scene {
          width: 100%;
          height: 70vh;
          max-height: 800px;
          perspective: 2000px;
          position: relative;
          margin: 0 auto;
        }
        .rotation-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform-origin: center center;
          animation: rotate720 40s linear infinite;
        }
        .card {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
          transform-origin: center center;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .face img {
          width: auto;
          height: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.2));
        }
        .face.back {
          transform: rotateY(180deg);
        }
        @keyframes rotate720 {
          0% { transform: rotateY(0deg) translateZ(0); }
          100% { transform: rotateY(720deg) translateZ(0); }
        }
        @keyframes fadeCard1 {
          0%, 48% { opacity: 1; }
          50% { opacity: 0.5; }
          52%, 100% { opacity: 0; }
        }
        @keyframes fadeCard2 {
          0%, 48% { opacity: 0; }
          50% { opacity: 0.5; }
          52%, 100% { opacity: 1; }
        }
        .card1 {
          animation: fadeCard1 40s linear infinite;
        }
        .card2 {
          animation: fadeCard2 40s linear infinite;
        }
      `}</style>
    </div>
  );
}