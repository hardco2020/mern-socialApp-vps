"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError extends Error {
    constructor(message = '', status = 500) {
        super(message);
        this.status = status;
    }
}
exports.ResponseError = ResponseError;
//# sourceMappingURL=response-error.object.js.map