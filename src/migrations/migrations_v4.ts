import pool from '../config/database';

const updateUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE users
        ADD COLUMN passwordHash VARCHAR(255);
    `;
    await client.query(queryText);
    console.log('Tabela atualizada com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar tabela:', err);
  } finally {
    client.release();
  }
};

updateUsersTable().then(() => process.exit(0));


