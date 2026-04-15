import React from 'react';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (id) => {
        setCarts(carts.filter(item => item.id !== id));
    };

    const handlePayment = () => {
        setCarts([]);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-8">

              
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Your Cart
                </h2>

               
                <div className="flex flex-col gap-4">
                    {carts.length === 0 ? (
                        <p className="text-center text-gray-400 py-8">Your cart is empty.</p>
                    ) : (
                        carts.map(item => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
                            >
                              
                                <div className="flex items-center gap-4">
                         
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                                        {item.icon || '📦'}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-base">
                                            {item.name}
                                        </p>
                                        <p className="text-gray-500 text-sm">${item.price}</p>
                                    </div>
                                </div>

                           
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-pink-500 font-medium text-sm hover:text-pink-700 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <hr className="my-6 border-gray-200" />

           
                <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-700 text-base font-medium">Total:</span>
                    <span className="text-gray-900 text-xl font-bold">${totalPrice}</span>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold text-base py-4 rounded-xl transition-all duration-200"
                >
                    Proceed To Checkout
                </button>

            </div>
        </div>
    );
};

export default Cart;