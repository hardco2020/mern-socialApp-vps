"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseObject = void 0;
class ResponseObject {
    constructor(options = {}) {
        this.status = 500;
        this.message = '';
        this.data = null;
        this.status = options.status || this.status;
        this.message = options.message || this.message;
        this.data = options.data || this.data;
    }
}
exports.ResponseObject = ResponseObject;
//# sourceMappingURL=response.object.js.map