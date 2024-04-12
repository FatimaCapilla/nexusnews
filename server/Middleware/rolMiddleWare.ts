import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config";

interface AuthRequest extends Request {
    userId?: string;
    userRole?: string; // Agregar userRole para almacenar el rol del usuario
}

export const authRol = (roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => {
    // Obtener el token de autorización del encabezado
    const token = req.headers.authorization?.split(' ')[1];
    
    try {
        if (!token) {
            throw new Error('Authorization token not provided');
        }
        
        // Verificar el token y extraer los datos del usuario
        const decoded: any = jwt.verify(token, SECRET_KEY);
        const userRole = decoded.role; // Obtener el rol del usuario desde el token

        // Verificar si el rol del usuario tiene acceso a la ruta
        if (!userRole || !roles.some((role) => userRole.includes(role))) {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        // Almacenar el rol del usuario en la solicitud para su posterior uso
        req.userRole = userRole;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Failed to authenticate' });
    }
};
