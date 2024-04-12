import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper';
import NewsModel from '../Models/NewsModel';

export const validateCreateNews = [
    check('title')
        .exists().withMessage("Debes agregar un título")
        .notEmpty().withMessage("El título no puede estar vacío")
        .isLength({ min: 1, max: 200 }).withMessage("El título debe tener entre 5 y 100 caracteres"),

    check('body')
        .exists().withMessage("Debes agregar un cuerpo")
        .notEmpty().withMessage("El cuerpo no puede estar vacío")
        .isLength({ min: 5, max: 1000 }).withMessage("El cuerpo debe tener entre 10 y 1000 caracteres"),

    check('user_id')
        .exists().withMessage("Debes agregar un user_id")
        .isInt().withMessage("El user_id debe ser un número entero"),

    check('date')
        .exists().withMessage("Debes agregar una fecha")
        .isISO8601().withMessage("La fecha debe estar en formato ISO8601"),

    check('image')
        .exists().withMessage("Debes agregar una imagen")
        .notEmpty().withMessage("La imagen no puede estar vacía")
        .isURL().withMessage("Este debe ser un formato de URL válido"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];


export const validateUpdateNews = [
    check('title')
        .exists().withMessage("You gotta add a title")
        .notEmpty().withMessage("The title can't be empty")
        .isLength({ min: 5, max: 100 }).withMessage("Title must be between 5 and 100 characters"),

    check('body')
        .exists().withMessage("You gotta add a body")
        .notEmpty().withMessage("The body can't be empty")
        .isLength({ min: 10, max: 1000 }).withMessage("Body must be between 10 and 1000 characters"),

    check('user_id')
        .exists().withMessage("You gotta add a user_id")
        .notEmpty().withMessage("The user_id can't be empty"),

        check('date')
        .exists().withMessage("Debes agregar una fecha")
        .notEmpty().withMessage("La fecha no puede estar vacía")
        .isISO8601().withMessage("La fecha debe estar en formato ISO8601"),
    

    check('image')
        .exists().withMessage("You gotta add an image")
        .notEmpty().withMessage("The image can't be empty"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];

export const validateDeleteNews = [
    check('id')
        .exists()
        .notEmpty()
        .withMessage('El ID de la noticia es obligatorio')
        .custom(async (id: any) => {
            const news = await NewsModel.findByPk(id);
            if (!news) {
                throw new Error("¡La noticia no existe!");
            }
            return true;
        }),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];



