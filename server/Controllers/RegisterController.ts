import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import UserModel from '../Models/UserModel'

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo de hash

    // Crear el nuevo usuario con la contraseña encriptada
    const newUser = await UserModel.create({ email, password: hashedPassword, role });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
