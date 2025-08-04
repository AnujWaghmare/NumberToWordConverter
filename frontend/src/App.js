import React from 'react';
import './index.css';

// Import Custom Hook
import { useFloatingNumbers } from './hooks/useFloatingNumbers';

// Import Components
import BackgroundEffects from './components/BackgroundEffects';
import ConverterCard from './components/ConverterCard';
import ConverterForm from './components/ConverterForm';

// --- Main App Component ---
export default function App() {
  const floatingNumbers = useFloatingNumbers();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-cyber-bg via-cyber-primary to-cyber-bg grid place-items-center p-4 relative overflow-hidden">
      <BackgroundEffects floatingNumbers={floatingNumbers} />
      <ConverterCard>
        <ConverterForm />
      </ConverterCard>
    </div>
  );
}