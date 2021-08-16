import { Request, Response, NextFunction } from 'express';
import { ControllerBase } from './controller.base';
import { ResponseObject } from '../common/response/response.object';
export declare abstract class RouteBase {
    router: import("express-serve-static-core").Router;
    protected controller: ControllerBase;
    constructor();
    protected initial(): void;
    protected usePipe(prototype: any): any[];
    protected abstract registerRoute(): void;
    protected responseHandler(method: (req: Request, res: Response, next: NextFunction) => Promise<ResponseObject<any>>, controller?: ControllerBase): (req: Request, res: Response, next: NextFunction) => void;
}
