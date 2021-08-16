"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const conversation_service_1 = require("./conversation.service");
class ConversationController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.conversationSvc = new conversation_service_1.ConversationService();
    }
    async createConversation(req) {
        const { senderId, receiverId } = req.body;
        const dto = await this.conversationSvc.createConversation(senderId, receiverId);
        return this.formatResponse(dto, 201);
    }
    async getConversation(req) {
        const { userId } = req.params;
        const dto = await this.conversationSvc.getConversation(userId);
        return this.formatResponse(dto, 200);
    }
    async getConversationByTwoId(req) {
        const { firstUserId, secondUserId } = req.params;
        const dto = await this.conversationSvc.getConversationByTwoId(firstUserId, secondUserId);
        return this.formatResponse(dto, 200);
    }
}
exports.ConversationController = ConversationController;
//# sourceMappingURL=conversation.controller.js.map