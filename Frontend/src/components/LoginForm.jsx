import React, { useState } from 'react'
import { loginUser } from '../api/user.api'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'
import { useNavigate } from '@tanstack/react-router'

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const data = await loginUser(email, password)
            dispatch(login(data.user))
            navigate({ to: '/dashboard' })
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message || 'Login failed')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Sign In</h2>

            {error && (
                <div className='p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded'>
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="email" className='block text-sm text-gray-700 mb-1'>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className='block text-sm text-gray-700 mb-1'>
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className='text-center text-sm text-gray-600'>
                Don't have an account?{' '}
                <button type="button" onClick={() => state(false)} className='text-blue-600 hover:underline'>
                    Sign up
                </button>
            </p>
        </form>
    )
}

export default LoginForm