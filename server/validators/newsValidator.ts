import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper';
import NewsModel from '../Models/NewsModel';

export const validateCreateNews = [
    check('title')
        .exists().withMessage("The title is required")
        .notEmpty().withMessage("The title can't be empty")
        .isLength({ min: 1, max: 200 }).withMessage("Title must be between 1 and 200 characters"),

    check('body')
        .exists().withMessage("The body is required")
        .notEmpty().withMessage("The body can't be empty")
        .isLength({ min: 1, max: 1000 }).withMessage("Body must be between 1 and 1000 characters"),


    check('date')
    .exists().withMessage("The date is required")
    .notEmpty().withMessage("The date can't be empty")
    .isISO8601().withMessage("La fecha debe estar en formato ISO8601"),

    check('image')
        .exists().withMessage("The image is required")
        .notEmpty().withMessage("The image can't be empty")
        .isURL().withMessage("Must be a valid URL"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];


export const validateUpdateNews = [
    check('title')
        .exists().withMessage("The title is required")
        .notEmpty().withMessage("The title can't be empty")
        .isLength({ min: 1, max: 200 }).withMessage("Title must be between 1 and 200 characters"),

    check('body')
        .exists().withMessage("The body is required")
        .notEmpty().withMessage("The body can't be empty")
        .isLength({ min: 1, max: 10000 }).withMessage("Body must be between 1 and 1000 characters"),



    check('date')
    .exists().withMessage("The date is required")
    .notEmpty().withMessage("The date can't be empty")
    .isISO8601().withMessage("La fecha debe estar en formato ISO8601"),


    check('image')
        .exists().withMessage("The image is required")
        .notEmpty().withMessage("The image can't be empty")
        .isURL().withMessage("Must be a valid URL"),

    check('id')
        .exists()
        .notEmpty()
        .withMessage('The id is required')
        .custom(async (id: any) => {
            const news = await NewsModel.findByPk(id);
            if (!news) {
                throw new Error("This article does not exist");
            }
            return true;
        }),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];


export const validateDeleteNews = [
    check('id')
        .exists()
        .notEmpty()
        .withMessage('The id is required')
        .custom(async (id: any) => {
            const news = await NewsModel.findByPk(id);
            if (!news) {
                throw new Error("This article does not exist");
            }
            return true;
        }),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];



