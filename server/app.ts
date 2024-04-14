import express from 'express';
import newsRouter from "./routes/newsRouter"
import authRouter from "./routes/authRouter"
import connection_db from './database/connection_db';
import UserModel from './Models/UserModel';
import NewsModel from './Models/NewsModel';
import { PORT } from './config';
import cors from 'cors'

export const app = express();
app.use(express.json());
app.use(cors())

app.use('/news', newsRouter);
app.use('/users', authRouter);


export default app;

const main = async () => {
  try {
    // Conectar a la base de datos
    await connection_db.authenticate();
    console.log('✅✅ Successful connection to the database ✅✅');

    // Sincronizar modelos con la base de datos
    await UserModel.sync();
    await NewsModel.sync();
    console.log('✅✅ Models synced with the database ✅✅');
  } catch (error) {
    console.log('❌❌ Database connection or sync error ❌❌', error);
  }
};

// Iniciar el servidor
export const server = app.listen(PORT, () => {
  console.log(`💚 Server is running on port ${PORT}`);
}).on('error', (error) => {
  console.log('❌❌ Server error ❌❌:', error.message);
});

// Manejar cierre grácil del servidor
process.on('SIGINT', async () => {
  try {
    // Cerrar la conexión a la base de datos
    await connection_db.close();
    console.log('✅✅ Database connection closed ✅✅');
  } catch (error) {
    console.log('❌❌ Error closing the database connection ❌❌', error);
  }

  // Cerrar el servidor
  server.close(() => {
    console.log('💔 Server closed');
    process.exit(0);
  });
});

main();
