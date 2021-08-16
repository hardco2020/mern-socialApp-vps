"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const todo_model_1 = require("../models/todo.model");
class TodoRepository {
    async addTodo(userId, content, time, date) {
        const todo = new todo_model_1.TodoModel({ content, completed: false, time, date, owner: userId });
        const document = await todo.save();
        return document;
    }
    async getTodo(userId, id) {
        const todo = await todo_model_1.TodoModel.findOne({ _id: id, owner: userId });
        return todo;
    }
    async getTodos(userId, limit, skip) {
        const todos = await todo_model_1.TodoModel.find({ owner: userId }).skip(skip).limit(limit);
        return todos;
    }
    async completedTodo(userId, id, completed) {
        const todo = await todo_model_1.TodoModel.findOneAndUpdate({ _id: id, owner: userId }, { completed }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return todo;
    }
    async removeTodo(userId, id) {
        const todo = await todo_model_1.TodoModel.findOneAndRemove({ _id: id, owner: userId });
        return todo;
    }
}
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map