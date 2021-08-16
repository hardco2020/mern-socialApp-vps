"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const conversation_repository_1 = require("../../../repositories/conversation.repository");
class ConversationService {
    constructor() {
        this.cvsRepo = new conversation_repository_1.ConversationRepository();
    }
    async createConversation(senderId, receiverId) {
        const newConversation = await this.cvsRepo.creatConversation(senderId, receiverId);
        return newConversation;
    }
    async getConversation(userId) {
        const getConversation = await this.cvsRepo.getConversation(userId);
        return getConversation;
    }
    async getConversationByTwoId(firstId, secondId) {
        const getConversationByTwoId = await this.cvsRepo.getConversationByTwoId(firstId, secondId);
        return getConversationByTwoId;
    }
}
exports.ConversationService = ConversationService;
//# sourceMappingURL=conversation.service.js.map