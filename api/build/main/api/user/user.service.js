"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const local_auth_repository_1 = require("../../../repositories/local-auth.repository");
class UserService {
    constructor() {
        this.localAuthRepo = new local_auth_repository_1.LocalAuthRepository();
    }
    async updateUser(payload, body) {
        const user = await this.localAuthRepo.updateUser(payload._id, body);
        return user;
    }
    async getUserbyId(id) {
        const user = await this.localAuthRepo.getUserbyId(id);
        return user;
    }
    async getUserbyUsername(user_name) {
        const user = await this.localAuthRepo.getUserbyUsername(user_name);
        return user;
    }
    async createPending(senderId, receiverId) {
        const pending = await this.localAuthRepo.createPending(senderId, receiverId);
        return pending;
    }
    async updatePending(senderId, receiverId) {
        const pending = await this.localAuthRepo.updatePending(senderId, receiverId);
        return pending;
    }
    async getPending(senderId, receiverId) {
        const pending = await this.localAuthRepo.getPending(senderId, receiverId);
        return pending;
    }
    async deletePending(senderId, receiverId) {
        const pending = await this.localAuthRepo.deletePending(senderId, receiverId);
        return pending;
    }
    async friendUser(id, friendId) {
        let user = "";
        const isFriend = await this.localAuthRepo.getUserbyId(id);
        console.log(isFriend);
        if (isFriend.friends.includes(friendId)) {
            const error = new Error('您和此人已經是朋友了！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        else if (id === friendId) {
            const error = new Error('自己不能和自己當朋友！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        else {
            await this.localAuthRepo.friendUser(id, friendId);
            user = "您已經成功和" + id + "成為朋友";
        }
        return user;
    }
    async unfriendUser(id, friendId) {
        let user = "";
        const isFriend = await this.localAuthRepo.getUserbyId(id);
        console.log(isFriend);
        if (!isFriend.friends.includes(friendId)) {
            const error = new Error('您和此人不是朋友！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        else if (id === friendId) {
            const error = new Error('自己不能和自己取消朋友！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        else {
            await this.localAuthRepo.unfriendUser(id, friendId);
            user = "您已經成功和" + id + "取消朋友";
        }
        return user;
    }
    async getFriends(user_id) {
        const user = await this.localAuthRepo.getUserbyId(user_id);
        const friends = await Promise.all(user.friends.map((friendsId) => {
            return this.localAuthRepo.getUserbyId(friendsId);
        }));
        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend;
            friendList.push({ _id, username, profilePicture });
        });
        return friendList;
    }
    async searchUsers(key) {
        const users = this.localAuthRepo.searchUsers(key);
        return users;
    }
    async recommendUsers(user_id) {
        const users = this.localAuthRepo.recommendUsers(user_id);
        return users;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map