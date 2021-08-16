"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const jwt_exception_1 = require("./exceptions/jwt.exception");
const default_exception_1 = require("./exceptions/default.exception");
const response_error_exception_1 = require("./exceptions/response-error.exception");
const bootstrap = () => {
    const app = new app_1.App();
    app.setException(response_error_exception_1.ResponseErrorException);
    app.setException(jwt_exception_1.JWTException);
    app.setException(default_exception_1.DefaultException);
    app.launchDatabase();
    app.bootstrap();
};
bootstrap();
//# sourceMappingURL=index.js.map