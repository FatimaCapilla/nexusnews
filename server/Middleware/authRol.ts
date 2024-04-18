import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './Token';
import UserModel from '../Models/UserModel';

export const authRol = (reqRole: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization?.split(' ')[1];

    if (!authToken) {
        return res.status(401).send({ error: 'Token de autorización no proporcionado' });
    }

    try {
        const dataToken: any = verifyToken(authToken);
        const idUser = dataToken.userId
        const user = await UserModel.findByPk(idUser)
        const role: String = user.role
        if (!dataToken) {
            return res.status(401).send({ error: 'Token de autorización inválido' });
        }

        const rolesByUser = Array.isArray(role) ? role : [role];
        const checkValueRol = reqRole.some((roleSingle) => rolesByUser.includes(roleSingle));

        if (!checkValueRol) {
            return res.status(403).send({ error: 'No tienes permisos para esta acción' });
        }

        next();
    } catch (error) {
        console.error('Error en el middleware:', error);
        return res.status(500).send({ error: 'Error en el servidor' });
    }
};
