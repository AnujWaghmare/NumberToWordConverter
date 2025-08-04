import {useState, useEffect} from 'react';

const FLOATING_SYMBOLS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "π", "∑", "∞", "√", "∫", "∂", "α", "β", "γ", "δ", "±", "×", "÷", "≈", "≠", "≤", "≥", "∴", "∵", "Ω", "λ", "μ", "σ", "φ", "ψ", "∇", "∆",];

export const useFloatingNumbers = (count = 25) => {
    const [floatingNumbers, setFloatingNumbers] = useState([]);

    useEffect(() => {
        const generated = Array.from({length: count}, (_, i) => ({
            id: i,
            number: FLOATING_SYMBOLS[Math.floor(Math.random() * FLOATING_SYMBOLS.length)],
            delay: Math.random() * 10,
            duration: Math.random() * 15 + 10,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
        }));
        setFloatingNumbers(generated);
    }, [count]);

    return floatingNumbers;
};