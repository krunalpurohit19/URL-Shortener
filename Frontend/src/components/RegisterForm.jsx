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

    const handleSubmit = async () => {

        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
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
            setError(err.message || 'Registration failed. Please try again.')
        }
    }

    return (
        <div className='w-full max-w-md mx-auto'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>

                {error && (<div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>{error}</div>)}

                <div className="mb-4">
                    <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='********'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </div>
                <div className='text-center mt-4'>
                    <p className='text-sm text-gray-600'>Already have an account? <span onClick={() => state(true)} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm