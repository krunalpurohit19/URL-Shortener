import React from 'react'
import UrlForm from '../components/UrlForm'
import AboutPage from './AboutPage'
import FeaturePage from './FeaturePage'
import { ArrowRight, Zap, Shield, BarChart3, Globe, Users, Clock, CheckCircle } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const HomePage = () => {
    return (
        <>
            {/* Hero Section - Ultra Modern */}
            <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden'>
                {/* Animated Background Elements */}
                <div className='absolute inset-0'>
                    <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float'></div>
                    <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-200'></div>
                    <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-500'></div>
                </div>

                {/* Main Content */}
                <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20'>
                    {/* Trust Badge */}
                    <div className='text-center mb-12 animate-fade-in-up'>
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold shadow-md'>
                            <div className='w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse'></div>
                            Trusted by 50,000+ professionals worldwide
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className='text-center mb-16 animate-fade-in-up animation-delay-100'>
                        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none tracking-tight'>
                            Transform
                            <span className='block pb-2 gradient-text animate-gradient'>
                                Long URLs
                            </span>
                            <span className='block text-4xl md:text-5xl lg:text-6xl font-light text-gray-600 mt-4'>
                                Into Smart Links
                            </span>
                        </h1>

                        <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal'>
                            Create powerful, trackable short links in seconds.
                            <br className='hidden md:block' />
                            Professional, reliable, and completely free.
                        </p>


                    </div>

                    {/* URL Shortener Card */}
                    <div className='max-w-4xl mx-auto mb-20 animate-fade-in-up animation-delay-200' id='url-form'>
                        <div className='card-modern p-8 md:p-12'>
                            <UrlForm />
                        </div>
                    </div>

                    {/* Social Proof Stats */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up animation-delay-300'>
                        {[
                            { value: '50K+', label: 'Active Users', color: 'text-blue-600' },
                            { value: '1M+', label: 'Links Created', color: 'text-purple-600' },
                            { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
                            { value: '10M+', label: 'Clicks Tracked', color: 'text-orange-600' }
                        ].map((stat, index) => (
                            <div key={index} className='text-center group'>
                                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-200`}>
                                    {stat.value}
                                </div>
                                <div className='text-gray-600 text-sm md:text-base font-medium'>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section - Modern Grid */}
            <div className='py-24 px-4 bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
                            Why Choose LinkShort?
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                            Built for professionals who demand speed, reliability, and insights
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: Zap,
                                title: 'Lightning Fast',
                                description: 'Generate short links instantly with our optimized global infrastructure',
                                gradient: 'from-yellow-400 to-orange-500'
                            },
                            {
                                icon: Shield,
                                title: 'Enterprise Security',
                                description: 'Advanced protection with SSL encryption and malware detection',
                                gradient: 'from-green-400 to-blue-500'
                            },
                            {
                                icon: BarChart3,
                                title: 'Detailed Analytics',
                                description: 'Comprehensive click tracking and performance insights',
                                gradient: 'from-purple-400 to-pink-500'
                            },
                            {
                                icon: Globe,
                                title: 'Global CDN',
                                description: 'Fast redirects worldwide with 99.9% uptime guarantee',
                                gradient: 'from-blue-400 to-cyan-500'
                            },
                            {
                                icon: Users,
                                title: 'Team Collaboration',
                                description: 'Share and manage links across your entire organization',
                                gradient: 'from-indigo-400 to-purple-500'
                            },
                            {
                                icon: Clock,
                                title: 'Smart Scheduling',
                                description: 'Schedule link activations and set expiration dates',
                                gradient: 'from-rose-400 to-red-500'
                            }
                        ].map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className='group card-modern p-8 hover:shadow-2xl transition-all duration-300'>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-8 h-8 text-white' />
                                    </div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>{feature.title}</h3>
                                    <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className='py-24 px-4 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Loved by Professionals
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            See what our users say about LinkShort
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            {
                                quote: "LinkShort has revolutionized how we share content. The analytics are incredible!",
                                author: "Sarah Chen",
                                role: "Marketing Director",
                                company: "TechCorp"
                            },
                            {
                                quote: "Super fast, reliable, and the custom domains feature is exactly what we needed.",
                                author: "Michael Rodriguez",
                                role: "Social Media Manager",
                                company: "StartupXYZ"
                            },
                            {
                                quote: "The best URL shortener I've used. Clean interface and powerful features.",
                                author: "Emily Johnson",
                                role: "Content Creator",
                                company: "CreativeCo"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className='card-modern p-8'>
                                <div className='mb-6'>
                                    <div className='flex text-yellow-400 mb-4'>
                                        {[...Array(5)].map((_, i) => (
                                            <CheckCircle key={i} className='w-5 h-5' />
                                        ))}
                                    </div>
                                    <p className='text-gray-700 text-lg leading-relaxed mb-6'>"{testimonial.quote}"</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4'>
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <div className='font-semibold text-gray-900'>{testimonial.author}</div>
                                        <div className='text-gray-600 text-sm'>{testimonial.role} at {testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className='py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                        Ready to Get Started?
                    </h2>
                    <p className='text-xl mb-8 opacity-90'>
                        Join thousands of professionals already using LinkShort
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link to="/auth" className='px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                            Start Free Trial
                        </Link>
                        <Link to="#" className='px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200'>
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>

            {/* Include other sections */}
            {/* <FeaturePage />
            <AboutPage /> */}
        </>
    )
}

export default HomePage