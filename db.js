import postgres from "postgres";
import "dotenv/config";

const sql = postgres(process.env.DB_HOST);

export default sql;
