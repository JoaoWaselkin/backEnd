import pool from '../config/database';

const updateContactosTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE contactos
        ADD COLUMN telefone VARCHAR(13);
    `;
    await client.query(queryText);
    console.log('Tabela atualizada com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar tabela:', err);
  } finally {
    client.release();
  }
};

updateContactosTable().then(() => process.exit(0));


