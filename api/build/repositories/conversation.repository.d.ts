import { ConversationDocument } from "../models/conversation.model";
export declare class ConversationRepository {
    creatConversation(senderId: string, receiverId: string): Promise<ConversationDocument>;
    getConversation(userId: string): Promise<ConversationDocument[]>;
    getConversationByTwoId(firstId: string, secondId: string): Promise<ConversationDocument | null>;
}
