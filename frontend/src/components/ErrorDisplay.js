import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mt-4 p-4 bg-cyber-error/10 border-2 border-cyber-error/50 rounded-xl shadow-inner">
      <div className="flex items-center">
        <span className="text-cyber-error mr-3">⚠️</span>
        <p className="text-cyber-text text-sm font-medium">{error}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;