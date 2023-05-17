import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { totalProducts } = useLoaderData();
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10, 20];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseFloat(event.target.value));
    setCurrentPages(0);
  } 

  /**
   * Done: 1. Determine the total number of items
   * TODO: 2. Decide on the number of items per page:
   * Done: 3: Calculate number of pages
   *
   */

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handlerAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get of the addProduct
    for (const id in storedCart) {
      //step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity += quantity;
        // step 4: add the product to the saved cart
        savedCart.push(addedProduct);
      }
      // step 5: saved the cart
      setCart(savedCart);
    }
  }, [products]);

  const handlerClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <>
      <div className="grid grid-cols-5">
        {/* product container */}
        <div className="col-span-4 grid grid-cols-3 p-10 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Product
              data={product}
              key={product._id}
              handlerAddToCart={handlerAddToCart}
            ></Product>
          ))}
        </div>
        {/* cart container */}
        <div className="col-span-1">
          <Cart cart={cart} handlerClearCart={handlerClearCart}>
            <Link to="/orders">
              <div className="bg-orange-600 rounded py-2 px-4 btn border-none flex justify-between  active cursor-pointer text-white">
                <button>Review Order</button>
                <ArrowRightIcon className="h-6 w-6 text-gray-100" />
              </div>
            </Link>
          </Cart>
        </div>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-center gap-5  bg-yellow-100 py-5">
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPages(number)}
            className={currentPage === number ? 'select-all btn btn-primary' : 'btn btn-warning'}
            key={number}
          >
            {number}
          </button>
        ))}
        <select className="py-2 px-5 bg-yellow-300" value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
