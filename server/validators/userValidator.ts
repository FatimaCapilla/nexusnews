import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper';
import UserModel from '../Models/UserModel';

// Validation schema for user registration
export const validateRegisterUser = [
    // Check for email field
    check('email')
        .exists().withMessage("Email is required")
        .notEmpty().withMessage("Email cannot be empty")
        .isEmail().withMessage("Invalid email format")
        .custom(async (email: string) => {
            const existingUser = await UserModel.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("User with this email already exists");
            }
            return true;
        }),

    // Check for password field
    check('password')
        .exists().withMessage("Password is required")
        .notEmpty().withMessage("Password cannot be empty")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];

// Validation schema for user login
export const validateLoginUser = [
    // Check for email field
    check('email')
        .exists().withMessage("Email is required")
        .notEmpty().withMessage("Email cannot be empty")
        .isEmail().withMessage("Invalid email format"),

    // Check for password field
    check('password')
        .exists().withMessage("Password is required")
        .notEmpty().withMessage("Password cannot be empty"),

    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];
