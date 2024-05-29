import React, { useState } from 'react';
import logo from '../../assets/atom-logotype-full-white.svg'
import img from '../../assets/atom-app-icon-mid.svg'

interface LoginFormProps {
    // Add any props here if needed
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log(email, password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#151817]">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="w-full max-w-xs">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleLogin}>
                    <h2 className="text-white text-5xl font-bold mb-6 text-center">Login</h2>
                    <div className="mb-4">
                        <input
                            className="appearance-none rounded relative block w-full px-3 py-2 bg-[#282828] placeholder-[#5E5E5E] text-[#5E5E5E]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            className="appearance-none rounded relative block w-full px-3 py-2 bg-[#282828] placeholder-[#5E5E5E] text-[#5E5E5E] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <a href="#" className="font-medium text-sm text-[#ECE203]">Forgot password?</a>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#EDE300] hover:[#A29B00] focus:outline-none focus:border-none focus:bg-[#fff455]"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default LoginForm;
