import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api';
import { useSelector } from 'react-redux';
import { queryClient } from '../main.jsx'; // Import the queryClient from main.jsx
import { Link, Copy, Check, Globe, Settings, Zap } from 'lucide-react';

const UrlForm = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState()
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState(null);
    const [customSlug, setCustomSlug] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);

    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url.trim()) return;

        try {
            setIsLoading(true);
            setError(null);
            const result = await createShortUrl(url, customSlug);
            setShortUrl(result);
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

    const resetForm = () => {
        setUrl('');
        setCustomSlug('');
        setShortUrl(null);
        setError(null);
    }

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center space-x-3 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                        <Link className='w-6 h-6 text-white' />
                    </div>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Shorten Your URL</h2>
                </div>
                <p className='text-gray-600 max-w-md mx-auto'>
                    Paste your long URL below and get a clean, shareable link instantly
                </p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* URL Input */}
                <div className='space-y-2'>
                    <label htmlFor="url" className='text-sm font-semibold text-gray-700 flex items-center space-x-2'>
                        <Globe className='w-4 h-4' />
                        <span>Enter your long URL</span>
                    </label>
                    <div className='relative'>
                        <input
                            type="url"
                            id='url'
                            onChange={(e) => setUrl(e.target.value)}
                            value={url}
                            placeholder='https://example.com/very-long-url...'
                            required
                            className='input-modern w-full pr-12'
                            disabled={isLoading}
                        />
                        {url && (
                            <button
                                type="button"
                                onClick={() => setUrl('')}
                                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Advanced Options Toggle */}
                {isAuthenticated && (
                    <button
                        type="button"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className='flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium'
                    >
                        <Settings className='w-4 h-4' />
                        <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Options</span>
                    </button>
                )}

                {/* Advanced Options */}
                {showAdvanced && isAuthenticated && (
                    <div className='p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 mb-4'>Customize Your Link</h3>

                        {/* Custom Slug */}
                        <div className='space-y-2'>
                            <label htmlFor="customSlug" className='block text-sm font-medium text-gray-700'>
                                Custom Slug (Optional)
                            </label>
                            <div className='flex items-center space-x-2'>
                                <span className='text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg border'>
                                    makeurlinks.vercel.app/
                                </span>
                                <input
                                    type="text"
                                    id='customSlug'
                                    onChange={(e) => setCustomSlug(e.target.value)}
                                    value={customSlug}
                                    placeholder='my-custom-link'
                                    className='input-modern flex-1'
                                    disabled={isLoading}
                                />
                            </div>
                            <p className='text-xs text-gray-500'>
                                Leave empty for auto-generated slug
                            </p>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type='submit'
                    disabled={isLoading || !url.trim()}
                    className='btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isLoading ? (
                        <>
                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                            <span>Shortening...</span>
                        </>
                    ) : (
                        <>
                            <Zap className='w-5 h-5' />
                            <span>Shorten URL</span>
                        </>
                    )}
                </button>
            </form>

            {/* Error Display */}
            {error && (
                <div className='p-4 bg-red-50 border border-red-200 rounded-xl'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center'>
                            <span className='text-red-600 text-sm'>!</span>
                        </div>
                        <div>
                            <h4 className='text-red-800 font-medium'>Error</h4>
                            <p className='text-red-700 text-sm'>{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Result */}
            {shortUrl && (
                <div className='p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl animate-fade-in-scale'>
                    <div className='text-center mb-6'>
                        <div className='w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <Check className='w-8 h-8 text-white' />
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>Success!</h3>
                        <p className='text-gray-600'>Your short URL is ready to share</p>
                    </div>

                    {/* Short URL Display */}
                    <div className='space-y-4'>
                        <div className='p-4 bg-white rounded-lg border border-gray-200'>
                            <div className='flex items-center justify-between'>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm text-gray-500 mb-1'>Short URL</p>
                                    <p className='text-lg font-mono text-blue-600 truncate'>{shortUrl}</p>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className='ml-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200'
                                >
                                    {copied ? (
                                        <>
                                            <Check className='w-4 h-4' />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className='w-4 h-4' />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-3'>
                            <button
                                onClick={resetForm}
                                className='flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium'
                            >
                                Shorten Another
                            </button>
                            <a
                                href={shortUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center'
                            >
                                Test Link
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Features List */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200'>
                {[
                    { icon: Zap, text: 'Instant Generation' },
                    { icon: Globe, text: 'Global CDN' },
                    { icon: Settings, text: 'Custom Slugs' }
                ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={index} className='flex items-center space-x-3 text-sm text-gray-600'>
                            <IconComponent className='w-4 h-4 text-blue-600' />
                            <span>{feature.text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default UrlForm