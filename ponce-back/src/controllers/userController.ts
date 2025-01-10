import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import { createUser, getUsers } from '../models/userModel';

const createUserController = async (req: Request, res: Response) => {
  const { name, email, birthdate, status, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 8,);
    const newUser = await createUser({ name, email, birthdate, status, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário', message: error});
  }
};

const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log('error: ', error)
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
};

export { createUserController, getUsersController };