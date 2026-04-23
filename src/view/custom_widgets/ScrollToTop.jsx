import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
        }, []
    );

    return (
        <button
            className={`${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } fixed bottom-4 right-4 bg-black/70 hover:bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out`}
            onClick={scrollToTop}
            style={{ zIndex: 1000 }}
        >
            Scroll to Top
        </button>
    );
};

export default ScrollToTopButton;
