import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-[80px] bg-primary flex justify-between items-center px-[100px]'>
            <img src={logo} alt="" />
            <nav>
                <ul className='flex gap-[32px] text-gray-100'>
                    <li><Link className='hover:text-secondary' to="/">Shop</Link></li>
                    <li><Link className='hover:text-secondary' to="/orders">Orders</Link></li>
                    <li><Link className='hover:text-secondary' to="/inventory">Manage Inventory</Link></li>
                    <li><Link className='hover:text-secondary' to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;