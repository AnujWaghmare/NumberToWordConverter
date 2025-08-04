import React, { useState } from 'react';
import { convertNumberToWords } from '../services/api';

// Import Child Components
import NumberInput from './NumberInput';
import LanguageSelector from './LanguageSelector';
import ConvertButton from './ConvertButton';
import ResultDisplay from './ResultDisplay';
import ErrorDisplay from './ErrorDisplay';

const LANGUAGE_OPTIONS = [
  { value: 'english', label: 'English', symbol: 'EN' },
  { value: 'hindi', label: 'Hindi', symbol: 'हि' },
  { value: 'marathi', label: 'Marathi', symbol: 'म' },
];

export default function ConverterForm() {
  // All form-related state is now managed here
  const [numberInput, setNumberInput] = useState('');
  const [language, setLanguage] = useState('english');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    setResult('');
    setError('');
    setIsLoading(true);

    try {
      const data = await convertNumberToWords(numberInput, language);
      setResult(data.words);
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberInput.trim()) {
      handleConvert();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <NumberInput
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value.replace(/[^0-9]/g, ''))}
          disabled={isLoading}
        />
        <LanguageSelector
          options={LANGUAGE_OPTIONS}
          selectedLanguage={language}
          onChange={(e) => setLanguage(e.target.value)}
          disabled={isLoading}
        />
        <ConvertButton
          isLoading={isLoading}
          disabled={isLoading || !numberInput.trim()}
        />
      </form>
      <ResultDisplay result={result} />
      <ErrorDisplay error={error} />
    </>
  );
}