import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si las contraseñas coinciden
        if (password === confirmPassword) {
            // Procesar el formulario
            console.log('Contraseñas coinciden, se puede enviar el formulario');
            // Aquí puedes enviar el formulario o realizar otras acciones
        } else {
            // Mostrar un mensaje de error o realizar alguna acción si las contraseñas no coinciden
            console.log('Las contraseñas no coinciden');
            setPasswordsMatch(false);
        }
    };

    const handleRegister = async () => {
        try {
            // Verificar si las contraseñas coinciden
            if (password !== confirmPassword) {
                Swal.fire({
                    title: 'Error',
                    text: 'Las contraseñas no coinciden',
                    icon: 'error',
                });
                return;
            }

            // Realizar la solicitud POST con Axios
            const response = await axios.post('http://localhost:3000/api/users/register', {
                email,
                password,
                confirmPassword,
            });

            // Verificar si la solicitud fue exitosa
            if (response.status === 201) {
                Swal.fire({
                    title: 'Registro exitoso',
                    text: '¡Tu cuenta ha sido creada!',
                    icon: 'success',
                });
                // Limpiar los campos del formulario
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                // Manejar errores si la solicitud no fue exitosa
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al intentar registrarse. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error al intentar registrar:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar registrarse. Por favor, inténtalo de nuevo más tarde.',
                icon: 'error',
            });
        }
    };
  
    return (
      <div className="font-sans text-gray-900">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
          <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
              <form onSubmit={handleSubmit}>
                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Registro de usuarios</span>
                            </center>
                        </div>
                        <div>
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
                        </div>
                        <div className="mt-4">
                            <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Contraseña"
                                    required
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}>
                                            <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input
                                id="confirmPassword"
                                type={showPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                required
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5] ${!passwordsMatch ? 'border-red-500' : ''}`} />
                            {!passwordsMatch && <p className="text-red-500 text-xs">Las contraseñas no coinciden</p>}
                      
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                            onClick={handleRegister}
                                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Registrarse
                            </button>
                      
                        </div>
                    </form>
                </div>
                <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
                    Iniciar sesión
                </button>
            
            </div>
        </div>
    );
};

export default Register;
