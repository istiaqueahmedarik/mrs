import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div className="flex items-center w-full justify-center h-screen">
            <div className="animate-pulse bg-gray-300 h-screen w-full rounded"></div>
        </div>
    );
};

export default LoadingSkeleton;

