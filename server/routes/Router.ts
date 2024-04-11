import express from 'express';
<<<<<<< HEAD
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
=======
import {getAllNews, addNews, editNews, deleteNews} from '../Controllers/NewsController';
import {loginUser} from '../Controllers/UserController';
import { validateCreateNews,validateUpdateNews, validateDeleteNews} from '../validators/newsValidator';
import { getUsers } from '../Controllers/UserController';
import { registerUser } from '../Controllers/RegisterController';
import { verifyToken } from '../Middleware/verifyToken';
const router = express.Router();


router.get('/news', getAllNews);

router.post('/news', validateCreateNews, addNews);

router.put('/news/:id', validateUpdateNews, editNews);

router.delete('/news/:id', validateDeleteNews, deleteNews);
>>>>>>> feature-front-login

router.post('/users/login', loginUser);

router.post('/users/register', registerUser);

<<<<<<< HEAD
router.get('/users', getUsers);
=======
router.get('/users', getUsers)
>>>>>>> feature-front-login

export default router;
