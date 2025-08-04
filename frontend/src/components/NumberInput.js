import React from 'react';

const NumberInput = ({ value, onChange, disabled }) => (
  <div>
    <label htmlFor="number-input" className="block text-sm font-semibold text-cyber-text-secondary mb-2 tracking-wider">Enter Number</label>
    <div className="relative">
      <input
        id="number-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="e.g., 12345"
        disabled={disabled}
        className="w-full px-4 py-4 bg-cyber-primary/50 border-2 border-cyber-accent-pink/30 rounded-xl text-cyber-text focus:ring-2 focus:ring-cyber-accent-cyan focus:border-transparent outline-none transition-all duration-300 disabled:bg-cyber-primary/20 disabled:cursor-not-allowed text-lg font-medium shadow-inner"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyber-accent-pink/50">
        <span className="text-xl">123</span>
      </div>
    </div>
  </div>
);

export default NumberInput;