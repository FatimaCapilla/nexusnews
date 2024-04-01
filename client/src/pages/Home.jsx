import React, { useState } from 'react';

const Home = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="font-sans text-gray-900 ">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
                    <form method="POST" action="{{ route('login') }}">

                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
                            <input type='email' 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />                        
                        </div>

                        <div className="mt-4">
                            <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}>
                                            <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flex items-center justify-end mt-4">
                            
                            <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    );
};

export default Home;
