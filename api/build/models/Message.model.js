"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, { timestamps: true });
exports.MessageModel = mongoose_1.model('Message', MessageSchema);
//# sourceMappingURL=Message.model.js.map