"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const Message_model_1 = require("../models/Message.model");
class MessageRepository {
    async sendMessage(message) {
        const newMessage = new Message_model_1.MessageModel(message);
        const savedMessage = await newMessage.save();
        return savedMessage;
    }
    async getMessage(conversationId, page) {
        const messages = await Message_model_1.MessageModel.find({
            conversationId: conversationId
        });
        return messages;
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=message.repository.js.map