import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/users', { email, password });
            if (response.status === 200) {
                // El inicio de sesión fue exitoso
                // Redireccionar a la página de la galería u otra acción deseada
                window.location.href = '/client/src/pages/GalleryNews.jsx';
            } else {
                // El inicio de sesión falló
                setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
            }
        } catch (error) {
            // Manejar errores de solicitud
            console.error('Error al iniciar sesión:', error);
            setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await login(email, password);
        } catch (error) {
            console.error('Error al procesar el formulario:', error);
            setError('Ocurrió un error al procesar el formulario. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <div className="font-sans text-gray-900 ">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
                    <form onSubmit={handleSubmit}>

                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
                            </center>
                        </div>

                        {error && (
                            <div className="text-red-500">{error}</div>
                        )}

                        <div>
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
                            <input type='email' 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />                        
                        </div>

                        <div className="mt-4">
                            <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
                                        Mostrar Contraseña
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>              
                </div>
                <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
                    Registro nuevos usuarios
                </button>  
            </div>
        </div>
    );
};

export default Home;

