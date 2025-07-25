import React, { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/user.api';
import { logout } from '../store/slices/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const onLogout = async () => {
        try {
            setLoading(true);
            await logoutUser();
            dispatch(logout());
            navigate({ to: '/auth' });
            console.log('Logout successful');
        } catch (err) {
            console.error('Logout failed:', err);
            setError(err.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <nav className="bg-white">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side - App Name */}
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            URL Shortener
                        </Link>
                    </div>

                    {/* Right side - Auth buttons */}
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Welcome, {"user.name" || 'User'}</span>
                                <button
                                    onClick={onLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/auth"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar