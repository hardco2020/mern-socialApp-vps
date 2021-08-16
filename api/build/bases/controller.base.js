"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerBase = void 0;
const response_object_1 = require("../common/response/response.object");
class ControllerBase {
    formatResponse(data, status = 500) {
        const options = { status };
        status >= 400
            ? options.message = data
            : options.data = data;
        const responseObject = new response_object_1.ResponseObject(options);
        return responseObject;
    }
}
exports.ControllerBase = ControllerBase;
//# sourceMappingURL=controller.base.js.map