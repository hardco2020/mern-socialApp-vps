/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface ConversationDocument extends CoreDocument {
    members: string[];
}
export declare const ConversationModel: import("mongoose").Model<ConversationDocument, {}, {}>;
