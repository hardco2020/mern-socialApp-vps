"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const user_controller_1 = require("./user.controller");
const express_1 = __importDefault(require("express"));
class UserRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new user_controller_1.UserController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('user test.'));
        this.router.route('/')
            .put(express_1.default.json(), this.responseHandler(this.controller.updateUser))
            .get(this.responseHandler(this.controller.getUser));
        this.router.route('/friend/:id')
            .put(this.responseHandler(this.controller.friendUser));
        this.router.route('/unfriend/:id')
            .put(this.responseHandler(this.controller.unfriendUser));
        this.router.route('/pending/:receiverId')
            .post(this.responseHandler(this.controller.createPending));
        this.router.route('/updatePending/:senderId')
            .put(this.responseHandler(this.controller.updatePending));
        this.router.route('/pending/:receiverId')
            .get(this.responseHandler(this.controller.getPending));
        this.router.route('/pending/:receiverId')
            .delete(this.responseHandler(this.controller.deletePending));
        this.router.route('/friends/:id')
            .get(this.responseHandler(this.controller.getFriends));
        this.router.route('/search/:key')
            .get(this.responseHandler(this.controller.searchUsers));
        this.router.route('/recommend')
            .get(this.responseHandler(this.controller.recommendUsers));
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.routing.js.map