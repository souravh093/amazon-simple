import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Cart = ({cart, handlerClearCart, children}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    cart.forEach(product => {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping += product.shipping
        quantity += product.quantity;
    });
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='bg-secondary py-10 px-[25px]  flex flex-col sticky top-0 h-screen gap-5'>
            <h4 className='text-lg font-bold'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='text-xs font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <div onClick={handlerClearCart} className='bg-red-500 btn border-none rounded py-2 px-4 flex justify-between active cursor-pointer text-white'>
                <button>Clear Cart</button>
                <TrashIcon className="h-6 w-6 text-gray-100" />
            </div>
            {children}
            
        </div>
    );
};

export default Cart;