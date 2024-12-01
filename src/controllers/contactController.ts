import { Request, Response } from 'express';
import { ContactRepository } from '../repositories/contactRepository'

const contactRepo = new ContactRepository();

export const getContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await contactRepo.getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar contatos' });
  }
};
