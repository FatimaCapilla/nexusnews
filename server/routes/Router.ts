import express from 'express';
import {
  getAllNews,
  addNews,
  editNews,
  deleteNews,
} from '../Controllers/NewsController'; // Corregir la extensión del archivo de controlador
import {
  loginUser,
} from '../Controllers/UserController'; // Corregir la importación del controlador de usuario

const router = express.Router();

// Rutas para el CRUD de noticias
router.get('/news', getAllNews);
router.post('/news', addNews);
router.put('/news/:id', editNews);
router.delete('/news/:id', deleteNews);

// Rutas existentes para la autenticación de usuarios
router.post('/users/login', loginUser);

export default router;
