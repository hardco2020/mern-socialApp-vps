import { ControllerBase } from '../../../bases/controller.base';
import { ResponseObject } from '../../../common/response/response.object';
import { Request } from 'express';
import { LocalAuthDocument } from '../../../models/local-auth.model';
import { PendingDocument } from '../../../models/pending.model';
export declare class UserController extends ControllerBase {
    private readonly userSvc;
    updateUser(req: Request): Promise<ResponseObject<LocalAuthDocument>>;
    getUser(req: Request): Promise<ResponseObject<LocalAuthDocument>>;
    friendUser(req: Request): Promise<ResponseObject<string>>;
    unfriendUser(req: Request): Promise<ResponseObject<string>>;
    createPending(req: Request): Promise<ResponseObject<PendingDocument>>;
    updatePending(req: Request): Promise<ResponseObject<PendingDocument>>;
    getPending(req: Request): Promise<ResponseObject<PendingDocument>>;
    deletePending(req: Request): Promise<ResponseObject<PendingDocument>>;
    getFriends(req: Request): Promise<ResponseObject<any>>;
    searchUsers(req: Request): Promise<ResponseObject<any>>;
    recommendUsers(req: Request): Promise<ResponseObject<any>>;
}
