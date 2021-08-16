"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthRepository = void 0;
const crypto_1 = __importDefault(require("crypto"));
const local_auth_model_1 = require("../models/local-auth.model");
const pending_model_1 = require("../models/pending.model");
class LocalAuthRepository {
    hashPassword(password, salt = crypto_1.default.randomBytes(16).toString('hex')) {
        const hash = crypto_1.default.pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
        return { salt, hash };
    }
    async addUser(username, password, email) {
        const { salt, hash } = this.hashPassword(password);
        const user = new local_auth_model_1.LocalAuthModel({
            username,
            password: { salt, hash },
            email
        });
        console.log("123");
        const document = await user.save();
        return document;
    }
    async getUser(options) {
        console.log(options);
        const params = Object.keys(options.data)
            .filter(key => !!options.data[key])
            .map(key => {
            return { [key]: options.data[key] };
        });
        console.log("看一下驗證get", params);
        const getCondition = () => {
            if (params.length > 1) {
                return {
                    $or: params
                };
            }
            return params[0];
        };
        const user = await local_auth_model_1.LocalAuthModel.findOne(getCondition());
        return user;
    }
    async updateUser(userId, body) {
        console.log(body);
        const user = await local_auth_model_1.LocalAuthModel.findOneAndUpdate({ _id: userId }, { $set: body }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return user;
    }
    async getUserbyId(id) {
        const user = await local_auth_model_1.LocalAuthModel.findById(id);
        const _a = user._doc, { password, updatedAt } = _a, other = __rest(_a, ["password", "updatedAt"]);
        return other;
    }
    async getUserbyUsername(user_name) {
        const user = await local_auth_model_1.LocalAuthModel.findOne({ username: user_name });
        if (!user) {
            console.log("找不到使用者");
            return user;
        }
        else {
            const _a = user._doc, { password, updatedAt } = _a, other = __rest(_a, ["password", "updatedAt"]);
            console.log(other);
            return other;
        }
    }
    async getUserbyEmail(email) {
        const user = await local_auth_model_1.LocalAuthModel.findOne({ email: email });
        if (!user) {
            console.log("找不到使用者");
            return user;
        }
        else {
            const _a = user._doc, { password, updatedAt } = _a, other = __rest(_a, ["password", "updatedAt"]);
            console.log(other);
            return other;
        }
    }
    async unfriendUser(id, friendId) {
        const user = await local_auth_model_1.LocalAuthModel.findOneAndUpdate({ _id: id }, { $pull: { friends: friendId } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        const followUser = await local_auth_model_1.LocalAuthModel.findOneAndUpdate({ _id: friendId }, { $pull: { friends: id } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return user;
    }
    async friendUser(id, friendId) {
        const user = await local_auth_model_1.LocalAuthModel.findOneAndUpdate({ _id: id }, { $push: { friends: friendId } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        const followUser = await local_auth_model_1.LocalAuthModel.findOneAndUpdate({ _id: friendId }, { $push: { friends: id } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return user;
    }
    async createPending(senderId, receiverId) {
        console.log(senderId, receiverId);
        const newPending = new pending_model_1.PendingnModel({
            members: [senderId, receiverId],
            senderPending: true,
            receiverPending: false
        });
        const savedPending = await newPending.save();
        return savedPending;
    }
    async updatePending(senderId, receiverId) {
        const pending = await pending_model_1.PendingnModel.findOneAndUpdate({ members: { $all: [senderId, receiverId] } }, { receiverPending: true }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return pending;
    }
    async getPending(senderId, receiverId) {
        const pending = await pending_model_1.PendingnModel.findOne({ members: { $all: [senderId, receiverId] } });
        return pending;
    }
    async deletePending(senderId, receiverId) {
        const pending = await pending_model_1.PendingnModel.findOneAndDelete({ members: { $all: [senderId, receiverId] } });
        return pending;
    }
    async searchUsers(key) {
        const all = await local_auth_model_1.LocalAuthModel.find({});
        console.log(all);
        const results = all.filter(user => user.username.toLowerCase().includes(key.toLowerCase()));
        console.log(results);
        return results;
    }
    async recommendUsers(id) {
        const currentUser = await local_auth_model_1.LocalAuthModel.findById(id);
        const users = await local_auth_model_1.LocalAuthModel.find({ '_id': { "$nin": [id, ...currentUser.followings] } }).sort([['createdAt', -1]]).limit(10);
        return users;
    }
}
exports.LocalAuthRepository = LocalAuthRepository;
//# sourceMappingURL=local-auth.repository.js.map