import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Review = ({product, handleRemoveFromCart}) => {
    const {_id, img, name, price, shipping} = product;
    return (
        <div className='w-[571px] rounded-lg border py-1 pl-1 pr-4 flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <div>
                    <img className='w-20 rounded-md' src={img} alt="" />
                </div>
                <div className='py-2'>
                    <h2 className='text-md font-semibold'>{name}</h2>
                    <p>Price: <span className='text-yellow-400'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-yellow-400'>${shipping}</span></p>
                </div>
            </div>
            <div className='bg-red-200 p-3 rounded-full hover:bg-red-100 active:border'>
                <TrashIcon onClick={() => handleRemoveFromCart(_id)} className="h-6 w-6 text-red-400" />
            </div>
        </div>
    );
};

export default Review;