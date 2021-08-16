"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const notice_service_1 = require("./notice.service");
const jwt_payload_dto_1 = require("../../../dtos/jwt-payload.dto");
class NoticeController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.NoticeSvc = new notice_service_1.NoticeService();
    }
    async sendNotice(req) {
        const { object, senderId, senderPic, senderUsername, receiverId } = req.body;
        const dto = await this.NoticeSvc.sendNotice(senderId, object, senderPic, senderUsername, receiverId);
        return this.formatResponse(dto, 201);
    }
    async getNotice(req) {
        const { id, page } = req.params;
        const dto = await this.NoticeSvc.getNotice(id, parseInt(page));
        return this.formatResponse(dto, 200);
    }
    async updateNotice(req) {
        const { noticeId } = req.params;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.NoticeSvc.updateNotice(noticeId, payload._id);
        return this.formatResponse(dto, 200);
    }
    async sendNoticePost(req) {
        const { object, senderId, senderPic, senderUsername, receiverId, postId } = req.body;
        const dto = await this.NoticeSvc.sendNoticePost(senderId, object, senderPic, senderUsername, receiverId, postId);
        return this.formatResponse(dto, 201);
    }
    async deleteNotice(req) {
        const { noticeId } = req.params;
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.NoticeSvc.deleteNotice(noticeId, payload._id);
        return this.formatResponse(dto, 200);
    }
}
exports.NoticeController = NoticeController;
//# sourceMappingURL=notice.controller.js.map