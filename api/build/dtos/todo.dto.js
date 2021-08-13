"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTodoDTO = void 0;
const dto_base_1 = require("../bases/dto.base");
class ResponseTodoDTO extends dto_base_1.ResponseDTOBase {
    constructor(doc) {
        super(doc);
        this._id = doc._id;
        this.content = doc.content;
        this.completed = doc.completed;
        this.date = doc.date;
        this.time = doc.time;
    }
}
exports.ResponseTodoDTO = ResponseTodoDTO;
//# sourceMappingURL=todo.dto.js.map