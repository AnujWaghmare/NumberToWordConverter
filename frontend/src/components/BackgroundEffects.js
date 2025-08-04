import React from 'react';

const FloatingNumber = ({ number, delay, duration, startX, startY }) => (
  <div className="absolute text-cyber-accent-cyan/20 font-bold pointer-events-none select-none"
    style={{
      left: `${startX}%`,
      top: `${startY}%`,
      fontSize: `${Math.random() * 20 + 15}px`,
      animation: `float ${duration}s infinite linear`,
      animationDelay: `${delay}s`,
    }}
  >
    {number}
  </div>
);

const BackgroundEffects = ({ floatingNumbers }) => (
  <>
    {floatingNumbers.map((item) => (
      <FloatingNumber key={item.id} {...item} />
    ))}
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{ backgroundImage: `
            linear-gradient(rgba(0, 245, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241, 91, 181, 0.1) 1px, transparent 1px)
          `, backgroundSize: "50px 50px" }}
      />
    </div>
  </>
);

export default BackgroundEffects;