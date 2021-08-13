import { Request } from "express";
export declare class MessageService {
    private readonly msRepo;
    sendMessage(message: Request): Promise<import("../../../models/Message.model").MessageDocument>;
    getMessage(conversationId: string, page: number): Promise<import("../../../models/Message.model").MessageDocument[]>;
}
