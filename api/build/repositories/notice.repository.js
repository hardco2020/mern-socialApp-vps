"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRepository = void 0;
const notice_model_1 = require("../models/notice.model");
class NoticeRepository {
    async sendNotice(senderId, object, senderPic, senderUsername, receiverId) {
        const newNotice = new notice_model_1.NoticeModel({
            object: object,
            read: [],
            senderId: senderId,
            senderPic: senderPic,
            senderUsername,
            receiverId
        });
        const saveNotice = await newNotice.save();
        return saveNotice;
    }
    async getNotice(id, page) {
        const notices = await notice_model_1.NoticeModel.find({ "receiverId": id }).sort([['createdAt', -1]]).limit(10).skip(page * 10);
        return notices;
    }
    async updateNotice(noticeId, readId) {
<<<<<<< HEAD
        const notice = await notice_model_1.NoticeModel.findById(noticeId);
        const other = await notice_model_1.NoticeModel.updateMany({ senderId: notice === null || notice === void 0 ? void 0 : notice.senderId, receiverId: notice === null || notice === void 0 ? void 0 : notice.receiverId, object: notice === null || notice === void 0 ? void 0 : notice.object }, { $addToSet: { read: readId } });
=======
        const notice = await notice_model_1.NoticeModel.findByIdAndUpdate(noticeId, { $addToSet: { read: readId } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
        return notice;
    }
    async sendNoticePost(senderId, object, senderPic, senderUsername, receiverId, postId) {
        const newNotice = new notice_model_1.NoticeModel({
            object: object,
            read: [],
            senderId: senderId,
            senderPic: senderPic,
            senderUsername,
            receiverId,
            postId
        });
        const saveNotice = await newNotice.save();
        return saveNotice;
    }
    async deleteNotice(noticeId, readId) {
        const notice = await notice_model_1.NoticeModel.findByIdAndDelete(noticeId);
        return notice;
    }
}
exports.NoticeRepository = NoticeRepository;
//# sourceMappingURL=notice.repository.js.map