/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface MessageDocument extends CoreDocument {
    conversationId: string;
    sender: string;
    text: string;
}
export declare const MessageModel: import("mongoose").Model<MessageDocument, {}, {}>;
