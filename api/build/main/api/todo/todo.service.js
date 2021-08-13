"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_repository_1 = require("../../../repositories/todo.repository");
const todo_dto_1 = require("../../../dtos/todo.dto");
class TodoService {
    constructor() {
        this.todoRepo = new todo_repository_1.TodoRepository();
    }
    async getTodos(payload, limit = 30, skip = 0) {
        const todos = await this.todoRepo.getTodos(payload._id, Math.min(limit, 100), skip);
        const dtos = todos.map(todo => new todo_dto_1.ResponseTodoDTO(todo));
        return dtos;
    }
    async getTodo(payload, id) {
        const todo = await this.todoRepo.getTodo(payload._id, id);
        const dto = todo ? new todo_dto_1.ResponseTodoDTO(todo) : null;
        return dto;
    }
    async addTodo(payload, content, time, date) {
        const document = await this.todoRepo.addTodo(payload._id, content, time, date);
        const dto = new todo_dto_1.ResponseTodoDTO(document);
        return dto;
    }
    async completedTodo(payload, id, completed) {
        const todo = await this.todoRepo.completedTodo(payload._id, id, completed);
        const dto = todo ? new todo_dto_1.ResponseTodoDTO(todo) : null;
        return dto;
    }
    async removeTodo(payload, id) {
        const todo = await this.todoRepo.removeTodo(payload._id, id);
        const dto = todo ? new todo_dto_1.ResponseTodoDTO(todo) : null;
        return dto;
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map