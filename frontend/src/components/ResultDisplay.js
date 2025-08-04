import React from 'react';

const ResultDisplay = ({ result }) => (
  <div className="mt-8">
    <label className="block text-sm font-semibold text-cyber-text-secondary mb-3 flex items-center tracking-wider">
      <span className="mr-2">🎯</span>Result:
    </label>
    <div className="min-h-[80px] p-6 bg-cyber-primary/50 border-2 border-cyber-accent-pink/30 rounded-xl shadow-inner">
      {result ? (
        <div className="text-center">
          <p className="text-xl font-bold text-cyber-text leading-relaxed mb-2">{result}</p>
          <div className="flex animate-pulse justify-center space-x-2 text-cyber-accent-pink">
            <span>✨</span>
            <span>🎉</span>
            <span>✨</span>
          </div>
        </div>
      ) : (
        <div className="text-center text-cyber-text-secondary italic flex items-center justify-center h-full">
          <span className="mr-2">🔮</span>
          Your magical result will appear here...
        </div>
      )}
    </div>
  </div>
);

export default ResultDisplay;