import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { SECRET_KEY } from '../config';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({ error: 'No authentication token provided.' });
    }

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
            return res.status(403).send({ error: 'Invalid Token.' });
        }

        next();
    });
};


