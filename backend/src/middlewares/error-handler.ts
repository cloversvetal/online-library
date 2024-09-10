import { Request, Response, NextFunction } from "express";

export const errorHandler = (res: Response, error: any) => {
    console.error("Error details params:", error.params);
    console.error("Error details query:", error.query);
    console.error("Error details body:", error.body);

  
    if (error.name === 'ValidationError') {
      res.status(400).json({ 
        error: 'Validation failed', 
        details: error.errors 
      });
    } else {
      const statusCode = error.statusCode || 500;
      const message = error.message || 'An unexpected error occurred';
      res.status(statusCode).json({ error: message });
    }
};

export const methodLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};