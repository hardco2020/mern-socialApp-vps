"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseErrorException = void 0;
const response_object_1 = require("../common/response/response.object");
const response_error_object_1 = require("../common/response/response-error.object");
const ResponseErrorException = (err, req, res, next) => {
    if (err instanceof response_error_object_1.ResponseError) {
        err = new response_object_1.ResponseObject({ status: err.status, message: err.message });
    }
    next(err);
};
exports.ResponseErrorException = ResponseErrorException;
//# sourceMappingURL=response-error.exception.js.map