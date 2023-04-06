import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
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
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {/* cart container */}
      <div className="col-span-1">
        <Cart rt cart={cart} handlerClearCart={handlerClearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
