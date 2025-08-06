import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/user.api';
import { logout } from '../store/slices/authSlice';
import { Menu, X, LinkIcon, User, LogOut, Home, Info, Settings } from 'lucide-react';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onLogout = async () => {
        try {
            setLoading(true);
            setError('');
            await logoutUser();
            dispatch(logout());
            navigate({ to: '/' });
            console.log('Logout successful');
        } catch (err) {
            console.error('Logout failed:', err);
            setError(err.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navigationLinks = [
        { to: '/', label: 'Home', icon: Home },
        { to: '/about', label: 'About', icon: Info },
        { to: '/services', label: 'Services', icon: Settings }
    ];

    return (
        <>
            {/* Modern Minimal Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3 group"
                            onClick={closeMobileMenu}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                <LinkIcon className="w-5 h-5 text-white" />
                            </div>
                            <span className={`text-xl font-bold transition-colors duration-200 ${isScrolled ? 'text-gray-900' : 'text-white'
                                } group-hover:text-blue-600`}>
                                LinkShort
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {!isAuthenticated && navigationLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isScrolled
                                            ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span>{link.label}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* User Actions */}
                        <div className="hidden md:flex items-center space-x-3">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isScrolled
                                            ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <User className="w-4 h-4" />
                                            <span>Dashboard</span>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={onLogout}
                                        disabled={loading}
                                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200 disabled:opacity-50"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>{loading ? 'Logging out...' : 'Logout'}</span>
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    {/* <Link
                                        to="/auth"
                                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${isScrolled
                                            ? 'text-gray-700 hover:text-blue-600'
                                            : 'text-white/90 hover:text-white'
                                            }`}
                                    >
                                        Sign In
                                    </Link> */}
                                    <Link
                                        to="/auth"
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMobileMenu}
                            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
                        <div className="px-4 py-4 space-y-2">
                            {navigationLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={closeMobileMenu}
                                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span className="font-medium">{link.label}</span>
                                    </Link>
                                );
                            })}

                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        onClick={closeMobileMenu}
                                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                    >
                                        <User className="w-5 h-5" />
                                        <span className="font-medium">Dashboard</span>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            onLogout();
                                            closeMobileMenu();
                                        }}
                                        disabled={loading}
                                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 disabled:opacity-50 w-full text-left"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        <span className="font-medium">{loading ? 'Logging out...' : 'Logout'}</span>
                                    </button>
                                </>
                            ) : (
                                <div className="space-y-2 pt-2 border-t border-gray-200">
                                    <Link
                                        to="/auth"
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/auth"
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {/* Error Display */}
            {error && (
                <div className="fixed top-20 right-4 max-w-sm bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-50 animate-fade-in-scale">
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
            )}
        </>
    );
};

export default Navbar;