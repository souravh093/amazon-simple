import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {  

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handlerAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
    addToDb(product.id)
  }

  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart)
  }, [])

  return (
    <div className="grid grid-cols-5">
      {/* product container */}
      <div className="col-span-4 grid grid-cols-3 p-10 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product 
           data={product}
           key={product.id}
           handlerAddToCart={handlerAddToCart}
           ></Product>
        ))}
      </div>
      {/* cart container */}
      <div className="col-span-1">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
