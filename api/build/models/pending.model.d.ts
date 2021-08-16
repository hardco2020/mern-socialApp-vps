/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface PendingDocument extends CoreDocument {
    members: string[];
    senderPending: boolean;
    receiverPending: boolean;
}
export declare const PendingnModel: import("mongoose").Model<PendingDocument, {}, {}>;
