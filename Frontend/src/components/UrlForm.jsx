import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api';
import { useSelector } from 'react-redux';
import { QueryClient } from '@tanstack/react-query';
import { queryClient } from '../main.jsx'; // Import the queryClient from main.jsx

const UrlForm = () => {

    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState()
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState(null);
    const [customSlug, setCustomSlug] = useState('');

    const { isAuthenticated } = useSelector((state) => state.auth);
    const handleSubmit = async () => {
        try {
            const shortUrl = await createShortUrl(url, customSlug);
            setShortUrl(shortUrl);
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message)
        }
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }


    return (
        <div className='space-y-4'>
            <div>
                <label htmlFor="url" className='block text-sm font-medium text-gray-700'>
                    Enter Your URL
                </label>
                <input type="url" id='url' onChange={(e) => setUrl(e.target.value)} value={url} placeholder='https://example.com' required className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            <button
                onClick={handleSubmit}
                type='submit'
                className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Shorten URL
            </button>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {isAuthenticated && (
                <div className="mt-4">
                    <label htmlFor="customSlug" className='block text-sm font-medium text-gray-700'>
                        Enter Custom Slug (optional)
                    </label>
                    <input
                        type="text"
                        id='customSlug'
                        onChange={(e) => setCustomSlug(e.target.value)}
                        value={customSlug}
                        placeholder='custom-slug'
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            )}

            {shortUrl && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
                    <div className="flex items-center">
                        <input
                            type="text"
                            readOnly
                            value={shortUrl}
                            className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
                        />
                        <button
                            onClick={handleCopy}
                            className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${copied
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            )}
        </div>


    )
}

export default UrlForm