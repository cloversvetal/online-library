
import {Pool, PoolConfig} from 'pg';

interface DatabaseConfig extends PoolConfig {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

const poolConfig: DatabaseConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'online_library',
    password: '12345678',
    port: 5432
}

const pool = new Pool(poolConfig);

export default pool;
