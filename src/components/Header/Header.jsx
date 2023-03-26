import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <div className='h-[80px] bg-primary flex justify-between items-center px-[100px]'>
            <img src={logo} alt="" />
            <nav>
                <ul className='flex gap-[32px] text-gray-100'>
                    <li><a className='hover:text-secondary' href="/order">Order</a></li>
                    <li><a className='hover:text-secondary' href="/order-review">Order Review</a></li>
                    <li><a className='hover:text-secondary' href="/manage-inventory">Manage Inventory</a></li>
                    <li><a className='hover:text-secondary' href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;