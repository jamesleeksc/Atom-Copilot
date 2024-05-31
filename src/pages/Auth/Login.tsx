import React, { useState } from 'react';
import { Input } from 'antd';
import logo from '/public/atom-logotype-full-white.svg'
import img from '/public/atom-app-icon-mid.svg'
import main from '/public/login-main.png'

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
        <div className="flex flex-col items-center justify-between py-[21px] gap-[156px] w-full h-full m-auto bg-[#151817]">
            <div className='pt-[29px]'>
                <img src={logo} alt="" className='w-[77px] h-[36px]' />
            </div>
            <div className="flex flex-col items-center relative w-full">
                <img src={main} className='absolute' width={'375px'}/>
                <form className="flex flex-col gap-[10px] rounded py-[112px] w-[305px]" onSubmit={handleLogin}>
                    <h2 className="text-white text-[48px] font-bold text-center">Login</h2>
                    <div className="pt-[3px]">
                        <input
                            className="appearance-none rounded relative block w-full px-3 py-2 bg-[#282828] placeholder-[#5E5E5E] text-[#5E5E5E]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input.Password
                            className="border-none rounded w-full  px-3 py-2 bg-[#282828] text-[#5E5E5E] sm:text-sm"
                            type='password'
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full ">
                        <a href="#" className="font-medium text-sm text-[#ECE203]">Forgot password?</a>
                    </div>
                    <div className="py-[12px] pb-[3px]">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#EDE300] hover:[#A29B00] focus:outline-none focus:border-none focus:bg-[#fff455]"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className='pt-[15px]'>
                <img src={img} alt="log" className='w-[50px] h-[50px]' />
            </div>
        </div>
    );
};

export default LoginForm;
