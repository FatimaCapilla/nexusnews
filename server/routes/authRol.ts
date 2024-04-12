import { Request, Response, NextFunction } from 'express';

// Define una interfaz para el usuario
interface User {
    role: string; // Supongo que el usuario tiene un atributo de rol
    // Otros atributos del usuario según sea necesario
}

// Define una interfaz para la solicitud con la propiedad de usuario
interface AuthRequest extends Request {
    user?: User; // La propiedad de usuario puede ser opcional si el usuario no está autenticado
}

export const authRol = (roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => {
    // Obtener el rol del usuario desde la solicitud (puedes obtenerlo de la autenticación del usuario)
    const userRole = req.user?.role;

    // Verificar si el rol del usuario tiene acceso a la ruta
    try {
        // Si el usuario tiene el rol adecuado, continuar con la solicitud
        if (!userRole || !roles.some((role) => userRole.includes(role))) {
            return res.status(403).json({ message: 'Acceso no autorizado' });
        }
    } catch (error) {
        // Si hay algún error en la verificación, devolver un error 500
        console.error('Error en la verificación de roles:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
    
    next();
};
