import React, { useState, useEffect, useContext } from 'react';

export const AuthContext = React.createContext();

// Proveedor del contexto para gestionar el estado de inicio de sesión
const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, userEmail, setUserEmail, userRole, setUserRole, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
