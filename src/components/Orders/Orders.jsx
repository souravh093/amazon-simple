import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { ArrowRightIcon, CreditCardIcon } from "@heroicons/react/24/solid";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handlerClearCart = () => {
    setCart([]);
    deleteShoppingCart()
  };

  return (
    <div className="grid grid-cols-5">
      {/* product container */}
      <div className="col-span-4 flex flex-col justify-center items-center gap-5 p-10">
        {cart.map((product) => (
          <Review
            handleRemoveFromCart={handleRemoveFromCart}
            key={product._id}
            product={product}
          />
        ))}
      </div>
      {/* cart container */}
      <div className="col-span-1">
        <Cart rt cart={cart} handlerClearCart={handlerClearCart}>
            <Link to='/checkout'>
              <div className='bg-orange-600 rounded py-2 px-4 btn border-none flex justify-between  active cursor-pointer text-white'>
                  <button>Checkout</button>
                  <CreditCardIcon className="h-6 w-6 text-gray-100" />
              </div>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
