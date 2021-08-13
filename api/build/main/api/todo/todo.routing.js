"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const todo_controller_1 = require("./todo.controller");
const express_1 = __importDefault(require("express"));
class TodoRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new todo_controller_1.TodoController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('todo test.'));
        this.router.route('/')
            .get(this.responseHandler(this.controller.getTodos))
            .post(express_1.default.json(), this.responseHandler(this.controller.addTodo));
        this.router.route('/:id')
            .get(this.responseHandler(this.controller.getTodo))
            .delete(this.responseHandler(this.controller.removeTodo));
        this.router.patch('/:id/completed', express_1.default.json(), this.responseHandler(this.controller.completedTodo));
    }
}
exports.TodoRoute = TodoRoute;
//# sourceMappingURL=todo.routing.js.map