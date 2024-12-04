import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository'

const userRepo = new UserRepository();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userRepo.getAllUser();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar users' });
  }
};

export const postUsers = async (req: Request, res: Response): Promise<void> => {
  const { name, email, passwordHash } = req.body;

  try {
    const newUser = await userRepo.addUser(name, email, passwordHash);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o user' });
  }
};

export const putUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await userRepo.updateUser(parseInt(id), name, email);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: `Contato com ID ${id} não encontrado` });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await userRepo.deleteUser(parseInt(id));
    res.status(200).json({ message: 'User excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: `User com ID ${id} não encontrado` });
  }
};