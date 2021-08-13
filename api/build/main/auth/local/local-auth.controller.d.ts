import { Request, Response, NextFunction } from 'express';
import { ControllerBase } from '../../../bases/controller.base';
import { LocalAuthService } from './local-auth.service';
import { ResponseObject } from '../../../common/response/response.object';
export declare class LocalAuthController extends ControllerBase {
    protected readonly localAuthSvc: LocalAuthService;
    signup(req: Request): Promise<ResponseObject<string>>;
    signin(req: Request, res: Response, next: NextFunction): Promise<ResponseObject<FunctionStringCallback>>;
}
