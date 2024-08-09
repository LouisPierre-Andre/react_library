// Blog8.jsx
import React, { useState, useEffect } from 'react';

const Blog8 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, time: '12:00 PM' },
        { id: 2, time: '2:00 PM' },
        { id: 3, time: '3:00 PM' },
        { id: 4, time: '4:00 PM' },
        { id: 5, time: '5:00 PM' },
        { id: 6, time: '6:00 PM' },
        { id: 7, time: '7:00 PM' },
        { id: 8, time: '8:00 PM' },
        { id: 9, time: '9:00 PM' },
        { id: 10, time: '10:00 PM' },
        { id: 11, time: '11:00 PM' },
    ];

    const itemsPerView = window.innerWidth >= 640 ? 2 : 1; // Display 2 items on large screens, 1 on small screens
    const totalItems = items.length;
    const slideWidth = 100 / itemsPerView;

    // Clone items for continuous scrolling
    const extendedItems = [...items, ...items];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - itemsPerView : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= totalItems ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                // Adjust current index if needed on resize
                setCurrentIndex((prevIndex) => (prevIndex >= totalItems - itemsPerView ? 0 : prevIndex));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [totalItems]);

    return (
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
                {extendedItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 w-full sm:w-1/2 p-4 bg-gray-200 text-center"
                    >
                        <p className="text-xl font-bold">{item.time}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                &gt;
            </button>
        </div>
    );
};

export default Blog8;
