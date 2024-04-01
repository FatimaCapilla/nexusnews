import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/UserModel';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    console.log('Registrando nuevo usuario:', email);

    const existingUser = await UserModel.findOne({ where: { email } });

    if (existingUser) {
      console.log('El usuario ya existe. Registro fallido.');
      return res.status(400).json({ success: false, message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      role: 'user', // Asignamos un valor predeterminado para el rol
    });
    

    const token = jwt.sign({ userId: newUser.id}, 'secreto', { expiresIn: '1h' });

    console.log('Registro exitoso. Generando token.');
    res.status(201).json({ success: true, message: 'Usuario registrado con éxito', token });
  } catch (error) {
    console.error('Error al intentar registrar usuario:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};