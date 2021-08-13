"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationModel = void 0;
const mongoose_1 = require("mongoose");
const ConversationSchema = new mongoose_1.Schema({
    members: {
        type: Array,
    }
}, { timestamps: true });
exports.ConversationModel = mongoose_1.model('Conversation', ConversationSchema);
//# sourceMappingURL=conversation.model.js.map