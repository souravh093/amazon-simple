import React from 'react';

const Product = ({data}) => {
    return (
        <div>
            <div className="card w-full bg-base-100 border border-gray-300">
            <figure><img src={data.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>Price: ${data.price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Add Cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;