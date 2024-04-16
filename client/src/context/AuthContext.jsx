import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

// Proveedor del contexto para gestionar el estado de inicio de sesión
const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState(false);

    return (
        <AuthContext.Provider value={{ loggedIn, dataUser, setDataUser, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
