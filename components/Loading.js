import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div>
        <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-6">
            <div className="space-y-6 w-full max-w-sm mx-auto">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold  sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white  to-gray-900 tracking-tighter">Loading...</h1>
            </div>
            </div>
        </div>
    </div>
    );
};

export default LoadingSkeleton;

