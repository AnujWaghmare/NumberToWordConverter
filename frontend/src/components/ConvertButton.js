import React from 'react';
import { Loader2 } from 'lucide-react';

const ConvertButton = ({ isLoading, disabled }) => (
  <button
    type="submit"
    disabled={disabled}
    className="w-full bg-cyber-accent-cyan animate-[pulse-glow_2s_infinite] hover:bg-white disabled:bg-cyber-primary disabled:cursor-not-allowed text-cyber-bg font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-lg shadow-cyber-accent-cyan/50 transform hover:scale-105 disabled:transform-none disabled:shadow-none disabled:animate-none"
  >
    {isLoading ? (
      <>
        <Loader2 className="w-6 h-6 animate-spin mr-3" />
        Converting Magic...
      </>
    ) : (
      <>
        <span className="mr-2">✨</span>
        Convert to Words
        <span className="ml-2">✨</span>
      </>
    )}
  </button>
);

export default ConvertButton;