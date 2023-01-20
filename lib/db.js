import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_STRING, {idle_timeout: 1});

export default sql;