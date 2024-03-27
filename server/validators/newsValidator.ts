import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper';
import NewsModel from '../Models/NewsModel';

export const validateCreateNews = [
    check('title')
        .exists().withMessage("You gotta add a title")
        .notEmpty().withMessage("The title can't be empty"),

    check('body')
        .exists().withMessage("You gotta add a body")
        .notEmpty().withMessage("The body can't be empty"),

    check('user_id')
        .exists().withMessage("You gotta add a user_id")
        .notEmpty().withMessage("The user_id can't be empty"),

    check('date')
        .exists().withMessage("You gotta add a date")
        .notEmpty().withMessage("The date can't be empty"),

    check('image')
        .exists().withMessage("You gotta add a image")
        .notEmpty().withMessage("The image can't be empty"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];

export const validateUpdateNews = [
    check('title')
        .exists().withMessage("You gotta add a title")
        .notEmpty().withMessage("The title can't be empty"),

    check('body')
        .exists().withMessage("You gotta add a body")
        .notEmpty().withMessage("The body can't be empty"),

    check('user_id')
        .exists().withMessage("You gotta add a user_id")
        .notEmpty().withMessage("The user_id can't be empty"),

    check('date')
        .exists().withMessage("You gotta add a date")
        .notEmpty().withMessage("The date can't be empty"),

    check('image')
        .exists().withMessage("You gotta add a image")
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
