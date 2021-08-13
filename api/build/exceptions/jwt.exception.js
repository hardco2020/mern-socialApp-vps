"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTException = void 0;
const express_jwt_1 = require("express-jwt");
const response_object_1 = require("../common/response/response.object");
const JWTException = (err, req, res, next) => {
    if (err instanceof express_jwt_1.UnauthorizedError) {
        err = new response_object_1.ResponseObject({ status: err.status, data: err.message });
    }
    next(err);
};
exports.JWTException = JWTException;
//# sourceMappingURL=jwt.exception.js.map