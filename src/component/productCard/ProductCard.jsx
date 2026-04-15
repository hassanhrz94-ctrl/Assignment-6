import React, { useState } from 'react';

const ProductCard = ({ product, carts, setCarts }) => {
    const { name, description, price, period, tag, features, icon } = product;

    const [isAdded, setIsAdded] = useState(false);

    const handleBtn = () => {
        if (!isAdded) {
            setIsAdded(true);
            setCarts([...carts, product]);
        }
    };

    const periodLabel = {
        "monthly": "Mo",
        "one-time": "One-Time",
        "yearly": "Yr",
    };

    const tagColors = {
        "Best Seller": "bg-purple-100 text-purple-600",
        "Popular": "bg-purple-100 text-purple-600",
        "New": "bg-purple-100 text-purple-600",
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-3xl">
                    {icon}
                </div>
                {tag && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag] || "bg-purple-100 text-purple-600"}`}>
                        {tag}
                    </span>
                )}
            </div>

            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

          
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <span className="text-sm text-gray-400 font-medium">
                    /{periodLabel[period] || period}
                </span>
            </div>

       
            {features && features.length > 0 && (
                <ul className="flex flex-col gap-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                                className="w-4 h-4 text-green-500 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

           
            <button
                onClick={handleBtn}
                disabled={isAdded}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 mt-auto
                    ${isAdded
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700 active:scale-95'
                    }`}
            >
                {isAdded ? '✓ Added to Cart' : 'Buy Now'}
            </button>
        </div>
    );
};

export default ProductCard;