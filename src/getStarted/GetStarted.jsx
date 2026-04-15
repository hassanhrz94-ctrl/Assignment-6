import React from 'react';

const steps = [
    {
        id: "01",
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "Choose Tools",
        description: "Browse and select tools that match your workflow needs.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "Start Building",
        description: "Use tools instantly and boost your productivity.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12" />
            </svg>
        ),
    },
];

const GetStarted = () => {
    return (
        <section className="py-16 px-4 bg-white">

       
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                    Get Started in 3 Steps
                </h2>
                <p className="text-gray-400 text-base">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

   
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="relative bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10 flex flex-col items-center text-center"
                    >
                        
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{step.id}</span>
                        </div>

                    
                        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                            {step.icon}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default GetStarted;