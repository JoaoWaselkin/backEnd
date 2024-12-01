import { Pool } from "pg";
import pool from "../config/database";
import { Contact } from "../models/contactModel";

export class ContactRepository {
  private pool: Pool;

constructor() {
  this.pool = pool;
}

async getAllContacts(): Promise<Contact[]> {
  const { rows } = await this.pool.query("SELECT * FROM contactos");
  return rows;
}

async addContact(name: string, email: string, image: string, telefone: string): Promise<Contact> {
  const queryText =
    "INSERT INTO contactos(name, email, image, telefone) VALUES($1, $2, $3, $4) RETURNING *";
  const { rows } = await this.pool.query(queryText, [name, email, image, telefone]);
  return rows[0];
}

}