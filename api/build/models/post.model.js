"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    }
}, { timestamps: true });
;
exports.PostModel = mongoose_1.model('Post', PostSchema);
//# sourceMappingURL=post.model.js.map