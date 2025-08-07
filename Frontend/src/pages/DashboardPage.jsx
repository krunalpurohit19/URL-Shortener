import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { BarChart3, Link, Users, Eye, TrendingUp, Calendar, RefreshCw, Clock, ExternalLink } from 'lucide-react'

const DashboardPage = () => {
    const [dashboardData, setDashboardData] = useState({
        totalLinks: 0,
        totalClicks: 0,
        averageCTR: 0,
        activeLinks: 0,
        recentActivity: [],
        urls: []
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Get user from Redux store
    const { user, isAuthenticated } = useSelector(state => state.auth)
    console.log('User from Redux:', user)

    // Fetch dashboard data on component mount and when user changes
    useEffect(() => {
        if (isAuthenticated) {
            fetchDashboardData()
        }
    }, [isAuthenticated])

    const fetchDashboardData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://url-shortener-fh8t.vercel.app/api/dashboard/stats', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Failed to fetch dashboard data')
            }

            const result = await response.json()
            if (result.success) {
                setDashboardData(result.data)
                setError(null)
            } else {
                throw new Error('Invalid response format')
            }
        } catch (err) {
            setError(err.message)
            console.error('Error fetching dashboard data:', err)
        } finally {
            setLoading(false)
        }
    }

    // Function to copy short URL to clipboard
    const copyToClipboard = async (shortUrl) => {
        try {
            const frontendUrl = `https://url-shortener-fh8t.vercel.app/${shortUrl}`;
            await navigator.clipboard.writeText(frontendUrl);
            // You could add a toast notification here
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    // Loading state
    if (loading) {
        return (
            <div className='min-h-screen bg-gray-50 pt-20 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto'></div>
                    <p className='mt-4 text-gray-600'>Loading dashboard...</p>
                </div>
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className='min-h-screen bg-gray-50 pt-20 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-red-500 mb-4'>
                        <h2 className='text-xl font-semibold'>Error loading dashboard</h2>
                        <p className='text-sm'>{error}</p>
                    </div>
                    <button
                        onClick={fetchDashboardData}
                        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-50 pt-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                {/* Header */}
                <div className='mb-8'>
                    <div className='flex items-center justify-between mb-6'>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                                Welcome back, {user.user.name || 'User'}!
                            </h1>
                            <p className='text-gray-600 text-lg'>Manage and track your shortened URLs</p>
                        </div>
                        <div className='hidden md:flex items-center space-x-4'>
                            {/* <div className='px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm'>
                                <div className='flex items-center space-x-2'>
                                    <Calendar className='w-4 h-4 text-gray-500' />
                                    <span className='text-sm text-gray-700'>All time</span>
                                </div>
                            </div> */}
                            <button
                                onClick={fetchDashboardData}
                                disabled={loading}
                                className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50'
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                                <span>Refresh</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                        {[
                            {
                                title: 'Total Links',
                                value: dashboardData.totalLinks.toString(),
                                change: dashboardData.totalLinks > 0 ? '+' + dashboardData.totalLinks : '0',
                                icon: Link,
                                color: 'blue',
                                bgColor: 'bg-blue-50',
                                iconColor: 'text-blue-600'
                            },
                            {
                                title: 'Total Clicks',
                                value: dashboardData.totalClicks.toLocaleString(),
                                change: dashboardData.totalClicks > 0 ? '+' + dashboardData.totalClicks : '0',
                                icon: Eye,
                                color: 'green',
                                bgColor: 'bg-green-50',
                                iconColor: 'text-green-600'
                            },
                            {
                                title: 'Avg. CTR',
                                value: `${dashboardData.averageCTR}%`,
                                change: dashboardData.averageCTR > 0 ? '+' + dashboardData.averageCTR + '%' : '0%',
                                icon: TrendingUp,
                                color: 'purple',
                                bgColor: 'bg-purple-50',
                                iconColor: 'text-purple-600'
                            },
                            {
                                title: 'Active Links',
                                value: dashboardData.activeLinks.toString(),
                                change: dashboardData.activeLinks > 0 ? '+' + dashboardData.activeLinks : '0',
                                icon: BarChart3,
                                color: 'orange',
                                bgColor: 'bg-orange-50',
                                iconColor: 'text-orange-600'
                            }
                        ].map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className='card-modern p-6 hover:shadow-lg transition-all duration-200'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                                            <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                                        </div>
                                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${stat.change !== '0' && stat.change !== '0%'
                                            ? 'text-green-600 bg-green-100'
                                            : 'text-gray-600 bg-gray-100'
                                            }`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-1'>{stat.value}</h3>
                                    <p className='text-sm text-gray-600'>{stat.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* URL Shortener Section */}
                    <div className='lg:col-span-2'>
                        <div className='card-modern p-8 mb-8'>
                            <div className='mb-6'>
                                <h2 className='text-2xl font-bold text-gray-900 mb-2'>Create New Link</h2>
                                <p className='text-gray-600'>Shorten a new URL and start tracking its performance</p>
                            </div>
                            <UrlForm onUrlCreated={fetchDashboardData} />
                        </div>

                        {/* Recent Links */}
                        <div className='card-modern p-8'>
                            <div className='flex items-center justify-between mb-6'>
                                <h2 className='text-2xl font-bold text-gray-900'>Your Links</h2>
                                <button className='px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200'>
                                    View All ({dashboardData.totalLinks})
                                </button>
                            </div>
                            <UserUrl urls={dashboardData.urls} onUpdate={fetchDashboardData} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className='space-y-6'>
                        {/* Quick Actions */}
                        {/* <div className='card-modern p-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Quick Actions</h3>
                            <div className='space-y-3'>
                                {[
                                    { title: 'Bulk Upload', desc: 'Upload multiple URLs' },
                                    { title: 'Custom Domain', desc: 'Use your own domain' },
                                    { title: 'Analytics Export', desc: 'Download your data' },
                                    { title: 'API Access', desc: 'Integrate with your apps' }
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className='w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group'
                                    >
                                        <div className='font-medium text-gray-900 group-hover:text-blue-600 transition-colors'>
                                            {action.title}
                                        </div>
                                        <div className='text-sm text-gray-500'>{action.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div> */}


                        {/* Enhanced Recent Activity */}
                        <div className='card-modern p-6'>
                            <div className='flex items-center justify-between mb-4'>
                                <h3 className='text-lg font-semibold text-gray-900'>Recent Activity</h3>
                                <div className='flex items-center text-xs text-gray-500'>
                                    <Clock className='w-3 h-3 mr-1' />
                                    Live updates
                                </div>
                            </div>
                            <div className='space-y-4 max-h-96 overflow-y-auto'>
                                {dashboardData.recentActivity.length > 0 ? (
                                    dashboardData.recentActivity.map((activity, index) => (
                                        <div key={activity.id || index} className='group'>
                                            <div className='flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'>
                                                <div className='flex-shrink-0 mt-1'>
                                                    {activity.isNew ? (
                                                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                                                    ) : (
                                                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                                    )}
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <div className='flex items-center justify-between'>
                                                        <p className='text-sm font-medium text-gray-900'>
                                                            {activity.action}
                                                            {activity.isNew && (
                                                                <span className='ml-2 px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full'>
                                                                    New
                                                                </span>
                                                            )}
                                                        </p>
                                                        <span className='text-xs text-gray-500 flex-shrink-0 ml-2'>
                                                            {activity.time}
                                                        </span>
                                                    </div>

                                                    <div className='mt-1 flex items-center space-x-2'>
                                                        <button
                                                            onClick={() => copyToClipboard(activity.link)}
                                                            className='text-sm text-blue-600 hover:text-blue-800 truncate flex items-center space-x-1 group-hover:underline'
                                                            title='Click to copy'
                                                        >
                                                            <span className='truncate max-w-[120px]'>
                                                                {activity.link}
                                                            </span>
                                                            <ExternalLink className='w-3 h-3 flex-shrink-0' />
                                                        </button>
                                                    </div>

                                                    <div className='mt-2 flex items-center justify-between'>
                                                        <span className={`text-xs px-2 py-1 rounded-full ${activity.clicks > 0
                                                            ? 'text-green-600 bg-green-100'
                                                            : 'text-gray-600 bg-gray-100'
                                                            }`}>
                                                            {activity.clicks} {activity.clicks === 1 ? 'click' : 'clicks'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className='text-center py-8'>
                                        <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                            <Link className='w-8 h-8 text-gray-400' />
                                        </div>
                                        <p className='text-sm text-gray-500 mb-1'>No activity yet</p>
                                        <p className='text-xs text-gray-400'>Create your first link to see activity</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Upgrade Card */}
                        <div className='card-modern p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'>
                            <div className='text-center'>
                                <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4'>
                                    <TrendingUp className='w-6 h-6 text-white' />
                                </div>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Upgrade to Pro</h3>
                                <p className='text-sm text-gray-600 mb-4'>
                                    Get advanced analytics, custom domains, and more features
                                </p>
                                <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200'>
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage