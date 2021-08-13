import { ControllerBase } from '../../../bases/controller.base';
import { Request } from 'express';
import { ResponseObject } from 'common/response/response.object';
import { ConversationDocument } from 'models/conversation.model';
export declare class ConversationController extends ControllerBase {
    private readonly conversationSvc;
    createConversation(req: Request): Promise<ResponseObject<ConversationDocument>>;
    getConversation(req: Request): Promise<ResponseObject<ConversationDocument[]>>;
    getConversationByTwoId(req: Request): Promise<ResponseObject<ConversationDocument>>;
}
