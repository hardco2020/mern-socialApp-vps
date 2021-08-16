"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const post_model_1 = require("../models/post.model");
const local_auth_model_1 = require("../models/local-auth.model");
class PostRepository {
    async createPost(id, body) {
        console.log(body);
        const { desc, img } = body;
        const post = new post_model_1.PostModel({
            userId: id,
            desc,
            img
        });
        console.log(post);
        const document = await post.save();
        return document;
    }
    async getPost(id) {
        const post = await post_model_1.PostModel.findById(id);
        return post;
    }
    async updatePost(id, body) {
        const post = await post_model_1.PostModel.findOneAndUpdate({ _id: id }, { $set: body }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return post;
    }
    async deletePost(id) {
        const post = await post_model_1.PostModel.findOneAndDelete({ _id: id });
        return post;
    }
    async likePost(payload_id, post_id) {
        const post = await post_model_1.PostModel.findOneAndUpdate({ _id: post_id }, { $push: { likes: payload_id } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return post;
    }
    async dislikePost(payload_id, post_id) {
        const post = await post_model_1.PostModel.findOneAndUpdate({ _id: post_id }, { $pull: { likes: payload_id } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return post;
    }
    async timelinePost(user_id, page) {
        const currentUser = await local_auth_model_1.LocalAuthModel.findById(user_id);
        console.log(currentUser);
        const userPosts = await post_model_1.PostModel.find({ userId: user_id });
        const friendPosts = await post_model_1.PostModel.find({ userId: { $in: [user_id, ...currentUser.friends] } }).sort([['createdAt', -1]]).limit(15).skip(page * 15);
        return friendPosts;
    }
    async getUserbyUsername(user_name) {
        console.log(user_name);
        const user = await local_auth_model_1.LocalAuthModel.findOne({ username: user_name });
        console.log(user);
        return user;
    }
    async getAllPost(user_id, page) {
        const posts = await post_model_1.PostModel.find({ userId: user_id }).sort([['createdAt', -1]]).limit(15).skip(page * 15);
        return posts;
    }
    async commentPost(user_name, user_pic, comment, date, postId) {
        const Comment = {
            userName: user_name,
            userPic: user_pic,
            comment: comment,
            date: date
        };
        const post = await post_model_1.PostModel.findOneAndUpdate({ _id: postId }, { $push: { comment: Comment } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return post;
    }
}
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map