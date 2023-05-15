import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user, loginOut} = useContext(AuthContext)

    const handleLogOut = () => {
        loginOut()
            .then(result => {})
            .catch(err => {})
    }
    return (
        <div className='h-[80px] bg-primary flex justify-between items-center px-[100px]'>
            <img src={logo} alt="" />
            <nav>
                <ul className='flex gap-[32px] items-center text-gray-100'>
                    <li><Link className='hover:text-secondary' to="/">Shop</Link></li>
                    <li><Link className='hover:text-secondary' to="/orders">Orders</Link></li>
                    <li><Link className='hover:text-secondary' to="/inventory">Manage Inventory</Link></li>
                    <li><Link className='hover:text-secondary' to="/login">Login</Link></li>
                    <li><Link className='hover:text-secondary' to="/register">Sign up</Link></li>
                    {user && <span className='flex items-center gap-5'>Welcome {user.email}<button onClick={handleLogOut} className='btn btn-secondary'>Log Out</button></span>}
                </ul>
            </nav>
        </div>
    );
};

export default Header;