import React from 'react';

const plans = [
    {
        name: "Starter",
        subtitle: "Perfect for getting started",
        price: 0,
        period: "Month",
        popular: false,
        btnText: "Get Started month",
        btnStyle: "bg-purple-700 hover:bg-purple-800 text-white",
        cardStyle: "bg-white border border-gray-200",
        textStyle: "text-gray-900",
        subtitleStyle: "text-gray-500",
        priceStyle: "text-gray-900",
        periodStyle: "text-gray-500",
        featureStyle: "text-gray-700",
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
    },
    {
        name: "Pro",
        subtitle: "Best for professionals",
        price: 29,
        period: "month",
        popular: true,
        btnText: "Start Pro Trial",
        btnStyle: "bg-white hover:bg-gray-100 text-purple-700 font-bold",
        cardStyle: "bg-purple-600 border-0 scale-105 z-10",
        textStyle: "text-white",
        subtitleStyle: "text-purple-200",
        priceStyle: "text-white",
        periodStyle: "text-purple-200",
        featureStyle: "text-white",
        features: [
            "Access to 10 free tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
    },
    {
        name: "Enterprise",
        subtitle: "For teams and businesses",
        price: 99,
        period: "month",
        popular: false,
        btnText: "Contact Sales",
        btnStyle: "bg-purple-700 hover:bg-purple-800 text-white",
        cardStyle: "bg-white border border-gray-200",
        textStyle: "text-gray-900",
        subtitleStyle: "text-gray-500",
        priceStyle: "text-gray-900",
        periodStyle: "text-gray-500",
        featureStyle: "text-gray-700",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
    },
];

const Subscription = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">

           
            <div className="text-center mb-14">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-400 text-base">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

           
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-0 md:gap-0 max-w-5xl mx-auto relative">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col w-full md:w-1/3 rounded-2xl px-8 py-10 shadow-md ${plan.cardStyle} ${plan.popular ? 'shadow-xl' : ''}`}
                    >
                   
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <h3 className={`text-2xl font-bold mb-1 ${plan.textStyle}`}>
                            {plan.name}
                        </h3>
                        <p className={`text-sm mb-6 ${plan.subtitleStyle}`}>
                            {plan.subtitle}
                        </p>

                        
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className={`text-5xl font-extrabold ${plan.priceStyle}`}>
                                ${plan.price}
                            </span>
                            <span className={`text-sm font-medium ${plan.periodStyle}`}>
                                /{plan.period}
                            </span>
                        </div>

                    
                        <ul className="flex flex-col gap-3 mb-10 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-2 text-sm ${plan.featureStyle}`}>
                                    <span className="mt-0.5">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                  
                        <button className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 ${plan.btnStyle}`}>
                            {plan.btnText}
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Subscription;