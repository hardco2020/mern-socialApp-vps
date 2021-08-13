/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface NoticeDocument extends CoreDocument {
    object: string;
    read: string[];
    senderId: string;
    senderPic: string;
    senderUsername: string;
    receiverId: string;
    postId: string;
}
export declare const NoticeModel: import("mongoose").Model<NoticeDocument, {}, {}>;
