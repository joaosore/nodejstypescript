import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash('SUA SENHA', 8);

  const exists = await connection.query(
    `SELECT * FROM USERS WHERE email = 'joao@johnnydev.com.br'`,
  );

  if (exists.length === 0) {
    await connection.query(
      `INSERT INTO USERS(id, name, email, password, created_at)
        values ('${id}', 'João Marcos Soré de Morais', 'joao@johnnydev.com.br', '${password}', 'now()')`,
    );
  }
}

create().then(() => console.log('User created!'));
