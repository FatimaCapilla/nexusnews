import { Request, Response } from 'express';
import NewsModel from "../Models/NewsModel";

export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await NewsModel.findAll();
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    console.error('Error al obtener todos las noticias:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const addNews = async (req: Request, res: Response) => {
  try {
    const { title, body, user_id, date, image } = req.body;
    const newNews = await NewsModel.create({ title, body, user_id, date, image });
    res.status(201).json({ success: true, data: newNews });
  } catch (error) {
    console.error('Error al agregar la noticia:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const editNews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, body, user_id, date, image } = req.body;
    const news = await NewsModel.findByPk(id);
    if (!news) {
      return res.status(404).json({ success: false, error: 'Noticia no encontrado' });
    }
    await news.update({ title, body, user_id, date, image });
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    console.error('Error al editar noticia:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const deleteNews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findByPk(id);
    if (!news) {
      return res.status(404).json({ success: false, error: 'Noticia no encontrada' });
    }
    await news.destroy();
    res.status(200).json({ success: true, message: 'Noticia eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar el Libro:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const getOne = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const news = NewsModel.findByPk(id);

    if (!news) {
      return res.status(404).json({ success: false, message: 'La noticia no se encontró' });
    }

    res.status(200).json({ success: true, news });
  } catch (error) {
    console.error('Error al obtener la noticia:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};