import React from 'react';
import {Loader2} from 'lucide-react';

const ConvertButton = ({isLoading, disabled}) => (
    <button
        type="submit"
        disabled={disabled}
        className="w-full bg-[linear-gradient(45deg,#667eea,#764ba2)] animate-[pulse-glow_2s_infinite] hover:bg-[linear-gradient(45deg,#5a67d8,#6b46c1)] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-lg transform hover:scale-105 disabled:transform-none disabled:shadow-none disabled:animate-none"
    >
        {isLoading ? (
            <>
                <Loader2 className="w-6 h-6 animate-spin mr-3"/>
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