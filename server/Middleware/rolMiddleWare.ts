import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./verifyToken";

export const authRol = (reqRol: string[]) =>  (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization?.split(' ')[1];
    try {
        if (!authToken) {
            throw new Error('Authorization token not provided');
        }
        
        const dataToken: any = verifyToken(req, res, next);
        const rolUser = dataToken.rol;
        const rolesByUser = rolUser;
        const checkValueRol = reqRol.some((rolSingle) => rolesByUser.includes(rolSingle));
        if (!checkValueRol) {
            return res.status(401).send({ error: 'You do not have access' });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).send({ error: 'Failed to authenticate' });
    }
    next();
};
