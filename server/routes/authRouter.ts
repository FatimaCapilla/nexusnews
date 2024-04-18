import express from 'express';
import { registerUser } from '../Controllers/RegisterController';
import { loginUser } from '../Controllers/UserController';
import { getUsers } from '../Controllers/UserController';
import { authRol } from '../Middleware/authRol';
import { validateRegisterUser } from '../validators/userValidator';
import { validateLoginUser } from '../validators/userValidator';

const router = express.Router();

router.post('/users/register', validateRegisterUser, registerUser);
router.post('/users/login', validateLoginUser, loginUser);
router.get('/users', authRol(['admin']), getUsers);

export default router;
