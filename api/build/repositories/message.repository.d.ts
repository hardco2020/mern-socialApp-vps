import { Request } from "express";
import { MessageDocument } from "../models/Message.model";
export declare class MessageRepository {
    sendMessage(message: Request): Promise<MessageDocument>;
    getMessage(conversationId: string, page: number): Promise<MessageDocument[]>;
}
