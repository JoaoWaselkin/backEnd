import { Pool } from "pg";
//import pool from "../config/database";
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