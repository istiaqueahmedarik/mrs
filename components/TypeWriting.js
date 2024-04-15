'use client';
import React, { useState, useEffect } from 'react';

const TypeWriting = ({ textArray }) => {
    const [currentText, setCurrentText] = useState(textArray[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentText.length === textArray[currentIndex].length) {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                    setCurrentText('');
                }, 2000);
            } else {
                setCurrentText((prevText) => prevText + textArray[currentIndex][prevText.length]);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [currentText, currentIndex, textArray]);

    return <div className='text-lg font-bold w-fit bg-gradient-to-r from-white via-[#B9D6F2] to-violet-500 bg-clip-text text-transparent'>{currentText}</div>;
};

export default TypeWriting;
