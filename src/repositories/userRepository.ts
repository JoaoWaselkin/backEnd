import { Pool } from "pg";
import pool from "../config/database";
import { User } from "../models/userModel";

export class UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
}

async getAllUser(): Promise<User[]> {
  const { rows } = await this.pool.query("SELECT name, email  FROM users");
  return rows;
}

async getUserByEmail(email: string): Promise<User | null> {
  const { rows } = await this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return rows[0] || null;
}

async addUser(name: string, email: string, passwordHash: string): Promise<User> {
  const queryText = 'INSERT INTO users(name, email, passwordHash) VALUES($1, $2, $3) RETURNING *';
  const { rows } = await this.pool.query(queryText, [name, email, passwordHash]);
  return rows[0];
}

async updateUser(id: number, name: string, email: string): Promise<User> {
  const queryText =
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *";
  const { rows } = await this.pool.query(queryText, [name, email, id]);

  if (rows.length === 0) {
    throw new Error(`User com ID ${id} não encontrado`);
  }

    return rows[0];
  }

  async deleteUser(id: number): Promise<void> {
    const queryText = "DELETE FROM users WHERE id = $1";
    const { rowCount } = await this.pool.query(queryText, [id]);

    if (rowCount === 0) {
      throw new Error(`User com ID ${id} não encontrado`);
    }
  }

}