"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingnModel = void 0;
const mongoose_1 = require("mongoose");
const PendingSchema = new mongoose_1.Schema({
    members: {
        type: Array,
        require
    },
    senderPending: {
        type: Boolean,
        require
    },
    receiverPending: {
        type: Boolean,
        require
    }
}, { timestamps: true });
exports.PendingnModel = mongoose_1.model('Pending', PendingSchema);
//# sourceMappingURL=pending.model.js.map