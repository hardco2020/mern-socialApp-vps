"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoute = void 0;
const route_base_1 = require("../../bases/route.base");
const todo_routing_1 = require("./todo/todo.routing");
const user_routing_1 = require("./user/user.routing");
const post_routing_1 = require("./post/post.routing");
const notice_routing_1 = require("./notice/notice.routing");
const conversation_routing_1 = require("./conversation/conversation.routing");
const message_routing_1 = require("./message/message.routing");
const express_jwt_1 = __importDefault(require("express-jwt"));
class ApiRoute extends route_base_1.RouteBase {
    constructor() {
        super();
        this.noticeRoute = new notice_routing_1.NoticeRoute();
        this.todoRoute = new todo_routing_1.TodoRoute();
        this.userRoute = new user_routing_1.UserRoute();
        this.postRoute = new post_routing_1.PostRoute();
        this.conversationRoute = new conversation_routing_1.ConversationRoute();
        this.messageRoute = new message_routing_1.MessageRoute();
    }
    initial() {
        this.noticeRoute = new notice_routing_1.NoticeRoute();
        this.todoRoute = new todo_routing_1.TodoRoute();
        this.userRoute = new user_routing_1.UserRoute();
        this.postRoute = new post_routing_1.PostRoute();
        this.conversationRoute = new conversation_routing_1.ConversationRoute();
        this.messageRoute = new message_routing_1.MessageRoute();
        super.initial();
    }
    registerRoute() {
        this.router.use(express_jwt_1.default({
            secret: process.env.JWT_SIGN,
            userProperty: 'payload',
            algorithms: ['HS256']
        }));
        this.router.use('/notice', this.noticeRoute.router);
        this.router.use('/todos', this.todoRoute.router);
        this.router.use('/users', this.userRoute.router);
        this.router.use('/posts', this.postRoute.router);
        this.router.use('/messages', this.messageRoute.router);
        this.router.use('/conversations', this.conversationRoute.router);
    }
}
exports.ApiRoute = ApiRoute;
//# sourceMappingURL=api.routing.js.map