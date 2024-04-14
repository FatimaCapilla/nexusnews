import { Request, Response, NextFunction } from 'express';
import { verifyToken } from "./Token";

export const authToken = (req: Request, res: Response, next: NextFunction) =>{
    try {
        const authToken = req.headers.authorization?.split(' ')[1];
        const dataToken: any = verifyToken(authToken);
        const userId: number = dataToken.userId;
        req.body.author_id = userId;
    next();
    } catch (error) {
        return res.status(401).send({ error: 'invalid authentication' }); 
    }
}