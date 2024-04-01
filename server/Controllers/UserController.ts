import { Request, Response } from 'express'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/UserModel';

// Función para manejar el inicio de sesión
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    console.log('Intentando iniciar sesión:', email);

    // Buscar al usuario en la base de datos por su correo electrónico
  
    const user: any | null = await UserModel.findOne({ where: { email } });

    // Si el usuario no se encuentra en la base de datos, devolver un mensaje de error
    if (!user) {
      console.log('Usuario no encontrado.');
      return res.status(401).json({ success: false, message: 'Usuario no encontrado. Verifica tus credenciales de inicio de sesión.' });
    }

    // Comparar la contraseña ingresada con la contraseña almacenada para el usuario
    const passwordMatch: boolean = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devolver un mensaje de error
    if (!passwordMatch) {
      console.log('Contraseña incorrecta. Fallo en la autenticación.');
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta. Verifica tus credenciales de inicio de sesión.' });
    }

    // Si las credenciales son correctas, generar un token de autenticación
    console.log('Inicio de sesión exitoso.');
    const token: string = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    // Devolver el token de autenticación como respuesta
    res.status(200).json({ success: true, message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    // Manejar cualquier error interno del servidor
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
