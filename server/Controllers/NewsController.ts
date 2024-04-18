import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import NewsModel from '../Models/NewsModel';

export const getAllNews = async (req: Request, res: Response) => {
    try {
        const news = await NewsModel.findAll();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ err: 'Server Error' });
    }
};

export const addNews = async (req: Request, res: Response) => {
    const { title, body, date, image } = req.body;
    const user_id = (req as any).userId; // Obtener userId del token JWT
    try {
        const news = await NewsModel.create({ title, body, user_id, date, image });
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
;

export const editNews = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, body, date, image } = req.body;
    const user_id = (req as any).userId; // Obtener userId del token JWT
    try {
        const news = await NewsModel.findByPk(id);
        if (news) {
            if (news.user_id !== user_id) { // Verificar si el usuario que edita es el dueño de la noticia
                return res.status(403).json({ message: 'No tienes permiso para editar esta noticia.' });
            }
            const updatedNews = await news.update({ title, body, date, image });
            res.status(200).json(updatedNews);
        } else {
            res.status(404).json({ message: 'News not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteNews = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const news = await NewsModel.findByPk(id);
        if (news) {
            await news.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'News not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOneNews = async (req: Request, res: Response) => {
    const idNews = req.params.id;
    try {
        const news = await NewsModel.findOne({ where: { id: idNews }});
        if (news) {
            res.status(200).json(news);
        } else {
            res.status(404).json({ message: 'News not found' });
        }
    } catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
