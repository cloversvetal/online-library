import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: {statusCode?: number; message?: string; stack?: string},
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Errore interno al server',
        stack: err.stack
    });
};

export const methodLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};