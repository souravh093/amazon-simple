import React from "react";
import Cart from "../Cart/Cart";

const Orders = () => {
  return (
    <div className="grid grid-cols-5">
      {/* product container */}
      <div className="col-span-4 grid grid-cols-3 p-10 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-3xl">Order Page</h1>
      </div>
      {/* cart container */}
      <div className="col-span-1">
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Orders;
