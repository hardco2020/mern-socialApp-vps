"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeService = void 0;
const notice_repository_1 = require("../../../repositories/notice.repository");
class NoticeService {
    constructor() {
        this.ntRepo = new notice_repository_1.NoticeRepository();
    }
    async sendNotice(senderId, object, senderPic, senderUsername, receiverId) {
        const newNotice = await this.ntRepo.sendNotice(senderId, object, senderPic, senderUsername, receiverId);
        return newNotice;
    }
    async getNotice(id, page) {
        const notice = await this.ntRepo.getNotice(id, page);
        return notice;
    }
    async updateNotice(noticeId, readId) {
        const notice = await this.ntRepo.updateNotice(noticeId, readId);
        return notice;
    }
    async sendNoticePost(senderId, object, senderPic, senderUsername, receiverId, postId) {
        const newNotice = await this.ntRepo.sendNoticePost(senderId, object, senderPic, senderUsername, receiverId, postId);
        return newNotice;
    }
    async deleteNotice(noticeId, readId) {
        const notice = await this.ntRepo.deleteNotice(noticeId, readId);
        return notice;
    }
}
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map