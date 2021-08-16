import { Request, Response, NextFunction } from 'express';
export declare abstract class PipeBase {
    abstract transform(): any[];
    protected validationHandler(req: Request, res: Response, next: NextFunction): void;
}
