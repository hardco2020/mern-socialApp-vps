"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});
;
exports.TodoModel = mongoose_1.model('Todo', TodoSchema);
//# sourceMappingURL=todo.model.js.map