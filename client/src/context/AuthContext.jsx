import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

// Proveedor del contexto para gestionar el estado de inicio de sesión
const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState(false);

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
            const response = await axios.post('http://localhost:3000/api/users/login', { email, password });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setLoggedIn(true);
                setDataUser(response.data.role);
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

    // Función del Dashboard
    const Dashboard = () => {
        // Verificar si el usuario está autenticado y es administrador
        const isAdmin = loggedIn && dataUser === 'admin';
    }
    
    return (
        <AuthContext.Provider value={{ loggedIn, login, logout, dataUser, setDataUser }}>
            {/* Renderiza el componente Dashboard dentro del proveedor de contexto */}
            <Dashboard />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
