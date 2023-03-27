import React from 'react';
import noImage from '../../images/no-image.jpg';

const Product = ({data}) => {
    return (
        <div>
            <div className="card w-full bg-base-100 border border-gray-300">
            <figure><img src={data.img ? data.img : noImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className='text-xl font-bold'>Price: ${data.price}</p>
                <p>Manufacturer: {data.seller}</p>
                <p>Rating: {data.ratings} star</p>
            </div>
                <button className="py-3 rounded-b-2xl  bg-[#FFE0B3] text-gray-700 hover:bg-yellow-100 transition">Add Cart</button>
            </div>
        </div>
    );
};

export default Product;