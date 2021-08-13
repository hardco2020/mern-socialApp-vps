"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const conversation_controller_1 = require("./conversation.controller");
const express_1 = __importDefault(require("express"));
class ConversationRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new conversation_controller_1.ConversationController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('user test.'));
        this.router.route('/')
            .post(express_1.default.json(), this.responseHandler(this.controller.createConversation));
        this.router.route('/:userId')
            .get(this.responseHandler(this.controller.getConversation));
        this.router.route('/find/:firstUserId/:secondUserId')
            .get(this.responseHandler(this.controller.getConversationByTwoId));
    }
}
exports.ConversationRoute = ConversationRoute;
//# sourceMappingURL=conversation.routing.js.map