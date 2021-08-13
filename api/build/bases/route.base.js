"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteBase = void 0;
const express_1 = __importDefault(require("express"));
class RouteBase {
    constructor() {
        this.router = express_1.default.Router();
        this.initial();
    }
    initial() {
        this.registerRoute();
    }
    usePipe(prototype) {
        const pipe = new prototype();
        return pipe.transform();
    }
    responseHandler(method, controller = this.controller) {
        return (req, res, next) => {
            method.call(this.controller, req, res, next)
                .then(obj => res.status(obj.status).json(obj))
                .catch((err) => next(controller.formatResponse(err.message, err.status || 500)));
        };
    }
}
exports.RouteBase = RouteBase;
//# sourceMappingURL=route.base.js.map