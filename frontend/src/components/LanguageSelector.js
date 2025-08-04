import React from 'react';

const LanguageSelector = ({ options, selectedLanguage, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-semibold text-cyber-text-secondary mb-4 tracking-wider">Select Language</label>
    <div className="grid grid-cols-3 gap-3">
      {options.map((lang) => (
        <label key={lang.value} className="relative cursor-pointer">
          <input
            type="radio"
            name="language"
            value={lang.value}
            checked={selectedLanguage === lang.value}
            onChange={onChange}
            disabled={disabled}
            className="sr-only"
          />
          <div className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${selectedLanguage === lang.value ? "border-cyber-accent-cyan bg-cyber-primary shadow-cyber-glow-cyan transform scale-105" : "border-cyber-primary hover:border-cyber-accent-pink/50 hover:bg-cyber-primary/50"} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
            <div className="text-lg font-bold text-cyber-accent-cyan mb-1">{lang.symbol}</div>
            <div className="text-sm font-medium text-cyber-text-secondary">{lang.label}</div>
          </div>
        </label>
      ))}
    </div>
  </div>
);

export default LanguageSelector;