"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const jwt_payload_dto_1 = require("../../../dtos/jwt-payload.dto");
const controller_base_1 = require("../../../bases/controller.base");
const todo_service_1 = require("./todo.service");
class TodoController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.todoSvc = new todo_service_1.TodoService();
    }
    async getTodos(req) {
        const { limit, skip } = req.query;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dtos = await this.todoSvc.getTodos(payload, Number(limit), Number(skip));
        return this.formatResponse(dtos, 200);
    }
    async getTodo(req) {
        const { id } = req.params;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.todoSvc.getTodo(payload, id);
        if (!dto) {
            return this.formatResponse('Not found.', 404);
        }
        return this.formatResponse(dto, 200);
    }
    async addTodo(req) {
        const { content, time, date } = req.body;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.todoSvc.addTodo(payload, content, time, date);
        return this.formatResponse(dto, 201);
    }
    async completedTodo(req) {
        const { id } = req.params;
        const { completed } = req.body;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.todoSvc.completedTodo(payload, id, completed);
        if (!dto) {
            return this.formatResponse('Not found.', 404);
        }
        return this.formatResponse(dto, 200);
    }
    async removeTodo(req) {
        const { id } = req.params;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        console.log(payload);
        const dto = await this.todoSvc.removeTodo(payload, id);
        if (!dto) {
            return this.formatResponse('Not found.', 404);
        }
        return this.formatResponse(null, 204);
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map