"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRoute = void 0;
const route_base_1 = require("../../../bases/route.base");
const notice_controller_1 = require("./notice.controller");
const express_1 = __importDefault(require("express"));
class NoticeRoute extends route_base_1.RouteBase {
    constructor() {
        super();
    }
    initial() {
        this.controller = new notice_controller_1.NoticeController();
        super.initial();
    }
    registerRoute() {
        this.router.get('/test', (req, res, next) => res.send('user test.'));
        this.router.route('/')
            .post(express_1.default.json(), this.responseHandler(this.controller.sendNotice));
        this.router.route('/:id/:page')
            .get(this.responseHandler(this.controller.getNotice));
        this.router.route('/post')
            .post(express_1.default.json(), this.responseHandler(this.controller.sendNoticePost));
        this.router.route('/update/:noticeId')
            .put(this.responseHandler(this.controller.updateNotice));
        this.router.route('/delete/:noticeId')
            .delete(this.responseHandler(this.controller.deleteNotice));
    }
}
exports.NoticeRoute = NoticeRoute;
//# sourceMappingURL=notice.routing.js.map