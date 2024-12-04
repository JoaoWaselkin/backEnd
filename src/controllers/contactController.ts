import { Request, Response } from 'express';
import { ContactRepository } from '../repositories/contactRepository'
import { isValidEmail } from '../helpers/validationHelper';
import { ContactService } from '../services/userService';

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

export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await contactRepo.deleteContact(parseInt(id));
    res.status(200).json({ message: 'Contato excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: `Contato com ID ${id} não encontrado` });
  }
};

export const addContact = async (req: Request, res: Response) => {
  const { name, email, telefone, image } = req.body;

  // Validando o e-mail com o helper
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    const contact = await contactRepo.addContact(name, email, telefone, email);
    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};

