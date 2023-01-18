import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_STRING);

export default sql;