import connection_db from "./database/connection_db";

try {
    connection_db.authenticate();
    console.log(`✅ Connection has been established successfully.\n`);
} catch (error) {
    console.error('❌ Unable to connect to the database:', error);
}
