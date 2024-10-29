import { Pool } from "pg";

const connectionString = "postgresql://postgres:LCmldblGnwAukHORYidUgGGNCWpcZGll@junction.proxy.rlwy.net:53284/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
