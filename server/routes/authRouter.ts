import express from 'express';
import { registerUser } from '../Controllers/RegisterController';
import { loginUser } from '../Controllers/UserController';
import { getUsers } from '../Controllers/UserController';
import { authRol } from '../Middleware/authRol';

const router = express.Router();

router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users', authRol(['admin']), getUsers);

export default router;
