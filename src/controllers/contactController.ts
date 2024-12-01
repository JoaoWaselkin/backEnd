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

export const postContact = async (req: Request, res: Response): Promise<void> => {
  const { name, email, image, telefone } = req.body;

  try {
    const newContact = await contactRepo.addContact(name, email, image, telefone);
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o contato' });
  }
};

export const putContact = async (req: Request, res: Response): Promise<void> => {
   const { id } = req.params;
   const { name, email, image, telefone } = req.body;

   try {
    const updatedContact = await contactRepo.updateContact(parseInt(id), name, email, image, telefone);
     res.json(updatedContact);
   } catch (error) {
     console.error(error);
     res.status(404).json({ message: `Contato com ID ${id} não encontrado` });
  }
};