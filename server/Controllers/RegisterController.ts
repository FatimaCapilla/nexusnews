import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import UserModel from '../Models/UserModel';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({ email, password: hashedPassword, role });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
