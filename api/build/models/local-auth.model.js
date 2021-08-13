"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthModel = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../validators");
const LocalAuthSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12
    },
    password: {
        salt: {
            type: String,
            required: true
        },
        hash: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validators_1.EmailValidator
        }
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    },
    friends: {
        type: Array
    }
}, {
    timestamps: true
});
exports.LocalAuthModel = mongoose_1.model('User', LocalAuthSchema);
//# sourceMappingURL=local-auth.model.js.map