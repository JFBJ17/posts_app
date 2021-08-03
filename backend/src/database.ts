import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_mysql_ts',
        connectionLimit: 10,
        port: 3310
    });
    return connection;
}