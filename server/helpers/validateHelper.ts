import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateResult = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req); //validationResult la crea express-validator
    if (errors.isEmpty()) {
        next();
    } else {
        return res.status(422).json({ errors: errors.array() });
    }
};