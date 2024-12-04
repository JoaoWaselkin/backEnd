import { ContactRepository } from '../repositories/contactRepository';
import { isValidEmail } from '../helpers/validationHelper';

export class ContactService {
  private ContactRepository: ContactRepository;

  constructor() {
    this.ContactRepository = new ContactRepository();
  }

  async createContact(name: string, email: string , telefone: string, image: string) {
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    return await this.ContactRepository.addContact(name, email, telefone, image);
  }

  async listContact() {
    return await this.ContactRepository.getAllContacts();
  }
}