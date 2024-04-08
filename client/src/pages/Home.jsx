// import React, { useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
// //login: Esta función se encarga de realizar la solicitud de inicio de sesión al backend. 
//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:3000/users'//("api/login"
//             , { email, password });

//             if (response.status === 200) {
//                 // El inicio de sesión fue exitoso
//                 // Redireccionar a la página de la galería u otra acción deseada
//                 window.location.href = '/client/src/pages/GalleryNews.jsx';
//             } else {
//                 // El inicio de sesión falló
//                 setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
//             }
//         } catch (error) {
//             // Manejar errores de solicitud
//             console.error('Error al iniciar sesión:', error);
//             setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
//         }
//     };
// //Se ejecuta cuando el usuario envía el formulario. 
//     const handleSubmit = async (event) => {
// //obtiene los valores del correo electrónico y la contraseña del formulario y llama a la función login para intentar iniciar sesión con estos datos. 
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const email = formData.get('email');
//         const password = formData.get('password');

//         try {
//             await login(email, password);
//         } catch (error) {
//             console.error('Error al procesar el formulario:', error);
//             setError('Ocurrió un error al procesar el formulario. Por favor, inténtelo de nuevo más tarde.');
//         }
//     };

//     return (
//         <div className="font-sans text-gray-900 ">
//             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">

//                 <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
//                     <form onSubmit={handleSubmit}>

//                         <div className="py-8">
//                             <center>
//                                 <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
//                             </center>
//                         </div>

//                         {error && (
//                             <div className="text-red-500">{error}</div>
//                         )}

//                         <div>
//                             <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
//                             <input type='email' 
//                                 name='email'
//                                 placeholder='Email'
//                                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />                        
//                         </div>

//                         <div className="mt-4">
//                             <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
//                             <div className="relative">
//                                 <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />

//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                     <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
//                                         Mostrar Contraseña
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-end mt-4">
//                             <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                                 Iniciar Sesión
//                             </button>
//                         </div>
//                     </form>              
//                 </div>
//                 <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
//                     Registro nuevos usuarios
//                 </button>  
//             </div>
//         </div>
//     );
// };

// export default Home;
// //En resumen, este código implementa un formulario de inicio de sesión en React que utiliza Axios para enviar
// // las credenciales de inicio de sesión al backend y maneja los errores de inicio de sesión mostrando mensajes
// // de error al usuario.

// import React, { useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:3000/users', { email, password });

//             if (response.status === 200) {
//                 return response; // Devuelve la respuesta completa para obtener el token
//             } else {
//                 throw new Error('Credenciales incorrectas');
//             }
//         } catch (error) {
//             throw new Error('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const email = formData.get('email');
//         const password = formData.get('password');

//         try {
//             const response = await login(email, password);
//             const token = response.data.token;

//             // Almacenar el token en el almacenamiento local (localStorage)
//             localStorage.setItem('token', token);

//             // Redireccionar a la página de la galería u otra acción deseada
//             window.location.href = '/client/src/pages/GalleryNews.jsx';
//         } catch (error) {
//             console.error('Error al procesar el formulario:', error);
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="font-sans text-gray-900 ">
//             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
//                 <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
//                     <form onSubmit={handleSubmit}>
//                         <div className="py-8">
//                             <center>
//                                 <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
//                             </center>
//                         </div>
//                         {error && (
//                             <div className="text-red-500">{error}</div>
//                         )}
//                         <div>
//                             <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
//                             <input type='email' 
//                                 name='email'
//                                 placeholder='Email'
//                                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />                        
//                         </div>
//                         <div className="mt-4">
//                             <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
//                             <div className="relative">
//                                 <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                     <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
//                                         Mostrar Contraseña
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end mt-4">
//                             <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                                 Iniciar Sesión
//                             </button>
//                         </div>
//                     </form>              
//                 </div>
//                 <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
//                     Registro nuevos usuarios
//                 </button>  
//             </div>
//         </div>
//     );
// };

// export default Home;
// import React, { useState } from 'react'; // Importamos React y el hook useState para gestionar el estado
// import axios from 'axios'; // Importamos axios para hacer solicitudes HTTP

// // Creamos un componente funcional llamado Home
// const Home = () => {
//     // Definimos los estados iniciales utilizando el hook useState
//     const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
//     const [error, setError] = useState(''); // Estado para almacenar mensajes de error

//     // Función para alternar la visibilidad de la contraseña
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     // Función para realizar la solicitud de inicio de sesión al backend
//     const login = async (email, password) => {
//         try {
//             // Realizamos una solicitud POST al servidor con los datos de inicio de sesión
//             const response = await axios.post('http://localhost:3000/users/login', { email, password });

//             // Si la respuesta es satisfactoria (status 200), extraemos el token de la respuesta
//             if (response.status === 200) {
//                 const token = response.data.token;
//                 return token; // Devolvemos el token
//             } else {
//                 // Si la respuesta no es satisfactoria, lanzamos un error
//                 throw new Error('Credenciales incorrectas');
//             }
//         } catch (error) {
//             // Manejamos los errores de la solicitud
//             console.error('Error al iniciar sesión:', error);
//             throw new Error('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
//         }
//     };

//     // Función para manejar el envío del formulario de inicio de sesión
//     const handleSubmit = async (event) => {
//         event.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario
//         const formData = new FormData(event.target); // Obtenemos los datos del formulario
//         const email = formData.get('email'); // Obtenemos el valor del campo de correo electrónico
//         const password = formData.get('password'); // Obtenemos el valor del campo de contraseña

//         try {
//             // Intentamos iniciar sesión llamando a la función login con los datos proporcionados
//             const token = await login(email, password);

//             // Si el inicio de sesión es exitoso, almacenamos el token en el almacenamiento local
//             localStorage.setItem('token', token);

//             // Redireccionamos a la página de la galería u otra acción deseada
//             window.location.href = '/client/src/pages/GalleryNews.jsx';
//         } catch (error) {
//             // Si hay un error al iniciar sesión, mostramos un mensaje de error
//             console.error('Error al procesar el formulario:', error);
//             setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
//         }
//     };

//     // Renderizamos el componente con JSX
//     return (
//         <div className="font-sans text-gray-900 ">
//             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
//                 <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
//                     <form onSubmit={handleSubmit}> {/* Asociamos la función handleSubmit al evento onSubmit del formulario */}
//                         <div className="py-8">
//                             <center>
//                                 <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
//                             </center>
//                         </div>
//                         {error && ( // Mostramos un mensaje de error si existe algún error
//                             <div className="text-red-500">{error}</div>
//                         )}
//                         <div>
//                             <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
//                             <input type='email' 
//                                 name='email'
//                                 placeholder='Email'
//                                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />                        
//                         </div>
//                         <div className="mt-4">
//                             <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
//                             <div className="relative">
//                                 <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                     <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
//                                         Mostrar Contraseña
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end mt-4">
//                             <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                                 Iniciar Sesión
//                             </button>
//                         </div>
//                     </form>              
//                 </div>
//                 <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
//                     Registro nuevos usuarios
//                 </button>  
//             </div>
//         </div>
//     );
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Esta función se ejecutará cada vez que cambie el estado de 'error'
//         console.log('Error actualizado:', error);
//     }, [error]); // Estamos observando el estado 'error'

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:3000/users', { email, password });

//             if (response.status === 200) {
//                 const token = response.data.token;
//                 return token;
//             } else {
//                 throw new Error('Credenciales incorrectas');
//             }
//         } catch (error) {
//             console.error('Error al iniciar sesión:', error);
//             throw new Error('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const email = formData.get('email');
//         const password = formData.get('password');

//         try {
//             const token = await login(email, password);
//             localStorage.setItem('token', token);
//             window.location.href = '/client/src/pages/GalleryNews.jsx';
//         } catch (error) {
//             console.error('Error al procesar el formulario:', error);
//             setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
//         }
//     };

//     return (
//         <div className="font-sans text-gray-900">
//             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
//                 <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
//                     <form onSubmit={handleSubmit}>
//                         <div className="py-8">
//                             <center>
//                                 <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
//                             </center>
//                         </div>
//                         {error && (
//                             <div className="text-red-500">{error}</div>
//                         )}
//                         <div>
//                             <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
//                             <input type='email'
//                                 name='email'
//                                 placeholder='Email'
//                                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                         </div>
//                         <div className="mt-4">
//                             <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
//                             <div className="relative">
//                                 <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                     <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
//                                         Mostrar Contraseña
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end mt-4">
//                             <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                                 Iniciar Sesión
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
//                     Registro nuevos usuarios
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     // Estado para controlar la visibilidad de la contraseña
//     const [showPassword, setShowPassword] = useState(false);

//     // Estado para almacenar mensajes de error
//     const [error, setError] = useState('');

//     // Estado para verificar si el usuario ya ha iniciado sesión
//     const [loggedIn, setLoggedIn] = useState(false);

//     // useEffect se utiliza para verificar si ya existe un token en el almacenamiento local
//     useEffect(() => {
//         // Obtenemos el token del almacenamiento local
//         const token = localStorage.getItem('token');
//         // Si se encuentra un token, establecemos el estado 'loggedIn' en true
//         if (token) {
//             setLoggedIn(true);
//         }
//     }, []); // Este efecto se ejecuta solo una vez al cargar el componente

//     // Función para alternar la visibilidad de la contraseña
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     // Función para realizar la solicitud de inicio de sesión al backend
//     const login = async (email, password) => {
//         try {
//             // Realizamos una solicitud POST al servidor con los datos de inicio de sesión
//             const response = await axios.post('http://localhost:3000/users', { email, password });

//             // Si la respuesta es satisfactoria (status 200), extraemos el token de la respuesta
//             if (response.status === 200) {
//                 const token = response.data.token;
//                 // Almacenamos el token en el almacenamiento local
//                 localStorage.setItem('token', token);
//                 // Establecemos el estado 'loggedIn' en true
//                 setLoggedIn(true);
//             } else {
//                 // Si la respuesta no es satisfactoria, lanzamos un error
//                 throw new Error('Credenciales incorrectas');
//             }
//         } catch (error) {
//             // Manejamos los errores de la solicitud
//             console.error('Error al iniciar sesión:', error);
//             setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
//         }
//     };

//     // Función para manejar el envío del formulario de inicio de sesión
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const email = formData.get('email');
//         const password = formData.get('password');

//         try {
//             // Intentamos iniciar sesión llamando a la función login con los datos proporcionados
//             await login(email, password);
//         } catch (error) {
//             // Si hay un error al iniciar sesión, mostramos un mensaje de error
//             console.error('Error al procesar el formulario:', error);
//         }
//     };

//     // Si el usuario ya ha iniciado sesión, redireccionamos automáticamente
//     if (loggedIn) {
//         // Redireccionar a la página de inicio de sesión si ya ha iniciado sesión
//         window.location.href = '/client/src/pages/GalleryNews.jsx';
//         return null; // Retornamos null para no renderizar el resto del componente
//     }

//     return (
//         <div className="font-sans text-gray-900">
//             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
//                 <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
//                     <form onSubmit={handleSubmit}>
//                         <div className="py-8">
//                             <center>
//                                 <span className="text-2xl text-[#EEF0E5] font-semibold">Iniciar Sesión</span>
//                             </center>
//                         </div>
//                         {error && (
//                             <div className="text-red-500">{error}</div>
//                         )}
//                         <div>
//                             <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="email">Email</label>
//                             <input type='email'
//                                 name='email'
//                                 placeholder='Email'
//                                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                         </div>
//                         <div className="mt-4">
//                             <label className="block font-medium text-sm text-[#EEF0E5]" htmlFor="password">Contraseña</label>
//                             <div className="relative">
//                                 <input id="password" type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" required autoComplete="current-password" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                     <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600" onClick={togglePasswordVisibility}>
//                                         Mostrar Contraseña
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end mt-4">
//                             <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                                 Iniciar Sesión
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#1F1E1E] border border-transparent rounded-md font-semibold text-xs text-[#EEF0E5] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mt-5">
//                     Registro nuevos usuarios
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Home;
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Creamos un contexto para el estado de inicio de sesión
const AuthContext = React.createContext();

// Proveedor del contexto para gestionar el estado de inicio de sesión
const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya está autenticado al cargar la página
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    // Función para iniciar sesión
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/users', { email, password });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setLoggedIn(true);
            } else {
                throw new Error('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            throw new Error('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para acceder al contexto de autenticación
const useAuth = () => {
    return useContext(AuthContext);
};

const Home = () => {
    const { loggedIn, login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
            setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        }
    };

    if (loggedIn) {
        // Redirigir al usuario si ya está autenticado
        window.location.href = '/client/src/pages/GalleryNews.jsx';
        return null;
    }

    return (
        <div className="font-sans text-gray-900">
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
