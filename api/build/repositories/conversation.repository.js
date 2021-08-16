"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRepository = void 0;
const conversation_model_1 = require("../models/conversation.model");
class ConversationRepository {
    async creatConversation(senderId, receiverId) {
        const newConversation = new conversation_model_1.ConversationModel({
            members: [senderId, receiverId],
        });
        const savedConversation = await newConversation.save();
        return savedConversation;
    }
    async getConversation(userId) {
        const conversation = await conversation_model_1.ConversationModel.find({
            members: { $in: [userId] }
        });
        return conversation;
    }
    async getConversationByTwoId(firstId, secondId) {
        const conversation = await conversation_model_1.ConversationModel.findOne({
            members: { $all: [firstId, secondId] }
        });
        return conversation;
    }
}
exports.ConversationRepository = ConversationRepository;
//# sourceMappingURL=conversation.repository.js.map