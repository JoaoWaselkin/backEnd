import { Pool } from "pg";
import pool from "../config/database";
import { Contact } from "../models/contactModel";

export class ContactRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
}

  async getAllContacts(): Promise<Contact[]> {
    const { rows } = await this.pool.query("SELECT name, email, image, telefone  FROM contactos");
    return rows;
}

async addContact(name: string, email: string, image: string, telefone: string): Promise<Contact> {
    const queryText =
      "INSERT INTO contactos(name, email, image, telefone) VALUES($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.pool.query(queryText, [name, email, image, telefone]);
    return rows[0];
  }

async updateContact(id: number, name: string, email: string, image: string, telefone: string): Promise<Contact> {
  const queryText =
     "UPDATE contactos SET name = $1, email = $2, image = $3, telefone = $4 WHERE id = $5 RETURNING *";
  const { rows } = await this.pool.query(queryText, [name, email, image, telefone, id]);

  if (rows.length === 0) {
    throw new Error(`Contato com ID ${id} não encontrado`);
  }

    return rows[0];
  }

  async deleteContact(id: number): Promise<void> {
    const queryText = "DELETE FROM contactos WHERE id = $1";
    const { rowCount } = await this.pool.query(queryText, [id]);

    if (rowCount === 0) {
      throw new Error(`Contato com ID ${id} não encontrado`);
    }
  }

}