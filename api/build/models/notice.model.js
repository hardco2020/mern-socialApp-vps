"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeModel = void 0;
const mongoose_1 = require("mongoose");
const NoticeSchema = new mongoose_1.Schema({
    object: {
        type: String,
        require
    },
    read: {
        type: Array,
        require
    },
    senderId: {
        type: String,
        require
    },
    senderPic: {
        type: String,
        require
    },
    senderUsername: {
        type: String,
        require
    },
    receiverId: {
        type: Array,
    },
    postId: {
        type: String,
    }
}, { timestamps: true });
exports.NoticeModel = mongoose_1.model('Notice', NoticeSchema);
//# sourceMappingURL=notice.model.js.map