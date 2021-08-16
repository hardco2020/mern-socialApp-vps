"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const local_auth_service_1 = require("./local-auth.service");
const passport_1 = __importDefault(require("passport"));
class LocalAuthController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.localAuthSvc = new local_auth_service_1.LocalAuthService();
    }
    async signup(req) {
        const { username, password, email } = req.body;
        const user = await this.localAuthSvc.addUser(username, password, email);
        const token = this.localAuthSvc.generateJWT(user);
        return this.formatResponse(token, 201);
    }
    async signin(req, res, next) {
        passport_1.default.use(this.localAuthSvc.Strategy);
        const token = await this.localAuthSvc.authenticate(req, res, next);
        return this.formatResponse(token, 200);
    }
}
exports.LocalAuthController = LocalAuthController;
//# sourceMappingURL=local-auth.controller.js.map