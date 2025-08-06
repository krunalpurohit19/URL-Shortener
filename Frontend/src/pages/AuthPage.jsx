import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {
    const [login, setLogin] = React.useState(true)

    return (
        <div className='min-h-screen bg-white flex items-center justify-center p-6'>
            <div className='w-full max-w-sm'>
                {/* Simple Tab Switcher */}
                <div className='flex border-b mb-8'>
                    <button
                        onClick={() => setLogin(true)}
                        className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${login
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setLogin(false)}
                        className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${!login
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Forms */}
                {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
            </div>
        </div>
    )
}

export default AuthPage
