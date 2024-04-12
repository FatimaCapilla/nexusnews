import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../Models/UserModel';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const authToken = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Verificar si se proporcionaron tanto el correo electrónico como la contraseña
        if (!email || !password) {
            return res.status(400).json({ message: 'Correo electrónico y contraseña requeridos' });
        }

        // Buscar al usuario en la base de datos por su correo electrónico
        const user = await UserModel.findOne({ where: { email } });

        // Verificar si el usuario existe y si la contraseña es correcta
        if (user && bcrypt.compareSync(password, user.password)) {
            // Generar un token JWT para el usuario
            const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

            // Enviar una respuesta con el token
            res.status(200).json({ token });
        } else {
            // Si el usuario no existe o la contraseña es incorrecta, enviar un mensaje de error
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        // Si ocurre algún error, enviar un mensaje de error genérico
        console.error('Error al intentar autenticar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
