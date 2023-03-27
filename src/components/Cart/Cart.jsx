import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    cart.forEach(product => {
        totalPrice += product.price
        totalShipping += product.shipping
    });
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='bg-secondary py-10 px-[25px]  flex flex-col sticky top-0 h-screen gap-5'>
            <h4 className='text-lg font-bold'>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='text-xs font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;