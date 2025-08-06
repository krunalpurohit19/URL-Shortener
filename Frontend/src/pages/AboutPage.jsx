import React from 'react'
import { Users, Target, Zap, Shield, Award, Globe } from 'lucide-react'
import { Link } from '@tanstack/react-router';

const AboutPage = () => {
    return (
        <div className='bg-white py-24 px-4' id='about'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 shadow-md'>
                        <Target className='w-4 h-4 mr-2' />
                        About Our Mission
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
                        Revolutionizing
                        <span className='block pb-2 gradient-text animate-gradient'>Link Sharing</span>
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        We're building the future of URL management. Simple, powerful, and designed for professionals who demand excellence.
                    </p>
                </div>

                {/* Story Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
                    {/* Image Section */}
                    <div className='relative group'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300'></div>
                        <img
                            src='/About.jpg'
                            alt='About LinkShort'
                            className='relative rounded-3xl shadow-2xl object-cover w-full h-96 lg:h-[500px] group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>

                    {/* Content */}
                    <div className='space-y-8'>
                        <div className='card-modern p-8 hover:shadow-xl transition-all duration-300'>
                            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6'>
                                <Users className='w-6 h-6 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Story</h3>
                            <p className='text-gray-700 leading-relaxed'>
                                Born from the frustration of managing countless long URLs, <span className='font-semibold text-blue-600'>LinkShort</span> was created to simplify link sharing for modern professionals. We believe that every link should be clean, trackable, and meaningful.
                            </p>
                        </div>

                        <div className='card-modern p-8 hover:shadow-xl transition-all duration-300'>
                            <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6'>
                                <Target className='w-6 h-6 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
                            <p className='text-gray-700 leading-relaxed'>
                                To empower businesses and individuals with <span className='font-semibold text-blue-600'>intelligent link management</span> that drives engagement, provides insights, and maintains the highest standards of security and reliability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className='mb-24'>
                    <div className='text-center mb-16'>
                        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Our Core Values</h3>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: Zap,
                                title: 'Speed First',
                                description: 'Lightning-fast link generation and redirects powered by global CDN infrastructure.',
                                gradient: 'from-yellow-400 to-orange-500'
                            },
                            {
                                icon: Shield,
                                title: 'Security Focused',
                                description: 'Enterprise-grade security with malware detection and SSL encryption.',
                                gradient: 'from-green-400 to-blue-500'
                            },
                            {
                                icon: Users,
                                title: 'User Centric',
                                description: 'Designed with user experience at the forefront of every decision we make.',
                                gradient: 'from-purple-400 to-pink-500'
                            },
                            {
                                icon: Globe,
                                title: 'Global Reach',
                                description: 'Worldwide infrastructure ensuring fast access from any location.',
                                gradient: 'from-blue-400 to-cyan-500'
                            },
                            {
                                icon: Award,
                                title: 'Excellence',
                                description: 'Committed to delivering the highest quality service and support.',
                                gradient: 'from-indigo-400 to-purple-500'
                            },
                            {
                                icon: Target,
                                title: 'Innovation',
                                description: 'Continuously evolving with cutting-edge features and capabilities.',
                                gradient: 'from-rose-400 to-red-500'
                            }
                        ].map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className='card-modern p-8 text-center hover:shadow-xl transition-all duration-300 group'>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-8 h-8 text-white' />
                                    </div>
                                    <h4 className='text-xl font-bold text-gray-900 mb-4'>{value.title}</h4>
                                    <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Team Section */}
                <div className='text-center mb-16'>
                    <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Built by Professionals</h3>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
                        Our team combines years of experience in web development, security, and user experience design
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
                        {[
                            { role: 'Engineering', count: '12+', desc: 'Expert developers' },
                            { role: 'Security', count: '5+', desc: 'Security specialists' },
                            { role: 'Support', count: '24/7', desc: 'Always available' }
                        ].map((stat, index) => (
                            <div key={index} className='text-center'>
                                <div className='text-4xl font-bold text-blue-600 mb-2'>{stat.count}</div>
                                <div className='text-lg font-semibold text-gray-900 mb-1'>{stat.role}</div>
                                <div className='text-gray-600'>{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className='text-center card-modern p-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>Ready to Transform Your Links?</h3>
                    <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                        Join thousands of professionals who trust LinkShort for their link management needs
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
                        <Link to='/auth' className='btn-primary flex-1'>
                            Get Started Free
                        </Link>
                        <button className='px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold flex-1'>
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage