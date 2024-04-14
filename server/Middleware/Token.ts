import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const tokenSign = (user: any) => {
    const data = {
        userId: user.id,
        rol: user.rol
    };
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: '2h' });
    return token;
}

export const verifyToken = (tokenJwt: any) => {
    try {
        return jwt.verify(tokenJwt, SECRET_KEY)       
    } catch (error) {
        return null; 
    }
}