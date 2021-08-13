"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const message_service_1 = require("./message.service");
class MessageController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.messageSvc = new message_service_1.MessageService();
    }
    async sendMessage(req) {
        const newMessage = req.body;
        const dto = await this.messageSvc.sendMessage(newMessage);
        return this.formatResponse(dto, 201);
    }
    async getMessage(req) {
        const { cvsId, page } = req.params;
        const dto = await this.messageSvc.getMessage(cvsId, parseInt(page));
        return this.formatResponse(dto, 200);
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map