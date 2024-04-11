import { Request, Response } from 'express'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/UserModel';
<<<<<<< HEAD
import { SECRET_KEY } from '../config';
=======

>>>>>>> feature-front-login
// Función para manejar el inicio de sesión
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    console.log('Intentando iniciar sesión:', email);
    const user: any | null = await UserModel.findOne({ where: { email } });
    if (!user) {
      console.log('Usuario no encontrado.');
      return res.status(401).json({ success: false, message: 'Usuario no encontrado. Verifica tus credenciales de inicio de sesión.' });
    }
    const passwordMatch: boolean = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Contraseña incorrecta. Fallo en la autenticación.');
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta. Verifica tus credenciales de inicio de sesión.' });
    }
    console.log('Inicio de sesión exitoso.');
<<<<<<< HEAD
    const token: string = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
=======
    const token: string = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });
>>>>>>> feature-front-login
    res.status(200).json({ success: true, message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al manejar inicio de sesión:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log('Obteniendo lista de usuarios.');

    const users = await UserModel.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};
