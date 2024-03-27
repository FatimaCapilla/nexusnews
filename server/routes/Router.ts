import express from 'express';
import {getAllNews, addNews, editNews, deleteNews} from '../Controllers/NewsController';
import {loginUser} from '../Controllers/UserController';
import { validateCreateNews,validateUpdateNews, validateDeleteNews} from '../validators/newsValidator';
import { getUsers } from '../Controllers/UserController';
const router = express.Router();


router.get('/news', getAllNews);

router.post('/news', validateCreateNews, addNews);

router.put('/news/:id', validateUpdateNews, editNews);

router.delete('/news/:id', validateDeleteNews, deleteNews);

router.post('/users/login', loginUser);

router.get('/users', getUsers)

export default router;
