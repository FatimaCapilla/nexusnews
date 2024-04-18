import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const tokenInit = (user: any) => {
    console.log(user)
    const data = {
        userId: user.id,
        role: user.role,
        email: user.email
    };
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: '2h' });
    return token;
}

export const verifyToken = (tokenJwt: string) => { 
    try {
        return jwt.verify(tokenJwt, SECRET_KEY);
    } catch (error) {
        return null;
    }
}
