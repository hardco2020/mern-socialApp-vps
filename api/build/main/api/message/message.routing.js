"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const message_controller_1 = require("./message.controller");
const express_1 = __importDefault(require("express"));
class MessageRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new message_controller_1.MessageController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('user test.'));
        this.router.post('/testing', (req, res, next) => res.send('user test1234.'));
        this.router.route('/')
            .post(express_1.default.json(), this.responseHandler(this.controller.sendMessage));
        this.router.route('/:cvsId/:page')
            .get(this.responseHandler(this.controller.getMessage));
    }
}
exports.MessageRoute = MessageRoute;
//# sourceMappingURL=message.routing.js.map