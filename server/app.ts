import express from 'express';
import connection_db from './database/connection_db';
import UserModel from './Models/UserModel';
import { NODE_ENV, PORT } from './config';
import NewsModel from './Models/NewsModel';
import router from './routes/Router';

export const app = express();
app.use(express.json());

app.use('/api', router);

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

if (NODE_ENV !== 'test') {
// Iniciar el servidor
const server = app.listen(PORT, () => {
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

}

main();