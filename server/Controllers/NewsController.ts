import UserModel from '../Models/UserModel';
import NewsModel from '../Models/NewsModel';
import { Request, Response } from 'express';

export const getAllNews = async(req: Request, res: Response) => {
    try {
        const news = await NewsModel.findAll();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ err: 'Server Error' });
    }
}

export const addNews = async (req: Request, res: Response) => {
    const { title, body, user_id } = req.body;
    try {
        const news = await NewsModel.create({ title, body, user_id });
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const editNews = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
        const news = await NewsModel.findByPk(id);
        if (news) {
            news.title = title;
            news.body = body;
            await news.save();
            res.status(200).json(news);
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
        res.status(500).json({error: 'Internal Server Error'});
    }   
}
