import express from 'express';
import { getAllNews, addNews, editNews, deleteNews, getOneNews } from '../Controllers/NewsController';
import { validateCreateNews, validateUpdateNews, validateDeleteNews } from '../validators/newsValidator';
import { authRol } from  "../Middleware/authRol"
import { authToken } from '../Middleware/authToken';

const router = express.Router();

router.get('/news', getAllNews);
router.post('/news', authToken, authRol(["user", "admin"]), validateCreateNews, addNews);
router.put('/news/:id', authToken, authRol(["admin"]), validateUpdateNews, editNews);
router.delete('/news/:id', authToken, authRol(["admin"]), validateDeleteNews, deleteNews);
router.get('/news/:id', getOneNews);

export default router;

