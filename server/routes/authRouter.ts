import express from 'express';
import { registerUser } from '../Controllers/RegisterController';
import { loginUser } from '../Controllers/UserController';
import { getUsers } from '../Controllers/UserController';
import { authRol } from '../Middleware/authRol';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/:id', authRol(['admin']) ,getUsers);


export default router;