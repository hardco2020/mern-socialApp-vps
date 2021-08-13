export declare class ConversationService {
    private readonly cvsRepo;
    createConversation(senderId: string, receiverId: string): Promise<import("models/conversation.model").ConversationDocument>;
    getConversation(userId: string): Promise<import("models/conversation.model").ConversationDocument[]>;
    getConversationByTwoId(firstId: string, secondId: string): Promise<import("models/conversation.model").ConversationDocument | null>;
}
