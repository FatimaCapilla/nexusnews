import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import {SECRET_KEY} from "../config"

interface AuthRequest extends Request {
    userId?: string; 
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']; 
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY); 
        req.userId = (decoded as any).userId; 
        next(); 
    } catch (error) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
};
