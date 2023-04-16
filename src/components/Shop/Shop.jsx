import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
    const savedCart = [];
    // step 1: get of the addProduct
    for (const id in storedCart) {
      //step 2: get product from products state by using id
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct) {
        //step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity += quantity;
        // step 4: add the product to the saved cart
        savedCart.push(addedProduct);
      }
      // step 5: saved the cart
      setCart(savedCart)
    }
  }, [products])

  const handlerClearCart = () => {
    setCart([]);
    deleteShoppingCart()
  };

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
        <Cart cart={cart} handlerClearCart={handlerClearCart}>
            <Link to='/orders'>
              <div className='bg-orange-600 rounded py-2 px-4 btn border-none flex justify-between  active cursor-pointer text-white'>
                  <button>Review Order</button>
                  <ArrowRightIcon className="h-6 w-6 text-gray-100" />
              </div>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
