import React, { useState } from 'react'
import { registerUser } from '../api/user.api'
import { useNavigate } from '@tanstack/react-router'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'

const RegisterForm = ({ state }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)
        setError('')
        try {
            const data = await registerUser(name, email, password)
            setLoading(false)
            dispatch(login(data.user))
            navigate({ to: '/dashboard' })
        } catch (err) {
            setLoading(false)
            setError(err.message || 'Registration failed')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Sign Up</h2>

            {error && (
                <div className='p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded'>
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="name" className='block text-sm text-gray-700 mb-1'>
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                    required
                />
            </div>

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
                <p className='text-xs text-gray-500 mt-1'>At least 6 characters</p>
            </div>

            <button
                type="submit"
                disabled={loading}
                className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {loading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className='text-center text-sm text-gray-600'>
                Already have an account?{' '}
                <button type="button" onClick={() => state(true)} className='text-blue-600 hover:underline'>
                    Sign in
                </button>
            </p>
        </form>
    )
}

export default RegisterForm