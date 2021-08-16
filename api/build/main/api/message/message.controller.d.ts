import { ControllerBase } from '../../../bases/controller.base';
import { ResponseObject } from 'common/response/response.object';
import { Request } from 'express';
import { MessageDocument } from 'models/Message.model';
export declare class MessageController extends ControllerBase {
    private readonly messageSvc;
    sendMessage(req: Request): Promise<ResponseObject<MessageDocument>>;
    getMessage(req: Request): Promise<ResponseObject<MessageDocument[]>>;
}
