"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const local_auth_controller_1 = require("./local-auth.controller");
const express_1 = __importDefault(require("express"));
const local_auth_pipe_1 = require("./local-auth.pipe");
class LocalAuthRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new local_auth_controller_1.LocalAuthController();
        super.initial();
    }
    registerRoute() {
<<<<<<< HEAD
        this.router.get('/test', (req, res, next) => res.send('user test.'));
=======
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
        this.router.post('/signup', express_1.default.json(), this.usePipe(local_auth_pipe_1.LocalAuthSignupPipe), this.responseHandler(this.controller.signup));
        this.router.post('/signin', express_1.default.json(), this.responseHandler(this.controller.signin));
    }
}
exports.LocalAuthRoute = LocalAuthRoute;
//# sourceMappingURL=local-auth.routing.js.map