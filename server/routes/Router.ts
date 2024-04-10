import express from 'express';
import { getAllNews, addNews, editNews, deleteNews, getOne } from '../Controllers/NewsController';
import { loginUser } from '../Controllers/UserController';
import { validateCreateNews, validateUpdateNews, validateDeleteNews } from '../validators/newsValidator';
import { getUsers } from '../Controllers/UserController';
import { registerUser } from '../Controllers/RegisterController';
import { authRol } from  "./authRol"
import { authToken } from './authToken';

const router = express.Router();

router.get('/news', authToken , authRol(["user", "admin"]), getAllNews);

router.post('/news',authToken , authRol(["user", "admin"]), validateCreateNews, addNews);

router.put('/news/:id', authToken , authRol(["admin"]), validateUpdateNews, editNews);

router.delete('/news/:id',authToken , authRol(["admin"]), validateDeleteNews, deleteNews);

router.get('/news/:id', getOne)

router.post('/users/login', loginUser);

router.post('/users/register', registerUser);

router.get('/users', getUsers);

export default router;
