import React from 'react'
import {
    Zap, Shield, BarChart3, Palette, Globe, Clock,
    Smartphone, Lock, TrendingUp, Users, Code, Download
} from 'lucide-react'

const FeaturePage = () => {
    return (
        <div className='py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50' id='services'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 shadow-md'>
                        <Zap className='w-4 h-4 mr-2' />
                        Powerful Features
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
                        Everything You Need in
                        <span className='block gradient-text animate-gradient'>One Platform</span>
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        From basic shortening to enterprise analytics, discover what makes LinkShort the perfect choice for professionals
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
                    {[
                        {
                            icon: Zap,
                            title: 'Lightning Fast',
                            description: 'Generate short links instantly with our optimized global infrastructure and CDN network.',
                            gradient: 'from-yellow-400 to-orange-500',
                            features: ['< 100ms response time', 'Global CDN', 'Auto-scaling']
                        },
                        {
                            icon: BarChart3,
                            title: 'Advanced Analytics',
                            description: 'Comprehensive tracking with real-time insights, geographic data, and custom reports.',
                            gradient: 'from-purple-400 to-pink-500',
                            features: ['Real-time tracking', 'Geographic insights', 'Custom reports']
                        },
                        {
                            icon: Palette,
                            title: 'Full Customization',
                            description: 'Custom domains, branded links, and personalized short URLs for your brand.',
                            gradient: 'from-blue-400 to-cyan-500',
                            features: ['Custom domains', 'Branded links', 'Custom aliases']
                        },
                        {
                            icon: Shield,
                            title: 'Enterprise Security',
                            description: 'Advanced protection with malware detection, SSL encryption, and access controls.',
                            gradient: 'from-green-400 to-blue-500',
                            features: ['Malware detection', 'SSL encryption', 'Access controls']
                        },
                        {
                            icon: Smartphone,
                            title: 'Mobile Optimized',
                            description: 'Perfect experience across all devices with responsive design and mobile-first approach.',
                            gradient: 'from-indigo-400 to-purple-500',
                            features: ['Responsive design', 'Mobile analytics', 'Touch-friendly']
                        },
                        {
                            icon: Code,
                            title: 'Developer Friendly',
                            description: 'Comprehensive API, webhooks, and SDKs for seamless integration into your workflow.',
                            gradient: 'from-rose-400 to-red-500',
                            features: ['RESTful API', 'Webhooks', 'Multiple SDKs']
                        }
                    ].map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className='group card-modern p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden'>
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-bl-3xl opacity-10`}></div>
                                <div className='relative z-10'>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-8 h-8 text-white' />
                                    </div>
                                    <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed mb-4'>
                                        {feature.description}
                                    </p>
                                    <ul className='space-y-1'>
                                        {feature.features.map((item, idx) => (
                                            <li key={idx} className='text-sm text-gray-500 flex items-center'>
                                                <span className='w-1 h-1 bg-blue-500 rounded-full mr-2'></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Advanced Features Section */}
                <div className='mb-20'>
                    <div className='text-center mb-16'>
                        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Advanced Capabilities</h3>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Professional tools designed for power users and enterprises
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* Left Column */}
                        <div className='space-y-8'>
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'A/B Testing',
                                    description: 'Test different landing pages and measure conversion rates to optimize your campaigns.'
                                },
                                {
                                    icon: Clock,
                                    title: 'Link Scheduling',
                                    description: 'Schedule link activations and set expiration dates for time-sensitive campaigns.'
                                },
                                {
                                    icon: Users,
                                    title: 'Team Management',
                                    description: 'Collaborate with team members, assign roles, and manage permissions across your organization.'
                                }
                            ].map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <IconComponent className='w-6 h-6 text-white' />
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-bold text-gray-900 mb-2'>{feature.title}</h4>
                                            <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div className='space-y-8'>
                            {[
                                {
                                    icon: Globe,
                                    title: 'Global Infrastructure',
                                    description: 'Worldwide presence with edge locations for the fastest possible redirects anywhere.'
                                },
                                {
                                    icon: Lock,
                                    title: 'Privacy Controls',
                                    description: 'Granular privacy settings and GDPR compliance to protect your users\' data.'
                                },
                                {
                                    icon: Download,
                                    title: 'Data Export',
                                    description: 'Export your analytics data in multiple formats for external analysis and reporting.'
                                }
                            ].map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <IconComponent className='w-6 h-6 text-white' />
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-bold text-gray-900 mb-2'>{feature.title}</h4>
                                            <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Feature Comparison */}
                <div className='card-modern p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'>
                    <div className='text-center mb-8'>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Why Choose LinkShort?</h3>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            See how we compare to other URL shortening services
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            {
                                title: 'Performance',
                                items: ['99.9% uptime', 'Global CDN', 'Sub-100ms response']
                            },
                            {
                                title: 'Features',
                                items: ['Advanced analytics', 'Custom domains', 'Team collaboration']
                            },
                            {
                                title: 'Security',
                                items: ['SSL encryption', 'Malware detection', 'Privacy controls']
                            }
                        ].map((category, index) => (
                            <div key={index} className='text-center'>
                                <h4 className='text-lg font-semibold text-gray-900 mb-4'>{category.title}</h4>
                                <ul className='space-y-2'>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className='text-gray-600 flex items-center justify-center space-x-2'>
                                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturePage