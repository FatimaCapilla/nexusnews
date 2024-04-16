import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import UserModel from '../Models/UserModel';

// Middleware para verificar el token de autenticación
export const authToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).send({ error: 'No authentication token provided.' });
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).send({ error: 'Invalid Token.' });
            }
            // Agregamos userId al cuerpo de la solicitud decodificada del token
            (req as any).userId = (decoded as { userId: number }).userId;
            next();
        });
    } catch (error) {
        console.error('Error en authToken:', error);
        return res.status(500).send({ error: 'Error en el servidor' });
    }
};
