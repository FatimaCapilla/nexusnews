import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().required('Email es requerido').email('Email no válido'),
    password: yup.string().required('Contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const { token, role } = await response.json();

            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            navigate('/news');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="font-sans text-gray-900">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
                            </center>
                        </div>
                        <div>
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
                            <input
                                type='email'
                                placeholder='Email'
                                {...register('email')}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mt-4">
                            <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    {...register('password')}
                                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
                                        {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                                    </button>
                                </div>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button type="submit" onClick={() => navigate("/news")}className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
                <button onClick={() => navigate("/register")} className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
                    Registro nuevos usuarios
                </button>
            </div>
        </div>
    );
};

export default Home;