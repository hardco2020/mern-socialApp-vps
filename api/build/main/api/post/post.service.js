"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const post_repository_1 = require("../../../repositories/post.repository");
class PostService {
    constructor() {
        this.postRepo = new post_repository_1.PostRepository();
    }
    async createPost(id, body) {
        const post = await this.postRepo.createPost(id, body);
        return post;
    }
    async updatePost(poster_id, post_id, body) {
        let res = "";
        let post = await this.postRepo.getPost(post_id);
        if (post.userId == poster_id) {
            res = await this.postRepo.updatePost(post_id, body);
        }
        else {
            const error = new Error('您只能編輯自己的貼文！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        return res;
    }
    async deletePost(poster_id, post_id) {
        let res = "";
        const post = await this.postRepo.getPost(post_id);
        if (post.userId == poster_id) {
            res = await this.postRepo.deletePost(post_id);
        }
        else {
            const error = new Error('您只能刪除自己的貼文！');
            error.status = 409;
            console.log(error);
            throw error;
        }
        return res;
    }
    async likePost(payload_id, post_id) {
        let res = "";
        const post = await this.postRepo.getPost(post_id);
        if (!post.likes.includes(payload_id)) {
            res = await this.postRepo.likePost(payload_id, post_id);
        }
        else {
            res = await this.postRepo.dislikePost(payload_id, post_id);
        }
        return res;
    }
    async getPost(id) {
        const post = await this.postRepo.getPost(id);
        return post;
    }
    async timelinePost(user_id, page) {
        const posts = await this.postRepo.timelinePost(user_id, page);
        return posts;
    }
    async getUserbyUsername(user_name) {
        const user = await this.postRepo.getUserbyUsername(user_name);
        return user;
    }
    async getAllPost(user_id, page) {
        const posts = await this.postRepo.getAllPost(user_id, page);
        return posts;
    }
    async commentPost(user_name, user_pic, comment, date, postId) {
        const post = await this.postRepo.commentPost(user_name, user_pic, comment, date, postId);
        return post;
    }
}
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map