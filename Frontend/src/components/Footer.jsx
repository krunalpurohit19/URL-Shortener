import React from 'react'
import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Linkedin, Mail, Heart, LinkIcon, Github, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            {/* Main Footer */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Brand Section */}
                    <div className='lg:col-span-2'>
                        <div className='flex items-center space-x-3 mb-6'>
                            <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                <LinkIcon className='w-5 h-5 text-white' />
                            </div>
                            <span className='text-2xl font-bold'>LinkShort</span>
                        </div>
                        <p className='text-gray-300 text-lg leading-relaxed mb-6 max-w-md'>
                            The most powerful URL shortener for professionals. Create, track, and optimize your links with ease.
                        </p>
                        <div className='flex items-center space-x-4'>
                            {[
                                { Icon: Twitter, href: 'https://x.com/krunalpurohit19', label: 'Twitter' },
                                { Icon: Github, href: 'https://github.com/krunalpurohit19', label: 'GitHub' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/krunalpurohit/', label: 'LinkedIn' },
                                { Icon: Mail, href: 'mailto:krunalpurohit119@gmail.com', label: 'Email' }
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className='w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group'
                                    aria-label={label}
                                >
                                    <Icon className='w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h4 className='text-lg font-semibold mb-6'>Product</h4>
                        <div className='space-y-3'>
                            {[
                                { label: 'Features', to: '/features' },
                                { label: 'Pricing', to: '/pricing' },
                                { label: 'Analytics', to: '/analytics' },
                                { label: 'API Docs', to: '/api' },
                                { label: 'Integrations', to: '/integrations' }
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className='block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div> */}

                    {/* Support */}
                    {/* <div>
                        <h4 className='text-lg font-semibold mb-6'>Support</h4>
                        <div className='space-y-3'>
                            {[
                                { label: 'Help Center', to: '/help' },
                                { label: 'Contact Us', to: '/contact' },
                                { label: 'Status Page', to: '/status' },
                                { label: 'Bug Reports', to: '/bugs' },
                                { label: 'Feature Requests', to: '/features' }
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className='block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className='border-t border-gray-800'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Stay Updated</h3>
                            <p className='text-gray-300 text-sm'>Get the latest updates and features delivered to your inbox.</p>
                        </div>
                        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 flex-1 md:w-64'
                            />
                            <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-800'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
                        <div className='flex items-center space-x-6 text-sm text-gray-400'>
                            <span>© 2025 LinkShort. All rights reserved.</span>
                            <span className='hidden md:inline'>|</span>
                            <div className='flex items-center space-x-1'>
                                <span>Made with</span>
                                <Heart className='w-4 h-4 text-red-500' />
                                <span>By KP</span>
                            </div>
                        </div>
                        <div className='flex items-center space-x-6 text-sm'>
                            {[
                                { label: 'Privacy Policy', to: '/privacy' },
                                { label: 'Terms of Service', to: '/terms' },
                                { label: 'Cookie Policy', to: '/cookies' }
                            ].map((link, index) => (
                                <React.Fragment key={link.label}>
                                    <Link
                                        to={link.to}
                                        className='text-gray-400 hover:text-white transition-colors duration-200'
                                    >
                                        {link.label}
                                    </Link>
                                    {index < 2 && <span className='text-gray-600'>•</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer