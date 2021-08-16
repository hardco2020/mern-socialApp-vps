"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeBase = void 0;
const express_validator_1 = require("express-validator");
const response_error_object_1 = require("../common/response/response-error.object");
class PipeBase {
    validationHandler(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            const arr = errors.array();
            throw new response_error_object_1.ResponseError(arr.map(err => err.msg), 422);
        }
        next();
    }
}
exports.PipeBase = PipeBase;
//# sourceMappingURL=pipe.base.js.map