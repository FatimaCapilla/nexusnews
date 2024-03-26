import connection_db from "./database/connection_db";
import express from "express";
import NewsRouter from "./routes/NewsRouter";
import UserRouter from "./routes/UserRouter";

try {
    connection_db.authenticate();
    console.log(`✅ Connection has been established successfully.\n`);
} catch (error) {
    console.error('❌ Unable to connect to the database:', error);
}

export const app = express();
app.use(express.json());
app.use("/api/news", NewsRouter);
app.use("/api/users", UserRouter);