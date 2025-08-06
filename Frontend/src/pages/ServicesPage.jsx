import React from 'react'
import { Link } from '@tanstack/react-router'
import {
    Zap, Shield, BarChart3, Globe, Users, Clock,
    CheckCircle, Star, ArrowRight, Smartphone,
    Lock, TrendingUp, Settings, Download, Code
} from 'lucide-react'

const ServicesPage = () => {
    return (
        <div className='min-h-screen bg-white pt-20'>
            {/* Hero Section */}
            <div className='bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-4'>
                <div className='max-w-7xl mx-auto text-center'>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 shadow-md'>
                        <Settings className='w-4 h-4 mr-2' />
                        Our Services
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
                        Everything You Need for
                        <span className='block pb-2 gradient-text animate-gradient'>Smart Link Management</span>
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12'>
                        From basic URL shortening to enterprise-grade analytics, we provide comprehensive solutions for all your link management needs.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link to="/auth" className='btn-primary flex items-center space-x-2 px-8 py-4 text-lg'>
                            <span>Start Free Trial</span>
                            <ArrowRight className='w-5 h-5' />
                        </Link>
                        <button className='px-8 py-4 text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200'>
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>

            {/* Core Services */}
            <div className='py-24 px-4 bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'>Core Services</h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Professional tools designed to maximize your link performance
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: Zap,
                                title: 'URL Shortening',
                                description: 'Transform long URLs into clean, branded short links in milliseconds',
                                features: ['Instant generation', 'Custom aliases', 'Bulk processing', 'API access'],
                                gradient: 'from-yellow-400 to-orange-500',
                                popular: false
                            },
                            {
                                icon: BarChart3,
                                title: 'Advanced Analytics',
                                description: 'Comprehensive tracking and insights for all your links',
                                features: ['Real-time tracking', 'Geographic data', 'Device analytics', 'Custom reports'],
                                gradient: 'from-purple-400 to-pink-500',
                                popular: true
                            },
                            {
                                icon: Globe,
                                title: 'Custom Domains',
                                description: 'Use your own branded domain for professional short links',
                                features: ['Brand consistency', 'SSL certificates', 'DNS management', 'Subdomain support'],
                                gradient: 'from-blue-400 to-cyan-500',
                                popular: false
                            },
                            {
                                icon: Shield,
                                title: 'Security & Protection',
                                description: 'Enterprise-grade security for your links and data',
                                features: ['Malware detection', 'Spam protection', 'SSL encryption', 'Access controls'],
                                gradient: 'from-green-400 to-blue-500',
                                popular: false
                            },
                            {
                                icon: Users,
                                title: 'Team Collaboration',
                                description: 'Manage links across your entire organization',
                                features: ['User management', 'Role permissions', 'Shared workspaces', 'Team analytics'],
                                gradient: 'from-indigo-400 to-purple-500',
                                popular: false
                            },
                            {
                                icon: Code,
                                title: 'Developer API',
                                description: 'Integrate LinkShort into your applications and workflows',
                                features: ['RESTful API', 'SDKs available', 'Webhooks', 'Rate limiting'],
                                gradient: 'from-rose-400 to-red-500',
                                popular: false
                            }
                        ].map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className='card-modern p-8 hover:shadow-2xl transition-all duration-300 relative'>
                                    {service.popular && (
                                        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                                            <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1'>
                                                <Star className='w-3 h-3' />
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-8 h-8 text-white' />
                                    </div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                                    <p className='text-gray-600 leading-relaxed mb-6'>{service.description}</p>
                                    <ul className='space-y-2 mb-6'>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className='flex items-center space-x-2 text-sm text-gray-600'>
                                                <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className='w-full px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-medium'>
                                        Learn More
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Enterprise Solutions */}
            <div className='py-24 px-4 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Enterprise Solutions</h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Scalable solutions for businesses of all sizes
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-8'>
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'Advanced Analytics Suite',
                                    description: 'Deep insights with custom dashboards, A/B testing, and conversion tracking.'
                                },
                                {
                                    icon: Lock,
                                    title: 'Enterprise Security',
                                    description: 'SSO integration, advanced permissions, and compliance-ready features.'
                                },
                                {
                                    icon: Smartphone,
                                    title: 'Mobile Optimization',
                                    description: 'Smart redirects and mobile-specific analytics for better user experience.'
                                },
                                {
                                    icon: Download,
                                    title: 'Data Export & Integration',
                                    description: 'Export your data anytime and integrate with your existing tools.'
                                }
                            ].map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <IconComponent className='w-6 h-6 text-white' />
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-900 mb-2'>{feature.title}</h3>
                                            <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className='card-modern p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'>
                            <div className='text-center mb-8'>
                                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                                    <Users className='w-8 h-8 text-white' />
                                </div>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready for Enterprise?</h3>
                                <p className='text-gray-600 mb-6'>
                                    Get a custom solution tailored to your organization's needs with dedicated support and advanced features.
                                </p>
                                <div className='space-y-3'>
                                    <button className='w-full btn-primary'>
                                        Contact Sales
                                    </button>
                                    <button className='w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium'>
                                        Schedule Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Preview */}
            <div className='py-24 px-4 bg-white'>
                <div className='max-w-7xl mx-auto text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Simple, Transparent Pricing</h2>
                    <p className='text-xl text-gray-600 mb-12 max-w-3xl mx-auto'>
                        Choose the plan that fits your needs. Upgrade or downgrade at any time.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {[
                            {
                                name: 'Free',
                                price: '$0',
                                period: 'forever',
                                features: ['100 links/month', 'Basic analytics', 'Standard support'],
                                cta: 'Get Started',
                                popular: false
                            },
                            {
                                name: 'Pro',
                                price: '$19',
                                period: 'per month',
                                features: ['Unlimited links', 'Advanced analytics', 'Custom domains', 'Priority support'],
                                cta: 'Start Free Trial',
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: 'contact us',
                                features: ['Everything in Pro', 'SSO integration', 'Advanced security', 'Dedicated support'],
                                cta: 'Contact Sales',
                                popular: false
                            }
                        ].map((plan, index) => (
                            <div key={index} className={`card-modern p-8 relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : ''}`}>
                                {plan.popular && (
                                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                                        <div className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
                                <div className='mb-6'>
                                    <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                                    <span className='text-gray-600'>/{plan.period}</span>
                                </div>
                                <ul className='space-y-3 mb-8'>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className='flex items-center space-x-2'>
                                            <CheckCircle className='w-5 h-5 text-green-500' />
                                            <span className='text-gray-600'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${plan.popular
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                                    }`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className='py-24 px-4 bg-gray-50'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Frequently Asked Questions</h2>
                        <p className='text-xl text-gray-600'>
                            Everything you need to know about our services
                        </p>
                    </div>

                    <div className='space-y-6'>
                        {[
                            {
                                question: 'How reliable is LinkShort?',
                                answer: 'We maintain 99.9% uptime with global CDN infrastructure and redundant systems to ensure your links are always accessible.'
                            },
                            {
                                question: 'Can I use my own domain?',
                                answer: 'Yes! Custom domains are available on Pro and Enterprise plans. We handle SSL certificates and DNS configuration for you.'
                            },
                            {
                                question: 'What analytics do you provide?',
                                answer: 'We track clicks, geographic data, device information, referrer sources, and provide real-time insights with exportable reports.'
                            },
                            {
                                question: 'Is there an API available?',
                                answer: 'Absolutely! Our RESTful API allows you to integrate LinkShort into your applications with comprehensive documentation and SDKs.'
                            },
                            {
                                question: 'How secure are my links?',
                                answer: 'All links are protected with SSL encryption, malware detection, and spam filtering. Enterprise plans include additional security features.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className='card-modern p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-3'>{faq.question}</h3>
                                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className='py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Ready to Get Started?
                    </h2>
                    <p className='text-xl mb-8 opacity-90'>
                        Join thousands of professionals who trust LinkShort for their link management needs
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
                        <Link
                            to="/auth"
                            className='px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center'
                        >
                            Start Free Trial
                        </Link>
                        <button className='px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200'>
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
