"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const message_repository_1 = require("../../../repositories/message.repository");
class MessageService {
    constructor() {
        this.msRepo = new message_repository_1.MessageRepository();
    }
    async sendMessage(message) {
        const newMessage = await this.msRepo.sendMessage(message);
        return newMessage;
    }
    async getMessage(conversationId, page) {
        const messages = await this.msRepo.getMessage(conversationId, page);
        return messages;
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map