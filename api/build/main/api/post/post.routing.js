"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const post_controller_1 = require("./post.controller");
const express_1 = __importDefault(require("express"));
class PostRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new post_controller_1.PostController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('user test.'));
        this.router.route('/')
            .post(express_1.default.json(), this.responseHandler(this.controller.createPost));
        this.router.route('/:id')
            .put(express_1.default.json(), this.responseHandler(this.controller.updatePost))
            .get(this.responseHandler(this.controller.getPost))
            .delete(this.responseHandler(this.controller.deletePost));
        this.router.route('/:id/like')
            .put(this.responseHandler(this.controller.likePost));
        this.router.route('/timeline/all/:page')
            .get(this.responseHandler(this.controller.timelinePost));
        this.router.route('/profile/:username/:page')
            .get(this.responseHandler(this.controller.getAllPost));
        this.router.route('/comment/:postId')
            .post(express_1.default.json(), this.responseHandler(this.controller.sendComment));
    }
}
exports.PostRoute = PostRoute;
//# sourceMappingURL=post.routing.js.map