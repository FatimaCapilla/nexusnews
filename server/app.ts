import connection_db from "./database/connection_db.ts";

try {
  await connection_db.authenticate();
  console.log(`✅ Connection has been established successfully.\n`);
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}
