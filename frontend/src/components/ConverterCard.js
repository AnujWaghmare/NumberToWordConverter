import React from 'react';

const ConverterCard = ({ children }) => (
  <div className="w-full max-w-md bg-cyber-surface/80 backdrop-blur-md border border-cyber-accent-pink/30 shadow-cyber-glow-pink rounded-2xl p-8 relative z-10">
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyber-accent-pink to-cyber-accent-cyan rounded-full mb-4">
        <span className="text-2xl font-black text-cyber-bg">∑</span>
      </div>
      <h1 className="text-3xl font-black text-cyber-text animate-[glitch_1s_linear_infinite]">
        Multilingual Number to Word Converter
      </h1>
      <p className="text-cyber-text-secondary mt-2 text-sm tracking-widest">Transform numbers into beautiful words</p>
    </div>
    {children}
  </div>
);

export default ConverterCard;